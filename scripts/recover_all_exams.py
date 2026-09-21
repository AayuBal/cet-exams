#!/usr/bin/env python3
import os
import sys
import json
import shutil
import hashlib
import subprocess
from datetime import datetime, timezone

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')
CET_DIR = os.path.join(PUBLIC_DIR, 'cet')

PAPERS_DIR = os.path.join(CET_DIR, 'papers')
ANALYSIS_DIR = os.path.join(CET_DIR, 'analysis')
AUDIO_DIR = os.path.join(CET_DIR, 'audio')
COVERS_DIR = os.path.join(CET_DIR, 'covers')

SRC_BASE = '/tmp/CET46-Resources'
EXTRA_BASE = '/tmp/downloaded_extra'

def ensure_dirs():
    for d in [PAPERS_DIR, ANALYSIS_DIR, AUDIO_DIR, COVERS_DIR]:
        for sub in ['cet4', 'cet6']:
            os.makedirs(os.path.join(d, sub), exist_ok=True)

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, 'rb') as f:
        while True:
            chunk = f.read(128 * 1024)
            if not chunk: break
            h.update(chunk)
    return h.hexdigest()

def get_candidates(exam_code, year, session):
    type_cn = '四级真题' if exam_code == 'cet4' else '六级真题'
    s_folder = os.path.join(SRC_BASE, type_cn, f'{year}.{session}')
    candidates = []
    if os.path.isdir(s_folder):
        for r, _, fs in os.walk(s_folder):
            for f in fs:
                if not f.startswith('.'):
                    candidates.append((f, os.path.join(r, f)))
    if os.path.isdir(EXTRA_BASE):
        for f in os.listdir(EXTRA_BASE):
            if f.startswith('.'): continue
            fp = os.path.join(EXTRA_BASE, f)
            if f'{year}.{session}' in f or f'{year}_{session}' in f or (str(year) in f and session in f and (('四级' in f and exam_code=='cet4') or ('六级' in f and exam_code=='cet6'))):
                candidates.append((f, fp))
    return candidates

def find_best_paper(candidates, s_idx, total_sets, exam_code, year, session):
    clean_name = f'{exam_code}_{year}_{session}_{s_idx}.pdf'
    for f, p in candidates:
        if f.lower() == clean_name: return p
        
    num_cn = ['一', '二', '三'][s_idx - 1] if s_idx <= 3 else str(s_idx)
    matches = []
    for f, p in candidates:
        if not f.lower().endswith('.pdf'): continue
        if any(k in f.lower() for k in ['ans', '解析', '详解', '答案']):
            if '真题+答案' not in f and '真题及答案' not in f:
                continue
        if (f'第{s_idx}套' in f or f'第{num_cn}套' in f or f'【第{num_cn}套】' in f or 
            f'（{num_cn}）' in f or f'（第{s_idx}套）' in f or f'卷{num_cn}' in f or f'（卷{num_cn}）' in f or
            f'_{s_idx}.' in f):
            matches.append((os.path.getsize(p), p))
        elif total_sets == 1 and ('全1套' in f or '全套' in f or '全3套' in f):
            matches.append((os.path.getsize(p), p))
        elif s_idx in [2, 3] and ('2-3' in f or '2、3套' in f):
            matches.append((os.path.getsize(p), p))
        elif '全3套' in f:
            matches.append((os.path.getsize(p), p))
    if matches:
        matches.sort(key=lambda x: x[0])
        return matches[0][1]
        
    for f, p in candidates:
        if f.lower().endswith('.pdf') and str(s_idx) in f and not any(k in f for k in ['解析', '详解', 'ans']):
            return p
    return None

def find_best_analysis(candidates, s_idx, total_sets, exam_code, year, session, paper_path):
    clean_name = f'{exam_code}_{year}_{session}_{s_idx}_ans.pdf'
    for f, p in candidates:
        if f.lower() == clean_name: return p
        
    num_cn = ['一', '二', '三'][s_idx - 1] if s_idx <= 3 else str(s_idx)
    matches = []
    for f, p in candidates:
        if not f.lower().endswith('.pdf'): continue
        if not any(k in f.lower() for k in ['ans', '解析', '详解', '答案', '速查']):
            continue
        if (f'第{s_idx}套' in f or f'第{num_cn}套' in f or f'【第{num_cn}套】' in f or 
            f'（{num_cn}）' in f or f'（第{s_idx}套）' in f or f'卷{num_cn}' in f or f'（卷{num_cn}）' in f or
            f'_{s_idx}_ans' in f or f'_{s_idx}.' in f):
            matches.append((os.path.getsize(p), p))
        elif total_sets == 1 and ('全1套' in f or '全套' in f or '全3套' in f):
            matches.append((os.path.getsize(p), p))
        elif s_idx in [2, 3] and ('2-3' in f or '2、3套' in f):
            matches.append((os.path.getsize(p), p))
        elif '全3套' in f:
            matches.append((os.path.getsize(p), p))
    if matches:
        matches.sort(key=lambda x: x[0])
        return matches[0][1]
        
    if paper_path and ('真题+答案' in paper_path or '真题及答案' in paper_path):
        return paper_path
    return None

