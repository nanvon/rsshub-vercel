import"./esm-shims-BKVRry6h.mjs";import"./ofetch-BRplXtiZ.mjs";import"./config-D7dgKYF5.mjs";import"./logger-CkUWGGaS.mjs";import{t as e}from"./cache-Bv3_kFbE.mjs";import"./helpers-Tm7Pw8Vq.mjs";import"./parse-date-_GmTZfjS.mjs";import"./got-BglkE51W.mjs";import{i as t,n,r,t as i}from"./util-6No2cKz-.mjs";const a={path:[`/channel/:id?`,`/:id?`],radar:[{source:[`cyzone.cn/channel/:id`,`cyzone.cn/`],target:`/:id`}],name:`Unknown`,maintainers:[`nczitzk`],handler:o,description:`| 最新 | 快鲤鱼 | 创投 | 科创板 | 汽车 |
| ---- | ------ | ---- | ------ | ---- |
| news | 5      | 14   | 13     | 8    |

| 海外 | 消费 | 科技 | 医疗 | 文娱 |
| ---- | ---- | ---- | ---- | ---- |
| 10   | 9    | 7    | 27   | 11   |

| 城市 | 政策 | 特写 | 干货 | 科技股 |
| ---- | ---- | ---- | ---- | ------ |
| 16   | 15   | 6    | 12   | 33     |`};async function o(a){let{id:o=`news`}=a.req.param(),s=a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`),10):5,c=new URL(`v2/content/channel/${o===`news`?`getArticle`:`detail`}`,i).href,l=new URL(`channel/${o}`,t).href;return{item:await r(c,s,e.tryGet,o===`news`?{}:{channel_id:o}),...await n(l,e.tryGet)}}export{a as route};