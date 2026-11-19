import {useEffect,useState,type PointerEvent} from 'react';
import {Waves,Pause,Play} from 'lucide-react';

export const projectArt:Record<string,string>={
 'floating-island':'/projects/details/floating-overview.webp',
 ealing:'/projects/details/ealing-cover.webp',
 'grease-grace':'/projects/details/su7-workshop.webp',
 'invisible-smoke':'/projects/details/smoke-installation.webp'
};
export const projectSignals:Record<string,{discipline:string;focus:string;chapters:string[]}>={
 'floating-island':{discipline:'SPACE × SERVICE',focus:'从海钓到餐桌，连接完整的海上体验',chapters:['research-goal','research-results-2','space-design','online-service']},
 ealing:{discipline:'RESEARCH × PRODUCT',focus:'把住房与入学，放回同一条决策路径',chapters:['key-insights','definition','product-definition','app-output-1','prototype-validation']},
 'grease-grace':{discipline:'SERVICE × TRUST',focus:'车辆归还之后，信任如何继续？',chapters:['synthesis','response','frontend-2','blueprint','frontstage']},
 'invisible-smoke':{discipline:'INTERACTION × INFORMATION',focus:'从看见烟雾，走向理解污染信息',chapters:['research-findings','opportunities','concept-output','user-flow','app-output-1']}
};

export function tiltCard(event:PointerEvent<HTMLElement>){
 if(event.pointerType!=='mouse'||window.matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.dataset.motion==='reduced')return;
 const box=event.currentTarget.getBoundingClientRect();
 event.currentTarget.style.setProperty('--tilt-x',`${((event.clientY-box.top)/box.height-.5)*-5}deg`);
 event.currentTarget.style.setProperty('--tilt-y',`${((event.clientX-box.left)/box.width-.5)*5}deg`);
 event.currentTarget.style.setProperty('--card-x',`${event.clientX-box.left}px`);
 event.currentTarget.style.setProperty('--card-y',`${event.clientY-box.top}px`);
}
export function resetTilt(event:PointerEvent<HTMLElement>){event.currentTarget.style.setProperty('--tilt-x','0deg');event.currentTarget.style.setProperty('--tilt-y','0deg');}

export function useReveal(dependency:unknown){
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.06});
  document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
  return()=>observer.disconnect();
 },[dependency]);
}

export function SiteEffects(){
 const [reduced,setReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{document.documentElement.dataset.motion=reduced?'reduced':'full';document.querySelectorAll<HTMLVideoElement>('.studio-video').forEach(video=>{if(reduced)video.pause();else video.play().catch(()=>{});});},[reduced]);
 useEffect(()=>{
  let frame=0;
  const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.documentElement.style.setProperty('--page-progress',`${max>0?window.scrollY/max*100:0}%`);});};
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('hashchange',update);update();
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',update);window.removeEventListener('hashchange',update);};
 },[]);
 return <><div className="page-progress" aria-hidden="true"/><button className="motion-control" onClick={()=>setReduced(!reduced)} aria-pressed={!reduced} aria-label={reduced?'开启动效':'减少动态'}><Waves size={16}/><span>{reduced?'静态模式':'动态模式'}</span>{reduced?<Play size={12}/>:<Pause size={12}/>}</button></>;
}
