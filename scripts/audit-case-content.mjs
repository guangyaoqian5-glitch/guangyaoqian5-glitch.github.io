import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const source=fs.readFileSync('src/project-data.ts','utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {projects}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
const files={'floating-island':'floating','invisible-smoke':'smoke',ealing:'ealing','grease-grace':'su7'};
const types=new Set(['cards','stats','flow','table','bars','text','statement','note','media','gallery']);
let total=0;
for(const project of projects){
 const content=JSON.parse(fs.readFileSync(`src/content/${files[project.id]}.json`,'utf8'));
 const expected=project.chapters.map(c=>c.id);
 if(JSON.stringify(Object.keys(content).sort())!==JSON.stringify([...expected].sort()))throw new Error(project.id+': chapter coverage mismatch');
 let blocks=0;
 for(const chapter of expected){
  if(!content[chapter].length)throw new Error(project.id+'/'+chapter+': empty');
  for(const block of content[chapter]){
   if(!types.has(block.type)||!block.title)throw new Error('Invalid block '+chapter);
   if(block.type==='table'&&block.rows.some(row=>row.length!==block.columns.length))throw new Error('Table column mismatch '+chapter+'/'+block.title);
   const srcs=block.src?[block.src]:(block.type==='gallery'?block.items.map(x=>x.src):[]);
   for(const src of srcs){
    if(!src.startsWith('/projects/details/')||!fs.existsSync(path.join('public',src)))throw new Error('Missing or full-board visual: '+src);
   }
   blocks++;
  }
 }
 total+=blocks;
 console.log(`${project.title}: ${expected.length} chapters / ${blocks} native modules`);
}
console.log(`Verified ${total} modules; all chapters covered, tables aligned, independent media present.`);
