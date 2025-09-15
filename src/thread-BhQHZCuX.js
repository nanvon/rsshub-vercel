import"./esm-shims-DE2PJqdr.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CJF2SF6b.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import"./render-CSnicFA3.js";import"./parse-date-DHsdom8D.js";import"./got-Baw2Nbdf.js";import{ProcessThreads as t,apiRootUrl as n,rootUrl as r,types as i}from"./utils-DzYe1Hoq.js";const a={path:`/thread/:type?/:order?`,example:`/1point3acres/thread/hot`,parameters:{type:`帖子分类, 见下表，默认为 hot，即热门帖子`,order:`排序方式，见下表，默认为空，即最新回复`},name:`帖子`,categories:[`bbs`],maintainers:[`EthanWng97`,`DIYgod`,`nczitzk`],handler:o,url:`instant.1point3acres.com/`,description:`分类

| 热门帖子 | 最新帖子 |
| -------- | -------- |
| hot      | new      |

  排序方式

| 最新回复 | 最新发布 |
| -------- | -------- |
|          | post     |`};async function o(a){let o=a.req.param(`type`)??`hot`,s=a.req.param(`order`)??``,c=a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`)):10,l=`${n}/api/threads?type=${o}&includes=tags,forum_name,summary&ps=${c}&pg=1&order=${s===``?``:`time_desc`}&is_groupid=1`;return{title:`一亩三分地 - ${i[o]}`,link:r,item:await t(e.tryGet,l,s)}}export{a as route};