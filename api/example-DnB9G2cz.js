import{__dirname as e,init_esm_shims as t}from"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{art as n}from"./render-DE4LRFBD.js";import{got_default as r}from"./got-BwctkUCD.js";import i from"node:path";import{load as a}from"cheerio";t();const o=`https://www.mindmeister.com`,s={path:`/:category?/:language?`,categories:[`study`],example:`/mindmeister/mind-map-examples`,parameters:{category:"Categories, see the table below, `mind-map-examples` by default",language:"Languages, see the table below, `en` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Public Maps`,maintainers:[`TonyRL`],handler:c,description:`| Categories    | parameter         |
| ------------- | ----------------- |
| Featured Map  | mind-map-examples |
| Business      | business          |
| Design        | design            |
| Education     | education         |
| Entertainment | entertainment     |
| Life          | life              |
| Marketing     | marketing         |
| Productivity  | productivity      |
| Summaries     | summaries         |
| Technology    | technology        |
| Other         | other             |

| Languages  | parameter |
| ---------- | --------- |
| English    | en        |
| Deutsch    | de        |
| Français   | fr        |
| Español    | es        |
| Português  | pt        |
| Nederlands | nl        |
| Dansk      | da        |
| Русский    | ru        |
| 日本語     | ja        |
| Italiano   | it        |
| 简体中文   | zh        |
| 한국어     | ko        |
| Other      | other     |`};async function c(t){let{category:s=`mind-map-examples`,language:c=`en`}=t.req.param(),l=`${o}${c===`en`||c===`other`?``:`/${c}`}/${s===`mind-map-examples`?s:`mind-maps/${s}?language=${c}`}`,u=await r(l),d=a(u.data),f=d(`#public-listing .map-tile-wrapper`).toArray().map(t=>{t=d(t);let r=new URL(t.find(`.map-wrapper`).attr(`style`).match(/url\('(.*)'\);/)[1]).href;return{title:t.find(`.title`).text(),description:n(i.join(e,`templates/image-e463f33f.art`),{src:r.split(`?`)[0],alt:t.find(`.title`).text().trim()}),link:t.find(`.title`).attr(`href`),author:t.find(`.author`).text().trim().replace(/^by/,``),category:t.find(`.fw-bold`).text()}});return{title:d(`head title`).text(),description:d(`head meta[name=description]`).text(),link:l,item:f,language:c}}export{s as route};