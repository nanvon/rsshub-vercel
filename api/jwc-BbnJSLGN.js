import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CWQqZcqz.js";import{cache_default as t}from"./cache-CvppK6AM.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{timezone as r}from"./timezone-CCdTtC9I.js";import{load as i}from"cheerio";const a=`https://www.qztc.edu.cn/jwc/`,o=`www.qztc.edu.cn`,s={path:`/jwc/:type`,categories:[`university`],example:`/qztc/jwc/jwdt`,parameters:{type:`分类，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`教务处`,maintainers:[`iQNRen`],url:`www.qztc.edu.cn`,handler:c,radar:[{source:[`www.qztc.edu.cn/jwc/:type/list.htm`],target:`/jwc/:type`}],description:`| 板块 | 参数 |
| ------- | ------- |
| 教务动态 | jwdt |
| 首 页 | 1020 |
| 岗位介绍 | 1021 |
| 管理文件 | 1022 |
| 教学教改 | 1023 |
| 办事指南 | 1024 |
| 通知公告 | 1025 |
| 下载中心 | 1026 |
| 对外交流 | 1027 |
| 政策文件 | 1028 |
| 会议纪要 | 1029 |
`};async function c(s){let c=s.req.param(`type`),l=await e(a+c+`/list.htm`),u=i(l),d=u(`.news.clearfix`).toArray().map(e=>{let t=u(e),i=t.find(`a`);try{let e=i.attr(`title`)||``,o=i.attr(`href`);o?o.startsWith(`http`)||(o=a.slice(0,-1)+o):o=``;let s=r(n(t.find(`.news_meta`).text()),8);return{title:e,link:o,pubDate:s}}catch{return{title:``,link:``,pubDate:Date.now()}}}).filter(e=>e.title&&e.link),f=await Promise.all(d.map(n=>t.tryGet(n.link,async()=>{let t={...n,description:``};if(o===new URL(n.link).hostname)if(new URL(n.link).pathname.startsWith(`/_upload`))t.description=n.link;else{let r=await e(n.link),a=i(r);t.description=a(`.wp_articlecontent`).html()||``}else t.description=n.link;return t})));return{title:u(`head > title`).text()+` - 泉州师范学院-教务处`,link:a+c+`/list.htm`,item:f}}export{s as route};