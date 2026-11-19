import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {ProjectCover} from './VisualMedia';

const motionAllowed=()=>document.documentElement.dataset.motion!=='reduced'&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Local canvas artwork: no remote services, textures or animation libraries. */
export function AuroraField(){
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=canvas.current!,ctx=el.getContext('2d');if(!ctx)return;
  let width=0,height=0,frame=0,last=0,time=0,visible=true;
  const target={x:.5,y:.4},pointer={...target};
  const resize=()=>{const rect=el.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(devicePixelRatio,1.5);el.width=Math.round(width*dpr);el.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);};
  const draw=(stamp:number)=>{
   frame=0;if(!visible||document.hidden)return;
   const moving=motionAllowed();if(moving&&stamp-last<32){frame=requestAnimationFrame(draw);return;}
   const delta=Math.min(40,stamp-last||16);last=stamp;if(moving)time+=delta*.00016;
   pointer.x+=(target.x-pointer.x)*.045;pointer.y+=(target.y-pointer.y)*.045;
   ctx.clearRect(0,0,width,height);ctx.globalCompositeOperation='screen';
   for(let band=0;band<5;band++){
    const wave=(x:number)=>height*(.3+band*.07)+Math.sin(x/width*3.8+time+band*.38)*height*.13+Math.sin(x/width*7-time*.65)*height*.035+(pointer.y-.5)*height*.22+(x/width-.5)*(pointer.x-.5)*height*.3;
    const gradient=ctx.createLinearGradient(0,height*.2,width,height*.85);
    gradient.addColorStop(0,'rgba(75,180,168,0)');gradient.addColorStop(.32,`rgba(112,227,188,${.14-band*.014})`);gradient.addColorStop(.67,`rgba(136,132,232,${.13-band*.012})`);gradient.addColorStop(1,'rgba(119,219,187,0)');
    ctx.fillStyle=gradient;ctx.beginPath();for(let x=-30;x<=width+30;x+=24){const y=wave(x);if(x===-30)ctx.moveTo(x,y);else ctx.lineTo(x,y);}for(let x=width+30;x>=-30;x-=24)ctx.lineTo(x,wave(x)+height*(.18+band*.018));ctx.closePath();ctx.fill();
    ctx.beginPath();for(let x=0;x<=width+24;x+=24){if(!x)ctx.moveTo(x,wave(x));else ctx.lineTo(x,wave(x));}ctx.strokeStyle=`rgba(${band%2?'163,151,238':'167,244,210'},.12)`;ctx.lineWidth=.65;ctx.stroke();
   }
   for(let i=0;i<62;i++){
    const x=((i*173.17)%997)/997*width,y=((i*137.71)%997)/997*height;
    const dx=(pointer.x*width-x),dy=(pointer.y*height-y),distance=Math.hypot(dx,dy),near=Math.max(0,1-distance/210);
    const alpha=.13+(Math.sin(time*2+i)+1)*.06+near*.35;
    ctx.fillStyle=`rgba(193,235,224,${alpha})`;ctx.beginPath();ctx.arc(x+Math.sin(time+i)*4,y+Math.cos(time*.8+i)*6,near?1.3:.7,0,Math.PI*2);ctx.fill();
    if(near>.2){ctx.strokeStyle=`rgba(179,226,213,${near*.13})`;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(pointer.x*width,pointer.y*height);ctx.stroke();}
   }
   ctx.globalCompositeOperation='source-over';if(moving)frame=requestAnimationFrame(draw);
  };
  const start=()=>{if(!frame&&visible&&!document.hidden){last=performance.now();frame=requestAnimationFrame(draw);}};
  const move=(event:PointerEvent)=>{if(event.pointerType!=='mouse'||!motionAllowed())return;const box=el.getBoundingClientRect();target.x=(event.clientX-box.left)/width;target.y=(event.clientY-box.top)/height;start();};
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else{cancelAnimationFrame(frame);frame=0;}},{threshold:0});
  const mutation=new MutationObserver(()=>{cancelAnimationFrame(frame);frame=0;start();});mutation.observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});
  const size=new ResizeObserver(()=>{resize();start();});size.observe(el);observer.observe(el);window.addEventListener('pointermove',move,{passive:true});document.addEventListener('visibilitychange',start);resize();start();
  return()=>{cancelAnimationFrame(frame);size.disconnect();observer.disconnect();mutation.disconnect();window.removeEventListener('pointermove',move);document.removeEventListener('visibilitychange',start);};
 },[]);
 return <canvas ref={canvas} className="aurora-field" aria-hidden="true"/>;
}

export function KineticTitle(){
 return <h1 className="kinetic-title" aria-label="理解人。设计可能。"><span className="type-line" aria-hidden="true">{['理','解','人','。'].map((c,i)=><span className="type-letter" style={{'--letter':i} as CSSProperties} key={i}>{c}</span>)}</span><span className="type-line" aria-hidden="true">{['设','计','可','能','。'].map((c,i)=><span className={'type-letter'+(i>1?' serif-word':'')+(i===4?' hero-period':'')} style={{'--letter':i+4} as CSSProperties} key={i}>{c}</span>)}</span></h1>;
}

export function StageImage({id,src,title}:{id:string;src:string;title:string}){
 return <div className="stage-scene" key={id}><ProjectCover id={id} className="stage-image" src={src} alt={title+'设计成果'} sizes="(max-width:650px) calc(100vw - 40px), 50vw"/><div className="stage-shutters" aria-hidden="true">{Array.from({length:5},(_,i)=><span key={i} style={{'--slice':i} as CSSProperties}/>)}</div><div className="stage-crosshair" aria-hidden="true"><i/><i/></div></div>;
}

