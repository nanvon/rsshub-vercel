import"./esm-shims-DtWyl6zt.js";import"./config-BpwDbAkH.js";import"./logger-B3QfaIfn.js";import"./dist-CKN2M7CD.js";import"./helpers-DzX-lcQO.js";import{cache_default as e}from"./cache-BWStd97H.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CYKAhM9L.js";import{got_default as t}from"./got-pWlL3EH4.js";import"./timezone-BrNu6iXe.js";import{utils_default as n}from"./utils-D4UnL1R_.js";import{load as r}from"cheerio";const i={path:`/tag/:tag/:type/:option?`,categories:[`new-media`],example:`/pingwest/tag/ChinaJoy/1`,parameters:{tag:`话题名或话题id, 可从话题页url中得到`,type:`内容类型`,option:`参数, 默认无`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`话题动态`,maintainers:[`sanmmm`],handler:a,description:`内容类型

| 最新 | 热门 |
| ---- | ---- |
| 1    | 2    |

  参数

  -   \`fulltext\`，全文输出，例如：\`/pingwest/tag/ChinaJoy/1/fulltext\`

::: tip
  该路由一次最多显示 30 条文章
:::`};async function a(i){let{tag:a,type:o,option:s}=i.req.param(),c=s===`fulltext`,l=`https://www.pingwest.com`,u=`${l}/tag/${a}`,{tagId:d,tagName:f}=await e.tryGet(`pingwest:tag:${a}`,async()=>{let e=await t(u,{headers:{Referer:l}}),n=r(e.data),i=n(`.tag-detail`).attr(`data-id`),a=n(`.tag-detail .info .title`).text();return{tagId:i,tagName:a}}),p=`${l}/api/tag_article_list`,m=await t(p,{searchParams:{id:d,type:o-1},headers:{Referer:l}}),h=r(m.data.data.list),g=await n.articleListParser(h,c,e);return{title:`品玩 - ${f}`,description:`品玩 - ${f}`,link:u,item:g}}export{i as route};