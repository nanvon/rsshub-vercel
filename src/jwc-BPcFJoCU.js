import"./esm-shims-B6VgfGYP.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as e}from"./ofetch-D4MiciTC.js";import{cache_default as t}from"./cache-Dfid4xgQ.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{timezone as r}from"./timezone-CMz5pnRe.js";import{load as i}from"cheerio";const a=`https://www.qztc.edu.cn/jwc/`,o={path:`/jwc/:type`,categories:[`university`],example:`/qztc/jwc/jwdt`,parameters:{type:`分类，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`教务处`,maintainers:[`iQNRen`],url:`www.qztc.edu.cn`,handler:s,radar:[{source:[`www.qztc.edu.cn/jwc/:type/list.htm`],target:`/jwc/:type`}],description:`| 板块 | 参数 |
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
`};async function s(o){let s=o.req.param(`type`),c=await e(a+s+`/list.htm`),l=i(c),u=l(`.news.clearfix`).toArray().map(e=>{let t=l(e),i=t.find(`a`);try{let e=i.attr(`title`)||``,o=i.attr(`href`);o?o.startsWith(`http`)||(o=a.slice(0,-1)+o):o=``;let s=r(n(t.find(`.news_meta`).text()),8);return{title:e,link:o,pubDate:s}}catch{return{title:``,link:``,pubDate:Date.now()}}}).filter(e=>e.title&&e.link),d=await Promise.all(u.map(n=>t.tryGet(n.link,async()=>{let t={...n,description:``};if(new URL(n.link).hostname===`www.qztc.edu.cn`)if(new URL(n.link).pathname.startsWith(`/_upload`))t.description=n.link;else{let r=await e(n.link);t.description=i(r)(`.wp_articlecontent`).html()||``}else t.description=n.link;return t})));return{title:l(`head > title`).text()+` - 泉州师范学院-教务处`,link:a+s+`/list.htm`,item:d}}export{o as route};