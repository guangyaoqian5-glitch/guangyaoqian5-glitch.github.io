import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowUpRight,ArrowUp,X,Plus,Minus,ArrowRight} from 'lucide-react';
import {categories,projects,sources,type Project} from './project-data';
import './projects.css';
import {CaseBlocks,getBlockCount} from './CaseBlocks';
function Cover({project:p}:{project:Project}){return <><img src={p.cover} alt={p.title+' · 项目视觉'} loading="lazy" width="2500" height="1080"/><div className="cover-art"><span>{p.category==='service'?'PEOPLE / SYSTEM / CONNECTION':'PERCEPTION / PLAY / REFLECTION'}</span><strong>{p.en}</strong><div><span>{p.subtitle}</span><span>Q. / SELECTED WORK</span></div></div><span className="cover-orbit" aria-hidden="true"/></>;}


export function ProjectArchive(){return <section className="archive section wrap" id="work">
 <div className="section-top"><span className="eyebrow">01 / PROJECT ARCHIVE</span><span className="muted">{projects.length} 个项目 · {categories.length} 个设计方向</span></div>
 <div className="archive-intro"><h2>沿着不同的路径，<br/><span className="dim">理解人与世界。</span></h2><p>服务设计 / 概念交互设计<br/>钱光耀 · 项目作品档案</p></div>
 <nav className="category-jumps" aria-label="作品分类">{categories.map((cat,i)=><a href={'#work-'+cat.id} key={cat.id}><span>0{i+1}</span>{cat.title}<ArrowUpRight size={17}/></a>)}</nav>
 {categories.map((cat,i)=><section className="category-group" id={'work-'+cat.id} key={cat.id} aria-labelledby={'title-'+cat.id}>
  <div className="category-heading"><span className="category-index">0{i+1}</span><div><span className="eyebrow">{cat.en}</span><h3 id={'title-'+cat.id}>{cat.title}</h3></div><p>{cat.intro}</p><span className="category-count">({projects.filter(p=>p.category===cat.id).length.toString().padStart(2,'0')})</span></div>
  <div className="archive-grid">{projects.filter(p=>p.category===cat.id).map((p,j)=><a className={'archive-card archive-card-'+j} href={'#/project/'+p.id} key={p.id} aria-label={'查看项目：'+p.title}><div className={'archive-cover cover-'+p.id}><Cover project={p}/><span className="archive-open"><ArrowUpRight size={24}/></span><span className="cover-number">{String(j+1).padStart(2,'0')}</span></div><div className="archive-card-meta"><span>{p.tags.join(' / ')}</span><span>{p.chapters.length} 章节</span></div><h4>{p.title}</h4><p>{p.subtitle}</p></a>)}</div>
 </section>)}

 </section>}

