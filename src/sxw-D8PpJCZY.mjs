import"./esm-shims-L08rKynx.mjs";import"./config-Bs8nOQqi.mjs";import"./logger-BvLYiR5T.mjs";import"./ofetch-1TBKTiHL.mjs";import"./helpers-mo8InLYm.mjs";import"./cache-BDs-9Wd7.mjs";import"./parse-date-bKmkZ9gg.mjs";import"./got-Be7Twwza.mjs";import"./timezone-CE0MDOJ-.mjs";import"./wechat-mp-BmGiOFrX.mjs";import{t as e}from"./utils-CcE9giOz.mjs";const t={path:`/sxw/:type`,categories:[`university`],example:`/nua/sxw/230`,parameters:{type:`News Type`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`sxw.nua.edu.cn/:type/list.htm`]}],name:`Shuangxing Information`,maintainers:[`evnydd0sf`],handler:n,description:`| News Type | Parameters |
| --------- | ---------- |
| 校园电视  | 230        |
| 院部动态  | 232        |
| 动感校园  | 233        |
| 招就指南  | 234        |
| 南艺院报  | 236        |`};async function n(t){let n=t.req.param(`type`),r=`https://sxw.nua.edu.cn`,i=`${r}/${n}/list.htm`,a=await e.ProcessList(i,r,`li.list_item`,`.Article_PublishDate`,`.Column_Anchor`),o=await e.ProcessFeed(a[0],`.read`);return{title:`NUA-双馨网-`+a[1],link:i,description:`南京艺术学院 双馨网 `+a[1],item:o}}export{t as route};