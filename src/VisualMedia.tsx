import {useId,type CSSProperties,type ImgHTMLAttributes} from 'react';
import assets from './visual-assets.json';
import {tiltCard,resetTilt} from './DesignSystem';

export const visualAsset=(src:string)=>assets[src as keyof typeof assets];
export const fullVisual=(src:string)=>visualAsset(src)?.src||src;

export function ResponsiveImage({src='',sizes='(max-width: 650px) calc(100vw - 40px), (max-width: 1100px) 75vw, 1100px',...props}:ImgHTMLAttributes<HTMLImageElement>){
 const asset=visualAsset(src);
 return <img {...props} src={asset?.src||src} srcSet={asset?.srcSet} sizes={asset?sizes:undefined} width={asset?.width||props.width} height={asset?.height||props.height} decoding="async"/>;
}

export function ProjectCover({id,src,alt,className='',style,loading,sizes}:{id:string;src:string;alt:string;className?:string;style?:CSSProperties;loading?:'lazy'|'eager';sizes?:string}){
 const clipId=useId().replace(/\W/g,'');
 if(id!=='grease-grace')return <ResponsiveImage src={src} alt={alt} className={className} style={style} loading={loading} sizes={sizes}/>;
 return <div className={'su7-cover-design '+className} style={style} role="img" aria-label={alt}>
  <div className="su7-cover-heading" aria-hidden="true"><strong>SU7</strong><span>GREASE & GRACE<br/>服务体验设计</span></div>
  <svg className="su7-cover-car" viewBox="135 1000 1425 1125" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><clipPath id={clipId}><rect x="150" y="1000" width="1400" height="1125"/></clipPath></defs><image clipPath={'url(#'+clipId+')'} href="/projects/covers/su7-workshop-original.webp" width="1692" height="3492"/></svg>
  <div className="su7-cover-status" aria-hidden="true"><i/><span>维修状态可视化</span><small>从等待，到看见进展。</small></div>
  <span className="su7-cover-line" aria-hidden="true"/>
 </div>;
}

export function PortraitCard(){
 return <figure className="portrait-card" onPointerMove={tiltCard} onPointerLeave={resetTilt}>
  <div className="portrait-frame"><img src="/images/qian-guangyao-portrait.webp" width="1254" height="1254" alt="钱光耀，坐在窗边看向窗外" loading="lazy" decoding="async"/><div className="portrait-light" aria-hidden="true"/><div className="portrait-edge" aria-hidden="true"/><div className="portrait-caption"><span>QIAN GUANGYAO</span><strong>以理解为起点。</strong></div></div>
  <figcaption><span>钱光耀</span><span>服务设计 · 用户研究 · AI 设计</span></figcaption>
 </figure>;
}
