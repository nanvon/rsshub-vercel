import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import"./got-BlqYKpVp.js";import{i as t,n,r,t as i}from"./utils-C2xAeys4.js";const a={path:`/category/:id?/:type?/:order?`,categories:[`bbs`],example:`/1point3acres/category/h1b`,parameters:{id:`标签 id，默认为全部`,type:`帖子分类, 见下表，默认为 hot，即热门帖子`,order:`排序方式，见下表，默认为空，即最新回复`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`instant.1point3acres.com/section/:id`,`instant.1point3acres.com/`]}],name:`标签`,maintainers:[`nczitzk`],handler:o,description:`::: tip
  更多标签可以在 [标签列表](https://instant.1point3acres.com/tags) 中找到。
:::

  分类

| 热门帖子 | 最新帖子 |
| -------- | -------- |
| hot      | new      |

  排序方式

| 最新回复 | 最新发布 |
| -------- | -------- |
|          | post     |`};async function o(a){let o=a.req.param(`id`)??``,s=a.req.param(`type`)??`hot`,c=a.req.param(`order`)??``,l=a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`)):10,u=`${r}${o?`/category/${o}`:``}`,d=`${n}/api${o?`/tags/${o}/`:``}threads?type=${s}&includes=tags,forum_name,summary&ps=${l}&pg=1&order=${c===``?``:`time_desc`}&is_groupid=1`;return{title:`一亩三分地 - ${o}${t[s]}`,link:u,item:await i(e.tryGet,d,c)}}export{a as route};