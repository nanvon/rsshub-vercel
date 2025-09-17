import"./esm-shims-DE2PJqdr.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CJF2SF6b.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import"./render-CSnicFA3.js";import"./parse-date-DHsdom8D.js";import"./got-Baw2Nbdf.js";import{invalid_parameter_default as t}from"./invalid-parameter-B0jPSaWz.js";import{getArchive as n,getProviderList as r,parseItem as i,parseList as a}from"./utils-0s5n9BuP.js";const o={path:`/news/provider/:region/:providerId`,categories:[`new-media`],example:`/yahoo/news/provider/tw/yahoo_tech_tw_942`,parameters:{region:`地區, hk 或 tw, 分别表示香港雅虎和台湾雅虎`,providerId:`新聞來源 ID, 可透過路由"新聞來源列表"獲得`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`hk.news.yahoo.com/`]},{source:[`tw.news.yahoo.com/`]}],name:`新聞來源`,maintainers:[`TonyRL`,`williamgateszhao`],handler:s,description:`
\`Region\`

| 香港 | 台灣 |
| ---- | ---- |
| hk   | tw   |

\`ProviderId\`

除了可以通过路由"新聞來源列表"获得外, 也可通过 hk.news.yahoo.com/archive 和 tw.news.yahoo.com/archive 选择"新闻来源"后通过页面 Url 来获得。

例如 hk.news.yahoo.com/yahoo_movies_hk_660--所有分類/archive, \`yahoo_movies_hk_660\` 就是 ProviderId 。
`};async function s(o){let{region:s,providerId:c}=o.req.param();if(![`hk`,`tw`].includes(s))throw new t(`Unknown region: ${s}`);let l=o.req.query(`limit`)?Number.parseInt(o.req.query(`limit`),10):20,u=(await r(s,e.tryGet)).find(e=>e.key===c),d=await n(s,l,null,c),f=a(s,d),p=await Promise.all(f.map(t=>i(t,e.tryGet)));return{title:`Yahoo 新聞 - ${u?.title??``}`,link:u?.link??`https://${s}.news.yahoo.com`,image:`https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png`,item:p}}export{o as route};