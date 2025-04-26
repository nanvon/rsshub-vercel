import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import"./render-DE4LRFBD.js";import"./parse-date-DHsdom8D.js";import{got_default as t}from"./got-BwctkUCD.js";import{apiArticleRootUrl as n,fetchData$1 as r,processItems$3 as i,rootUrl$8 as a}from"./util-Jve92_Ci.js";const o={path:[`/article`,`/channel/:id?`],categories:[`new-media`,`popular`],example:`/huxiu/article`,parameters:{},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!0,supportPodcast:!0,supportScihub:!1},radar:[{source:[`huxiu.com/article`]}],name:`资讯`,maintainers:[`HenryQW`,`nczitzk`],handler:s,description:`| 视频 | 车与出行 | 年轻一代 | 十亿消费者 | 前沿科技 |
| ---- | -------- | -------- | ---------- | -------- |
| 10   | 21       | 106      | 103        | 105      |

| 财经 | 娱乐淘金 | 医疗健康 | 文化教育 | 出海 |
| ---- | -------- | -------- | -------- | ---- |
| 115  | 22       | 111      | 113      | 114  |

| 金融地产 | 企业服务 | 创业维艰 | 社交通讯 | 全球热点 | 生活腔调 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| 102      | 110      | 2        | 112      | 107      | 4        |`,url:`huxiu.com/article`};async function s(o){let s=o.req.param(`id`),c=o.req.query(`limit`)?Number.parseInt(o.req.query(`limit`),10):20,l=new URL(`web/${s?`channel`:`article`}/articleList`,n).href,u=new URL(s?`channel/${s}.html`:`article`,a).href,{data:d}=await t.post(l,{form:{platform:`www`,channel_id:s,pagesize:c}}),f=await i(d.data?.dataList??d.data.datalist,c,e.tryGet),p=await r(u);return{item:f,...p}}export{o as route};