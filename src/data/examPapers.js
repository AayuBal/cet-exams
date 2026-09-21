import { assetUrl } from '../utils/assetUrl.js'

// 试卷数据结构（符合 PRD 4.2 目录规范及 4.4 状态标识）
// 包含 status 字段：'available'（真题/解析/听力完整可用） | 'pending'（资源整理中）

export const examPapers = [
  // ===== 2025年 CET-4 下半年 =====
  {
    id: 'cet4-2025-12',
    year: 2025,
    session: '下半年',
    examDate: '2025-12-13',
    type: 'CET-4',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2025-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2025-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2025-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2025-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2025-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2025-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2025-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2025-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2025-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2025-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2025-12-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2025年 CET-4 上半年 =====
  {
    id: 'cet4-2025-06',
    year: 2025,
    session: '上半年',
    examDate: '2025-06-14',
    type: 'CET-4',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2025-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2025-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2025-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2025-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2025-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2025-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2025-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2025-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2025-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2025-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2025-06-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2025年 CET-6 下半年 =====
  {
    id: 'cet6-2025-12',
    year: 2025,
    session: '下半年',
    examDate: '2025-12-13',
    type: 'CET-6',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2025-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2025-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2025-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2025-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2025-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2025-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2025-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2025-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2025-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2025-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2025-12-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2025年 CET-6 上半年 =====
  {
    id: 'cet6-2025-06',
    year: 2025,
    session: '上半年',
    examDate: '2025-06-14',
    type: 'CET-6',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2025-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2025-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2025-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2025-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2025-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2025-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2025-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2025-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2025-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2025-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2025-06-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2024年 CET-4 下半年 =====
  {
    id: 'cet4-2024-12',
    year: 2024,
    session: '下半年',
    examDate: '2024-12-14',
    type: 'CET-4',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2024-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2024-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2024-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2024-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2024-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2024-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2024-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2024-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2024-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2024-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2024-12-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2024年 CET-4 上半年 =====
  {
    id: 'cet4-2024-06',
    year: 2024,
    session: '上半年',
    examDate: '2024-06-15',
    type: 'CET-4',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2024-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2024-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2024-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2024-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2024-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2024-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2024-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2024-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2024-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2024-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2024-06-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2023年 CET-4 下半年 =====
  {
    id: 'cet4-2023-12',
    year: 2023,
    session: '下半年',
    examDate: '2023-12-16',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2023-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2023-12-1.mp3'), duration: 1760, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2023年 CET-4 上半年 =====
  {
    id: 'cet4-2023-06',
    year: 2023,
    session: '上半年',
    examDate: '2023-06-17',
    type: 'CET-4',
    isNew: false,
    status: 'available',
    coverUrl: assetUrl('/cet/covers/cet4/2023-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'available',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2023-06-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2023年 CET-4 上半年 =====
  {
    id: 'cet4-2023-03',
    year: 2023,
    session: '上半年',
    examDate: '2023-03-12',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2023-03.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-03-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-03-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-03-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-03-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-03-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-03-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2023-03-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2023-03-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2023-03-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2023-03-1.mp3'), duration: 1720, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2022年 CET-4 下半年 =====
  {
    id: 'cet4-2022-12',
    year: 2022,
    session: '下半年',
    examDate: '2022-12-10',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2022-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2022-12-1.mp3'), duration: 1720, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2022年 CET-4 下半年 =====
  {
    id: 'cet4-2022-09',
    year: 2022,
    session: '下半年',
    examDate: '2022-09-17',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2022-09.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-09-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-09-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-09-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-09-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-09-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-09-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-09-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-09-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-09-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2022-09-1.mp3'), duration: 1700, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2022年 CET-4 上半年 =====
  {
    id: 'cet4-2022-06',
    year: 2022,
    session: '上半年',
    examDate: '2022-06-11',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2022-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2022-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2022-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2022-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2022-06-1.mp3'), duration: 1720, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2021年 CET-4 下半年 =====
  {
    id: 'cet4-2021-12',
    year: 2021,
    session: '下半年',
    examDate: '2021-12-18',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2021-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2021-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2021-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2021-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2021-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2021-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2021-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2021-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2021-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2021-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2021-12-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2021年 CET-4 上半年 =====
  {
    id: 'cet4-2021-06',
    year: 2021,
    session: '上半年',
    examDate: '2021-06-12',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2021-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2021-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2021-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2021-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2021-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2021-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2021-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2021-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2021-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2021-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2021-06-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2020年 CET-4 下半年 =====
  {
    id: 'cet4-2020-12',
    year: 2020,
    session: '下半年',
    examDate: '2020-12-12',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2020-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2020-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2020-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2020-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2020-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2020-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2020-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2020-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2020-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2020-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2020-12-1.mp3'), duration: 1760, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2020年 CET-4 下半年 =====
  {
    id: 'cet4-2020-09',
    year: 2020,
    session: '下半年',
    examDate: '2020-09-19',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2020-09.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2020-09-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2020-09-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2020-09-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2020-09-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2020-09-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2020-09-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2020-09-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2020-09-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2020-09-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2020-09-1.mp3'), duration: 1780, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2020年 CET-4 上半年 =====
  {
    id: 'cet4-2020-07',
    year: 2020,
    session: '上半年',
    examDate: '2020-07-11',
    type: 'CET-4',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet4/2020-07.png'),
    sets: [
      {
        name: '全套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet4/2020-07-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet4/2020-07-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet4/2020-07-1.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet4/2020-07-1.mp3'), duration: 1700, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2024年 CET-6 下半年 =====
  {
    id: 'cet6-2024-12',
    year: 2024,
    session: '下半年',
    examDate: '2024-12-14',
    type: 'CET-6',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2024-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2024-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2024-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2024-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2024-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2024-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2024-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2024-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2024-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2024-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2024-12-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2024年 CET-6 上半年 =====
  {
    id: 'cet6-2024-06',
    year: 2024,
    session: '上半年',
    examDate: '2024-06-15',
    type: 'CET-6',
    isNew: true,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2024-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2024-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2024-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2024-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2024-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2024-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2024-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2024-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2024-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2024-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2024-06-1.mp3'), duration: 1800, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2023年 CET-6 下半年 =====
  {
    id: 'cet6-2023-12',
    year: 2023,
    session: '下半年',
    examDate: '2023-12-16',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2023-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2023-12-1.mp3'), duration: 1760, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2023年 CET-6 上半年 =====
  {
    id: 'cet6-2023-06',
    year: 2023,
    session: '上半年',
    examDate: '2023-06-17',
    type: 'CET-6',
    isNew: false,
    status: 'available',
    coverUrl: assetUrl('/cet/covers/cet6/2023-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'available',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2023-06-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2023年 CET-6 上半年 =====
  {
    id: 'cet6-2023-03',
    year: 2023,
    session: '上半年',
    examDate: '2023-03-12',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2023-03.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-03-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-03-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-03-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-03-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-03-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-03-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2023-03-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2023-03-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2023-03-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2023-03-1.mp3'), duration: 1720, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2022年 CET-6 下半年 =====
  {
    id: 'cet6-2022-12',
    year: 2022,
    session: '下半年',
    examDate: '2022-12-10',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2022-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2022-12-1.mp3'), duration: 1720, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2022年 CET-6 下半年 =====
  {
    id: 'cet6-2022-09',
    year: 2022,
    session: '下半年',
    examDate: '2022-09-17',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2022-09.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-09-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-09-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-09-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-09-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-09-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-09-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-09-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-09-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-09-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2022-09-1.mp3'), duration: 1700, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2022年 CET-6 上半年 =====
  {
    id: 'cet6-2022-06',
    year: 2022,
    session: '上半年',
    examDate: '2022-06-11',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2022-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2022-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2022-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2022-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2022-06-1.mp3'), duration: 1720, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2021年 CET-6 下半年 =====
  {
    id: 'cet6-2021-12',
    year: 2021,
    session: '下半年',
    examDate: '2021-12-18',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2021-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2021-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2021-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2021-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2021-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2021-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2021-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2021-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2021-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2021-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2021-12-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2021年 CET-6 上半年 =====
  {
    id: 'cet6-2021-06',
    year: 2021,
    session: '上半年',
    examDate: '2021-06-12',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2021-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2021-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2021-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2021-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2021-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2021-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2021-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2021-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2021-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2021-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2021-06-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2020年 CET-6 下半年 =====
  {
    id: 'cet6-2020-12',
    year: 2020,
    session: '下半年',
    examDate: '2020-12-12',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2020-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2020-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2020-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2020-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2020-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2020-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2020-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2020-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2020-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2020-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2020-12-1.mp3'), duration: 1760, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2020年 CET-6 下半年 =====
  {
    id: 'cet6-2020-09',
    year: 2020,
    session: '下半年',
    examDate: '2020-09-19',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2020-09.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2020-09-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2020-09-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2020-09-1.mp3')
      },
      {
        name: '第2/3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2020-09-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2020-09-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2020-09-2.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2020-09-1.mp3'), duration: 1780, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2020年 CET-6 上半年 =====
  {
    id: 'cet6-2020-07',
    year: 2020,
    session: '上半年',
    examDate: '2020-07-11',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2020-07.png'),
    sets: [
      {
        name: '全套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2020-07-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2020-07-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2020-07-1.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2020-07-1.mp3'), duration: 1700, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2019年 CET-6 下半年 =====
  {
    id: 'cet6-2019-12',
    year: 2019,
    session: '下半年',
    examDate: '2019-12-14',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2019-12.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2019-12-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2019-12-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2019-12-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2019-12-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2019-12-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2019-12-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2019-12-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2019-12-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2019-12-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2019-12-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
  // ===== 2019年 CET-6 上半年 =====
  {
    id: 'cet6-2019-06',
    year: 2019,
    session: '上半年',
    examDate: '2019-06-15',
    type: 'CET-6',
    isNew: false,
    status: 'pending',
    coverUrl: assetUrl('/cet/covers/cet6/2019-06.png'),
    sets: [
      {
        name: '第1套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2019-06-1.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2019-06-1.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2019-06-1.mp3')
      },
      {
        name: '第2套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2019-06-2.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2019-06-2.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2019-06-2.mp3')
      },
      {
        name: '第3套',
        status: 'pending',
        pdfUrl: assetUrl('/cet/papers/cet6/2019-06-3.pdf'),
        analysisPdfUrl: assetUrl('/cet/analysis/cet6/2019-06-3.pdf'),
        audioUrl: assetUrl('/cet/audio/cet6/2019-06-3.mp3')
      },
    ],
    papers: [
      { type: '写作', content: '' },
      { type: '听力', audioUrl: assetUrl('/cet/audio/cet6/2019-06-1.mp3'), duration: 1740, transcript: [] },
      { type: '阅读', content: { passage: '', questions: [] } },
      { type: '翻译', content: '' },
    ]
  },
]

// 获取所有年份
export const getAllYears = (examType) => {
  const papers = examType ? examPapers.filter(p => p.type === examType) : examPapers
  return [...new Set(papers.map(p => p.year))].sort((a, b) => b - a)
}

// 按年份和套次筛选
export const filterPapers = (year, session) => {
  return examPapers.filter(p => {
    if (year && p.year !== year) return false
    if (session && p.session !== session) return false
    return true
  })
}

// 根据ID获取试卷
export const getPaperById = (id) => examPapers.find(p => p.id === id)

// 获取试卷的题目数量统计
export const getPaperStats = (paper) => {
  const stats = { writing: false, listening: false, reading: false, translation: false }
  if (!paper || !paper.papers) return stats
  paper.papers.forEach(p => {
    if (p.type === "写作") stats.writing = true
    if (p.type === "听力") stats.listening = true
    if (p.type === "阅读") stats.reading = true
    if (p.type === "翻译") stats.translation = true
  })
  return stats
}

// 检查指定套题是否已恢复可用
export const isSetAvailable = (paper, setIndex = 0) => {
  if (!paper) return false
  const set = paper.sets?.[setIndex]
  return set?.status === "available"
}
