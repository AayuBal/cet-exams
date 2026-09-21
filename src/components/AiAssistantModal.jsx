import { useState, useEffect } from 'react'

export default function AiAssistantModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('writing') // 'writing' | 'grammar' | 'errors'
  const [essayText, setEssayText] = useState('')
  const [grammarText, setGrammarText] = useState('')
  const [errorStats, setErrorStats] = useState({ total: 0, listening: 0, reading: 0, byPaper: {} })

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cet_mistakes')
      if (stored) {
        const list = JSON.parse(stored)
        let lCount = 0
        let rCount = 0
        const paperMap = {}
        list.forEach(item => {
          if (item.type === '听力') lCount++
          if (item.type === '阅读') rCount++
          const key = item.paperId || 'other'
          paperMap[key] = (paperMap[key] || 0) + 1
        })
        setErrorStats({
          total: list.length,
          listening: lCount,
          reading: rCount,
          byPaper: paperMap
        })
      }
    } catch {}
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-800/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              AI
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-white">四六级 AI 辅助学习中心</h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">轻量化备考诊断与复习辅助</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white p-1 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* API Config Banner */}
        <div className="bg-blue-50/80 dark:bg-blue-950/40 border-b border-blue-100 dark:border-blue-900/50 px-6 py-2.5 flex items-start gap-2.5">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
            <span className="font-semibold">功能说明：</span>本期提供轻量、可验证的本地辅助能力与功能预留。当前环境未接入大模型后端 API，系统严格遵循真实性原则，不伪装生成虚假 AI 打分。
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-200 dark:border-neutral-800 px-6 bg-white dark:bg-neutral-900">
          <button
            onClick={() => setActiveTab('writing')}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'writing'
                ? 'border-black dark:border-white text-black dark:text-white font-bold'
                : 'border-transparent text-neutral-500 hover:text-black dark:hover:text-white'
            }`}
          >
            作文批改反馈
          </button>
          <button
            onClick={() => setActiveTab('grammar')}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'grammar'
                ? 'border-black dark:border-white text-black dark:text-white font-bold'
                : 'border-transparent text-neutral-500 hover:text-black dark:hover:text-white'
            }`}
          >
            语法易错诊断
          </button>
          <button
            onClick={() => setActiveTab('errors')}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'errors'
                ? 'border-black dark:border-white text-black dark:text-white font-bold'
                : 'border-transparent text-neutral-500 hover:text-black dark:hover:text-white'
            }`}
          >
            错题类型总结
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'writing' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1">
                  粘贴或输入四六级作文草稿：
                </label>
                <textarea
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  placeholder="Paste your CET-4/6 essay here to inspect structural rubrics and self-check rules..."
                  rows={5}
                  className="w-full text-sm p-3 border border-neutral-300 dark:border-neutral-700 rounded-xl dark:bg-neutral-800 focus:outline-none focus:border-black dark:focus:border-white"
                />
                <div className="text-right text-xs text-neutral-400 mt-1">
                  字数统计：{essayText.trim() ? essayText.trim().split(/\s+/).length : 0} 词
                </div>
              </div>

              {/* Feedback Card */}
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 bg-neutral-50 dark:bg-neutral-800/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                  官方四六级评分自查卡片 (Rubric Framework)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                    <span className="font-semibold block mb-1">1. 切题与立意 (Relevance)</span>
                    <p className="text-neutral-500">首段是否在第二句前明确提出中心论点；各段主题句是否呼应题目关键词。</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                    <span className="font-semibold block mb-1">2. 逻辑连接 (Coherence)</span>
                    <p className="text-neutral-500">使用分条连接词（First, Moreover, In contrast, Consequently），避免句与句生硬拼接。</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                    <span className="font-semibold block mb-1">3. 词汇多样性 (Vocabulary)</span>
                    <p className="text-neutral-500">将常见简单词替换为四六级核心词（如 vital 替换 important，foster 替换 help）。</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                    <span className="font-semibold block mb-1">4. 句式丰富度 (Sentence Variety)</span>
                    <p className="text-neutral-500">穿插定语从句、非谓语分词短语或倒装句，避免全部使用简单主谓宾。</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'grammar' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1">
                  输入待诊断的长难句或段落：
                </label>
                <input
                  type="text"
                  value={grammarText}
                  onChange={(e) => setGrammarText(e.target.value)}
                  placeholder="例如：The number of students are increasing rapidly..."
                  className="w-full text-sm p-3 border border-neutral-300 dark:border-neutral-700 rounded-xl dark:bg-neutral-800 focus:outline-none focus:border-black dark:focus:border-white"
                />
              </div>

              {/* Common Pitfalls Checklist */}
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 bg-neutral-50 dark:bg-neutral-800/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                  四六级高频语法排雷清单
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">⚠️</span>
                    <div>
                      <span className="font-medium text-black dark:text-white">主谓一致陷阱：</span>
                      <span>The number of + 复数名词（谓语用单数）；A number of + 复数名词（谓语用复数）。</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">⚠️</span>
                    <div>
                      <span className="font-medium text-black dark:text-white">双重谓语混用：</span>
                      <span>避免同一个单句中出现两个不带连词的主谓动词（如 "There are many students want to go" 改为 "There are many students who want to go"）。</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">⚠️</span>
                    <div>
                      <span className="font-medium text-black dark:text-white">非谓语逻辑主语：</span>
                      <span>现在分词/过去分词作状语时，逻辑主语必须与句子主语一致。</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">⚠️</span>
                    <div>
                      <span className="font-medium text-black dark:text-white">时态混杂：</span>
                      <span>叙述客观事实与观点用一般现在时，描述调研数据与历史事件用一般过去时。</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'errors' && (
            <div className="space-y-4">
              <div className="p-4 bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 rounded-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                  本地做题记录统计分析 (Real Local Data)
                </h4>
                {errorStats.total === 0 ? (
                  <div className="text-center py-6 text-neutral-400 text-sm">
                    暂无本地错题记录。在历年真题中完成在线作答并批改后，错题将自动汇入并在此分类统计。
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-white dark:bg-neutral-800 p-3 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                        <div className="text-2xl font-bold text-red-600">{errorStats.total}</div>
                        <div className="text-xs text-neutral-500">累计错题总数</div>
                      </div>
                      <div className="bg-white dark:bg-neutral-800 p-3 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                        <div className="text-2xl font-bold text-green-600">{errorStats.listening}</div>
                        <div className="text-xs text-neutral-500">听力客观题失分</div>
                      </div>
                      <div className="bg-white dark:bg-neutral-800 p-3 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                        <div className="text-2xl font-bold text-orange-600">{errorStats.reading}</div>
                        <div className="text-xs text-neutral-500">阅读客观题失分</div>
                      </div>
                    </div>

                    <div className="text-xs text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800 p-3 rounded-lg border border-neutral-200/70 dark:border-neutral-700">
                      <span className="font-semibold text-black dark:text-white block mb-1">复习策略建议：</span>
                      {errorStats.listening >= errorStats.reading ? (
                        <p>你的听力错题占比较高，建议精听 2023年06月真题录音，重点练习新闻播报中的数字、地点辨认和长对话首句定位。</p>
                      ) : (
                        <p>你的阅读错题占比较高，建议复习仔细阅读中的同义替换题型，控制长篇阅读段落信息匹配时间在15分钟内。</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 flex items-center justify-between">
          <span className="text-xs text-neutral-400">CET AI Diagnostics v1.0</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  )
}
