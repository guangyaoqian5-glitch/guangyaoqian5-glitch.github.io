import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, ArrowDown, ArrowUp, Pause, Play, Scan, Sparkles, Layers, MoveUpRight, ArrowLeft, ArrowRight} from 'lucide-react';
import './style.css';
import {ProjectArchive,CaseStudy} from './Projects';
import {projects} from './project-data';

function App(){
 const [paused,setPaused]=useState(false);const video=useRef<HTMLVideoElement>(null);
 const [featured,setFeatured]=useState(0);
 const featuredProjects=projects.filter(p=>!p.supplement).slice(0,6);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');if(media.matches){video.current?.pause();setPaused(true);}},[]);
 const toggleVideo=()=>{if(!video.current)return;if(paused){video.current.play().then(()=>setPaused(false)).catch(()=>setPaused(true));}else{video.current.pause();setPaused(true);}};
 return <>
 <header className="nav wrap"><a className="logo" href="#home" aria-label="返回首页">q<span>®</span></a><a className="nav-label" href="#home">GUANGYAO QIAN</a><nav aria-label="主导航"><a href="#about">关于我</a><a href="#work">作品分类</a><a href="#approach">我的优势</a></nav><a className="contact-link" href="#contact">聊聊合作 <ArrowUpRight size={17}/></a></header>
 <main>
 <section className="hero hero-stage" id="home">
 <video ref={video} className="hero-video" autoPlay muted loop playsInline poster="/images/space.jpg" onError={()=>setPaused(true)}><source src="/images/hero.mp4" type="video/mp4"/></video><div className="hero-shade"/>
 <div className="aurora-field" aria-hidden="true"><i/><i/><i/></div>
 <div className="hero-content wrap"><div className="hero-heading"><div className="eyebrow"><span className="line"/> PORTFOLIO · 2026</div><h1>GUANGYAO<br/><span>QIAN</span></h1></div><div className="hero-intro"><span>服务设计 / AI 设计 / 用户研究</span><p>从真实处境中识别问题，<br/>把研究转化为可感知、可运行的体验。</p><a href="#work">查看全部项目 <ArrowDown size={17}/></a></div></div>
 <div className="featured-shell wrap" aria-label="精选项目浏览"><div className="featured-copy"><span className="featured-index">{String(featured+1).padStart(2,'0')} / {String(featuredProjects.length).padStart(2,'0')}</span><p>{featuredProjects[featured].tags.join(' · ')}</p><h2>{featuredProjects[featured].title}</h2><span>{featuredProjects[featured].en}</span></div><a className={'featured-visual cover-'+featuredProjects[featured].id} href={'#/project/'+featuredProjects[featured].id}><img src={featuredProjects[featured].cover} alt={featuredProjects[featured].title}/><span>进入项目 <ArrowUpRight size={18}/></span></a><div className="featured-controls"><button onClick={()=>setFeatured((featured-1+featuredProjects.length)%featuredProjects.length)} aria-label="上一个项目"><ArrowLeft size={18}/></button><button onClick={()=>setFeatured((featured+1)%featuredProjects.length)} aria-label="下一个项目"><ArrowRight size={18}/></button></div></div>
 <div className="project-rail" aria-label="选择精选项目">{featuredProjects.map((p,i)=><button className={i===featured?'active':''} onClick={()=>setFeatured(i)} key={p.id} aria-label={'展示'+p.title}><img src={p.cover} alt=""/><span>{p.title}</span></button>)}</div>
 <div className="hero-foot wrap"><span>SELECTED EXPLORATIONS</span><span className="hero-counter">SPACE → SERVICE → INTERACTION</span><button className="video-toggle" onClick={toggleVideo} aria-label={paused?'播放背景视频':'暂停背景视频'}>{paused?<Play size={13}/>:<Pause size={13}/>}<span>{paused?'播放':'暂停'}极光</span></button></div>
 </section>
 <ProjectArchive/>
 <section className="about section wrap" id="about"><div className="section-top"><span className="eyebrow">02 / ABOUT ME</span><span className="muted">设计，从理解人开始。</span></div><div className="about-grid"><div className="about-identity" aria-label="钱光耀设计经历"><span className="eyebrow">QIAN GUANGYAO</span><div className="identity-name">钱<br/>光耀<span>。</span></div><p>空间 → 服务 → 交互</p><div className="identity-bottom"><span>南京 / CHINA</span><span>DESIGN WITH PEOPLE</span></div></div><div className="about-copy"><h2>研究真实的需求，<br/>构建<span className="dim">值得拥有的体验。</span></h2><p className="roles">服务设计师 <span>/</span> AI 设计师 <span>/</span> 用户研究员</p><p className="body-copy">从环境艺术设计到服务与交互设计，我习惯以用户研究为起点，将洞察转化为可落地的设计。结合空间实践与 AI 工具链，把系统性的判断推进到具体界面、三维交互和可运行原型。</p><div className="tool-chips">{['Figma','TouchDesigner','Blender','Python / C#','AI Agent'].map(t=><span key={t}>{t}</span>)}</div><div className="resume-timeline"><div><time>2025.09 — 2026.09</time><strong>皇家艺术学院</strong><span>MA Service Design · 服务设计硕士</span></div><div><time>2020.09 — 2024.06</time><strong>南京林业大学</strong><span>环境艺术设计（室内设计）· 本科</span></div><div><time>2022.10 — 2023.04</time><strong>南京畅捷装饰工程设计有限公司</strong><span>硬装设计师 · 需求沟通、现场测量、方案与施工跟进</span></div><div><time>2021.09 — 2022.03</time><strong>南京芯仰城市之光空间设计有限公司</strong><span>全案设计师助理 · 空间规划、图纸与现场协作</span></div></div><div className="metrics"><div><strong>10</strong><span>个项目案例</span></div><div><strong>106</strong><span>页作品原稿</span></div><div><strong>03</strong><span>设计与研究方向</span></div></div><a className="text-link" href="#contact">联系方式 <ArrowUpRight size={17}/></a></div></div></section>
 <section className="approach section wrap" id="approach"><div className="section-top"><span className="eyebrow">03 / MY APPROACH</span><span className="muted">跨越学科，保持好奇。</span></div><div className="title-row"><h2>不止一种视角，<br/><span className="dim">让设计更进一步。</span></h2><p>从理解问题到验证方案，<br/>连接研究、系统与技术。<br/><span className="draft-note">研究 · 原型 · 实现</span></p></div><div className="strength-grid">{[{Icon:Scan,title:'洞察人的真实需求',en:'HUMAN INSIGHT',desc:'在汽车维修与移民家庭项目中，通过访谈、旅程梳理与共创，将具体处境转化为服务机会。'},{Icon:Layers,title:'看见完整的服务系统',en:'SYSTEMS THINKING',desc:'从室内空间实践走向服务系统：连接实体场所、数字入口与人员协作，让体验在触点之间持续。'},{Icon:Sparkles,title:'探索 AI 的体验边界',en:'AI EXPLORATION',desc:'使用 Blender、Three.js 与 Codex / C# 组织原型工具链，将服务判断落实为可交互的车辆监测模型。'}].map(({Icon,title,en,desc},i)=><article className="strength" key={en}><div className="strength-top"><Icon size={30} strokeWidth={1.2}/><span>0{i+1}</span></div><div><span className="eyebrow">{en}</span><h3>{title}</h3><p>{desc}</p></div></article>)}</div></section>
 <footer className="contact" id="contact"><div className="wrap contact-inner"><div className="section-top"><span className="eyebrow">04 / GET IN TOUCH</span><span className="muted">让下一次对话，成为新的开始。</span></div><p className="contact-intro">HAVE SOMETHING IN MIND?</p><h2>一起探索，<br/><span className="italic dim">下一个可能。</span><MoveUpRight className="contact-arrow" strokeWidth={.8}/></h2><div className="contact-details"><div><span>EMAIL</span><a href="mailto:qgy15851847500@163.com">qgy15851847500@163.com <ArrowUpRight size={16}/></a></div><div><span>PHONE</span><a href="tel:+8615951996036">159 5199 6036 <ArrowUpRight size={16}/></a></div><div><span>连接真实的人，创造有意义的设计。</span><p className="draft-note">江苏 · 南京 / 交互设计与服务设计</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} GUANGYAO QIAN</span><span>服务设计 · AI 设计 · 用户研究</span><a href="#home">回到顶部 <ArrowUp size={15}/></a></div></div></footer>
 </main>
 </>;
}
function PortfolioRouter(){
 const [hash,setHash]=useState(window.location.hash);
 useEffect(()=>{window.history.scrollRestoration='manual';},[]);
 useEffect(()=>{const update=()=>setHash(window.location.hash);window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update);},[]);
 const parts=hash.slice(1).split('/');
 const project=parts[1]==='project'?projects.find(p=>p.id===parts[2]):undefined;
 useEffect(()=>{if(!project){document.title='钱光耀 — 设计作品集';requestAnimationFrame(()=>{const el=document.getElementById(hash.slice(1));if(el)el.scrollIntoView({behavior:'instant'});else window.scrollTo({top:0,behavior:'instant'});});}},[hash,project]);
 if(project)return <CaseStudy key={project.id} project={project} chapterId={parts[3]}/>;
 if(parts[1]==='project')return <main className="wrap section"><h1>未找到这个项目</h1><a href="#work">返回作品分类</a></main>;
 return <App/>;
}
const container=document.getElementById('root')! as HTMLElement & {portfolioRoot?:ReturnType<typeof createRoot>};
const root=container.portfolioRoot ?? (container.portfolioRoot=createRoot(container));
root.render(<React.StrictMode><PortfolioRouter/></React.StrictMode>);
