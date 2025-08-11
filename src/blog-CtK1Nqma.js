import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{load as r}from"cheerio";const i={path:`/blog/:language?`,categories:[`programming`],example:`/nodejs/blog`,parameters:{language:`Language, see below, en by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`nodejs.org/:language/blog`,`nodejs.org/`]}],name:`News`,maintainers:[`nczitzk`],handler:a,description:`Official RSS Source: https://nodejs.org/en/feed/blog.xml

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
| zh-cn    | zh-tw    |`};async function a(i){let a=i.req.param(`language`)??`en`,o=`https://nodejs.org`,s=`${o}/${a}/blog`,c=await n({method:`get`,url:s}),l=r(c.data),u=l(`article`).toArray().map(t=>{let n=r(t),i=n(`footer p`).text(),a=e(n(`footer time`).attr(`datetime`)),s=n(`a[aria-label]`).prop(`aria-label`),c=n(`a[aria-label]`).attr(`href`);return{title:s,link:`${o}${c}`,author:i,pubDate:a}});return u=await Promise.all(u.map(e=>t.tryGet(e.link,async()=>{let t=await n({method:`get`,url:e.link}),i=r(t.data);return e.description=i(`main`).html(),e}))),{title:`News - Node.js`,link:s,item:u}}export{i as route};