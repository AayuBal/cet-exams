import { Link } from 'react-router-dom'

const cetReviewModules = [
  {
    id: 'cet4-core-vocab',
    title: 'CET-4 核心词库与精读',
    subtitle: 'CET-4 Core Vocabulary',
    description: '涵盖大学英语四级考纲核心高频词汇，支持英汉释义、真题例句查询、一键加入生词本。',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: 'from-blue-600 to-indigo-800',
    borderHover: 'hover:border-blue-500',
    tags: ['四级词汇', '例句发音', '词频精选', '单词搜索'],
    link: '/vocabulary/browse',
    isExternal: false,
    badge: 'CET-4 核心',
    actionText: '浏览词库'
  },
  {
    id: 'cet6-core-vocab',
    title: 'CET-6 核心进阶词汇',
    subtitle: 'CET-6 Advanced Vocabulary',
    description: '收录大学英语六级高频重点词汇与常考搭配，配合生词本强化巩固，突破阅读理解生词关。',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    gradient: 'from-emerald-600 to-teal-800',
    borderHover: 'hover:border-emerald-500',
    tags: ['六级进阶', '学术词汇', '同义辨析', '深层语境'],
    link: '/vocabulary/browse',
    isExternal: false,
    badge: 'CET-6 进阶',
    actionText: '浏览词库'
  },
  {
    id: 'spaced-repetition',
    title: '闪卡复习与记忆算法',
    subtitle: 'Flashcard Spaced Repetition',
    description: '采用 SM-2 间隔重复算法，依据你的答对率与记忆难度智能调度复习周期，防止遗忘。',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: 'from-purple-600 to-indigo-900',
    borderHover: 'hover:border-purple-500',
    tags: ['SM-2 算法', '艾宾浩斯', '记忆曲线', '智能排期'],
    link: '/vocabulary/review',
    isExternal: false,
    badge: '高效记忆',
    actionText: '开始复习'
  },
  {
    id: 'vocab-quiz',
    title: '四六级词汇快速测验',
    subtitle: 'Vocabulary Interactive Quiz',
    description: '提供四选一快速中英互译测验，即时统计答题正确率并自动将错误单词归入错题与生词本。',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-amber-600 to-orange-800',
    borderHover: 'hover:border-amber-500',
    tags: ['即时反馈', '词义检验', '弱项定位', '快速刷题'],
    link: '/vocabulary/quiz',
    isExternal: false,
    badge: '实战检测',
    actionText: '进入测验'
  },
  {
    id: 'writing-review',
    title: '四六级写作范文与技巧',
    subtitle: 'Writing Frameworks & Samples',
    description: '真题精选高分写作范文、段落展开结构以及三段论句式模板，助力突破写作 100+ 分。',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    gradient: 'from-rose-600 to-pink-800',
    borderHover: 'hover:border-rose-500',
    tags: ['真题范文', '连接词', '论据展开', '高分句型'],
    link: '/exam/cet4/cet4-2023-06',
    isExternal: false,
    badge: '主观精粹',
    actionText: '查看真题示范'
  },
  {
    id: 'translation-review',
    title: '四六级汉译英考点汇编',
    subtitle: 'Translation Techniques & Topics',
    description: '中国传统文化、社会热点、科技生态三大主题汉译英真题考点分析与优质参考译文。',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    gradient: 'from-cyan-600 to-blue-800',
    borderHover: 'hover:border-cyan-500',
    tags: ['文化热词', '分句并句', '被动语态', '词性转换'],
    link: '/exam/cet6/cet6-2023-06',
    isExternal: false,
    badge: '考点归纳',
    actionText: '查看真题示范'
  }
]

const ReviewMaterials = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Header */}
      <div className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 mb-2">
            <Link
              to="/"
              className="text-sm text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回主页
            </Link>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold dark:text-white">四六级核心复习资料</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            专注大学英语四级（CET-4）与六级（CET-6）全套备考资源，涵盖高频词库、记忆复习、写作范文与翻译考点
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cetReviewModules.map((item) => (
            <ModuleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ModuleCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      className={`group block border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${item.borderHover}`}
    >
      {/* Card Top: Gradient Banner */}
      <div className={`bg-gradient-to-br ${item.gradient} px-6 py-5 flex items-center gap-4`}>
        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold text-white leading-snug">{item.title}</h2>
          <p className="text-xs text-white/70 truncate">{item.subtitle}</p>
        </div>
        <span className="text-[11px] text-white/80 bg-white/15 px-2 py-0.5 rounded-full flex-shrink-0 font-medium">
          {item.badge}
        </span>
      </div>

      {/* Card Body */}
      <div className="px-5 py-4">
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed min-h-[40px]">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800">
          <span className="text-xs text-neutral-400 font-medium">CET 精选</span>
          <span className="text-xs font-semibold text-neutral-600 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white transition-colors flex items-center gap-1">
            {item.actionText}
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ReviewMaterials
