import"./esm-shims-BC3isTv8.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CfXAR0UO.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import{t}from"./got-dCh-Ojgc.js";import{c as n,d as r,t as i,u as a}from"./util-DyaKuK8Y.js";const o={path:[`/article`,`/channel/:id?`],categories:[`new-media`],example:`/huxiu/article`,parameters:{},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!0,supportPodcast:!0,supportScihub:!1},radar:[{source:[`huxiu.com/article`]}],name:`资讯`,maintainers:[`HenryQW`,`nczitzk`],handler:s,description:`| 视频 | 车与出行 | 年轻一代 | 十亿消费者 | 前沿科技 |
| ---- | -------- | -------- | ---------- | -------- |
| 10   | 21       | 106      | 103        | 105      |

| 财经 | 娱乐淘金 | 医疗健康 | 文化教育 | 出海 |
| ---- | -------- | -------- | -------- | ---- |
| 115  | 22       | 111      | 113      | 114  |

| 金融地产 | 企业服务 | 创业维艰 | 社交通讯 | 全球热点 | 生活腔调 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| 102      | 110      | 2        | 112      | 107      | 4        |`,url:`huxiu.com/article`};async function s(o){let s=o.req.param(`id`),c=o.req.query(`limit`)?Number.parseInt(o.req.query(`limit`),10):20,l=new URL(`web/${s?`channel`:`article`}/articleList`,i).href,u=new URL(s?`channel/${s}.html`:`article`,r).href,{data:d}=await t.post(l,{form:{platform:`www`,channel_id:s,pagesize:c}});return{item:await a(d.data?.dataList??d.data.datalist,c,e.tryGet),...await n(u)}}export{o as route};