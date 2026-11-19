import {useState} from 'react';
import {BookOpen,Compass,Layers,MessageSquare,Search,Target,Maximize2,Check,Info} from 'lucide-react';
import floating from './content/floating.json';
import smoke from './content/smoke.json';
import ealing from './content/ealing.json';
import su7 from './content/su7.json';
import './case-blocks.css';
import visualDimensions from './visual-dimensions.json';
import {ResponsiveImage,fullVisual} from './VisualMedia';

type Item={title:string;text:string;eyebrow?:string};
export type Block=
 |{type:'text'|'statement'|'note';title:string;text:string[]}
 |{type:'cards'|'flow';title:string;items:Item[]}
 |{type:'stats';title:string;items:{value:string;label:string;note?:string}[]}
 |{type:'bars';title:string;items:{label:string;value:number;suffix?:string}[];max?:number}
 |{type:'table';title:string;columns:string[];rows:string[][]}
 |{type:'media';title:string;src:string;caption?:string}
 |{type:'gallery';title:string;items:{src:string;title:string;text?:string}[]};
const content:Record<string,Record<string,Block[]>>={
 'floating-island':floating as Record<string,Block[]>,
 'invisible-smoke':smoke as Record<string,Block[]>,
 ealing:ealing as Record<string,Block[]>,
 'grease-grace':su7 as Record<string,Block[]>
};
export const getBlocks=(project:string,chapter:string)=>content[project]?.[chapter]||[];
export const getBlockCount=(project:string)=>Object.values(content[project]||{}).reduce((n,v)=>n+v.length,0);
const icons=[Compass,Search,MessageSquare,Layers,Target,BookOpen];

function Journey({block}:{block:Extract<Block,{type:'cards'|'flow'}>}){
 const [active,setActive]=useState(0);
 return <ol className="case-flow">{block.items.map((item,i)=><li key={i} className={i===active?'is-current':''}><button onClick={()=>setActive(i)} aria-pressed={i===active}><span className="flow-marker">{i===active?<Check size={17}/>:<span/>}</span><strong>{item.title}</strong></button><p>{item.text}</p></li>)}</ol>;
}
function Visual({src,title,caption,onOpen}:{src:string;title:string;caption?:string;onOpen:(src:string,title:string)=>void}){
 const size=visualDimensions[src as keyof typeof visualDimensions];
 return <figure className="case-visual"><button aria-label={'放大'+title} onClick={()=>onOpen(fullVisual(src),title)}><ResponsiveImage src={src} alt={title} loading="lazy" width={size?.[0]} height={size?.[1]}/><span><Maximize2 size={17}/>查看细节</span></button>{caption&&<figcaption>{caption}</figcaption>}</figure>;
}
export function CaseBlocks({project,chapter,onOpen}:{project:string;chapter:string;onOpen:(src:string,title:string)=>void}){
 return <div className="case-modules">{getBlocks(project,chapter).map((block,index)=><section className={'case-module module-'+block.type+(/核心|洞察|结论|关键|设计原则|设计机会/.test(block.title)?' is-key-module':'')} key={index} data-block-type={block.type} aria-label={block.title}>
 <h3 className="module-heading">{block.type==='note'&&<Info size={16}/>}<span>{block.title}</span></h3>
 {block.type==='cards'&&<div className="case-cards">{block.items.map((item,i)=>{const Icon=icons[i%icons.length];return <article key={i}><div className="card-symbol"><Icon size={22}/>{item.eyebrow&&<span>{item.eyebrow}</span>}</div><h4>{item.title}</h4><p>{item.text}</p></article>;})}</div>}
 {block.type==='flow'&&<Journey block={block}/>}
 {block.type==='stats'&&<dl className="case-stats">{block.items.map((item,i)=><div key={i}><dt>{item.label}</dt><dd>{item.value}</dd>{item.note&&<p>{item.note}</p>}</div>)}</dl>}
 {block.type==='bars'&&<div className="case-bars">{block.items.map((item,i)=><div className="case-bar" key={i}><div><span>{item.label}</span><strong>{item.value}{item.suffix??'%'}</strong></div><div className="bar-track" role="meter" aria-label={item.label} aria-valuemin={0} aria-valuemax={block.max??100} aria-valuenow={item.value}><i style={{width:`${Math.min(100,item.value/(block.max??100)*100)}%`}}/></div></div>)}</div>}
 {block.type==='table'&&<div className="case-table-scroll" tabIndex={0} role="region" aria-label={block.title+'，可横向滚动'}><table><thead><tr>{block.columns.map((column,i)=><th scope="col" key={i}>{column}</th>)}</tr></thead><tbody>{block.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=>j===0?<th scope="row" key={j}>{cell}</th>:<td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>}
 {(block.type==='text'||block.type==='statement'||block.type==='note')&&<div className="module-prose">{block.text.map((text,i)=><p key={i}>{text}</p>)}</div>}
 {block.type==='media'&&<Visual src={block.src} title={block.title} caption={block.caption} onOpen={onOpen}/>}
 {block.type==='gallery'&&<div className="case-gallery">{block.items.map((item,i)=><article key={i}><Visual src={item.src} title={item.title} onOpen={onOpen}/><h4>{item.title}</h4>{item.text&&<p>{item.text}</p>}</article>)}</div>}
 </section>)}</div>;
}
