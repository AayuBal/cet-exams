// 资源 URL 辅助函数
// 本地开发或未配置 VITE_ASSET_BASE 时使用本地相对路径（资源在 public/ 目录）
// 部署 CDN/OSS 时通过 VITE_ASSET_BASE 环境变量指向外部存储基地址
const rawBase = import.meta.env.VITE_ASSET_BASE || ''
const BASE = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase

export const assetUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE}${normalizedPath}`
}
