export type ResearchSource={title:string;url:string;scope:string};
export type ResearchCase={question:string;context:string;stats:{value:string;label:string;detail:string;source:number}[];sources:ResearchSource[];analysis:{observation:string;meaning:string;decision:string}[];tradeoff:string;next:string};
export const research:Record<string,ResearchCase>={
'collective-box':{
 question:'公共交流增加之后，如何保护需要安静工作的教师？',
 context:'原稿 P.4 指出了采光差、走廊单一、展示挤占办公室等问题。补充研究把“空间开放”拆成可见性、交谈位置和声音边界，避免只用开放程度判断改造质量。',
 stats:[{value:'约 1 分',label:'封闭办公室的整体满意度优势',detail:'CBE 对数百栋建筑的调查分析中，封闭办公室较开放办公室约高 1 分；使用 7 点量表。是跨建筑比较，非本学院测量。',source:0},{value:'7 项',label:'室内环境评价维度',detail:'CBE 调查覆盖热舒适、空气、声学、照明、清洁、空间布局与办公家具。可据此扩展现有“光线与动线”的评价。',source:1}],
 sources:[{title:'UC Berkeley CBE · Working outside the box（2017）',url:'https://cbe.berkeley.edu/centerline/working-outside-the-box-making-open-offices-work-for-everyone/',scope:'境外办公建筑调查；不是学院教师样本。'},{title:'UC Berkeley CBE · Occupant Survey and Building Benchmarking',url:'https://cbe.berkeley.edu/research/occupant-survey-and-building-benchmarking/',scope:'使用后评价方法，用于制定本项目观察维度。'}],
 analysis:[{observation:'原稿：学生作品主要放在办公室内，公共展示不足。',meaning:'展示搬到走廊后会引入驻足与交谈；公开展示和教师专注之间需要缓冲。',decision:'把展示停留点放在走廊扩展处；办公室门口优先保持通行与进出空间。'},{observation:'原稿：公共走廊缺少自然光，交通流线单一。',meaning:'借光可以改善可见性，但窗边并不自动适合所有任务；眩光、屏幕反射和热感需要单独核对。',decision:'把窗边定义为可停留的公共带；在方案走查中分别检查采光、遮阳和阅读朝向。'},{observation:'外部研究：开放办公室的交流收益不能抵消所有隐私损失。',meaning:'对教师、学生和管理人员，不同任务需要不同的开放程度。',decision:'用“安静办公—短时交流—公共展示”的分区评价平面；避免让会谈直接溢出到专注工作区。'}],
 tradeoff:'保留办公边界，同时开放作品与交流。评估重点是任务之间能否切换，而不是拆掉了多少隔墙。',
 next:'现场补采：按上课、课间和办公时段标记停留位置、门口交谈与被打断情境；记录首次来访者的找人路径。现阶段没有这些观察次数或声环境实测值。'
},
'shiguangli':{
 question:'“温暖、精致、时尚”如何转化成入住时能感受到的服务？',
 context:'原稿 P.8–11 已有定位、平面和材质方案。补充研究将体验拆为抵达、等候、客房使用、用餐和离开，优先检验接待与公共空间的连续性。',
 stats:[{value:'39,468',label:'外部酒店研究的旅客样本',detail:'J.D. Power 2024 北美酒店研究基于品牌酒店旅客的反馈，入住时间为 2023 年 5 月至 2024 年 5 月。不是本酒店调研。',source:0},{value:'6 维度',label:'满意度不只来自空间外观',detail:'研究评价沟通与连接、餐饮、客房、设施、员工服务和价格价值；这里用作体验分析框架，不直接推断中国精品酒店偏好。',source:0}],
 sources:[{title:'J.D. Power · 2024 North America Hotel Guest Satisfaction Study',url:'https://www.jdpower.com/business/press-releases/2024-north-america-hotel-guest-satisfaction-index-nagsi-study',scope:'北美品牌酒店样本；适合提出问题，不适合当作本项目客群结论。'},{title:'WHO · Disability（2023）',url:'https://www.who.int/news-room/fact-sheets/detail/disability-and-health',scope:'全球包容性背景；说明行动、感官及信息获取差异应纳入体验，而非推算酒店客群比例。'}],
 analysis:[{observation:'原稿：大堂、餐饮和休息区共同承载精品酒店定位。',meaning:'拖箱抵达、同行者等候和餐饮服务可能在同一位置发生。空间体验取决于这些任务是否冲突。',decision:'在彩平上分别标出旅客、行李、服务员和清洁补给路线；优先处理交叉与回绕。'},{observation:'外部研究：服务、设施和沟通都参与满意度评价。',meaning:'材料营造氛围，但客人还要找到前台、知道等候进度，并找到可求助的人。',decision:'用入口视线、接待识别、等待座位与服务可见性检查大堂方案。'},{observation:'原稿：软装与材料是主要设计输出。',meaning:'精致家具也可能带来低座、起身困难、行李无处放及维护负担；这些是待核验问题。',decision:'按独行、双人同行及行动不便情境核对座椅组合、携物路线和短暂停留位置。'}],
 tradeoff:'先让抵达和等待容易理解，再用材质与灯光表达酒店性格。高峰时仍可顺畅使用，比单一渲染视角更能说明方案。',
 next:'下一步需结合真实运营配置验证：前台服务人数、行李寄存位置、客房清洁补给路径和餐饮高峰。不编造入住率或等待时长。'
},
'lingzhou':{
 question:'当展馆融入公园地景，访客如何发现入口、完成参观并安心离开？',
 context:'原稿 P.12–15 将建筑与地景、自然光和观景平台结合。补充分析从公园散步者与专程观展者两种到访任务出发，检查地下空间的可识别性与连续可达性。',
 stats:[{value:'14.9 亿',label:'2024 年全国博物馆接待人次',detail:'国务院文旅融合工作报告列出 7,046 家备案博物馆及 14.9 亿接待人次。它说明公共文化参观规模，不能预测本艺术馆客流。',source:0},{value:'16%',label:'全球人口存在显著残障的估计比例',detail:'WHO 2023 事实页估计约 13 亿人；这里用于强调多样化使用需求，不作为本展馆使用者比例。',source:1}],
 sources:[{title:'国务院 · 文旅融合工作情况报告（2025，数据为 2024 年）',url:'https://www.npc.gov.cn/npc/c2/c30834/202509/t20250911_447645.html',scope:'全国博物馆统计，非场地客流数据。'},{title:'WHO · Disability（2023）',url:'https://www.who.int/news-room/fact-sheets/detail/disability-and-health',scope:'全球估计，不能用于推算具体访客数量。'},{title:'Smithsonian Exhibits · Trailblazing（2019）',url:'https://exhibits.si.edu/trailblazing/',scope:'该展览项目让有障碍的用户参与设计反馈；作为参与式验证案例。'}],
 analysis:[{observation:'原稿：建筑融入公园，展厅进入地下。',meaning:'建筑的隐蔽性与入口识别存在张力；地标可见不等于入口、开放状态和参观方向可理解。',decision:'分别从公园主要来向核对入口视线；以门前停留、入口标识与下行路径建立连续线索。'},{observation:'原稿：自然采光和观景平台是空间策略。',meaning:'观景与观展的停留节奏不同；只想休息的人不应被迫进入完整展览路线。',decision:'区分短时观景环线和完整观展路线，并核对二者与休息点、出口的衔接。'},{observation:'包容性背景与展览案例：使用需求不能仅靠设计者想象。',meaning:'对轮椅、低视力及容易疲劳的访客，高差、方向信息和休息机会会一起影响参观。',decision:'用完整旅程走查连续可达路线、可坐位置和信息识别，再邀请对应使用者检验。'}],
 tradeoff:'地景融合服务于体验，而不是牺牲入口与出口的可理解性。先检查连续路线，再讨论单个空间的形式。',
 next:'待补采的是本场地不同来向、不同时间段的真实人流与入口识别情况。全国参观数据不换算成设计容量；容量和构造尺寸需另做专业核验。'
},
'overlapping':{
 question:'老厂房的更新价值，如何同时体现在保留、参观和日常运营中？',
 context:'原稿 P.17–19 提供场地、体块与平剖面。补充研究把“新旧重叠”从造型概念推进到使用判断：哪些应保留、哪些可插入、哪些路径不能相互干扰。',
 stats:[{value:'2 个案例',label:'Historic England 的历史建筑建模基础',detail:'受委托研究以两栋历史建筑的实际数据建立全生命周期碳模型，比较改造情景。案例数量和类型限制了外推。',source:0},{value:'超过 60%',label:'该研究改造情景至 2050 年的减排结果',detail:'这是上述英国案例的模型结果，不是本厂房的节碳量，也不意味着任何保留方案都能达到同样效果。',source:0}],
 sources:[{title:'Historic England · Carbon in the Built Historic Environment（2019/2020）',url:'https://historicengland.org.uk/research/heritage-counts/2019-carbon-in-built-environment/carbon-in-built-historic-environment/',scope:'英国历史建筑的情景模型，不能直接等同国内厂房改造。'},{title:'Historic England · Heritage, Buildings and Embodied Carbon（2024）',url:'https://historicengland.org.uk/research/heritage-counts/heritage-and-environment/avoiding-embodied-carbon-production/',scope:'研究综述强调保留结构与材料再利用的重要性，用作方案比较依据。'}],
 analysis:[{observation:'原稿：旧厂房中置入新体量，并以叠加形成展览关系。',meaning:'保留应有清楚对象；“旧”不能只作为表面风格，也不宜把所有构件都默认可以继续使用。',decision:'建立保留、修缮、替换、可逆插入四类清单；具体承载与状况仍由现场和专业检测确定。'},{observation:'原稿：平面与剖面呈现跨层连接。',meaning:'访客要在空间转换处理解下一展区；换展、设备运输与参观则有不同的时间和宽度需求。',decision:'叠加观众路线与运营路线，优先核对竖向转换、展品进入和交叉节点。'},{observation:'外部研究：改造价值需要全生命周期比较。',meaning:'新增结构、后期维护和运营能耗可能改变保留方案的实际收益。',decision:'用同一功能需求比较保留与重建情景；作品集展示比较逻辑，不填入没有计算依据的减碳成绩。'}],
 tradeoff:'新体量应让旧空间更容易被使用和维护。形式上的对比，需要由清晰的路径、可更换构造与运营条件支撑。',
 next:'需补充构件状况、材料数量、维护要求与运营配置。没有这些输入，不能给出项目节碳百分比或宣称已通过安全核验。'
},
'grease-grace':{
 question:'维修透明度怎样从“更多信息”变成“更能做决定”？',context:'新版已补齐多层前后台流程。进一步分析聚焦状态可信度、支持选择和异常处理，让设计不只覆盖理想旅程。',
 stats:[{value:'+77 分',label:'展示维修现场画面 / 视频的满意度差异',detail:'J.D. Power 2024 中国 CSI 研究中，展示组高于未展示组；为 1,000 分量表上的分差，不是 77% 的提升。',source:0},{value:'+91 分',label:'全部收费项目事先沟通的满意度差异',detail:'同一研究的组间比较。属于相关性证据，不能证明本 SU7 概念方案会产生同等收益。',source:0}],
 sources:[{title:'J.D. Power · 2024 中国售后服务满意度研究',url:'https://china.jdpower.com/zh-hans/press-release/2024-CSI',scope:'中国燃油车售后研究，非 SU7 专项，也非本方案实验。'}],
 analysis:[{observation:'新版 P.12–15：技师确认、零件追踪和 3D 状态相互连接。',meaning:'自动生成的解释可能与最新工单不一致；越直观的动画越需要明确数据时效。',decision:'每次更新显示确认时间和来源；超时进入“等待确认”，保留人工联系。'},{observation:'新版 P.18–25：借还、互助和积分覆盖双方旅程。',meaning:'无库存、无匹配、取消和行程变化会影响用户是否真能继续生活。',decision:'在选择支持前告知可用性与退出方式；为未匹配者保留替代支持入口。'},{observation:'外部调查把收费沟通和现场可见性分别比较。',meaning:'看到进度不能替代对价格、变更和责任的理解。',decision:'把费用确认与进度通知分开，新增费用需要明确解释和用户确认。'}],tradeoff:'减少不确定性不等于增加推送量。优先给出当前状态、下一节点和可采取的行动。',next:'比较有无更新时间、异常解释和费用变更确认的任务完成情况；验证理解与决策，不把满意度分差写成本方案成果。'
},
'ealing':{
 question:'一个家庭怎样把分散的信息，变成下一步能完成的任务？',context:'新版新增小学试点论证。补充分析关注服务覆盖范围、跨机构交接与伙伴匹配的边界，避免把一个学校或族群的需求外推到所有新移民。',
 stats:[{value:'367,100',label:'2021 年 Ealing 常住人口（约）',detail:'ONS 人口普查值；2011 年约 338,400。是行政区背景，不是东亚家庭或新移民人数。',source:0},{value:'+8.5%',label:'2011—2021 年人口增长',detail:'ONS 同期伦敦增幅为 7.7%。增长提供服务背景，不能单独证明具体住房或语言需求。',source:0}],
 sources:[{title:'ONS · How the population changed in Ealing: Census 2021',url:'https://www.ons.gov.uk/visualisations/censuspopulationchange/E09000009/',scope:'2021 人口普查，2022 发布；非当前人口估计或目标用户样本。'}],
 analysis:[{observation:'新版 P.13：找房、住址证明和学校申请相互依赖。',meaning:'按部门列链接，会把拼接流程的负担留给家庭。',decision:'按“我现在要完成什么”组织材料、前置条件和下一步，并注明信息更新时间。'},{observation:'新版 P.28–31：学校促成家庭匹配并提供后台支持。',meaning:'相同语言或兴趣只能帮助开始联系，不能保证响应、信任与长期参与。',decision:'明确首次接触、无人回复、退出和转介的责任人；不把伙伴家庭当作专业服务替代。'},{observation:'新版 P.32 提出具体小学试点；P.34 强调共同处境与实际信任。',meaning:'试点应验证机制能否工作，而不是用一个学校的语言构成证明普遍适用。',decision:'先检验找房入学交叉任务和匹配后的首次会面，再决定是否扩展服务范围。'}],tradeoff:'数字入口负责减少任务混乱，伙伴家庭负责有边界的同伴连接。两者互补，但不能彼此替代。',next:'确认学校数据年份、合作意愿和支持资源；分别记录信息任务完成与关系建立情况，不将试点设想写成已经合作。'
},
'floating-island':{
 question:'海上体验的完整性，能否经得起一次天气变化？',context:'原稿已有海钓、住宿与餐饮访谈。补充研究聚焦跨触点交接和中断情景，避免线上预约承诺超出现场条件。',
 stats:[{value:'天气 × 潮汐',label:'出海前应同时核对的条件',detail:'RNLI 出海建议包含天气、潮汐和装备检查。这里是外部安全信息框架，具体运营需由当地专业方确定。',source:0}],
 sources:[{title:'RNLI · Enjoy the sea trouble free',url:'https://rnli.org/water-safety/choose-your-activity/yacht-sailing-and-motorboating/enjoy-the-sea-trouble-free',scope:'英国海上安全指导；不代替本地运营条件和专业评估。'}],
 analysis:[{observation:'原稿 P.8：天气与场地条件会影响活动。',meaning:'住宿、餐饮和海钓不能共享一个简单的“预订成功”状态。',decision:'将已确认住宿与待确认海上活动区分，并显示最近确认节点。'},{observation:'原稿 P.9：用户需要装备、便利预订与渔获处理。',meaning:'预约到领取装备、归还及加工交接可能出现责任断点。',decision:'逐项明确地点、时间、交接人员和未完成状态。'},{observation:'外部建议要求在出发前核对条件。',meaning:'活动中断也是服务的一部分。',decision:'提前解释延期或取消后的联系、替代活动和费用处理路径。'}],tradeoff:'先让服务承诺与现场能力一致，再增加可预订项目。',next:'待由运营方确认天气决策、接驳和费用规则；用中断情景验证信息理解，不能编造可出海阈值。'
},
'invisible-smoke':{
 question:'观众看到烟雾之后，是否能理解装置表达的环境问题？',context:'补充研究为原有问卷、访谈与现场图像提供背景，并区分污染科学、视觉隐喻和互动理解三个层次。',
 stats:[{value:'99%',label:'2019 年全球人口所居地区未达到 WHO 空气质量指导水平',detail:'WHO 2024 事实页引用的全球估计；不是南京、夜市或寺庙的现场测量。',source:0}],
 sources:[{title:'WHO · Ambient (outdoor) air pollution（2024）',url:'https://www.who.int/news-room/fact-sheets/detail/ambient-%28outdoor%29-air-quality-and-health',scope:'全球环境健康背景；不能证明某一现场污染物浓度或个体暴露。'}],
 analysis:[{observation:'原稿以夜市与寺庙的烟雾展开视觉实验。',meaning:'可见烟雾和具体污染物浓度不是同一个指标。',decision:'对粒子与天平标注“概念反馈”；实测数值仅在有校准和测量条件时展示。'},{observation:'原稿将观众操作连接到屏幕和物理反馈。',meaning:'观众可能把视觉变化理解为特效，而非行为与环境的关系。',decision:'设计操作前预测、操作后复述两个问题，核对因果理解。'},{observation:'原问卷没有完整的样本与方法记录。',meaning:'态度材料可以启发设计，不能代表公众总体或证明行为改变。',decision:'把结果表达限制在现场理解；长期行为变化另设研究，不用喜欢程度替代。'}],tradeoff:'表达要有感受力，也要让科学事实与设计隐喻之间的边界清楚。',next:'补齐传感器类型、校准和采样条件；目前不报告真实浓度或环境改善结果。'
},
'fingertip-track':{
 question:'体验数字困难时，能否同时看见可改变的界面问题？',context:'原稿已有访谈、工作坊和测试。补充分析将重点从“模拟老化”转向“辨认障碍并尝试改进”，避免把所有年长者描绘成相同能力状态。',
 stats:[{value:'75.4%',label:'2024 年 6 月，60 岁及以上网民的网络支付使用率',detail:'CNNIC 第 54 次报告；分母是已上网的该年龄群体，不是所有老年人，也不能用于推断每个人的熟练程度。',source:0},{value:'24 × 24',label:'CSS 像素：WCAG 2.2 的最小指针目标要求',detail:'2.5.8（AA）包含间距等例外。仅作为网页目标设计参照，不直接等同 Unity 实体屏幕上的毫米尺寸。',source:1}],
 sources:[{title:'CNNIC · 第54次中国互联网络发展状况统计报告（2024）',url:'https://www.cnnic.cn/n4/2024/0829/c88-11065.html',scope:'全国网民统计，不能代表每位老年人。'},{title:'W3C · Understanding Target Size (Minimum)',url:'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum',scope:'网页无障碍标准解释，需结合平台和具体输入方式。'},{title:'W3C WAI · Older Users and Web Accessibility',url:'https://www.w3.org/WAI/older-users/',scope:'年长使用者需求存在差异；涉及视觉、动作、听觉及认知等方面。'}],
 analysis:[{observation:'原稿通过查找、输入和动作困难构成任务。',meaning:'错误可能来自小目标、复杂路径和模糊反馈，而不只是身体能力。',decision:'为相同任务增加清晰标签、更大目标和可恢复错误的对照版本。'},{observation:'原测试指出部分场景单调。',meaning:'仅重复失败会降低参与意愿，也不一定产生新的理解。',decision:'让任务从识别问题推进到选择改进，并在结束时解释改进依据。'},{observation:'CNNIC 表明已有大量年长网民使用网络支付。',meaning:'年龄不是单一能力标签，体验需要呈现差异和已有经验。',decision:'在介绍中明确模拟范围；复盘询问设计能改变什么，而不是给“老年能力”打分。'}],tradeoff:'游戏可以让障碍被感知，但最终应把讨论带回界面与服务如何改善。',next:'用不同能力与经验的真实使用者检验任务，对照误触、求助和理解变化；不宣称单次游戏已提升同理心。'
},
'bird-vision':{
 question:'一次视角切换，能否让观众理解动物有不参与的需要？',context:'原稿已有动物园观察、访谈与问题树。补充分析从动物福利出发，检验交互任务是否过度奖励游客的接近与观看。',
 stats:[{value:'选择权',label:'动物是否参与互动，应保留自主选择',detail:'WAZA 2020 动物—访客互动指南要求避免损害福利，并让动物能选择是否参与。这里作为展览设计判断依据。',source:0}],
 sources:[{title:'WAZA · Animal–Visitor Interaction Guidelines（2020）',url:'https://www.waza.org/wp-content/uploads/2020/04/ENG_WAZA-Animal-Visitor-Interactions-Guidelines.pdf',scope:'动物—访客互动指南，不是本装置教育效果的证明。'}],
 analysis:[{observation:'原稿关注观看、拍摄、娱乐和动物需求之间的冲突。',meaning:'如果任务始终奖励“看得更多”，可能继续强化被批评的观看方式。',decision:'加入尊重距离、安静观察和允许动物离开视野的选择，而非仅追求视觉刺激。'},{observation:'原稿用不同鸟类的视角模拟场景。',meaning:'屏幕呈现不能等同完整的鸟类感知。',decision:'说明视觉模拟的概念范围，复盘时核对观众是否误认为是科学复现。'},{observation:'原稿设有扫码与公共评论屏幕。',meaning:'公开表达应有明确预期，也需要避免将未经核实的观点当作知识传播。',decision:'提供展示确认、撤回路径与内容说明，并区分个人观点和科学解释。'}],tradeoff:'让观众思考“动物需要什么”，比让人体验更奇异的画面更接近项目命题。',next:'检验参与者是否能说出具体的尊重行为及模拟局限；不要以拍照、停留或点赞直接推断福利意识提升。'
}
};
