import"./esm-shims-wKwH419_.js";import"./config-CCdhzIDL.js";import"./logger-tpjCqWRm.js";import"./dist-CTnfpkZH.js";import"./helpers-DzX-lcQO.js";import{cache_default as e}from"./cache-BqH0BkVy.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CeSje37P.js";import"./got-CgIPcr_1.js";import{apiRootUrl as t,getInfo as n,processItems as r,rootUrl as i}from"./util-C4sJkZLM.js";const a={path:[`/channel/:id?`,`/:id?`],radar:[{source:[`cyzone.cn/channel/:id`,`cyzone.cn/`],target:`/:id`}],name:`Unknown`,maintainers:[`nczitzk`],handler:o,description:`| 最新 | 快鲤鱼 | 创投 | 科创板 | 汽车 |
| ---- | ------ | ---- | ------ | ---- |
| news | 5      | 14   | 13     | 8    |

| 海外 | 消费 | 科技 | 医疗 | 文娱 |
| ---- | ---- | ---- | ---- | ---- |
| 10   | 9    | 7    | 27   | 11   |

| 城市 | 政策 | 特写 | 干货 | 科技股 |
| ---- | ---- | ---- | ---- | ------ |
| 16   | 15   | 6    | 12   | 33     |`};async function o(a){let{id:o=`news`}=a.req.param(),s=a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`),10):5,c=new URL(`v2/content/channel/${o===`news`?`getArticle`:`detail`}`,t).href,l=new URL(`channel/${o}`,i).href,u=await r(c,s,e.tryGet,o===`news`?{}:{channel_id:o});return{item:u,...await n(l,e.tryGet)}}export{a as route};