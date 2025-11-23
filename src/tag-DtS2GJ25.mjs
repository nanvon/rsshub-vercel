import"./esm-shims-D5mxTuu_.mjs";import"./config-CDM38Tpk.mjs";import"./logger-B0B1yUZ6.mjs";import"./ofetch-FkpIOIxH.mjs";import"./helpers-CMl_ndRq.mjs";import{t as e}from"./cache-C6z2tE2n.mjs";import"./parse-date-Cv8vEJfE.mjs";import{t}from"./got-CxBlPaz_.mjs";import"./timezone-DuBj3K5r.mjs";import{t as n}from"./utils-DIiYdlFb.mjs";import{load as r}from"cheerio";const i={path:`/tag/:tag/:type/:option?`,categories:[`new-media`],example:`/pingwest/tag/ChinaJoy/1`,parameters:{tag:`话题名或话题id, 可从话题页url中得到`,type:`内容类型`,option:`参数, 默认无`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`话题动态`,maintainers:[`sanmmm`],handler:a,description:`内容类型

| 最新 | 热门 |
| ---- | ---- |
| 1    | 2    |

  参数

  -   \`fulltext\`，全文输出，例如：\`/pingwest/tag/ChinaJoy/1/fulltext\`

::: tip
  该路由一次最多显示 30 条文章
:::`};async function a(i){let{tag:a,type:o,option:s}=i.req.param(),c=s===`fulltext`,l=`https://www.pingwest.com`,u=`${l}/tag/${a}`,{tagId:d,tagName:f}=await e.tryGet(`pingwest:tag:${a}`,async()=>{let e=r((await t(u,{headers:{Referer:l}})).data);return{tagId:e(`.tag-detail`).attr(`data-id`),tagName:e(`.tag-detail .info .title`).text()}}),p=r((await t(`${l}/api/tag_article_list`,{searchParams:{id:d,type:o-1},headers:{Referer:l}})).data.data.list),m=await n.articleListParser(p,c,e);return{title:`品玩 - ${f}`,description:`品玩 - ${f}`,link:u,item:m}}export{i as route};