import{__dirname as e,init_esm_shims as t}from"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as n}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as r}from"./cache-GwMhal7i.js";import{art as i}from"./render-DOz85fGU.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as a}from"./got-CB83B8oA.js";import o from"node:path";import{load as s}from"cheerio";t();const c={path:`/news/:category?`,categories:[`new-media`],example:`/kamen-rider-official/news`,parameters:{category:`Category, see below, すべて by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`最新情報`,maintainers:[`nczitzk`],handler:l,description:`| Category                               |
| -------------------------------------- |
| すべて                                 |
| テレビ                                 |
| 映画・V シネマ等                       |
| Blu-ray・DVD、配信等                   |
| 20 作記念グッズ・東映 EC 商品          |
| 石ノ森章太郎生誕 80 周年記念商品       |
| 玩具・カード                           |
| 食品・飲料・菓子                       |
| 子供生活雑貨                           |
| アパレル・大人向け雑貨                 |
| フィギュア・ホビー・一番くじ・プライズ |
| ゲーム・デジタル                       |
| 雑誌・書籍・漫画                       |
| 音楽                                   |
| 映像                                   |
| イベント                               |
| ホテル・レストラン等                   |
| キャンペーン・タイアップ等             |
| その他                                 |
| KAMEN RIDER STORE                      |
| THE 鎧武祭り                           |
| 鎧武外伝                               |
| 仮面ライダーリバイス                   |
| ファイナルステージ                     |
| THE50 周年展                           |
| 風都探偵                               |
| 仮面ライダーギーツ                     |
| 仮面ライダーアウトサイダーズ           |
| 仮面ライダーガッチャード               |
| 仮面ライダー BLACK SUN                 |`};async function l(t){let c=t.req.param(`category`),l=t.req.query(`limit`)?Number.parseInt(t.req.query(`limit`),10):50,u=`https://www.kamen-rider-official.com`,d=new URL(`api/v1/news_articles`,u).href,f=new URL(`news_articles/${c?`?category=${c}`:``}`,u).href,{data:p}=await a(f),m=p.match(/"buildId":"(.*?)"/)[1],h=new URL(`_next/data/${m}/news_articles.json`,u).href,{data:g}=await a(h),_=g.pageProps.categoryIds[c],{data:v}=await a(d,{searchParams:{category_id:_,limit:l,offset:0}}),y=v.news_articles.slice(0,l).map(t=>({title:t.list_title,link:new URL(t.path,u).href,description:i(o.join(e,`templates/description-cb541d55.art`),{image:t.list_image_path?{src:new URL(t.list_image_path,u).href,alt:t.list_title}:void 0}),author:t.author,category:[t.category_name,t.category_2_name].filter(Boolean),guid:`kamen-rider-official-${t.id}`,pubDate:n(t.release_date)}));y=await Promise.all(y.map(t=>r.tryGet(t.link,async()=>{let{data:n}=await a(t.link),r=s(n);return r(`a.c-button`).each(function(){r(this).parent().remove()}),r(`img`).each(function(){r(this).replaceWith(i(o.join(e,`templates/description-cb541d55.art`),{image:{src:r(this).prop(`src`)}}))}),t.title=r(`h1.p-post__title`).text()||t.title,t.description=r(`main.p-post__main`).html(),t.author=r(`div.p-post__responsibility p`).toArray().map(e=>r(e).text()).join(` / `),t.category=[...new Set([...t.category,...r(`ul.p-post__categories li a.p-post__category`).toArray().map(e=>r(e).text().trim())].filter(Boolean))],t})));let b=s(p),x=new URL(b(`link[rel="icon"]`).prop(`href`),u).href;return{item:y,title:`${b(`title`).text().split(/ー/)[0]}${c?` - ${c}`:``}`,link:f,description:b(`meta[property="og:description"]`).prop(`content`),language:b(`html`).prop(`lang`),image:b(`meta[property="og:image"]`).prop(`content`),icon:x,logo:x,subtitle:b(`meta[property="keywords"]`).prop(`content`),author:b(`meta[property="og:site_name"]`).prop(`content`),allowEmpty:!0}}export{c as route};