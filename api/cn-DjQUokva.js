import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CDAeBYLA.js";import{parseDate as t}from"./parse-date-B2cCVoGk.js";import{ViewType as n}from"./types-DygLf1a3.js";const r={2:{name:`汽车`,slug:`autos`},3:{name:`金融服务`,slug:`banking-insurance`},4:{name:`消费者`,slug:`consumers`},5:{name:`医药`,slug:`healthcare-pharmaceuticals`},7:{name:`数字化`,slug:`business-technology`},8:{name:`制造业`,slug:`manufacturing`},9:{name:`私募`,slug:`private-equity`},10:{name:`技术，媒体与通信`,slug:`technology-media-and-telecom`},12:{name:`城市化与可持续发展`,slug:`urbanization-sustainability-insights`},13:{name:`创新`,slug:`innovation`},16:{name:`人才与领导力`,slug:`talent-leadership`},18:{name:`宏观经济`,slug:`macroeconomy`},19:{name:`麦肯锡全球研究院`,slug:`mckinsey-global-institute`},25:{name:`洞见`,slug:`insights`},37:{name:`麦肯锡季刊`,slug:`mckinsey-season-publication`},41:{name:`资本项目和基础设施`,slug:`capital-projects-infrastructure`},42:{name:`旅游、运输和物流`,slug:`transport-logistics`},45:{name:`全球基础材料`,slug:`global-basic-material`}},i=`https://www.mckinsey.com.cn`,a=`${i}/wp-json`,o={path:`/cn/:category?`,categories:[`finance`,`popular`],view:n.Articles,example:`/mckinsey/cn`,parameters:{category:{description:`分类`,options:Object.entries(r).map(([e,t])=>({value:e,label:t.name})),default:`25`}},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`洞见`,maintainers:[`laampui`],handler:s,description:`| 分类 | 分类名             |
| ---- | ------------------ |
| 25   | 全部洞见           |
| 2    | 汽车               |
| 3    | 金融服务           |
| 4    | 消费者             |
| 5    | 医药               |
| 7    | 数字化             |
| 8    | 制造业             |
| 9    | 私募               |
| 10   | 技术，媒体与通信   |
| 12   | 城市化与可持续发展 |
| 13   | 创新               |
| 16   | 人才与领导力       |
| 18   | 宏观经济           |
| 19   | 麦肯锡全球研究院   |
| 37   | 麦肯锡季刊         |
| 41   | 资本项目和基础设施 |
| 42   | 旅游、运输和物流   |
| 45   | 全球基础材料       |`};async function s(n){let{category:o=`25`}=n.req.param();isNaN(o)&&r.find(e=>e.slug===o);let s=await e(`${a}/wp/v2/posts`,{query:{per_page:n.req.query(`limit`)?Number(n.req.query(`limit`)):50,categories:o}}),c=s.map(e=>({title:e.title.rendered,description:e.content.rendered,link:e.link,guid:e.guid.rendered,pubDate:t(e.date_gmt)}));return{title:o?`McKinsey Greater China - ${r[o].name}`:`McKinsey Greater China`,link:`${i}/${o===`25`?r[o].slug:`${r[25].slug}/${r[o].slug}`}/`,item:c}}export{o as route};