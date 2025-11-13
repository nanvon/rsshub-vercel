import"./esm-shims-L08rKynx.mjs";import"./config-Bs8nOQqi.mjs";import"./logger-BvLYiR5T.mjs";import"./ofetch-1TBKTiHL.mjs";import"./helpers-mo8InLYm.mjs";import{t as e}from"./cache-BDs-9Wd7.mjs";import"./render-CBhnapAf.mjs";import"./parse-date-bKmkZ9gg.mjs";import"./got-Be7Twwza.mjs";import{t}from"./invalid-parameter-Cn6c8J1f.mjs";import{a as n,i as r,o as i,t as a}from"./utils-CCLt_XeD.mjs";const o={path:`/news/provider/:region/:providerId`,categories:[`new-media`],example:`/yahoo/news/provider/tw/yahoo_tech_tw_942`,parameters:{region:`地區, hk 或 tw, 分别表示香港雅虎和台湾雅虎`,providerId:`新聞來源 ID, 可透過路由"新聞來源列表"獲得`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`hk.news.yahoo.com/`]},{source:[`tw.news.yahoo.com/`]}],name:`新聞來源`,maintainers:[`TonyRL`,`williamgateszhao`],handler:s,description:`
\`Region\`

| 香港 | 台灣 |
| ---- | ---- |
| hk   | tw   |

\`ProviderId\`

除了可以通过路由"新聞來源列表"获得外, 也可通过 hk.news.yahoo.com/archive 和 tw.news.yahoo.com/archive 选择"新闻来源"后通过页面 Url 来获得。

例如 hk.news.yahoo.com/yahoo_movies_hk_660--所有分類/archive, \`yahoo_movies_hk_660\` 就是 ProviderId 。
`};async function s(o){let{region:s,providerId:c}=o.req.param();if(![`hk`,`tw`].includes(s))throw new t(`Unknown region: ${s}`);let l=o.req.query(`limit`)?Number.parseInt(o.req.query(`limit`),10):20,u=(await r(s,e.tryGet)).find(e=>e.key===c),d=i(s,await a(s,l,null,c)),f=await Promise.all(d.map(t=>n(t,e.tryGet)));return{title:`Yahoo 新聞 - ${u?.title??``}`,link:u?.link??`https://${s}.news.yahoo.com`,image:`https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png`,item:f}}export{o as route};