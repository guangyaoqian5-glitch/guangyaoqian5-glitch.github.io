"""Extract individual visual outputs requested for the web case studies.

Original portfolio pages stay untouched. Text, tables and charts are rebuilt in
HTML; these crops retain only visual outputs, photos and interface mockups.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'public/projects/details'
DEST.mkdir(parents=True, exist_ok=True)

def crop(folder, page, name, box):
    source = ROOT / 'public/projects' / folder / f'page-{page:02}.webp'
    with Image.open(source) as image:
        image.crop(box).save(DEST / f'{name}.webp', 'WEBP', quality=92)

jobs = [
 ('floating-island-2026',1,'floating-overview',(810,20,2490,1060)),
 ('floating-island-2026',6,'floating-zoning',(90,235,668,544)),
 ('floating-island-2026',7,'floating-app',(1340,45,1924,1035)),
 ('floating-island-2026',8,'floating-view',(46,125,969,658)),
 ('floating-island-2026',8,'floating-fishing',(46,695,969,1048)),
 ('floating-island-2026',8,'floating-dining',(978,126,1842,770)),
 ('floating-island-2026',8,'floating-bedroom',(1866,126,2472,553)),
 ('floating-island-2026',8,'floating-living',(1866,595,2472,1046)),
 ('floating-island-2026',8,'floating-booking',(978,808,1486,1048)),
 ('floating-island-2026',8,'floating-consult',(1492,808,1842,1048)),
 ('invisible-smoke-2026',2,'smoke-installation',(87,286,920,737)),
 ('invisible-smoke-2026',2,'smoke-paper',(1028,286,1654,740)),
 ('invisible-smoke-2026',8,'smoke-visuals',(1705,656,2450,1028)),
]
jobs += [
 ('ealing-2026',1,'ealing-cover',(1050,180,2048,1152)),
 ('su7-2026',14,'su7-cover',(760,420,1150,665)),
 ('su7-2026',14,'su7-workshop',(750,175,1220,925)),
 ('su7-2026',3,'su7-persona',(205,285,655,880)),
]
for index,x in enumerate((55,415,795,1165,1530),1):
    jobs.append(('su7-2026',23,f'su7-journey-{index}',(x,435,x+290,895)))
ealing_crops={15:[(.060,.242,.180,.646),(.292,.150,.178,.648),(.522,.242,.178,.646),(.752,.150,.178,.648)],16:[(.024,.120,.177,.645),(.215,.293,.178,.644),(.410,.120,.177,.645),(.602,.293,.178,.644),(.795,.120,.178,.645)]}
for page, boxes in ealing_crops.items():
    for index,(x,y,w,h) in enumerate(boxes,1):
        jobs.append(('ealing-2026',page,f'ealing-p{page}-{index}',tuple(round(v) for v in (x*2048,y*1152,(x+w)*2048,(y+h)*1152))))
for page in (15,16):
    for index,x in enumerate((370,1036,1700),1):
        jobs.append(('invisible-smoke-2026',page,f'smoke-p{page}-{index}',(x,150,x+435,1050)))
if __name__ == '__main__':
    for job in jobs:
        crop(*job)
    print(f'Extracted {len(jobs)} independent visuals.')
