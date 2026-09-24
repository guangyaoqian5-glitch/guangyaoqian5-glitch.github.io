import {research} from './research-data';
import './research.css';
export function ResearchPanel({id}:{id:string}){
 const r=research[id];if(!r)return null;
 return <div className="research-panel">
  <div className="research-provenance"><span>补充案头研究 · 2026.09</span><p>公开资料用于补充项目分析；不代表新增了实地访谈，也不作为项目已取得的成效。</p></div>
  <p className="research-context">{r.context}</p>
  <div className="research-stats">{r.stats.map((s,i)=><article className="research-stat" key={i}><span className="research-stat-number">{s.value}</span><h3>{s.label}</h3><p>{s.detail}</p><a href={r.sources[s.source].url} target="_blank" rel="noreferrer">来源 {String(s.source+1).padStart(2,'0')} ↗</a></article>)}</div>
  <div className="research-matrix"><div className="research-matrix-head"><span>研究依据</span><span>问题分析</span><span>进入设计的判断</span></div>{r.analysis.map((a,i)=><div className="research-row" key={i}><div><span className="research-step">0{i+1} / 依据</span><p>{a.observation}</p></div><div><span className="research-mobile-label">分析</span><p>{a.meaning}</p></div><div><span className="research-mobile-label">设计判断</span><p>{a.decision}</p></div></div>)}</div>
  <div className="research-conclusion"><span>设计取舍</span><p>{r.tradeoff}</p></div>
  <div className="research-next"><h3>哪些还需要回到现场确认</h3><p>{r.next}</p></div>
  <section className="research-references" aria-label="研究资料来源"><h3>资料来源与适用范围</h3><ol>{r.sources.map((s,i)=><li key={s.url}><span>{String(i+1).padStart(2,'0')}</span><div><a href={s.url} target="_blank" rel="noreferrer">{s.title} ↗</a><p>{s.scope}</p></div></li>)}</ol><p className="research-accessed">资料核对：2026 年 9 月 23 日。数据年份与地域按各来源标明。</p></section>
 </div>;
}
