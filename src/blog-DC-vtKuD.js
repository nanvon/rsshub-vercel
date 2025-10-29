import"./esm-shims-BC3isTv8.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CfXAR0UO.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import{t}from"./parse-date-CHEO0z5G.js";import{t as n}from"./got-dCh-Ojgc.js";import{load as r}from"cheerio";const i={path:`/blog/:language?`,categories:[`programming`],example:`/nodejs/blog`,parameters:{language:`Language, see below, en by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`nodejs.org/:language/blog`,`nodejs.org/`]}],name:`News`,maintainers:[`nczitzk`],handler:a,description:`Official RSS Source: https://nodejs.org/en/feed/blog.xml

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
| zh-cn    | zh-tw    |`};async function a(i){let a=i.req.param(`language`)??`en`,o=`https://nodejs.org`,s=`${o}/${a}/blog`,c=r((await n({method:`get`,url:s})).data)(`article`).toArray().map(e=>{let n=r(e),i=n(`footer p`).text(),a=t(n(`footer time`).attr(`datetime`));return{title:n(`a[aria-label]`).prop(`aria-label`),link:`${o}${n(`a[aria-label]`).attr(`href`)}`,author:i,pubDate:a}});return c=await Promise.all(c.map(t=>e.tryGet(t.link,async()=>(t.description=r((await n({method:`get`,url:t.link})).data)(`main`).html(),t)))),{title:`News - Node.js`,link:s,item:c}}export{i as route};