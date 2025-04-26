import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-BwctkUCD.js";import{timezone as r}from"./timezone-CCdTtC9I.js";import{fetchArticle$1 as i}from"./wechat-mp-DRebaZz-.js";import{load as a}from"cheerio";const o={path:`/gs/:type/:num?`,categories:[`university`],example:`/sjtu/gs/enroll/59`,parameters:{type:`类别`,num:"细分类别, 仅对`type`为`enroll`或`exchange`有效"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`gs.sjtu.edu.cn/announcement/:type`],target:`/gs/:type`}],name:`研究生通知公告`,maintainers:[`dzx-dzx`],handler:s,description:`| 工作信息 | 招生信息 | 培养信息 | 学位学科 | 国际交流 | 创新工程 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| work     | enroll   | train    | degree   | exchange | xsjy     |

  当\`type\`为\`enroll\`, \`num\`可选字段:

| 58       | 59       | 60         | 61       | 62       |
| -------- | -------- | ---------- | -------- | -------- |
| 博士招生 | 硕士招生 | 港澳台招生 | 考点信息 | 院系动态 |

  当\`type\`为\`exchange\`, \`num\`可选字段:

| 67             | 68             | 69             | 70             | 71             |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| 国家公派研究生 | 国际化培养资助 | 校际交换与联培 | 交流与合作项目 | 项目招募与宣讲 |`};async function s(o){let s=o.req.param(`type`),c=o.req.param(`num`)??``,l=`https://www.gs.sjtu.edu.cn`,u=`${l}/announcement/${s}/${c}`,d=await n({method:`get`,url:u}),f=a(d.data),p=f(`a.announcement-item`).map((e,n)=>{n=f(n);let i=n.find(`.day`).text().trim().replace(`.`,`-`),a=n.find(`.month`).text().trim();return{title:n.find(`.title`).text().trim(),link:`${n.attr(`href`).startsWith(`http`)?``:l}${n.attr(`href`)}`,pubDate:r(t(`${a}-${i}`,`YYYY-MM-DD`),8)}}).get(),m=await Promise.all(p.map(t=>e.tryGet(t.link,async()=>{if(new URL(t.link).hostname===`mp.weixin.qq.com`)t.description=(await i(t.link)).description;else{let e=await n({method:`get`,url:t.link}),r=a(e.data);t.description=r(`.page-content`).html()}return t})));return{title:`${c===``?``:`${f(`.category-nav-block .active`).text().trim()} - `}${f(`div.inner-banner-text .title`).text().trim()} - ${f(`title`).text()}`,link:u,item:m}}export{o as route};