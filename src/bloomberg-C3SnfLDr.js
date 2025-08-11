import"./esm-shims-wKwH419_.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import"./dist-CTnfpkZH.js";import"./helpers-DzX-lcQO.js";import"./cache-Sft5n2jg.js";import"./render-CxhTJIsl.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CltKKWIZ.js";import"./got-CHeNfUPv.js";import{ViewType as e}from"./types-A5bA50Mg.js";import{parseArticle as t,parseNewsList as n,rootUrl as r}from"./utils-CO08iIuu.js";import i from"p-map";const a={"/":`News`,bpol:`Politics`,bbiz:`Business`,markets:`Markets`,technology:`Technology`,green:`Green`,wealth:`Wealth`,pursuits:`Pursuits`,bview:`Opinion`,equality:`Equality`,businessweek:`Businessweek`,citylab:`CityLab`},o={path:`/:site?`,categories:[`finance`],view:e.Articles,example:`/bloomberg/bbiz`,parameters:{site:{description:`Site ID, can be found below`,options:Object.keys(a).map(e=>({value:e,label:a[e]}))}},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Bloomberg Site`,maintainers:[`bigfei`],description:`
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