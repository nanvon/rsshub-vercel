import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-BwctkUCD.js";import{load as r}from"cheerio";const i={path:`/:category?`,categories:[`new-media`],example:`/tangshufang`,parameters:{category:`分类，见下表，默认为首页`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`tangshufang.com/:category`,`tangshufang.com/`]}],name:`分类`,maintainers:[`nczitzk`],handler:a,description:`| 首页 | 老唐实盘 | 书房拾遗 | 理念 & 估值 | 经典陪读 | 财务套利 |
| ---- | -------- | -------- | ----------- | -------- | -------- |
|      | shipan   | wenda    | linian      | peidu    | taoli    |

| 企业分析 | 白酒企业 | 腾讯控股 | 分众传媒 | 海康威视 | 其他企业 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| qiye     | baijiu   | tengxun  | fenzhong | haikang  | qita     |

| 核心五篇 | 读者投稿 | 读书随笔 | 财报浅析 | 出行游记 | 巴芒连载 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| hexin    | tougao   | suibi    | caibao   | youji    | bamang   |`};async function a(i){let a=i.req.param(`category`)??``,o=i.req.query(`limit`)?Number.parseInt(i.req.query(`limit`)):10,s=`https://www.tangshufang.com`,c=`${s}${a?`/${a}`:``}`,l=await n({method:`get`,url:c}),u=r(l.data),d=u(`article`).slice(0,o).toArray().map(e=>{e=u(e);let n=e.find(`h2 a`);return{title:n.text(),link:n.attr(`href`),pubDate:t(e.find(`time`).text())}});return d=await Promise.all(d.map(t=>e.tryGet(t.link,async()=>{let e=await n({method:`get`,url:t.link}),i=r(e.data);return t.description=i(`.wxsyncmain`).html(),t.category=i(`a[rel="category tag"]`).toArray().map(e=>i(e).text()),t}))),{title:u(`title`).text(),link:c,item:d}}export{i as route};