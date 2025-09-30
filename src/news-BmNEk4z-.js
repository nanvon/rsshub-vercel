import"./esm-shims-B6VgfGYP.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-D4MiciTC.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-07RFwdy7.js";import{load as r}from"cheerio";const i=`https://neunews.neu.edu.cn`,a={path:`/news/:type`,categories:[`university`],example:`/neu/news/ddyw`,parameters:{type:`种类名，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`neunews.neu.edu.cn/:type/list.htm`]}],name:`新闻网`,maintainers:[`JeasonLau`],handler:o,description:`| 种类名   | 参数 |
| -------- | ---- |
| 东大要闻 | ddyw |
| 媒体东大 | mtdd |
| 通知公告 | tzgg |
| 新闻纵横 | xwzh |
| 人才培养 | rcpy |
| 学术科研 | xsky |
| 英文新闻 | 217  |
| 招生就业 | zsjy |
| 考研出国 | kycg |
| 校园文学 | xywx |
| 校友风采 | xyfc |
| 时事热点 | ssrd |
| 教育前沿 | jyqy |
| 文化体育 | whty |
| 最新科技 | zxkj |`};async function o(a){let o=a.req.param(`type`),s=`${i}/${o}/list.htm`,c=(await n(s)).data,l=r(c),u=l(`.column-news-list > .news_list > .news`).toArray().map(e=>(e=l(e),{title:e.find(`a`).attr(`title`),link:new URL(e.find(`a`).attr(`href`),i).href,pubDate:t(e.find(`.news_meta`).text(),`YYYY-MM-DD`)})),d=await Promise.all(u.map(t=>e.tryGet(t.link,async()=>{let e=await n(t.link),i=r(e.data);return t.author=i(`.arti-metas`).text().split(`更新日期`)[0],t.description=i(`.article_content`).html(),t})));return{title:`东北大学新闻网-${l(`head title`).text()}`,link:s,item:d}}export{a as route};