import"./esm-shims-Dqvxr0BZ.js";import"./config-BpwDbAkH.js";import"./logger-B3QfaIfn.js";import"./dist-BYIKqG8W.js";import"./helpers-DzX-lcQO.js";import"./cache-BWStd97H.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CSKgrsrO.js";import"./got-CtVGR9YK.js";import{utils_default as e}from"./utils-C54NiV0F.js";const t={path:`/:category?`,categories:[`reading`],example:`/sobooks`,parameters:{category:`分类, 见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`sobooks.net/:category`],target:`/:category`}],name:`首页`,maintainers:[`nczitzk`],handler:n,description:`| 分类     | 分类名           |
| -------- | ---------------- |
| 小说文学 | xiaoshuowenxue   |
| 历史传记 | lishizhuanji     |
| 人文社科 | renwensheke      |
| 励志成功 | lizhichenggong   |
| 经济管理 | jingjiguanli     |
| 学习教育 | xuexijiaoyu      |
| 生活时尚 | shenghuoshishang |
| 英文原版 | yingwenyuanban   |`};async function n(t){let n=t.req.param(`category`)??``;return await e(t,n)}export{t as route};