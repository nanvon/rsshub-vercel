import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import"./cache-CvppK6AM.js";import"./parse-date-DHsdom8D.js";import"./got-BwctkUCD.js";import"./timezone-CCdTtC9I.js";import"./wechat-mp-DRebaZz-.js";import{utils_default$13 as e}from"./utils-snXt9Lfa.js";const t={path:`/sxw/:type`,categories:[`university`],example:`/nua/sxw/230`,parameters:{type:`News Type`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`sxw.nua.edu.cn/:type/list.htm`]}],name:`Shuangxing Information`,maintainers:[`evnydd0sf`],handler:n,description:`| News Type | Parameters |
| --------- | ---------- |
| 校园电视  | 230        |
| 院部动态  | 232        |
| 动感校园  | 233        |
| 招就指南  | 234        |
| 南艺院报  | 236        |`};async function n(t){let n=t.req.param(`type`),r=`https://sxw.nua.edu.cn`,i=`${r}/${n}/list.htm`,a=`li.list_item`,o=`.Article_PublishDate`,s=`.Column_Anchor`,c=`.read`,l=await e.ProcessList(i,r,a,o,s),u=await e.ProcessFeed(l[0],c);return{title:`NUA-双馨网-`+l[1],link:i,description:`南京艺术学院 双馨网 `+l[1],item:u}}export{t as route};