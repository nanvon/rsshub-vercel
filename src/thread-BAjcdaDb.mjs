import"./ofetch-BRplXtiZ.mjs";import"./config-D7dgKYF5.mjs";import"./logger-CkUWGGaS.mjs";import{t as e}from"./cache-Bv3_kFbE.mjs";import"./helpers-Tm7Pw8Vq.mjs";import"./parse-date-_GmTZfjS.mjs";import"./render-CSqLtqb8.mjs";import"./got-BglkE51W.mjs";import{i as t,n,r,t as i}from"./utils-D36q0HvO.mjs";const a={path:`/thread/:type?/:order?`,example:`/1point3acres/thread/hot`,parameters:{type:`帖子分类, 见下表，默认为 hot，即热门帖子`,order:`排序方式，见下表，默认为空，即最新回复`},name:`帖子`,categories:[`bbs`],maintainers:[`EthanWng97`,`DIYgod`,`nczitzk`],handler:o,url:`instant.1point3acres.com/`,description:`分类

| 热门帖子 | 最新帖子 |
| -------- | -------- |
| hot      | new      |

  排序方式

| 最新回复 | 最新发布 |
| -------- | -------- |
|          | post     |`};async function o(a){let o=a.req.param(`type`)??`hot`,s=a.req.param(`order`)??``,c=`${n}/api/threads?type=${o}&includes=tags,forum_name,summary&ps=${a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`)):10}&pg=1&order=${s===``?``:`time_desc`}&is_groupid=1`;return{title:`一亩三分地 - ${t[o]}`,link:r,item:await i(e.tryGet,c,s)}}export{a as route};