export function CaseStudy({project:p,chapterId}:{project:Project;chapterId?:string}){
 const [active,setActive]=useState(p.chapters[0].id);const [lightbox,setLightbox]=useState<{src:string;title:string}|null>(null);const [zoom,setZoom]=useState(1);const modal=useRef<HTMLDialogElement>(null);const heading=useRef<HTMLHeadingElement>(null);
 const detailCovers:Record<string,string>={'floating-island':'/projects/details/floating-overview.webp',ealing:'/projects/details/ealing-cover.webp','grease-grace':'/projects/details/su7-cover.webp','invisible-smoke':'/projects/details/smoke-installation.webp'};
 const category=categories.find(c=>c.id===p.category)!;
 const next=projects[(projects.findIndex(q=>q.id===p.id)+1)%projects.length];
 useEffect(()=>{document.title=p.title+' — Qian Guangyao Portfolio'; if(!chapterId){window.scrollTo({top:0,behavior:'instant'});heading.current?.focus({preventScroll:true});}return()=>{document.title='Qian Guangyao — Portfolio';};},[p.id]);
 useEffect(()=>{if(chapterId)document.getElementById('chapter-'+chapterId)?.scrollIntoView({behavior:'instant',block:'start'});else window.scrollTo({top:0,behavior:'instant'});},[chapterId,p.id]);
 useEffect(()=>{const update=()=>{const line=window.innerHeight*.3;let current=p.chapters[0].id;for(const chapter of p.chapters){const el=document.getElementById('chapter-'+chapter.id);if(el&&el.getBoundingClientRect().top<=line)current=chapter.id;}setActive(current);};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update);},[p.id]);
 useEffect(()=>{if(lightbox!==null){setZoom(1);modal.current?.showModal();document.body.style.overflow='hidden';}else{modal.current?.close();document.body.style.overflow='';}return()=>{document.body.style.overflow='';};},[lightbox]);
 return <main className="case-study" data-project={p.id}>
 <header className="case-header"><div className="wrap"><a className="case-back" href={'#work-'+p.category}><ArrowLeft size={17}/> 返回{category.title}</a><a href="#home" className="case-brand">GUANGYAO QIAN <span>/ DESIGN</span></a><a href={'#/project/'+p.id+'/'+p.chapters[0].id} className="case-header-count">{p.chapters.length} 个章节</a></div></header>
 <div className="case-hero wrap"><div className="case-kicker"><span>{category.en}</span><span>{'PROJECT / '+String(projects.findIndex(q=>q.id===p.id)+1).padStart(2,'0')}</span></div><h1 ref={heading} tabIndex={-1}>{p.title}</h1><div className="case-subhead"><p className="case-description">{p.description}</p><span>{p.en}</span></div><div className={'case-hero-art is-'+p.id}><img src={detailCovers[p.id]} alt={p.title+' · 设计成果'}/></div>
 <div className="case-facts"><div><span>项目方向</span><p>{p.tags.join(' · ')}</p></div><div><span>项目背景</span><p>{p.context}</p></div><div><span>阅读内容</span><p>{p.chapters.length} 个章节 / {getBlockCount(p.id)} 个内容模块</p></div></div>{p.credits&&<p className="case-credits">团队署名　{p.credits}</p>}</div>
 <div className="case-layout wrap"><aside className="case-toc" aria-label="项目章节目录"><p>项目目录 <span>CONTENTS</span></p><nav>{p.chapters.map((c,i)=><a href={'#/project/'+p.id+'/'+c.id} onClick={()=>{if(chapterId===c.id)document.getElementById('chapter-'+c.id)?.scrollIntoView({behavior:'instant'});}} key={c.id} aria-current={active===c.id?'location':undefined}><span>{String(i+1).padStart(2,'0')}</span>{c.title.replace(/^P\d+ · /,'')}</a>)}</nav><div className="toc-foot">研究 / 分析 / 设计<br/>按章节阅读完整设计过程</div></aside>
 <article className="case-content">{p.chapters.map((c,i)=><section className="case-chapter" id={'chapter-'+c.id} key={c.id}><div className="chapter-label"><span>{String(i+1).padStart(2,'0')}</span><span>{p.en} / CASE STUDY</span></div><h2>{c.title.replace(/^P\d+ · /,'')}</h2><CaseBlocks project={p.id} chapter={c.id} onOpen={(src,title)=>setLightbox({src,title})}/></section>)}<div className="case-source"><span className="eyebrow">PROJECT SOURCE</span><p>{sources[p.source].name}</p><span>研究、方法、设计决策与成果按主题展开。数据范围、模拟材料与原型状态在对应模块中说明。</span></div></article></div>
 <div className="case-next wrap"><a href={'#work-'+p.category}><ArrowLeft size={19}/> 返回分类</a><a href={'#/project/'+next.id}><span>继续浏览</span><strong>{next.title}</strong><ArrowRight size={25}/></a><a className="case-top" onClick={()=>window.scrollTo({top:0,behavior:'instant'})} href={'#/project/'+p.id} aria-label="返回项目顶部"><ArrowUp size={20}/></a></div>
 <dialog ref={modal} className="board-dialog" aria-label="设计成果放大阅读" onCancel={()=>setLightbox(null)}><div className="board-toolbar"><span>{lightbox?.title}</span><div><button onClick={()=>setZoom(z=>Math.max(.75,z-.25))} aria-label="缩小图片" disabled={zoom<=.75}><Minus size={20}/></button><span className="zoom-label">{Math.round(zoom*100)}%</span><button onClick={()=>setZoom(z=>Math.min(3,z+.25))} aria-label="放大图片" disabled={zoom>=3}><Plus size={20}/></button><button onClick={()=>setLightbox(null)} aria-label="关闭图片"><X size={22}/></button></div></div><div className="board-scroll">{lightbox!==null&&<img src={lightbox.src} alt={lightbox.title} style={{width:`${zoom*100}%`}}/>}</div><div className="board-help">缩放查看设计细节 · Esc 关闭</div></dialog>
 </main>
}
