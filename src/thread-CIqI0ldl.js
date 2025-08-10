import"./esm-shims-wKwH419_.js";import"./config-CCdhzIDL.js";import"./logger-tpjCqWRm.js";import"./dist-CTnfpkZH.js";import"./helpers-DzX-lcQO.js";import{cache_default as e}from"./cache-BqH0BkVy.js";import"./render-CxhTJIsl.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CeSje37P.js";import"./got-CgIPcr_1.js";import{ProcessThreads as t,apiRootUrl as n,rootUrl as r,types as i}from"./utils-B9KDBFth.js";const a={path:`/thread/:type?/:order?`,example:`/1point3acres/thread/hot`,parameters:{type:`帖子分类, 见下表，默认为 hot，即热门帖子`,order:`排序方式，见下表，默认为空，即最新回复`},name:`帖子`,categories:[`bbs`],maintainers:[`EthanWng97`,`DIYgod`,`nczitzk`],handler:o,url:`instant.1point3acres.com/`,description:`分类

| 热门帖子 | 最新帖子 |
| -------- | -------- |
| hot      | new      |

  排序方式

| 最新回复 | 最新发布 |
| -------- | -------- |
|          | post     |`};async function o(a){let o=a.req.param(`type`)??`hot`,s=a.req.param(`order`)??``,c=a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`)):10,l=`${n}/api/threads?type=${o}&includes=tags,forum_name,summary&ps=${c}&pg=1&order=${s===``?``:`time_desc`}&is_groupid=1`;return{title:`一亩三分地 - ${i[o]}`,link:r,item:await t(e.tryGet,l,s)}}export{a as route};