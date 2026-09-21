import { useState, useEffect, Component } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import ExamBrowser from './components/ExamBrowser'
import ExamDetail from './components/ExamDetail'
import VocabularyBook from './components/VocabularyBook'
import VocabularyBrowser from './components/VocabularyBrowser'
import FlashcardReview from './components/FlashcardReview'
import WordQuiz from './components/WordQuiz'
import Dashboard from './components/Dashboard'
import ErrorBook from './components/ErrorBook'
import Settings from './components/Settings'
import ReviewMaterials from './components/ReviewMaterials'
import AiAssistantModal from './components/AiAssistantModal'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

// Navigation Component
const Navigation = ({ examType, onExamTypeChange }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { dark, toggle } = useTheme()

  return (
    <nav className="border-b border-black dark:border-neutral-700 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-black rounded flex items-center justify-center">
              <span className="text-xs font-bold">CET</span>
            </div>
            <span className="font-bold text-sm sm:text-base">大学英语四六级考试真题</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm ${isHome ? 'font-bold' : 'text-neutral-500'}`}
            >
              首页
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm ${location.pathname === '/dashboard' ? 'font-bold' : 'text-neutral-500'}`}
            >
              学习概览
            </Link>
            <Link
              to="/vocabulary"
              className={`text-sm ${location.pathname.startsWith('/vocabulary') ? 'font-bold' : 'text-neutral-500'}`}
            >
              生词本
            </Link>
            <Link
              to="/errors"
              className={`text-sm ${location.pathname === '/errors' ? 'font-bold' : 'text-neutral-500'}`}
            >
              错题本
            </Link>
            <Link
              to="/review"
              className={`text-sm ${location.pathname === '/review' ? 'font-bold' : 'text-neutral-500'}`}
            >
              复习资料
            </Link>
            {/* CET-4 / CET-6 Toggle */}
            <div className="flex items-center gap-1 bg-neutral-100 rounded p-0.5">
              <button
                onClick={() => onExamTypeChange('CET-4')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  examType === 'CET-4'
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                CET-4
              </button>
              <button
                onClick={() => onExamTypeChange('CET-6')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  examType === 'CET-6'
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                CET-6
              </button>
            </div>
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={dark ? '切换到亮色模式' : '切换到暗色模式'}
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            {/* Settings */}
            <Link
              to="/settings"
              className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title="设置"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-neutral-100"
            aria-label="菜单"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm ${isHome ? 'font-bold' : 'text-neutral-500'}`}
              >
                首页
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm ${location.pathname === '/dashboard' ? 'font-bold' : 'text-neutral-500'}`}
              >
                学习概览
              </Link>
              <Link
                to="/vocabulary"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm ${location.pathname.startsWith('/vocabulary') ? 'font-bold' : 'text-neutral-500'}`}
              >
                生词本
              </Link>
              <Link
                to="/errors"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm ${location.pathname === '/errors' ? 'font-bold' : 'text-neutral-500'}`}
              >
                错题本
              </Link>
              <Link
                to="/review"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm ${location.pathname === '/review' ? 'font-bold' : 'text-neutral-500'}`}
              >
                复习资料
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-500">考试类型:</span>
                <div className="flex gap-1 bg-neutral-100 rounded p-0.5">
                  <button
                    onClick={() => { onExamTypeChange('CET-4'); setMobileMenuOpen(false) }}
                    className={`px-3 py-1 text-sm rounded transition-colors text-center ${
                      examType === 'CET-4'
                        ? 'bg-black text-white'
                        : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    CET-4
                  </button>
                  <button
                    onClick={() => { onExamTypeChange('CET-6'); setMobileMenuOpen(false) }}
                    className={`px-3 py-1 text-sm rounded transition-colors text-center ${
                      examType === 'CET-6'
                        ? 'bg-black text-white'
                        : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    CET-6
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// 计算某月第N个星期六
const nthSaturday = (year, month, n) => {
  const d = new Date(year, month, 1)
  const firstSat = (6 - d.getDay() + 1) % 7 || 7
  return new Date(year, month, firstSat + (n - 1) * 7)
}

// 获取下一次CET考试日期（6月/12月第2个星期六）
const getNextExamDate = () => {
  const now = new Date()
  const candidates = []
  for (let y = now.getFullYear(); y <= now.getFullYear() + 1; y++) {
    candidates.push(nthSaturday(y, 5, 2))  // 6月
    candidates.push(nthSaturday(y, 11, 2)) // 12月
  }
  return candidates.find(d => d > now) || candidates[candidates.length - 1]
}

// Home Page Component
const HomePage = ({ examType, onExamTypeChange }) => {
  const [targetDate] = useState(getNextExamDate)
  const today = new Date()
  const days = Math.max(0, (targetDate - today) / (1000 * 60 * 60 * 24))
  const examDateStr = `${targetDate.getFullYear()}年${targetDate.getMonth() + 1}月${targetDate.getDate()}日`

  const [visitorStats, setVisitorStats] = useState({ today: 0, total: 0 })
  const [visitorLoaded, setVisitorLoaded] = useState(false)
  const [displayToday, setDisplayToday] = useState(0)
  const [displayTotal, setDisplayTotal] = useState(0)
  const [aiModalOpen, setAiModalOpen] = useState(false)

  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0]
    const lastVisit = localStorage.getItem('cet_last_visit')
    const shouldCount = lastVisit !== todayStr

    fetch(`/api/visitor${shouldCount ? '' : '?count=false'}`)
      .then(r => r.json())
      .then(data => {
        if (data && typeof data.today === 'number') {
          setVisitorStats({ today: data.today, total: data.total })
          setVisitorLoaded(true)
          if (shouldCount) localStorage.setItem('cet_last_visit', todayStr)
        }
      })
      .catch(() => {})
  }, [])

  // 数字滚动动画
  useEffect(() => {
    if (!visitorLoaded) return
    const duration = 1200
    const startTime = Date.now()
    const startToday = 0
    const startTotal = 0
    const endToday = visitorStats.today
    const endTotal = visitorStats.total

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplayToday(Math.floor(startToday + (endToday - startToday) * ease))
      setDisplayTotal(Math.floor(startTotal + (endTotal - startTotal) * ease))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [visitorLoaded, visitorStats])

  return (
    <div className="min-h-screen bg-white">
      <Navigation examType={examType} onExamTypeChange={onExamTypeChange} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24 flex flex-col items-center">
        {/* Resource Status Notice */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>真题资源恢复：2023年06月 CET-4 / CET-6 完整真题已就绪（含试卷PDF、解析与听力音频）</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-center dark:text-white">
          大学英语四六级
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg mb-6 md:mb-8 text-center">
          收录历年大学英语四六级真题，支持在线答题、听力播放、智能批改与错题归档
        </p>

        {/* Buttons and Countdown */}
        <div className="flex flex-col items-center gap-3 mb-6 md:mb-8 w-full max-w-[200px] sm:max-w-2xl sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            to="/exam/cet4"
            className={`w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-center transition-all duration-200 hover:scale-105 hover:shadow-lg ${
              examType === 'CET-4'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-white text-black border border-black dark:bg-neutral-800 dark:text-white dark:border-neutral-600'
            }`}
          >
            CET-4真题
          </Link>
          <Link
            to="/exam/cet6"
            className={`w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-center transition-all duration-200 hover:scale-105 hover:shadow-lg ${
              examType === 'CET-6'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-white text-black border border-black dark:bg-neutral-800 dark:text-white dark:border-neutral-600'
            }`}
          >
            CET-6真题
          </Link>

          {/* Countdown */}
          <div className="border-2 border-black dark:border-neutral-700 rounded-2xl px-3 sm:px-4 py-2 text-center flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center bg-white dark:bg-neutral-800" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
            <span className="text-xs sm:text-sm font-bold dark:text-white">距CET考试还有</span>
            <span className="text-xl sm:text-2xl font-bold dark:text-white">{days.toFixed(1)}</span>
            <span className="text-xs sm:text-sm font-bold dark:text-white">天</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">（{examDateStr}）</span>
          </div>
        </div>

        {/* Visitor Counter */}
        {visitorLoaded && (
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-8 md:mb-10 text-neutral-400">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm">今日学习人数：<span className="font-bold text-neutral-600 dark:text-neutral-300">{displayToday}</span></span>
          </div>
          <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm">总访问次数：<span className="font-bold text-neutral-600 dark:text-neutral-300">{displayTotal.toLocaleString()}</span></span>
          </div>
        </div>
        )}

        {/* Feature Cards: AI Assistant & Review Materials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-8">
          {/* AI Assistant Card */}
          <button
            onClick={() => setAiModalOpen(true)}
            className="group text-left border-2 border-neutral-200 dark:border-neutral-700 rounded-xl p-5 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg bg-white dark:bg-neutral-800"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-white font-bold text-base shadow-sm">
                AI
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold dark:text-white">AI 辅助学习</h3>
                  <span className="text-[10px] bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded font-medium">原型</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  作文结构自查、常见语法易错排雷与本地错题统计建议
                </p>
              </div>
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* CET Review Materials Card */}
          <Link
            to="/review"
            className="group text-left border-2 border-neutral-200 dark:border-neutral-700 rounded-xl p-5 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg bg-white dark:bg-neutral-800"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-white shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold dark:text-white">四六级复习资料</h3>
                  <span className="text-[10px] bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded font-medium">精选</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  核心高频词库、SM-2记忆闪卡、真题范文精析与汉译英技巧
                </p>
              </div>
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* AI Assistant Modal */}
      <AiAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />

    </div>
  )
}

// Error Boundary
class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: 'monospace' }}>
          <h1 style={{ color: 'red' }}>出错了</h1>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: 16, borderRadius: 8 }}>
            {this.state.error.message}
            {'\n\n'}
            {this.state.error.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

// App with Router
function App() {
  const [examType, setExamType] = useState('CET-4')

  return (
    <ErrorBoundary>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage examType={examType} onExamTypeChange={setExamType} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exam/:type" element={<ExamBrowser setExamType={setExamType} />} />
          <Route path="/exam/:type/:id" element={<ExamDetail />} />
          <Route path="/vocabulary" element={<VocabularyBook />} />
          <Route path="/vocabulary/browse" element={<VocabularyBrowser />} />
          <Route path="/vocabulary/review" element={<FlashcardReview />} />
          <Route path="/vocabulary/quiz" element={<WordQuiz />} />
          <Route path="/review" element={<ReviewMaterials />} />
          <Route path="/errors" element={<ErrorBook />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
