import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{timezone as r}from"./timezone-BrNu6iXe.js";import{load as i}from"cheerio";const a={path:`/:category?`,categories:[`traditional-media`],example:`/yomiuri/news`,parameters:{category:"Category, `news` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.yomiuri.co.jp/:category?`]}],name:`News`,maintainers:[`Arracc`],handler:o,description:`Free articles only.

| Category       | Parameter |
| -------------- | --------- |
| 新着・速報     | news      |
| 社会           | national  |
| 政治           | politics  |
| 経済           | economy   |
| スポーツ       | sports    |
| 国際           | world     |
| 地域           | local     |
| 科学・ＩＴ     | science   |
| エンタメ・文化 | culture   |
| ライフ         | life      |
| 医療・健康     | medical   |
| 教育・就活     | kyoiku    |
| 選挙・世論調査 | election  |
| 囲碁・将棋     | igoshougi |
| 社説           | editorial |
| 皇室           | koushitsu |`};async function o(a){let{category:o=`news`}=a.req.param(),s=`https://www.yomiuri.co.jp/${o}`,c=await n(s),l=c.data,u=i(l),d;o===`news`?d=u(`.news-top-latest__list .news-top-latest__list-item__inner`).toArray().map(t=>{t=u(t);let n=t.find(`h3 a`);return{title:n.text(),link:n.attr(`href`),pubDate:r(e(t.find(`time`).attr(`datetime`)),9),locked:t.find(`.icon-locked`).length}}):(u(`.p-category-reading-recommend`).remove(),d=u(`.layout-contents__main .c-list-title`).toArray().map(t=>{t=u(t);let n=t.find(`h3 a`),i=t.parent();return{title:n.text(),link:n.attr(`href`),pubDate:r(e(i.find(`time`).attr(`datetime`)),9),locked:i.find(`.c-list-member-only`).length}}));let f=await Promise.all(d.map(r=>t.tryGet(r.link,async()=>{if(r.locked)return r;let t=await n(r.link),a=i(t.data),o=a(`.p-main-contents`);o.find(`[class^=ev-article], svg`).remove(),o.find(`img`).each((e,t)=>{t.attribs.src=t.attribs.src.split(`?`)[0]}),r.description=o.html(),r.pubDate=e(a(`meta[property="article:published_time"]`).attr(`content`)),r.updated=e(a(`meta[property="article:modified_time"]`).attr(`content`));let s=a(`.p-header-category-breadcrumbs li a`).last().text();return r.category=s,r.title=`[${s}] ${r.title}`,r})));return{title:u(`head title`).text(),link:s,image:`https://www.yomiuri.co.jp/apple-touch-icon.png`,item:f}}export{a as route};