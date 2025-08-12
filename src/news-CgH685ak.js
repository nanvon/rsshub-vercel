import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{timezone as r}from"./timezone-BrNu6iXe.js";import{load as i}from"cheerio";const a={path:`/news/:category?`,categories:[`new-media`],example:`/qm120/news`,parameters:{category:`分类，见下表，默认为健康焦点`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`qm120.com/`]}],name:`新闻`,maintainers:[`nczitzk`],handler:o,url:`qm120.com/`,description:`| 健康焦点 | 行业动态 | 医学前沿 | 法规动态 |
| -------- | -------- | -------- | -------- |
| jdxw     | hydt     | yxqy     | fgdt     |

| 食品安全 | 医疗事故 | 医药会展 | 医药信息 |
| -------- | -------- | -------- | -------- |
| spaq     | ylsg     | yyhz     | yyxx     |

| 新闻专题 | 行业新闻 |
| -------- | -------- |
| zhuanti  | xyxw     |`};async function o(a){let o=a.req.param(`category`)??`jdxw`,s=`http://www.qm120.com/news/${o}`,c=await n({method:`get`,url:s}),l=i(c.data),u=l(`.lb2boxls ul li a`).toArray().map(e=>(e=l(e),{title:e.text(),link:e.attr(`href`)}));return u=await Promise.all(u.map(a=>t.tryGet(a.link,async()=>{let t=await n({method:`get`,url:a.link}),o=i(t.data);return a.description=o(`.neirong_body`).html(),a.pubDate=r(e(o(`.neirong_head p span`).eq(1).text()),8),a}))),{title:`${l(`.zt_liebiao_tit`).text()} - 全民健康网`,link:s,item:u}}export{a as route};