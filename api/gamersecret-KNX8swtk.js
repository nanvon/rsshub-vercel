import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-BwctkUCD.js";import{timezone as r}from"./timezone-CCdTtC9I.js";import{load as i}from"cheerio";const a={path:`/:type?/:category?`,categories:[`game`],example:`/gamersecret`,parameters:{type:`Type, see below, Latest News by default`,category:`Category, see below`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`gamersecret.com/:type`,`gamersecret.com/:type/:category`,`gamersecret.com/`]}],name:`Category`,maintainers:[`nczitzk`],handler:o,description:`| Latest News | PC | Playstation | Nintendo | Xbox | Moblie |
| ----------- | -- | ----------- | -------- | ---- | ------ |
| latest-news | pc | playstation | nintendo | xbox | moblie |

  Or

| GENERAL          | GENERAL EN         | MOBILE          | MOBILE EN         |
| ---------------- | ------------------ | --------------- | ----------------- |
| category/general | category/generalen | category/mobile | category/mobileen |

| NINTENDO          | NINTENDO EN         | PC          | PC EN         |
| ----------------- | ------------------- | ----------- | ------------- |
| category/nintendo | category/nintendoen | category/pc | category/pcen |

| PLAYSTATION          | PLAYSTATION EN         | REVIEWS          |
| -------------------- | ---------------------- | ---------------- |
| category/playstation | category/playstationen | category/reviews |

| XBOX          | XBOX EN         |
| ------------- | --------------- |
| category/xbox | category/xboxen |`};async function o(a){let o=a.req.param(`type`)??`latest-news`,s=a.req.param(`category`)??``,c=`https://www.gamersecret.com`,l=`${c}/${o}${s?`/${s}`:``}`,u=await n({method:`get`,url:l}),d=i(u.data),f=d(`.jeg_post_title a`).slice(0,a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`)):20).toArray().map(e=>(e=d(e),{title:e.text(),link:e.attr(`href`)}));return f=await Promise.all(f.map(a=>e.tryGet(a.link,async()=>{let e=await n({method:`get`,url:a.link}),o=i(e.data);return o(`img`).each(function(){o(this).attr(`src`,o(this).attr(`data-src`))}),a.author=o(`.jeg_meta_author`).text().replace(/by/,``),a.pubDate=r(t(e.data.match(/datePublished":"(.*)","dateModified/)[1]),8),a.description=o(`.thumbnail-container`).html()+o(`.elementor-text-editor, .content-inner`).html(),a}))),{title:d(`title`).text(),link:l,item:f}}export{a as route};