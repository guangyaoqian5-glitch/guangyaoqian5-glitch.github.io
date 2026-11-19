"""Render each existing crop directly from the source PDF; preserve source files.

Usage: python scripts/prepare-hd-visuals.py <source.pdf>
Vector content is rerendered at 3x. Embedded raster detail remains source-limited.
"""
import concurrent.futures
import json
import importlib.util
from pathlib import Path
import shutil
import subprocess
import sys
from PIL import Image
sys.dont_write_bytecode = True
spec = importlib.util.spec_from_file_location('crop_jobs', Path(__file__).with_name('extract-case-assets.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
jobs, ROOT = module.jobs, module.ROOT

PDF = Path(sys.argv[1]).resolve()
assert PDF.is_file()
POPPLER = shutil.which('pdftoppm')
assert POPPLER, 'pdftoppm is required'
DEST = ROOT / 'public/projects/details-hd'
TEMP = ROOT / 'tmp/hd-visuals'
DEST.mkdir(parents=True, exist_ok=True)
TEMP.mkdir(parents=True, exist_ok=True)
OFFSETS = {'invisible-smoke-2026': 0, 'floating-island-2026': 16,
           'ealing-2026': 24, 'su7-2026': 42}

def render(job):
    folder, page, name, box = job
    with Image.open(ROOT / 'public/projects' / folder / f'page-{page:02}.webp') as original:
        base_width, base_height = original.size
    x, y, right, bottom = box
    page_number = OFFSETS[folder] + page
    stem = TEMP / name
    subprocess.run([POPPLER, '-f', str(page_number), '-l', str(page_number),
                    '-scale-to-x', str(base_width*3), '-scale-to-y', str(base_height*3),
                    '-x', str(x*3), '-y', str(y*3), '-W', str((right-x)*3),
                    '-H', str((bottom-y)*3), '-singlefile', '-png', str(PDF), str(stem)],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
    with Image.open(stem.with_suffix('.png')) as original:
        image = original.convert('RGB')
    image.thumbnail((3600, 3600), Image.Resampling.LANCZOS)
    width, height = image.size
    image.save(DEST / f'{name}.webp', 'WEBP', quality=97, method=6)
    variants = []
    for size in (960, 1600):
        if width > size*1.15:
            reduced = image.resize((size, round(height*size/width)), Image.Resampling.LANCZOS)
            reduced.save(DEST / f'{name}-{size}.webp', 'WEBP', quality=95, method=6)
            variants.append(f'/projects/details-hd/{name}-{size}.webp {size}w')
    variants.append(f'/projects/details-hd/{name}.webp {width}w')
    stem.with_suffix('.png').unlink()
    print(f'{name}: {(right-x)}x{(bottom-y)} -> {width}x{height}', flush=True)
    return '/projects/details/'+name+'.webp', {'src':f'/projects/details-hd/{name}.webp',
        'width':width,'height':height,'srcSet':', '.join(variants)}

if __name__ == '__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        manifest = dict(pool.map(render, jobs))
    (ROOT / 'src/visual-assets.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n', encoding='utf-8')
    print(f'Prepared {len(manifest)} source-faithful HD visuals.')
