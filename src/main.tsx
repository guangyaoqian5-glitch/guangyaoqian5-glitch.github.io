import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {Plus,Minus,Scan,Layers,Sparkles,Mail,Copy,Check,ChevronDown,ChevronLeft,ChevronRight} from 'lucide-react';
import './style.css';
import {ProjectArchive,CaseStudy} from './Projects';
import {projects} from './project-data';
import {SiteEffects,projectArt,projectSignals,useReveal} from './DesignSystem';
import './design.css';
import {AuroraField,KineticTitle,StageImage,CapabilityScene,MotionAtmosphere,RouteCurtain,motionEnabled} from './MotionStudio';
import './motion.css';
import {PortraitCard,ResponsiveImage} from './VisualMedia';
import './media.css';

const abilities=[
 {Icon:Scan,label:'研究洞察',en:'HUMAN INSIGHT',title:'从真实处境，找到值得解决的问题。',text:'在汽车维修与移民家庭项目中，通过访谈、旅程梳理与共创，将具体处境转化为服务机会。',projects:['ealing','grease-grace'],tools:['用户研究','洞察归纳','用户旅程']},
 {Icon:Layers,label:'系统设计',en:'SYSTEMS THINKING',title:'看见触点，也看见触点之间的关系。',text:'从室内空间实践走向服务系统：连接实体场所、数字入口与人员协作，让体验在触点之间持续。',projects:['floating-island','grease-grace'],tools:['服务蓝图','空间体验','前后台协作']},
 {Icon:Sparkles,label:'交互与技术',en:'INTERACTION & AI',title:'把设计判断，推进到可以交互的原型。',text:'使用 Blender、Three.js 与 Codex / C# 组织原型工具链，将服务判断落实为可交互的车辆监测模型。',projects:['invisible-smoke','grease-grace'],tools:['TouchDesigner','Blender','AI 工具链']}
];

