import"./esm-shims-BKVRry6h.mjs";import"./config-uQhBoCds.mjs";import"./logger-DQf7gybc.mjs";import"./ofetch-7N8fmlQ6.mjs";import"./helpers-C6Jountz.mjs";import"./cache-BXZZTZVV.mjs";import"./parse-date-C2HciIa2.mjs";import"./got-DcbI0XpN.mjs";import{t as e}from"./utils-dmpXwzjf.mjs";const t={path:`/:category?`,categories:[`reading`],example:`/sobooks`,parameters:{category:`分类, 见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`sobooks.net/:category`],target:`/:category`}],name:`首页`,maintainers:[`nczitzk`],handler:n,description:`| 分类     | 分类名           |
| -------- | ---------------- |
| 小说文学 | xiaoshuowenxue   |
| 历史传记 | lishizhuanji     |
| 人文社科 | renwensheke      |
| 励志成功 | lizhichenggong   |
| 经济管理 | jingjiguanli     |
| 学习教育 | xuexijiaoyu      |
| 生活时尚 | shenghuoshishang |
| 英文原版 | yingwenyuanban   |`};async function n(t){return await e(t,t.req.param(`category`)??``)}export{t as route};