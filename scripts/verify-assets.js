import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const manifestPath = path.join(rootDir, 'src/data/asset-manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error('❌ asset-manifest.json 不存在！');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
console.log(`📋 开始校验资源清单 (版本 ${manifest.version}, 更新时间: ${manifest.updatedAt})...`);

let passed = 0;
let failed = 0;

for (const asset of manifest.assets) {
  if (asset.status !== 'available') {
    console.log(`⏳ 跳过待整理资源: [${asset.id}]`);
    continue;
  }

  const filePath = path.join(rootDir, 'public', asset.url);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [${asset.id}] 文件不存在: ${asset.url}`);
    failed++;
    continue;
  }

  const stat = fs.statSync(filePath);
  if (stat.size <= 0) {
    console.error(`❌ [${asset.id}] 文件大小为 0: ${asset.url}`);
    failed++;
    continue;
  }

  const buf = fs.readFileSync(filePath);
  const hash = crypto.createHash('sha256').update(buf).digest('hex');

  if (asset.sha256 && hash !== asset.sha256) {
    console.error(`❌ [${asset.id}] SHA-256 哈希不匹配! 期望: ${asset.sha256}, 实际: ${hash}`);
    failed++;
    continue;
  }

  // 格式校验
  if (asset.type === 'paper' || asset.type === 'analysis') {
    const header = buf.subarray(0, 5).toString('ascii');
    if (!header.startsWith('%PDF-')) {
      console.error(`❌ [${asset.id}] 非有效 PDF 文件格式`);
      failed++;
      continue;
    }
  } else if (asset.type === 'audio') {
    const isMp3Sync = (buf[0] === 0xFF && (buf[1] & 0xE0) === 0xE0);
    const isId3 = buf.subarray(0, 3).toString('ascii') === 'ID3';
    if (!isMp3Sync && !isId3) {
      console.error(`❌ [${asset.id}] 非有效 MP3 文件格式`);
      failed++;
      continue;
    }
  } else if (asset.type === 'cover') {
    const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
    if (!isPng) {
      console.error(`❌ [${asset.id}] 非有效 PNG 封面格式`);
      failed++;
      continue;
    }
  }

  console.log(`✅ [${asset.id}] 校验通过: ${asset.url} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
  passed++;
}

console.log(`\n========================================`);
console.log(`📊 校验结果: 通过 ${passed} 个，失败 ${failed} 个`);
console.log(`========================================`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 所有 P0 核心资源完整性校验全部通过！');
}
