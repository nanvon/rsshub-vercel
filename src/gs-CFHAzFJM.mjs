import"./esm-shims-D5mxTuu_.mjs";import"./config-CDM38Tpk.mjs";import"./logger-B0B1yUZ6.mjs";import"./ofetch-FkpIOIxH.mjs";import"./helpers-CMl_ndRq.mjs";import{t as e}from"./cache-C6z2tE2n.mjs";import{t}from"./parse-date-Cv8vEJfE.mjs";import{t as n}from"./got-CxBlPaz_.mjs";import{t as r}from"./timezone-DuBj3K5r.mjs";import{t as i}from"./wechat-mp-C8OHLFw_.mjs";import{load as a}from"cheerio";const o={path:`/gs/:type/:num?`,categories:[`university`],example:`/sjtu/gs/enroll/59`,parameters:{type:`类别`,num:"细分类别, 仅对`type`为`enroll`或`exchange`有效"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`gs.sjtu.edu.cn/announcement/:type`],target:`/gs/:type`}],name:`研究生通知公告`,maintainers:[`dzx-dzx`],handler:s,description:`| 工作信息 | 招生信息 | 培养信息 | 学位学科 | 国际交流 | 创新工程 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| work     | enroll   | train    | degree   | exchange | xsjy     |

  当\`type\`为\`enroll\`, \`num\`可选字段:

| 58       | 59       | 60         | 61       | 62       |
| -------- | -------- | ---------- | -------- | -------- |
| 博士招生 | 硕士招生 | 港澳台招生 | 考点信息 | 院系动态 |

  当\`type\`为\`exchange\`, \`num\`可选字段:

| 67             | 68             | 69             | 70             | 71             |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| 国家公派研究生 | 国际化培养资助 | 校际交换与联培 | 交流与合作项目 | 项目招募与宣讲 |`};async function s(o){let s=o.req.param(`type`),c=o.req.param(`num`)??``,l=`https://www.gs.sjtu.edu.cn`,u=`${l}/announcement/${s}/${c}`,d=a((await n({method:`get`,url:u})).data),f=d(`a.announcement-item`).toArray().map(e=>{e=d(e);let n=e.find(`.day`).text().trim().replace(`.`,`-`),i=e.find(`.month`).text().trim();return{title:e.find(`.title`).text().trim(),link:`${e.attr(`href`).startsWith(`http`)?``:l}${e.attr(`href`)}`,pubDate:r(t(`${i}-${n}`,`YYYY-MM-DD`),8)}}),p=await Promise.all(f.map(t=>e.tryGet(t.link,async()=>(new URL(t.link).hostname===`mp.weixin.qq.com`?t.description=(await i(t.link)).description:t.description=a((await n({method:`get`,url:t.link})).data)(`.page-content`).html(),t))));return{title:`${c===``?``:`${d(`.category-nav-block .active`).text().trim()} - `}${d(`div.inner-banner-text .title`).text().trim()} - ${d(`title`).text()}`,link:u,item:p}}export{o as route};