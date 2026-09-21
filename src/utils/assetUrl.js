// 资源 URL 辅助函数
// 本地开发或未配置 VITE_ASSET_BASE 时使用本地相对路径（资源在 public/ 目录）
// 部署 CDN/OSS 时通过 VITE_ASSET_BASE 环境变量指向外部存储基地址
/* global process */
const rawBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ASSET_BASE) || (typeof process !== 'undefined' && process.env && process.env.VITE_ASSET_BASE) || ''
const normalizedBase = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase

// HTTPS 页面不能加载 HTTP 资源，否则浏览器会拦截 PDF、音频等混合内容。
// 资源已随站点部署时，自动回退到当前站点的相对路径，避免旧服务器地址破坏预览。
const isInsecureBase = typeof window !== 'undefined'
  && window.location.protocol === 'https:'
  && /^http:\/\//i.test(normalizedBase)
const BASE = isInsecureBase ? '' : normalizedBase

export const assetUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE}${normalizedPath}`
}
