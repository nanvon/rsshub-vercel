import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CDAeBYLA.js";import"./helpers-RrXnNmv1.js";import"./cache-7MGQxbL-.js";import"./render-DlHIMz-Z.js";import"./parse-date-B2cCVoGk.js";import"./got-Cw4D6IS5.js";import{ViewType as e}from"./types-DygLf1a3.js";import{parseArticle$1 as t,parseNewsList as n,rootUrl$3 as r}from"./utils-C4SzoL4a.js";import i from"p-map";const a={"/":`News`,bpol:`Politics`,bbiz:`Business`,markets:`Markets`,technology:`Technology`,green:`Green`,wealth:`Wealth`,pursuits:`Pursuits`,bview:`Opinion`,equality:`Equality`,businessweek:`Businessweek`,citylab:`CityLab`},o={path:`/:site?`,categories:[`finance`,`popular`],view:e.Articles,example:`/bloomberg/bbiz`,parameters:{site:{description:`Site ID, can be found below`,options:Object.keys(a).map(e=>({value:e,label:a[e]}))}},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Bloomberg Site`,maintainers:[`bigfei`],description:`
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
  `,handler:s};async function s(e){let o=e.req.param(`site`),s=o?`${r}/${o}/sitemap_news.xml`:`${r}/sitemap_news.xml`,c=await n(s,e),l=await i(c,e=>t(e),{concurrency:1});return{title:`Bloomberg - ${a[o??`/`]}`,link:s,item:l}}export{o as route};