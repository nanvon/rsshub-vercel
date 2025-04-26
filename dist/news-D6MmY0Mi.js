import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-BwctkUCD.js";import{timezone as r}from"./timezone-CCdTtC9I.js";import{load as i}from"cheerio";const a={path:`/news/:category?`,categories:[`new-media`],example:`/qm120/news`,parameters:{category:`分类，见下表，默认为健康焦点`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`qm120.com/`]}],name:`新闻`,maintainers:[`nczitzk`],handler:o,url:`qm120.com/`,description:`| 健康焦点 | 行业动态 | 医学前沿 | 法规动态 |
| -------- | -------- | -------- | -------- |
| jdxw     | hydt     | yxqy     | fgdt     |

| 食品安全 | 医疗事故 | 医药会展 | 医药信息 |
| -------- | -------- | -------- | -------- |
| spaq     | ylsg     | yyhz     | yyxx     |

| 新闻专题 | 行业新闻 |
| -------- | -------- |
| zhuanti  | xyxw     |`};async function o(a){let o=a.req.param(`category`)??`jdxw`,s=`http://www.qm120.com`,c=`${s}/news/${o}`,l=await n({method:`get`,url:c}),u=i(l.data),d=u(`.lb2boxls ul li a`).toArray().map(e=>(e=u(e),{title:e.text(),link:e.attr(`href`)}));return d=await Promise.all(d.map(a=>e.tryGet(a.link,async()=>{let e=await n({method:`get`,url:a.link}),o=i(e.data);return a.description=o(`.neirong_body`).html(),a.pubDate=r(t(o(`.neirong_head p span`).eq(1).text()),8),a}))),{title:`${u(`.zt_liebiao_tit`).text()} - 全民健康网`,link:c,item:d}}export{a as route};