import"./esm-shims-D4LgnpSl.mjs";import"./config-L8Ls2W7q.mjs";import"./logger-C50fTRi5.mjs";import"./ofetch-CvLG4YCQ.mjs";import"./helpers-mo8InLYm.mjs";import"./cache-ZTWfXd2T.mjs";import"./render-CBhnapAf.mjs";import"./parse-date-bKmkZ9gg.mjs";import"./got-AYh7EWi-.mjs";import{t as e}from"./types-BD1MU_-b.mjs";import{n as t,r as n,t as r}from"./utils-CV2uchoj.mjs";import i from"p-map";const a={"/":`News`,bpol:`Politics`,bbiz:`Business`,markets:`Markets`,technology:`Technology`,green:`Green`,wealth:`Wealth`,pursuits:`Pursuits`,bview:`Opinion`,equality:`Equality`,businessweek:`Businessweek`,citylab:`CityLab`},o={path:`/:site?`,categories:[`finance`],view:e.Articles,example:`/bloomberg/bbiz`,parameters:{site:{description:`Site ID, can be found below`,options:Object.keys(a).map(e=>({value:e,label:a[e]}))}},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Bloomberg Site`,maintainers:[`bigfei`],description:`
| Site ID      | Title        |
| ------------ | ------------ |
| /            | News         |
| bpol         | Politics     |
| bbiz         | Business     |
| markets      | Markets      |
| technology   | Technology   |
| green        | Green        |
| wealth       | Wealth       |
| pursuits     | Pursuits     |
| bview        | Opinion      |
| equality     | Equality     |
| businessweek | Businessweek |
| citylab      | CityLab      |
  `,handler:s};async function s(e){let o=e.req.param(`site`),s=o?`${n}/${o}/sitemap_news.xml`:`${n}/sitemap_news.xml`,c=await i(await t(s,e),e=>r(e),{concurrency:1});return{title:`Bloomberg - ${a[o??`/`]}`,link:s,item:c}}export{o as route};