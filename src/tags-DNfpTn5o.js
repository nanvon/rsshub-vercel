import"./esm-shims-BC3isTv8.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CfXAR0UO.js";import"./helpers-Cqaav28H.js";import"./cache-CpEhLexq.js";import"./parse-date-CHEO0z5G.js";import"./got-dCh-Ojgc.js";import"./config-not-found-CX6cWM57.js";import{t as e}from"./utils-D9hngUR7.js";const t={path:`/tags/:query?/:category?`,categories:[`multimedia`],example:`/javdb/tags/c2=5&c10=1`,parameters:{query:"筛选，默认为 `c10=1`",category:"分类，见下表，默认为 `有碼`"},features:{requireConfig:[{name:`JAVDB_SESSION`,description:"JavDB登陆后的session值，可在控制台的cookie下查找 `_jdb_session` 的值，即可获取",optional:!0}],requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},radar:[{source:[`javdb.com/`],target:``}],name:`分類`,maintainers:[`nczitzk`],handler:n,url:`javdb.com/`,description:`::: tip
  在 [分類](https://javdb.com/tags) 中选定分类后，URL 中 \`tags?\` 后的字段即为筛选参数。

  如 \`https://javdb.com/tags?c2=5&c10=1\` 中 \`c2=5&c10=1\` 为筛选参数。
:::

  分类

| 有碼     | 無碼       | 歐美    |
| -------- | ---------- | ------- |
| censored | uncensored | western |`};async function n(t){let n=t.req.param(`category`)??`censored`,r=t.req.param(`query`)??``,i=`/tags${n===`censored`?``:`/${n}`}?${r}`,a=`JavDB${r===``?``:` - ${r}`} `;return await e.ProcessItems(t,i,a)}export{t as route};