import{n as e,t}from"./esm-shims-L08rKynx.mjs";import"./config-L8Ls2W7q.mjs";import"./logger-C50fTRi5.mjs";import"./ofetch-BMqiDsx_.mjs";import"./helpers-mo8InLYm.mjs";import{t as n}from"./render-CBhnapAf.mjs";import{t as r}from"./parse-date-bKmkZ9gg.mjs";import{t as i}from"./got-2jXbf1Li.mjs";import{t as a}from"./invalid-parameter-Cn6c8J1f.mjs";import{t as o}from"./valid-host-Xp56J0Ip.mjs";import s from"node:path";e();const c={path:[`/global/:lang/:type?`,`/ff14_global/:lang/:type?`],categories:[`game`],example:`/ff14/global/na/all`,parameters:{lang:`Region`,type:"Category, `all` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`FINAL FANTASY XIV (The Lodestone)`,maintainers:[`kmod-midori`],handler:l,description:`Region

| North Ameria | Europe | France | Germany | Japan |
| ------------ | ------ | ------ | ------- | ----- |
| na           | eu     | fr     | de      | jp    |

  Category

| all | topics | notices | maintenance | updates | status | developers |
| --- | ------ | ------- | ----------- | ------- | ------ | ---------- |`};async function l(e){let c=e.req.param(`lang`),l=e.req.param(`type`)??`all`;if(!o(c))throw new a(`Invalid lang`);let u=await i({method:`get`,url:`https://lodestonenews.com/news/${l}?locale=${c}`}),d;if(l===`all`){d=[];for(let e of Object.values(u.data))d=[...d,...e]}else d=u.data;return{title:`FFXIV Lodestone updates (${l})`,link:`https://${c}.finalfantasyxiv.com/lodestone/news/`,item:d.map(({id:e,url:i,title:a,time:o,description:c,image:l})=>({title:a,link:i,description:n(s.join(t,`templates/description-fc190f49.art`),{image:l,description:c}),pubDate:r(o),guid:e}))}}export{c as route};