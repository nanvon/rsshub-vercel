import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{load as r}from"cheerio";const i={path:`/:category?`,categories:[`new-media`],example:`/tangshufang`,parameters:{category:`分类，见下表，默认为首页`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`tangshufang.com/:category`,`tangshufang.com/`]}],name:`分类`,maintainers:[`nczitzk`],handler:a,description:`| 首页 | 老唐实盘 | 书房拾遗 | 理念 & 估值 | 经典陪读 | 财务套利 |
| ---- | -------- | -------- | ----------- | -------- | -------- |
|      | shipan   | wenda    | linian      | peidu    | taoli    |

| 企业分析 | 白酒企业 | 腾讯控股 | 分众传媒 | 海康威视 | 其他企业 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| qiye     | baijiu   | tengxun  | fenzhong | haikang  | qita     |

| 核心五篇 | 读者投稿 | 读书随笔 | 财报浅析 | 出行游记 | 巴芒连载 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| hexin    | tougao   | suibi    | caibao   | youji    | bamang   |`};async function a(i){let a=i.req.param(`category`)??``,o=i.req.query(`limit`)?Number.parseInt(i.req.query(`limit`)):10,s=`https://www.tangshufang.com${a?`/${a}`:``}`,c=await n({method:`get`,url:s}),l=r(c.data),u=l(`article`).slice(0,o).toArray().map(t=>{t=l(t);let n=t.find(`h2 a`);return{title:n.text(),link:n.attr(`href`),pubDate:e(t.find(`time`).text())}});return u=await Promise.all(u.map(e=>t.tryGet(e.link,async()=>{let t=await n({method:`get`,url:e.link}),i=r(t.data);return e.description=i(`.wxsyncmain`).html(),e.category=i(`a[rel="category tag"]`).toArray().map(e=>i(e).text()),e}))),{title:l(`title`).text(),link:s,item:u}}export{i as route};