import{__dirname as e,init_esm_shims as t}from"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{art as n}from"./render-DE4LRFBD.js";import{got_default as r}from"./got-BwctkUCD.js";import i from"node:path";t();const a=`https://switch.jumpvg.com/jump/discount/find4Discount/5/v2`,o={switch:1,steam:4,ps4:51,ps5:52},s={switch:{jx:16,all:17,sd:18},steam:{jx:26,all:27,dl:28,sd:29},ps4:{jx:19,all:20,sd:21,vip:22},ps5:{all:23,sd:24,vip:25}},c={jx:`精选`,sd:`史低`,all:`全部`,vip:`会员`,dl:`独立`},l=async e=>{let t=await r.get(`https://switch.jumpvg.com/jump/platform/order/v2?needCount=1&needFilter=1&version=3`),n=t.data.data,i=0;for(let t in n)if(n[t].platformAlias.toLocaleLowerCase()===e.toLocaleLowerCase()){i=n[t].gameNum;break}return i},u=async(e,t,n,i)=>{let o=await r.get(`${a}?countries=${e}&offset=${t}&platform=${n}&size=10&termsId=${i}&version=3`);return o.data.data},d=async(e,t,n,r)=>{let i=[];for(let a=0;a<=Math.round(r/10);a++){let r=await u(e,a*10,t,n);i=[...i,...r]}return i},f={path:`/discount/:platform/:filter?/:countries?`,categories:[`game`],example:`/jump/discount/ps5/all`,parameters:{platform:`平台:switch,ps4,ps5,xbox,steam,epic`,filter:`过滤参数,all-全部，jx-精选，sd-史低，dl-独立，vip-会员`,countries:`地区，具体支持较多，可自信查看地区简写`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`游戏折扣`,maintainers:[`zytomorrow`],handler:p,description:`| switch | ps4  | ps5  | xbox   | steam | epic   |
| ------ | ---- | ---- | ------ | ----- | ------ |
| 可用   | 可用 | 可用 | 不可用 | 可用  | 不可用 |

| filter | switch | ps4 | ps5 | steam |
| ------ | ------ | --- | --- | ----- |
| all    | ✔     | ✔  | ✔  | ✔    |
| jx     | ✔     | ✔  | ❌  | ✔    |
| sd     | ✔     | ✔  | ✔  | ✔    |
| dl     | ❌     | ✔  | ❌  | ✔    |
| vip    | ❌     | ❌  | ✔  | ❌    |

| 北美 | 欧洲（英语） | 法国 | 德国 | 日本 |
| ---- | ------------ | ---- | ---- | ---- |
| na   | eu           | fr   | de   | jp   |`};async function p(t){let r=t.req.param(`platform`),a=t.req.param(`filter`)||`all`,u=t.req.param(`countries`)||``,f=await l(r),p=await d(u,o[r.toLocaleLowerCase()],s[r.toLocaleLowerCase()][a],f);return{title:`jump 折扣-${r}-${c[a]}${u?`-${u}`:``}`,link:`https://jumpvg.com/`,description:`jump 发现游戏`,item:p.map(t=>({title:`${t.name}-${t.cutOff}%-￥${t.price}`,description:n(i.resolve(e,`templates/discount-be0245e0.art`),{item:t}),link:t.banner,guid:`${r}-${t.oldGameId}-${t.cutOff}`}))}}export{f as route};