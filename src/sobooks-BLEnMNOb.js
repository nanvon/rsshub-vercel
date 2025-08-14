import"./esm-shims-DtWyl6zt.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import"./dist-CKN2M7CD.js";import"./helpers-DzX-lcQO.js";import"./cache-Sft5n2jg.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CWsaZ4vY.js";import"./got-RSSJ34bj.js";import{utils_default as e}from"./utils-psA6lDnp.js";const t={path:`/:category?`,categories:[`reading`],example:`/sobooks`,parameters:{category:`分类, 见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`sobooks.net/:category`],target:`/:category`}],name:`首页`,maintainers:[`nczitzk`],handler:n,description:`| 分类     | 分类名           |
| -------- | ---------------- |
| 小说文学 | xiaoshuowenxue   |
| 历史传记 | lishizhuanji     |
| 人文社科 | renwensheke      |
| 励志成功 | lizhichenggong   |
| 经济管理 | jingjiguanli     |
| 学习教育 | xuexijiaoyu      |
| 生活时尚 | shenghuoshishang |
| 英文原版 | yingwenyuanban   |`};async function n(t){let n=t.req.param(`category`)??``;return await e(t,n)}export{t as route};