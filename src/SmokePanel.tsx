import type {ReactNode} from 'react';
import './smoke.css';

const S=({n,title,children}:{n:string;title:string;children:ReactNode})=><section className="smoke-block"><header><span>{n}</span><h3>{title}</h3></header>{children}</section>;
const Cards=({items}:{items:{code?:string;title:string;text:string}[]})=><div className="smoke-cards">{items.map((x,i)=><article key={x.code||x.title}><span>{x.code||String(i+1).padStart(2,'0')}</span><h4>{x.title}</h4><p>{x.text}</p></article>)}</div>;
const Flow=({items}:{items:string[]})=><div className="smoke-flow">{items.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b>{i<items.length-1&&<i aria-hidden="true">→</i>}</div>)}</div>;
const Bars=({items}:{items:{label:string;value:number}[]})=><div className="smoke-bars">{items.map(x=><div key={x.label}><div><span>{x.label}</span><strong>{x.value}%</strong></div><i><b style={{width:`${x.value}%`}}/></i></div>)}</div>;

export function SmokePanel({id}:{id:string}){
 if(id==='cover')return <div className="smoke-statement"><span>PROJECT THESIS</span><strong>SEEING POLLUTION IS NOT THE SAME AS UNDERSTANDING IT.</strong><p>从可见烟雾出发，让信息被解释、被带走、被再次访问。</p></div>;
 if(id==='overview')return <><S n="01" title="三层体验"><Flow items={['现场参与：身体动作触发装置','带走线索：纸条保留主题与入口','按需查阅：移动端解释数据与来源']}/></S><S n="02" title="原型复盘"><Cards items={[{code:'R01',title:'反馈与测量容易混淆',text:'界面明确标注艺术化反馈不等于现场实时浓度。'},{code:'R02',title:'纸条不应成为唯一入口',text:'增加直接浏览与异常恢复路径。'},{code:'R03',title:'小屏信息层级不足',text:'减少内容重叠，并提高字号与对比度。'}]}/></S></>;
 if(id==='background')return <><S n="01" title="两类日常烟雾"><Cards items={[{code:'A',title:'寺庙焚香',text:'文献记录 23 种样品，PM2.5 排放速率 7—202 mg/h；不能等同现场浓度。'},{code:'B',title:'夜市烧烤',text:'实验样本中的 PM2.5 数值随食材和条件变化；不能直接外推到真实摊位。'}]}/></S><p className="smoke-note">核心设计问题：如何让没有环境监测背景的观众，在短时互动中理解污染信息的含义与来源？</p></>;
 if(id==='research-methods')return <><S n="01" title="研究问题"><Cards items={[{code:'RQ01',title:'行为动机',text:'哪些因素影响人们践行低碳环保行为？'},{code:'RQ02',title:'认知差距',text:'看见烟雾时，人们如何理解污染？'},{code:'RQ03',title:'信息来源',text:'哪些指标、条件与出处需要同时解释？'}]}/></S><S n="02" title="方法组合"><Flow items={['问卷调查','半结构访谈与现场观察','环境数据原型探索','科学文献回顾']}/></S></>;
 if(id==='research-findings')return <><S n="01" title="行为动机"><div className="smoke-chart-grid"><Bars items={[{label:'经济成本节省',value:64},{label:'教育与宣传',value:52},{label:'激励政策',value:51},{label:'新技术支持',value:46}]}/><Bars items={[{label:'个人健康',value:83},{label:'世界环境',value:47},{label:'经济因素',value:23}]}/></div></S><S n="02" title="研究归纳"><Cards items={[{code:'I01',title:'动机与个人生活相关',text:'经济利益和健康在不同题目中反复出现。'},{code:'I02',title:'反对不等于行动',text:'态度表达与持续行为之间存在距离。'},{code:'I03',title:'看见不等于理解',text:'烟雾形态无法说明污染物、单位与实验条件。'}]}/></S></>;
 if(id==='opportunities')return <S n="01" title="洞察 → 机会"><Cards items={[{code:'O01',title:'熟悉情境',text:'从寺庙与夜市进入环境议题。'},{code:'O02',title:'数据语境',text:'为数字补充单位、条件与来源。'},{code:'O03',title:'证据可追溯',text:'区分文献数据、原型信号与艺术表达。'}]}/></S>;
 if(id==='goals')return <S n="01" title="目标与产出"><div className="smoke-touchpoints"><article><span>G01</span><h4>易参与</h4><p>现场装置提供直接反馈。</p></article><article><span>G02</span><h4>易理解</h4><p>纸质输出保留线索。</p></article><article><span>G03</span><h4>可延续</h4><p>网页与 App 支持离场回看。</p></article></div></S>;
 if(id==='concept-output')return <S n="01" title="装置链路"><Flow items={['超声波 / 热成像感知','Arduino 读取与判断','TouchDesigner 生成视觉','舵机驱动机械天平']}/></S>;
 if(id==='touchpoints')return <S n="01" title="跨触点系统"><Cards items={[{code:'T01',title:'互动装置',text:'感知动作并产生视觉与机械反馈。'},{code:'T02',title:'纸质输出',text:'保留情境、摘要与访问入口。'},{code:'T03',title:'访客网页',text:'解释污染指标与研究来源。'},{code:'T04',title:'移动端原型',text:'支持直接浏览与离场回看。'}]}/></S>;
 if(id==='product-definition')return <><S n="01" title="产品边界"><Cards items={[{code:'IN',title:'包含',text:'情境说明、互动反馈、污染物解释、数据来源与离场回看。'},{code:'OUT',title:'不包含',text:'实时监测、个人暴露与健康风险计算、强制注册登录。'}]}/></S><p className="smoke-status">MOBILE WEB · INFORMATION COMPANION · PROTOTYPE</p></>;
 if(id==='requirements')return <S n="01" title="需求映射"><Cards items={[{code:'R01',title:'直接进入',text:'没有纸条也能浏览完整内容。'},{code:'R02',title:'解释反馈',text:'说明动作、粒子与天平之间的关系。'},{code:'R03',title:'情境化指标',text:'同时呈现单位与实验条件。'},{code:'R04',title:'核验来源',text:'保留作者、年份与出处。'},{code:'R05',title:'离场回看',text:'通过示例主题再次访问。'},{code:'R06',title:'异常恢复',text:'编号无效或断网时给出下一步。'}]}/></S>;
 if(id==='information-architecture')return <S n="01" title="站点结构"><Flow items={['直接浏览 / 纸条入口','情境索引','情境详情','反馈 / 污染物 / 来源','我的记录 / 帮助']}/></S>;
 if(id==='user-flow')return <S n="01" title="三条任务路径"><Cards items={[{code:'F01',title:'直接浏览',text:'选择情境 → 理解反馈 → 阅读指标 → 核验来源。'},{code:'F02',title:'纸条进入',text:'识别编号 → 定位主题 → 查看情境与来源 → 离场回看。'},{code:'F03',title:'离场回看',text:'打开示例记录 → 返回主题 → 继续阅读来源。'}]}/></S>;
 if(id==='interaction-rules')return <S n="01" title="异常与恢复"><Cards items={[{code:'S03',title:'编号无效',text:'提示重试，或切换为直接浏览。'},{code:'S04',title:'纸条遗失',text:'返回情境索引，不把纸条设为必要条件。'},{code:'S05',title:'网络异常',text:'明确连接失败，恢复后重试。'},{code:'S06',title:'来源失效',text:'保留作者、年份、研究名称与 DOI。'}]}/></S>;
 if(id==='app-output-1'||id==='app-output-2')return <p className="smoke-status">HIGH-FIDELITY UI · 情境、反馈、指标、来源与示例记录均已纳入原型</p>;
 return null;
}