def find_best_audio(candidates, s_idx, total_sets):
    num_cn = ['一', '二', '三'][s_idx - 1] if s_idx <= 3 else str(s_idx)
    for f, p in candidates:
        if not f.lower().endswith('.mp3'): continue
        if (f'第{s_idx}套' in f or f'第{num_cn}套' in f or f'第一套' in f and s_idx==1 or
            f'第二套' in f and s_idx==2 or f'第三套' in f and s_idx==3 or
            f'音频{s_idx}' in f or f'_{s_idx}.' in f or f'（{num_cn}）' in f):
            return p
    for f, p in candidates:
        if not f.lower().endswith('.mp3'): continue
        if s_idx in [2, 3] and ('第二、三套' in f or '第2套' in f or '第二套' in f or '2' in f):
            return p
        if '全1套' in f or '全3套' in f or '3套相同' in f or '音频' in f or '全套' in f:
            return p
    for f, p in candidates:
        if f.lower().endswith('.mp3'): return p
    return None

def generate_cover_png(pdf_path, out_png):
    if os.path.exists(out_png) and os.path.getsize(out_png) > 0:
        return True
    tmp_out_dir = '/tmp/cet_cover_tmp'
    os.makedirs(tmp_out_dir, exist_ok=True)
    try:
        cmd1 = f'qlmanage -t -s 1000 -o "{tmp_out_dir}" "{pdf_path}"'
        subprocess.run(cmd1, shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        thumb = os.path.join(tmp_out_dir, os.path.basename(pdf_path) + '.png')
        if os.path.exists(thumb):
            cmd2 = f'sips -z 1000 721 "{thumb}" --out "{out_png}"'
            subprocess.run(cmd2, shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            os.remove(thumb)
            return True
    except Exception as e:
        print(f'Error generating cover from {pdf_path}: {e}')
    return False

def standardize_audio(in_mp3, out_mp3):
    if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 0:
        return True
    try:
        cmd = f'ffmpeg -y -i "{in_mp3}" -codec:a libmp3lame -b:a 64k -ac 1 -ar 44100 "{out_mp3}"'
        subprocess.run(cmd, shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return True
    except Exception as e:
        print(f'Error encoding audio {in_mp3}: {e}')
        shutil.copyfile(in_mp3, out_mp3)
        return True

def main():
    ensure_dirs()
    papers_json_path = '/tmp/papers.json'
    if not os.path.exists(papers_json_path):
        subprocess.run('node --input-type=module -e "import { examPapers } from \'./src/data/examPapers.js\'; import fs from \'fs\'; fs.writeFileSync(\'/tmp/papers.json\', JSON.stringify(examPapers, null, 2));"', shell=True, check=True, cwd=ROOT_DIR)
    
    with open(papers_json_path, 'r') as f:
        papers = json.load(f)

    manifest_assets = []
    updated_papers = []

    print(f'🚀 开始批量处理 {len(papers)} 套试卷...')

    for paper in papers:
        pid = paper['id']
        ptype = paper['type']
        year = paper['year']
        session = pid.split('-')[2]
        exam_code = 'cet4' if ptype == 'CET-4' else 'cet6'
        
        cands = get_candidates(exam_code, year, session)
        sets = paper.get('sets', [])
        total_sets = len(sets)

        updated_sets = []
        set1_pdf_dest = None

        print(f'\n📦 处理 {pid} ({ptype} {year}-{session}, {total_sets} 套题)...')

        for s_idx, s_data in enumerate(sets, 1):
            set_name = s_data.get('name', f'第{s_idx}套')
            paper_src = find_best_paper(cands, s_idx, total_sets, exam_code, year, session)
            ans_src = find_best_analysis(cands, s_idx, total_sets, exam_code, year, session, paper_src)
            audio_src = find_best_audio(cands, s_idx, total_sets)

            dest_prefix = f'{year}-{session}-{s_idx}'
            paper_dest = os.path.join(PAPERS_DIR, exam_code, f'{dest_prefix}.pdf')
            ans_dest = os.path.join(ANALYSIS_DIR, exam_code, f'{dest_prefix}.pdf')
            audio_dest = os.path.join(AUDIO_DIR, exam_code, f'{dest_prefix}.mp3')

            paper_url = f'/cet/papers/{exam_code}/{dest_prefix}.pdf'
            ans_url = f'/cet/analysis/{exam_code}/{dest_prefix}.pdf' if ans_src else ''
            audio_url = f'/cet/audio/{exam_code}/{dest_prefix}.mp3' if audio_src else ''

            is_set_avail = False

            # Copy paper
            if paper_src:
                if not (os.path.exists(paper_dest) and os.path.getsize(paper_dest) > 0):
                    shutil.copyfile(paper_src, paper_dest)
                is_set_avail = True
                if s_idx == 1:
                    set1_pdf_dest = paper_dest

                manifest_assets.append({
                    "id": f"paper-{exam_code}-{dest_prefix}",
                    "type": "paper",
                    "exam": ptype,
                    "year": year,
                    "session": session,
                    "set": s_idx,
                    "url": paper_url,
                    "size": os.path.getsize(paper_dest),
                    "sha256": sha256_file(paper_dest),
                    "status": "available"
                })

            # Copy analysis
            if ans_src:
                if not (os.path.exists(ans_dest) and os.path.getsize(ans_dest) > 0):
                    shutil.copyfile(ans_src, ans_dest)
                manifest_assets.append({
                    "id": f"analysis-{exam_code}-{dest_prefix}",
                    "type": "analysis",
                    "exam": ptype,
                    "year": year,
                    "session": session,
                    "set": s_idx,
                    "url": ans_url,
                    "size": os.path.getsize(ans_dest),
                    "sha256": sha256_file(ans_dest),
                    "status": "available"
                })

            # Encode / copy audio
            if audio_src:
                if not (os.path.exists(audio_dest) and os.path.getsize(audio_dest) > 0):
                    standardize_audio(audio_src, audio_dest)
                manifest_assets.append({
                    "id": f"audio-{exam_code}-{dest_prefix}",
                    "type": "audio",
                    "exam": ptype,
                    "year": year,
                    "session": session,
                    "set": s_idx,
                    "url": audio_url,
                    "size": os.path.getsize(audio_dest),
                    "sha256": sha256_file(audio_dest),
                    "status": "available"
                })

            updated_set = {
                "name": set_name,
                "status": "available" if is_set_avail else "pending",
                "pdfUrl": f"assetUrl('{paper_url}')" if is_set_avail else "",
                "analysisPdfUrl": f"assetUrl('{ans_url}')" if ans_src else "",
                "audioUrl": f"assetUrl('{audio_url}')" if audio_src else ""
            }
            updated_sets.append(updated_set)
            status_symbol = "✅" if is_set_avail else "⏳"
            print(f'  {status_symbol} {set_name}: paper={bool(paper_src)}, ans={bool(ans_src)}, audio={bool(audio_src)}')

        # Generate cover
        cover_dest = os.path.join(COVERS_DIR, exam_code, f'{year}-{session}.png')
        cover_url = f'/cet/covers/{exam_code}/{year}-{session}.png'
        if set1_pdf_dest:
            generate_cover_png(set1_pdf_dest, cover_dest)
        
        if os.path.exists(cover_dest) and os.path.getsize(cover_dest) > 0:
            manifest_assets.append({
                "id": f"cover-{exam_code}-{year}-{session}",
                "type": "cover",
                "exam": ptype,
                "year": year,
                "session": session,
                "set": None,
                "url": cover_url,
                "size": os.path.getsize(cover_dest),
                "sha256": sha256_file(cover_dest),
                "status": "available"
            })

        has_available_set = any(s["status"] == "available" for s in updated_sets)
        new_paper = dict(paper)
        new_paper["status"] = "available" if has_available_set else "pending"
        new_paper["coverUrl"] = f"assetUrl('{cover_url}')"
        new_paper["sets"] = updated_sets
        updated_papers.append(new_paper)

    # Write asset-manifest.json
    manifest_data = {
        "version": "2.0.0",
        "description": "CET 英语四六级全量历年真题资源清单 (2019-2025)",
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "totalAssets": len(manifest_assets),
        "assets": manifest_assets
    }
    manifest_file = os.path.join(ROOT_DIR, 'src/data/asset-manifest.json')
    with open(manifest_file, 'w', encoding='utf-8') as f:
        json.dump(manifest_data, f, ensure_ascii=False, indent=2)
    print(f'\n📝 asset-manifest.json 已更新: 共 {len(manifest_assets)} 项有效资源')

    # Update src/data/examPapers.js
    write_exam_papers_js(updated_papers)

def write_exam_papers_js(papers):
    lines = []
    lines.append("// 试卷数据结构（符合 PRD 4.2 目录规范及 4.4 状态标识）")
    lines.append("// 包含 status 字段：'available'（真题/解析/听力完整可用） | 'pending'（资源整理中）")
    lines.append("import { assetUrl } from '../utils/assetUrl.js'")
    lines.append("")
    lines.append("export const examPapers = [")

    for p in papers:
        lines.append("  {")
        lines.append(f"    id: '{p['id']}',")
        lines.append(f"    year: {p['year']},")
        lines.append(f"    session: '{p['session']}',")
        lines.append(f"    examDate: '{p['examDate']}',")
        lines.append(f"    type: '{p['type']}',")
        if p.get('isNew'):
            lines.append("    isNew: true,")
        lines.append(f"    status: '{p['status']}',")
        lines.append(f"    coverUrl: {p['coverUrl']},")
        lines.append("    sets: [")
        for s in p['sets']:
            pdf_code = s['pdfUrl'] if s['pdfUrl'] else "''"
            lines.append("      {")
            lines.append(f"        name: '{s['name']}',")
            lines.append(f"        status: '{s['status']}',")
            lines.append(f"        pdfUrl: {pdf_code},")
            if s.get('analysisPdfUrl'):
                lines.append(f"        analysisPdfUrl: {s['analysisPdfUrl']},")
            if s.get('audioUrl'):
                lines.append(f"        audioUrl: {s['audioUrl']},")
            lines.append("      },")
        lines.append("    ],")
        first_set_audio = p['sets'][0].get('audioUrl') if p['sets'] else ""
        audio_code = first_set_audio if first_set_audio else "''"
        lines.append("    papers: [")
        lines.append("      { type: '写作', content: '' },")
        lines.append(f"      {{ type: '听力', audioUrl: {audio_code}, duration: 1800, transcript: [] }},")
        lines.append("      { type: '阅读', content: { passage: '', questions: [] } },")
        lines.append("      { type: '翻译', content: '' },")
        lines.append("    ],")
        lines.append("  },")

    lines.append("]")
    lines.append("")
    lines.append("export const getAllYears = (examType) => {")
    lines.append("  const papers = examType ? examPapers.filter(p => p.type === examType) : examPapers")
    lines.append("  return [...new Set(papers.map(p => p.year))].sort((a, b) => b - a)")
    lines.append("}")
    lines.append("")
    lines.append("export const filterPapers = (year, session) => {")
    lines.append("  return examPapers.filter(p => {")
    lines.append("    if (year && p.year !== year) return false")
    lines.append("    if (session && p.session !== session) return false")
    lines.append("    return true")
    lines.append("  })")
    lines.append("}")
    lines.append("")
    lines.append("export const getPaperById = (id) => examPapers.find(p => p.id === id)")
    lines.append("export const getPapersByType = (type) => examPapers.filter(p => p.type === type)")
    lines.append("")
    lines.append("export const getPaperStats = (paper) => {")
    lines.append("  const stats = { writing: false, listening: false, reading: false, translation: false }")
    lines.append("  if (!paper || !paper.papers) return stats")
    lines.append("  paper.papers.forEach(p => {")
    lines.append("    if (p.type === '写作') stats.writing = true")
    lines.append("    if (p.type === '听力') stats.listening = true")
    lines.append("    if (p.type === '阅读') stats.reading = true")
    lines.append("    if (p.type === '翻译') stats.translation = true")
    lines.append("  })")
    lines.append("  return stats")
    lines.append("}")
    lines.append("")
    lines.append("export const isSetAvailable = (paper, setIndex = 0) => {")
    lines.append("  if (!paper) return false")
    lines.append("  if (typeof paper === 'string') {")
    lines.append("    paper = getPaperById(paper)")
    lines.append("  }")
    lines.append("  const set = paper?.sets?.[setIndex]")
    lines.append("  return set?.status === 'available'")
    lines.append("}")
    lines.append("")

    out_file = os.path.join(ROOT_DIR, 'src/data/examPapers.js')
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print(f'📄 src/data/examPapers.js 已更新！')

if __name__ == '__main__':
    main()
