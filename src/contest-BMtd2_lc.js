import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{load as r}from"cheerio";const i={path:`/contest/:language?/:rated?/:category?/:keyword?`,categories:[`programming`],example:`/atcoder/contest`,parameters:{language:"Language, `jp` as Japanese or `en` as English, English by default",rated:`Rated Range, see below, all by default`,category:`Category, see below, all by default`,keyword:`Keyword`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Contests Archive`,maintainers:[`nczitzk`],handler:a,description:`Rated Range

| ABC Class (Rated for ~1999) | ARC Class (Rated for ~2799) | AGC Class (Rated for ~9999) |
| ---------------------------- | ---------------------------- | ---------------------------- |
| 1                            | 2                            | 3                            |

  Category

| All | AtCoder Typical Contest | PAST Archive | Unofficial(unrated) |
| --- | ----------------------- | ------------ | ------------------- |
| 0   | 6                       | 50           | 101                 |

| JOI Archive | Sponsored Tournament | Sponsored Parallel(rated) |
| ----------- | -------------------- | ------------------------- |
| 200         | 1000                 | 1001                      |

| Sponsored Parallel(unrated) | Optimization Contest |
| --------------------------- | -------------------- |
| 1002                        | 1200                 |`};async function a(i){let a=[`action`,`upcoming`,`recent`],o=i.req.param(`language`)??`en`,s=i.req.param(`rated`)??`0`,c=i.req.param(`category`)??`0`,l=i.req.param(`keyword`)??``;s=s===`active`?`action`:s;let u=a.includes(s),d=`https://atcoder.jp`,f=`${d}/contests${u?`?lang=${o}`:`/archive?lang=${o}&ratedType=${s}&category=${c}${l?`&keyword=${l}`:``}`}`,p=await n({method:`get`,url:f}),m=r(p.data),h=m(u?`#contest-table-${s}`:`.row`).find(`tr`).slice(1,i.req.query(`limit`)?Number.parseInt(i.req.query(`limit`)):20).toArray().map(e=>(e=m(e).find(`td a`).eq(1),{title:e.text(),link:`${d}${e.attr(`href`)}?lang=${o}`}));return h=await Promise.all(h.map(i=>t.tryGet(i.link,async()=>{let t=await n({method:`get`,url:i.link}),a=r(t.data);return i.description=a(`.lang-${o}`).html(),i.pubDate=e(a(`.fixtime-full`).first().text()),i}))),{title:String(u?`${m(`#contest-table-${s} h3`).text()} - AtCoder`:m(`title`).text()),link:f,item:h,allowEmpty:!0}}export{i as route};