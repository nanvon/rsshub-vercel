import"./esm-shims-mGm6WwCc.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-BASlBuka.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import{t}from"./parse-date-CHEO0z5G.js";import{t as n}from"./got-CgQXMNWI.js";import{t as r}from"./timezone-BPfwRbwD.js";import{load as i}from"cheerio";const a={path:`/2yuan/news/:id?`,categories:[`university`],example:`/xjtu/2yuan/news`,parameters:{id:`编号，见下表，默认为通知公告`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`第二附属医院新闻`,maintainers:[`nczitzk`],handler:o,description:`| 分类     | 编号 |
| -------- | ---- |
| 通知公告 | 110  |
| 综合新闻 | 6    |
| 科室动态 | 8    |
| 教学动态 | 45   |
| 科研动态 | 51   |
| 护理动态 | 57   |
| 党群活动 | 63   |
| 外事活动 | 13   |
| 媒体二院 | 14   |
| 理论政策 | 16   |`};async function o(a){let o=a.req.param(`id`)??`110`,s=`http://2yuan.xjtu.edu.cn`,c=`${s}/Html/News/Columns/${o}/Index.html`,l=i((await n({method:`get`,url:c})).data),u=l(`.column_list h2`).toArray().map(e=>(e=l(e),{title:e.find(`a`).attr(`title`),link:`${s}${e.find(`a`).attr(`href`)}`,pubDate:r(t(e.find(`.dy_date`).text()),8)}));return u=await Promise.all(u.map(a=>e.tryGet(a.link,async()=>{let e=i((await n({method:`get`,url:a.link})).data);return a.description=e(`#zoom`).html(),a.pubDate=r(t(e(`.sub_tit3 strong`).first().text().replace(/发布时间：/,``)),8),a}))),{title:l(`title`).text(),link:c,item:u}}export{a as route};