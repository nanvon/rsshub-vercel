import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{parseDate as e}from"./parse-date-DHsdom8D.js";import{got_default as t}from"./got-BwctkUCD.js";import{load as n}from"cheerio";const r=`https://www.hinatazaka46.com`,i={path:`/blog/:id?/:page?`,categories:[`new-media`],example:`/hinatazaka46/blog`,parameters:{id:"Member ID, see below, `all` by default",page:"Page, `0` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Hinatazaka46 Blog 日向坂 46 博客`,maintainers:[],handler:a,description:`Member ID

| Member ID | Name         |
| --------- | ------------ |
| 2000      | 四期生リレー |
| 36        | 渡辺 莉奈    |
| 35        | 山下 葉留花  |
| 34        | 宮地 すみれ  |
| 33        | 藤嶌 果歩    |
| 32        | 平岡 海月    |
| 31        | 平尾 帆夏    |
| 30        | 竹内 希来里  |
| 29        | 正源司 陽子  |
| 28        | 清水 理央    |
| 27        | 小西 夏菜実  |
| 26        | 岸 帆夏      |
| 25        | 石塚 瑶季    |
| 24        | 山口 陽世    |
| 23        | 森本 茉莉    |
| 22        | 髙橋 未来虹  |
| 21        | 上村 ひなの  |
| 18        | 松田 好花    |
| 17        | 濱岸 ひより  |
| 16        | 丹生 明里    |
| 15        | 富田 鈴花    |
| 14        | 小坂 菜緒    |
| 13        | 河田 陽菜    |
| 12        | 金村 美玖    |
| 11        | 東村 芽依    |
| 10        | 高本 彩花    |
| 9         | 高瀬 愛奈    |
| 8         | 佐々木 美玲  |
| 7         | 佐々木 久美  |
| 6         | 齊藤 京子    |
| 5         | 加藤 史帆    |
| 4         | 影山 優佳    |
| 2         | 潮 紗理菜    |`};async function a(i){let a=i.req.param(`id`)??`all`,o=i.req.param(`page`)??`0`,s=a===`all`?`?page=${o}`:`?page=${o}&ct=${a}`,c=`${r}/s/official/diary/member/list${s}`,l=await t({method:`get`,url:c}),u=n(l.data),d=u(`div.p-blog-group .p-blog-article`).toArray().map(t=>{let r=n(t);return{title:r(`.c-blog-article__title`).text(),link:r(`.c-button-blog-detail`).attr(`href`),pubDate:e(r(`.c-blog-article__date`).text()),author:r(`.c-blog-article__name`).text(),description:r(`.c-blog-article__text`).html()}});return{allowEmpty:!0,title:u(`title`).text(),link:c,item:d}}export{i as route};