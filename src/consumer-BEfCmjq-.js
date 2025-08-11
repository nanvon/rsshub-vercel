import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{load as r}from"cheerio";const i={path:`/:category?/:language?/:keyword?`,categories:[`new-media`],example:`/consumer`,parameters:{category:`分类，见下表，默认为測試及調查`,language:`语言，见下表，默认为繁体中文`,keyword:`关键字，默认为空`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`consumer.org.hk/`]}],name:`文章`,maintainers:[`nczitzk`],handler:a,url:`consumer.org.hk/`,description:`分类

| 测试及调查 | 生活资讯 | 投诉实录  | 议题评论 |
| ---------- | -------- | --------- | -------- |
| test       | life     | complaint | topic    |

  语言

| 简体中文 | 繁体中文 |
| -------- | -------- |
| sc       | tc       |`};async function a(i){let a=i.req.param(`category`)??`test`,o=i.req.param(`language`)??`tc`,s=i.req.param(`keyword`)??``,c=`https://www.consumer.org.hk`,l=`${c}/${o}/free-article/free-article-${a}?category=free-article-${a}&q=${s}`,u=await n({method:`get`,url:l}),d=r(u.data),f=d(`.half-img-blk__title, .img-plate-blk__title`).find(`a`).toArray().map(t=>(t=d(t),{title:t.text(),link:`${c}${t.attr(`href`)}`,pubDate:e(t.parent().prev().find(`li`).first().text(),`YYYY.MM`)}));return f=await Promise.all(f.map(e=>t.tryGet(e.link,async()=>{let t=await n({method:`get`,url:e.link}),i=r(t.data);return e.description=i(`.ckec`).html(),e}))),{title:d(`title`).text(),link:l,item:f}}export{i as route};