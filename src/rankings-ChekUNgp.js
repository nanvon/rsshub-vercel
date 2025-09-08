import"./esm-shims-Dqvxr0BZ.js";import"./config-1ATZGjxb.js";import"./logger-B19BYg4C.js";import"./ofetch-B4O0sZDE.js";import"./helpers-LVq640iW.js";import"./cache-CjzVN0X7.js";import"./parse-date-DHsdom8D.js";import"./got-CW2W8CRN.js";import"./config-not-found-mNOcOzCd.js";import{utils_default as e}from"./utils-Br8OWpak.js";const t={path:`/rankings/:category?/:time?`,categories:[`multimedia`],example:`/javdb/rankings`,parameters:{category:"分类，见下表，默认为 `有碼`",time:"时间，见下表，默认为 `日榜`"},features:{requireConfig:[{name:`JAVDB_SESSION`,description:"JavDB登陆后的session值，可在控制台的cookie下查找 `_jdb_session` 的值，即可获取",optional:!0}],requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`javdb.com/`],target:``}],name:`排行榜`,maintainers:[`nczitzk`],handler:n,url:`javdb.com/`,description:`分类

| 有碼     | 無碼       | 歐美    |
| -------- | ---------- | ------- |
| censored | uncensored | western |

  时间

| 日榜  | 週榜   | 月榜    |
| ----- | ------ | ------- |
| daily | weekly | monthly |`};async function n(t){let n=t.req.param(`category`)??`censored`,r=t.req.param(`time`)??`daily`,i=`/rankings/movies?p=${r}&t=${n}`;return await e.ProcessItems(t,i,`JavDB`)}export{t as route};