const sceneLabels=[['用户研究','洞察归纳','用户旅程'],['实体场所','数字入口','人员协作'],['TouchDesigner','Blender','AI 工具链']];
export function CapabilityScene({index}:{index:number}){
 const labels=sceneLabels[index];
 return <div className={'capability-scene scene-'+index} aria-label={labels.join('、')+'的关系示意'}>
  <svg className="scene-connections" viewBox="0 0 640 230" fill="none" aria-hidden="true"><defs><linearGradient id={'signal-'+index}><stop stopColor="#bae4cd"/><stop offset="1" stopColor="#ae9eea"/></linearGradient></defs><path className="scene-path" d={index===0?'M96 114 Q208 16 320 114 T544 114':index===1?'M96 114 L320 46 L544 114 L320 188 Z M96 114 H544 M320 46 V188':'M96 114 C180 10 236 10 320 114 S460 218 544 114 M96 114 C180 218 236 218 320 114 S460 10 544 114'} stroke={'url(#signal-'+index+')'}/><path className="scene-pulse" d="M96 114H544" stroke={'url(#signal-'+index+')'}/><circle cx="320" cy="114" r="73" className="scene-ring"/><circle cx="320" cy="114" r="90" className="scene-ring outer"/>
  </svg>
  <div className="scene-nodes">{labels.map((label,i)=><span className={'scene-node node-'+i} key={label}><i aria-hidden="true">{index===0?(i===0?'◉':i===1?'✳':'⌁'):index===1?(i===0?'◇':i===1?'⊞':'◌'):(i===0?'⌁':i===1?'◇':'✳')}</i><strong>{label}</strong></span>)}</div><span className="scene-caption">{['UNDERSTAND → CONNECT','TOUCHPOINTS ↔ SYSTEM','IDEA ↔ PROTOTYPE'][index]}</span>
 </div>;
}

/** Pointer affordances keep the native cursor and never affect touch/keyboard input. */
export function MotionAtmosphere(){
 const cursor=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  let frame=0,active:HTMLElement|null=null,magnet:HTMLElement|null=null;
  const point={x:0,y:0},current={x:0,y:0};
  const render=()=>{frame=0;current.x+=(point.x-current.x)*.2;current.y+=(point.y-current.y)*.2;cursor.current?.style.setProperty('transform',`translate3d(${current.x}px,${current.y}px,0)`);if(Math.abs(point.x-current.x)+Math.abs(point.y-current.y)>.2)frame=requestAnimationFrame(render);};
  const reset=()=>{active=null;cursor.current?.classList.remove('is-on');if(magnet){magnet.style.removeProperty('translate');magnet=null;}};
  const move=(event:PointerEvent)=>{
   if(event.pointerType!=='mouse'||!motionAllowed()){reset();return;}
   const target=event.target as Element;
   const art=target.closest<HTMLElement>('.work-art,.stage-visual,.case-image-trigger');
   if(art!==active){active=art;cursor.current?.classList.toggle('is-on',!!art);if(cursor.current)cursor.current.textContent=art?.classList.contains('case-image-trigger')?'查看细节':'探索项目';}
   point.x=event.clientX;point.y=event.clientY;if(!frame)frame=requestAnimationFrame(render);
   const next=target.closest<HTMLElement>('.pill-link,.hero-work-link,.stage-bottom button,.contact-actions button');
   if(magnet&&magnet!==next)magnet.style.removeProperty('translate');magnet=next;
   if(next){const box=next.getBoundingClientRect();next.style.translate=`${(event.clientX-box.left-box.width/2)*.14}px ${(event.clientY-box.top-box.height/2)*.2}px`;}
  };
  window.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerleave',reset);window.addEventListener('hashchange',reset);window.addEventListener('blur',reset);window.addEventListener('click',reset);
  return()=>{cancelAnimationFrame(frame);reset();window.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',reset);window.removeEventListener('hashchange',reset);window.removeEventListener('blur',reset);window.removeEventListener('click',reset);};
 },[]);
 useEffect(()=>{
  let frame=0;
  const update=()=>{if(frame)return;frame=requestAnimationFrame(()=>{frame=0;const enabled=motionAllowed()&&innerWidth>900;document.querySelectorAll<HTMLElement>('.work-art-inner,.case-hero-art').forEach(el=>{const rect=el.getBoundingClientRect();if(rect.bottom<0||rect.top>innerHeight)return;const progress=(innerHeight/2-rect.top-rect.height/2)/innerHeight;el.style.setProperty('--depth-y',enabled?`${Math.max(-32,Math.min(32,progress*55))}px`:'0px');});});};
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);window.addEventListener('hashchange',update);const observer=new MutationObserver(update);observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});update();return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',update);window.removeEventListener('resize',update);window.removeEventListener('hashchange',update);};
 },[]);
 return <div className="explore-cursor" ref={cursor} aria-hidden="true">探索项目</div>;
}

export function motionEnabled(){return motionAllowed();}

export function RouteCurtain(){
 const [phase,setPhase]=useState(''),[title,setTitle]=useState('');
 useEffect(()=>{
  const cover=(event:Event)=>{setTitle((event as CustomEvent<string>).detail);setPhase('cover');};
  const reveal=()=>setPhase('reveal');
  window.addEventListener('portfolio:cover',cover);window.addEventListener('portfolio:reveal',reveal);
  return()=>{window.removeEventListener('portfolio:cover',cover);window.removeEventListener('portfolio:reveal',reveal);};
 },[]);
 return <div className={'route-curtain '+phase} aria-hidden="true"><div><span>QIAN GUANGYAO / SELECTED WORK</span><strong>{title}</strong><i/></div></div>;
}
