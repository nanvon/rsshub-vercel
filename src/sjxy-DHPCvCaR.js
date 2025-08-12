import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import{cache_default as t}from"./cache-GwMhal7i.js";import{ofetch_default as n}from"./ofetch-ZUQ1sEMc.js";import{timezone as r}from"./timezone-BrNu6iXe.js";import{load as i}from"cheerio";const a=`https://www.qztc.edu.cn/sjxy/`,o={path:`/sjxy/:type`,categories:[`university`],example:`/qztc/sjxy/1939`,parameters:{type:`分类，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`数学与计算机科学学院 软件学院`,maintainers:[`iQNRen`],url:`www.qztc.edu.cn`,handler:s,radar:[{source:[`www.qztc.edu.cn/sjxy/:type/list.htm`],target:`/sjxy/:type`}],description:`| 板块 | 参数 |
| ------- | ------- |
| 学院概况 | 1938 |
| 学院动态 | 1939 |
| 学科建设 | 1940 |
| 教学教务 | 1941 |
| 人才培养 | 1942 |
| 科研工作 | 1943 |
| 党群工作 | 1944 |
| 团学工作 | 1945 |
| 资料下载 | 1947 |
| 采购信息 | 1948 |
| 信息公开 | xxgk |
`};async function s(o){let s=o.req.param(`type`),c=await n(a+s+`/list.htm`),l=i(c),u=l(`.news.clearfix`).toArray().map(t=>{let n=l(t),i=n.find(`a`);try{let t=i.attr(`title`)||``,o=i.attr(`href`);o?o.startsWith(`http`)||(o=a.slice(0,-1)+o):o=``;let s=r(e(n.find(`.news_meta`).text()),8);return{title:t,link:o,pubDate:s}}catch{return{title:``,link:``,pubDate:Date.now()}}}).filter(e=>e.title&&e.link),d=await Promise.all(u.map(e=>t.tryGet(e.link,async()=>{let t={...e,description:``};if(new URL(e.link).hostname===`www.qztc.edu.cn`)if(new URL(e.link).pathname.startsWith(`/_upload`))t.description=e.link;else{let r=await n(e.link),a=i(r);t.description=a(`.wp_articlecontent`).html()||``}else t.description=e.link;return t})));return{title:l(`head > title`).text()+` - 泉州师范学院-数学与计算机科学学院 软件学院`,link:a+s+`/list.htm`,item:d}}export{o as route};