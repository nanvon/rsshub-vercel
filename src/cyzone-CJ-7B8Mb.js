import"./esm-shims-DtWyl6zt.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import"./dist-CKN2M7CD.js";import"./helpers-DzX-lcQO.js";import{cache_default as e}from"./cache-Sft5n2jg.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CWsaZ4vY.js";import"./got-RSSJ34bj.js";import{apiRootUrl as t,getInfo as n,processItems as r,rootUrl as i}from"./util-gsYnU_kX.js";const a={path:[`/channel/:id?`,`/:id?`],radar:[{source:[`cyzone.cn/channel/:id`,`cyzone.cn/`],target:`/:id`}],name:`Unknown`,maintainers:[`nczitzk`],handler:o,description:`| 最新 | 快鲤鱼 | 创投 | 科创板 | 汽车 |
| ---- | ------ | ---- | ------ | ---- |
| news | 5      | 14   | 13     | 8    |

| 海外 | 消费 | 科技 | 医疗 | 文娱 |
| ---- | ---- | ---- | ---- | ---- |
| 10   | 9    | 7    | 27   | 11   |

| 城市 | 政策 | 特写 | 干货 | 科技股 |
| ---- | ---- | ---- | ---- | ------ |
| 16   | 15   | 6    | 12   | 33     |`};async function o(a){let{id:o=`news`}=a.req.param(),s=a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`),10):5,c=new URL(`v2/content/channel/${o===`news`?`getArticle`:`detail`}`,t).href,l=new URL(`channel/${o}`,i).href,u=await r(c,s,e.tryGet,o===`news`?{}:{channel_id:o});return{item:u,...await n(l,e.tryGet)}}export{a as route};