function App(){
 const [featured,setFeatured]=useState(0),[ability,setAbility]=useState(0),[copied,setCopied]=useState(false),[historyOpen,setHistoryOpen]=useState(true);
 const video=useRef<HTMLVideoElement>(null);
 const p=projects[featured],a=abilities[ability];
 useReveal('home');
 useEffect(()=>{const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');if(reduced.matches||document.documentElement.dataset.motion==='reduced')video.current?.pause();},[]);
 const copyEmail=async()=>{try{await navigator.clipboard.writeText('qgy15851847500@163.com');setCopied(true);}catch{setCopied(false);}};
 return <>
 <header className="studio-nav wrap"><a className="studio-wordmark" href="#home" aria-label="钱光耀，返回首页">Q<span>G.</span></a><a className="studio-name" href="#home">QIAN GUANGYAO<span>DESIGN PORTFOLIO / 2026</span></a><nav aria-label="主导航"><a href="#work">作品</a><a href="#approach">能力</a><a href="#about">关于</a></nav><a className="pill-link" href="#contact">联系我 <Plus size={15}/></a></header>
 <main className="studio-home">
 <section className="studio-hero" id="home">
  <video ref={video} className="studio-video" autoPlay muted loop playsInline poster="/images/space.jpg" aria-hidden="true"><source src="/images/hero.mp4" type="video/mp4"/></video>
  <div className="studio-aurora" aria-hidden="true"><i/><i/><i/><div className="orbital-line"/></div><AuroraField/>
  <div className="hero-grid wrap">
   <div className="hero-manifesto"><div className="small-caps"><span className="tiny-line"/> SERVICE · INTERACTION · RESEARCH</div><KineticTitle/><p className="hero-name">钱光耀 <span>QIAN GUANGYAO</span></p><p className="hero-statement">从真实处境中识别问题，<br/>把研究转化为可感知、可运行的体验。</p><a className="hero-work-link" href="#work">探索四个项目 <ChevronDown size={18}/></a></div>
   <div className="hero-project-stage" aria-label="精选项目浏览" onKeyDown={e=>{if(e.key==='ArrowRight')setFeatured((featured+1)%projects.length);if(e.key==='ArrowLeft')setFeatured((featured-1+projects.length)%projects.length);}}>
    <div className="stage-label"><span>SELECTED WORK</span><span>{String(featured+1).padStart(2,'0')} / 04</span></div>
    <a className={'stage-visual stage-'+p.id} href={'#/project/'+p.id} aria-label={'进入项目：'+p.title}><StageImage id={p.id} src={projectArt[p.id]} title={p.title}/><span className="stage-enter"><Plus size={22}/><span>打开项目</span></span><div className="stage-caption"><span>{projectSignals[p.id].discipline}</span><strong>{p.title}</strong></div></a>
    <div className="stage-bottom"><p key={p.id}>{projectSignals[p.id].focus}</p><div><button aria-label="上一个精选项目" onClick={()=>setFeatured((featured-1+projects.length)%projects.length)}><ChevronLeft size={18}/></button><button aria-label="下一个精选项目" onClick={()=>setFeatured((featured+1)%projects.length)}><ChevronRight size={18}/></button></div></div>
    <div className="stage-tabs" aria-label="选择精选项目">{projects.map((project,i)=><button key={project.id} onClick={()=>setFeatured(i)} aria-label={'展示'+project.title} aria-pressed={i===featured}><span>{String(i+1).padStart(2,'0')}</span><i/></button>)}</div>
   </div>
  </div>
  <div className="hero-baseline wrap"><span>服务设计师 / AI 设计师 / 用户研究员</span><span>南京 · CHINA <b>向下探索</b></span></div>
 </section>
 <ProjectArchive/>
 <section className="capabilities wrap section" id="approach" data-reveal><div className="section-caption"><span>THE WAY I WORK</span><span>连接研究、系统与技术</span></div><div className="section-title-row"><h2>能力，不止于<span>一种视角。</span></h2><p>选择一个视角，<br/>看看它如何进入设计实践。</p></div>
  <div className="capability-layout"><div className="capability-tabs" role="tablist" aria-label="设计能力" aria-orientation="vertical">{abilities.map((item,i)=><button key={item.en} role="tab" id={'ability-tab-'+i} aria-selected={ability===i} aria-controls="ability-panel" tabIndex={ability===i?0:-1} onClick={()=>setAbility(i)} onKeyDown={event=>{if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();const next=(i+(event.key==='ArrowDown'?1:2))%3;setAbility(next);document.getElementById('ability-tab-'+next)?.focus();}}}><item.Icon size={25}/><span><small>{item.en}</small><strong>{item.label}</strong></span><Plus className="tab-plus" size={20}/></button>)}</div>
  <div className="capability-panel" id="ability-panel" role="tabpanel" aria-labelledby={'ability-tab-'+ability} key={ability}><span className="panel-kicker">{a.en}</span><h3>{a.title}</h3><CapabilityScene index={ability}/><p>{a.text}</p><div className="capability-tools">{a.tools.map(t=><span key={t}>{t}</span>)}</div><div className="capability-projects"><span>在项目中探索</span>{a.projects.map(id=>{const project=projects.find(x=>x.id===id)!;return <a href={'#/project/'+id} key={id}><ResponsiveImage src={projectArt[id]} alt="" sizes="48px"/><strong>{project.title}</strong><Plus size={16}/></a>;})}</div></div></div>
 </section>
 <section className="about-studio wrap section" id="about" data-reveal><div className="section-caption"><span>ABOUT / QIAN GUANGYAO</span><span>空间 → 服务 → 交互</span></div><div className="about-studio-grid"><PortraitCard/><div className="about-studio-copy"><h2>研究真实的需求，<br/><em>构建值得拥有的体验。</em></h2><p>从环境艺术设计到服务与交互设计，我习惯以用户研究为起点，将洞察转化为可落地的设计。结合空间实践与 AI 工具链，把系统性的判断推进到具体界面、三维交互和可运行原型。</p><div className="studio-tools">{['Figma','TouchDesigner','Blender','Python / C#','AI Agent'].map(tool=><span key={tool}>{tool}</span>)}</div><div className="experience-toggle"><button onClick={()=>setHistoryOpen(!historyOpen)} aria-expanded={historyOpen} aria-controls="experience-list">教育与实践经历 {historyOpen?<Minus size={20}/>:<Plus size={20}/>}</button></div><div id="experience-list" hidden={!historyOpen} className="studio-timeline">{[['2025.09 — 2026.09','皇家艺术学院','MA Service Design · 服务设计硕士'],['2020.09 — 2024.06','南京林业大学','环境艺术设计（室内设计）· 本科'],['2022.10 — 2023.04','南京畅捷装饰工程设计有限公司','硬装设计师 · 需求沟通、现场测量、方案与施工跟进'],['2021.09 — 2022.03','南京芯仰城市之光空间设计有限公司','全案设计师助理 · 空间规划、图纸与现场协作']].map(([time,title,text])=><div key={time}><time>{time}</time><strong>{title}</strong><p>{text}</p></div>)}</div></div></div></section>
 <footer className="studio-contact" id="contact"><div className="contact-aurora" aria-hidden="true"/><div className="wrap"><div className="section-caption"><span>LET’S MAKE SOMETHING MEANINGFUL.</span><span>GET IN TOUCH</span></div><p>让下一次对话，成为新的开始。</p><h2>一起探索，<br/><span>下一个可能。</span><i>✳</i></h2><div className="contact-actions"><a className="contact-email" href="mailto:qgy15851847500@163.com"><Mail size={24}/>qgy15851847500@163.com</a><button onClick={copyEmail} aria-label="复制邮箱地址">{copied?<Check size={20}/>:<Copy size={20}/>}<span role="status">{copied?'已复制':'复制邮箱'}</span></button></div><div className="contact-bottom"><a href="tel:+8615951996036">159 5199 6036</a><span>江苏 · 南京 / 交互设计与服务设计</span><a href="#home">回到顶部</a></div><div className="studio-copyright"><span>© {new Date().getFullYear()} QIAN GUANGYAO</span><span>RESEARCH. SYSTEMS. POSSIBILITIES.</span></div></div></footer>
 </main></>;
}

function PortfolioRouter(){
 const [hash,setHash]=useState(window.location.hash);
 useEffect(()=>{window.history.scrollRestoration='manual';const update=()=>setHash(window.location.hash);window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update);},[]);
 useEffect(()=>{
  let transitioning=false;const timers:number[]=[];
  const navigate=(event:MouseEvent)=>{
   if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||!motionEnabled())return;
   const anchor=(event.target as Element).closest<HTMLAnchorElement>('a[href^="#/project/"]');
   if(!anchor||!/^#\/project\/[^/]+$/.test(anchor.getAttribute('href')||''))return;
   const destination=anchor.getAttribute('href')!;
   if(document.querySelector<HTMLElement>('.case-study')?.dataset.project===destination.split('/')[2])return;
   if(transitioning){event.preventDefault();return;}
   event.preventDefault();transitioning=true;
   if(!document.startViewTransition){
    const target=projects.find(item=>destination.endsWith('/'+item.id));
    window.dispatchEvent(new CustomEvent('portfolio:cover',{detail:target?.title||''}));
    timers.push(window.setTimeout(()=>{window.history.pushState(null,'',destination);flushSync(()=>setHash(destination));window.scrollTo({top:0,behavior:'instant'});window.dispatchEvent(new Event('portfolio:reveal'));},300));
    timers.push(window.setTimeout(()=>{transitioning=false;},950));return;
   }
   const img=anchor.querySelector<HTMLImageElement>('img');if(img)img.style.viewTransitionName='project-cover';
   const transition=document.startViewTransition(()=>{window.history.pushState(null,'',destination);flushSync(()=>setHash(destination));window.scrollTo({top:0,behavior:'instant'});});
   transition.finished.catch(()=>{}).finally(()=>{transitioning=false;if(img)img.style.removeProperty('view-transition-name');});
  };
  document.addEventListener('click',navigate);return()=>{document.removeEventListener('click',navigate);timers.forEach(clearTimeout);};
 },[]);
 const parts=hash.slice(1).split('/');
 const project=parts[1]==='project'?projects.find(p=>p.id===parts[2]):undefined;
 useEffect(()=>{if(!project){document.title='Qian Guangyao — Portfolio';requestAnimationFrame(()=>{const el=document.getElementById(hash.slice(1));if(el)el.scrollIntoView({behavior:'instant'});else window.scrollTo({top:0,behavior:'instant'});});}},[hash,project]);
 if(project)return <CaseStudy key={project.id} project={project} chapterId={parts[3]}/>;
 if(parts[1]==='project')return <main className="wrap section"><h1>未找到这个项目</h1><a href="#work">返回作品分类</a></main>;
 return <App/>;
}
const container=document.getElementById('root')! as HTMLElement & {portfolioRoot?:ReturnType<typeof createRoot>};
const root=container.portfolioRoot??(container.portfolioRoot=createRoot(container));
root.render(<React.StrictMode><SiteEffects/><MotionAtmosphere/><RouteCurtain/><PortfolioRouter/></React.StrictMode>);
