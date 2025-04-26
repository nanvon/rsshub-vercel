import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CWQqZcqz.js";import{cache_default as t}from"./cache-CvppK6AM.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{timezone as r}from"./timezone-CCdTtC9I.js";import{load as i}from"cheerio";const a=`http://www.jwc.zjut.edu.cn/`,o=`www.jwc.zjut.edu.cn`,s={path:`/jwc/:type`,categories:[`university`],example:`/zjut/jwc/1839`,parameters:{type:`分类，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`浙江工业大学教务处`,maintainers:[`zhullyb`],url:`www.jwc.zjut.edu.cn`,handler:c,radar:[{source:[`www.jwc.zjut.edu.cn/:type/list.htm`],target:`/jwc/:type`}],description:`| 板块 | 参数 |
| ------- | ------- |
| 新闻动态 | 1838 |
| 课程思政 | 1842 |
| 校内动态 | 2613 |
| 学习思考 | 2614 |
| 成果展示 | 2615 |
| 媒体聚焦 | 2616 |
| 制度文件 | 2617 |
| 教学运行 | 1849 |
| 实践竞赛 | 1850 |
| 留学生Notice | 1851 |
| 项目申报 | 1852 |
| 学籍管理 | 1853 |
| 办事指南 | 1839 |`};async function c(s){let c=Number.parseInt(s.req.param(`type`)),l=await e(a+c+`/list.htm`),u=i(l),d=u(`.news.clearfix`).toArray().map(e=>{let t=u(e),i=t.find(`a`);try{let e=i.attr(`title`)||``,o=i.attr(`href`);o?o.startsWith(`http`)||(o=a.slice(0,-1)+o):o=``;let s=r(n(t.find(`.news_meta`).text()),8);return{title:e,link:o,pubDate:s}}catch{return{title:``,link:``,pubDate:Date.now()}}}).filter(e=>e.title&&e.link),f=await Promise.all(d.map(n=>t.tryGet(n.link,async()=>{let t={...n,description:``};if(o===new URL(n.link).hostname)if(new URL(n.link).pathname.startsWith(`/_upload`))t.description=n.link;else{let r=await e(n.link),a=i(r);t.description=a(`.wp_articlecontent`).html()||``}else t.description=n.link;return t})));return{title:u(`head > title`).text()+` - 浙江工业大学教务处`,link:a+c+`/list.htm`,item:f}}export{s as route};