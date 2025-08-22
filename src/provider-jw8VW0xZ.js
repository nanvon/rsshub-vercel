import"./esm-shims-DtWyl6zt.js";import"./config-CT-9jq-j.js";import"./logger-BsClR5PH.js";import"./dist-BrnquCU2.js";import"./helpers-DzX-lcQO.js";import{cache_default as e}from"./cache-DNP0KCHb.js";import"./render-sowsPyZZ.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-Of9UBhau.js";import"./got-Cw3q2eEq.js";import{InvalidParameterError as t}from"./invalid-parameter-BQKLs9qN.js";import{getArchive as n,getProviderList as r,parseItem as i,parseList as a}from"./utils-DCdx6Mmj.js";const o={path:`/news/provider/:region/:providerId`,categories:[`new-media`],example:`/yahoo/news/provider/tw/yahoo_tech_tw_942`,parameters:{region:`地區, hk 或 tw, 分别表示香港雅虎和台湾雅虎`,providerId:`新聞來源 ID, 可透過路由"新聞來源列表"獲得`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`hk.news.yahoo.com/`]},{source:[`tw.news.yahoo.com/`]}],name:`新聞來源`,maintainers:[`TonyRL`,`williamgateszhao`],handler:s,description:`
\`Region\`

| 香港 | 台灣 |
| ---- | ---- |
| hk   | tw   |

\`ProviderId\`

除了可以通过路由"新聞來源列表"获得外, 也可通过 hk.news.yahoo.com/archive 和 tw.news.yahoo.com/archive 选择"新闻来源"后通过页面 Url 来获得。

例如 hk.news.yahoo.com/yahoo_movies_hk_660--所有分類/archive, \`yahoo_movies_hk_660\` 就是 ProviderId 。
`};async function s(o){let{region:s,providerId:c}=o.req.param();if(![`hk`,`tw`].includes(s))throw new t(`Unknown region: ${s}`);let l=o.req.query(`limit`)?Number.parseInt(o.req.query(`limit`),10):20,u=await r(s,e.tryGet),d=u.find(e=>e.key===c),f=await n(s,l,null,c),p=a(s,f),m=await Promise.all(p.map(t=>i(t,e.tryGet)));return{title:`Yahoo 新聞 - ${d?.title??``}`,link:d?.link??`https://${s}.news.yahoo.com`,image:`https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png`,item:m}}export{o as route};