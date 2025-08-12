import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{load as r}from"cheerio";const i={path:`/yjsy/zhaosheng/:id?`,categories:[`university`],example:`/sdust/yjsy/zhaosheng`,parameters:{id:`栏目 id，见下表，默认为通知公告`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`研究生招生网`,maintainers:[`nczitzk`],handler:a,description:`栏目

| 招生简章 | 专业目录 | 往届录取 | 管理规定 | 资料下载 |
| -------- | -------- | -------- | -------- | -------- |
| zsjz     | zyml     | wjlq     | glgd     | zlxz     |

| 通知公告 | 博士招生 | 硕士招生 | 推免生招生 | 招生宣传 |
| -------- | -------- | -------- | ---------- | -------- |
| tzgg     | bszs     | sszs     | tms        | zsxc     |`};async function a(i){let a=i.req.param(`id`)??`tzgg`,o=`https://yjsy.sdust.edu.cn/zhaosheng/${a}.htm`,s=await n({method:`get`,url:o}),c=r(s.data),l=c(`.pageUl ul li a`).toArray().map(t=>(t=c(t),{title:t.attr(`title`),link:new URL(t.attr(`href`),o).href,pubDate:e(t.find(`span`).text())}));return l=await Promise.all(l.map(e=>t.tryGet(e.link,async()=>{let t=await n({method:`get`,url:e.link}),i=r(t.data);return e.description=i(`.txt, .v_news_content`).html(),e}))),{title:c(`title`).text(),link:o,item:l}}export{i as route};