import"./esm-shims-BFmOnnpb.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-am9EnuPq.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-CmdBCkM8.js";import{load as r}from"cheerio";const i={path:`/blog/:language?`,categories:[`programming`],example:`/nodejs/blog`,parameters:{language:`Language, see below, en by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`nodejs.org/:language/blog`,`nodejs.org/`]}],name:`News`,maintainers:[`nczitzk`],handler:a,description:`Official RSS Source: https://nodejs.org/en/feed/blog.xml

| العربية | Catalan | Deutsch | Español | زبان فارسی |
| ------- | ------- | ------- | ------- | ---------- |
| ar      | ca      | de      | es      | fa         |

| Français | Galego | Italiano | 日本語 | 한국어 |
| -------- | ------ | -------- | ------ | ------ |
| fr       | gl     | it       | ja     | ko     |

| Português do Brasil | limba română | Русский | Türkçe | Українська |
| ------------------- | ------------ | ------- | ------ | ---------- |
| pt-br               | ro           | ru      | tr     | uk         |

| 简体中文 | 繁體中文 |
| -------- | -------- |
| zh-cn    | zh-tw    |`};async function a(i){let a=i.req.param(`language`)??`en`,o=`https://nodejs.org`,s=`${o}/${a}/blog`,c=await n({method:`get`,url:s}),l=r(c.data)(`article`).toArray().map(e=>{let n=r(e),i=n(`footer p`).text(),a=t(n(`footer time`).attr(`datetime`)),s=n(`a[aria-label]`).prop(`aria-label`),c=n(`a[aria-label]`).attr(`href`);return{title:s,link:`${o}${c}`,author:i,pubDate:a}});return l=await Promise.all(l.map(t=>e.tryGet(t.link,async()=>{let e=await n({method:`get`,url:t.link});return t.description=r(e.data)(`main`).html(),t}))),{title:`News - Node.js`,link:s,item:l}}export{i as route};