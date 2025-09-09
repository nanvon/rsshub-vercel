import"./esm-shims-Dqvxr0BZ.js";import"./config-BL2l-VlN.js";import"./logger-DWogN5HJ.js";import"./ofetch-e4r9n7lx.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-BjesfGXD.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-DF7DsGgk.js";import{load as r}from"cheerio";const i={path:`/yjsy/zhaosheng/:id?`,categories:[`university`],example:`/sdust/yjsy/zhaosheng`,parameters:{id:`栏目 id，见下表，默认为通知公告`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`研究生招生网`,maintainers:[`nczitzk`],handler:a,description:`栏目

| 招生简章 | 专业目录 | 往届录取 | 管理规定 | 资料下载 |
| -------- | -------- | -------- | -------- | -------- |
| zsjz     | zyml     | wjlq     | glgd     | zlxz     |

| 通知公告 | 博士招生 | 硕士招生 | 推免生招生 | 招生宣传 |
| -------- | -------- | -------- | ---------- | -------- |
| tzgg     | bszs     | sszs     | tms        | zsxc     |`};async function a(i){let a=`https://yjsy.sdust.edu.cn/zhaosheng/${i.req.param(`id`)??`tzgg`}.htm`,o=await n({method:`get`,url:a}),s=r(o.data),c=s(`.pageUl ul li a`).toArray().map(e=>(e=s(e),{title:e.attr(`title`),link:new URL(e.attr(`href`),a).href,pubDate:t(e.find(`span`).text())}));return c=await Promise.all(c.map(t=>e.tryGet(t.link,async()=>{let e=await n({method:`get`,url:t.link});return t.description=r(e.data)(`.txt, .v_news_content`).html(),t}))),{title:s(`title`).text(),link:a,item:c}}export{i as route};