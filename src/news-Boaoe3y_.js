import"./esm-shims-BFmOnnpb.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-am9EnuPq.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-CmdBCkM8.js";import{timezone as r}from"./timezone-CMz5pnRe.js";import{load as i}from"cheerio";const a={path:`/news/:category?`,categories:[`new-media`],example:`/qm120/news`,parameters:{category:`分类，见下表，默认为健康焦点`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`qm120.com/`]}],name:`新闻`,maintainers:[`nczitzk`],handler:o,url:`qm120.com/`,description:`| 健康焦点 | 行业动态 | 医学前沿 | 法规动态 |
| -------- | -------- | -------- | -------- |
| jdxw     | hydt     | yxqy     | fgdt     |

| 食品安全 | 医疗事故 | 医药会展 | 医药信息 |
| -------- | -------- | -------- | -------- |
| spaq     | ylsg     | yyhz     | yyxx     |

| 新闻专题 | 行业新闻 |
| -------- | -------- |
| zhuanti  | xyxw     |`};async function o(a){let o=`http://www.qm120.com/news/${a.req.param(`category`)??`jdxw`}`,s=await n({method:`get`,url:o}),c=i(s.data),l=c(`.lb2boxls ul li a`).toArray().map(e=>(e=c(e),{title:e.text(),link:e.attr(`href`)}));return l=await Promise.all(l.map(a=>e.tryGet(a.link,async()=>{let e=await n({method:`get`,url:a.link}),o=i(e.data);return a.description=o(`.neirong_body`).html(),a.pubDate=r(t(o(`.neirong_head p span`).eq(1).text()),8),a}))),{title:`${c(`.zt_liebiao_tit`).text()} - 全民健康网`,link:o,item:l}}export{a as route};