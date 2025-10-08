import{__dirname as e,init_esm_shims as t}from"./esm-shims-BGJi2y--.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-rK3Yp7nj.js";import"./helpers-gUVC02jt.js";import{cache_default as n}from"./cache-Dfid4xgQ.js";import{art as r}from"./render-DftO2d-b.js";import{parseDate as i}from"./parse-date-DHsdom8D.js";import{got_default as a}from"./got-Bnno2HfO.js";import o from"node:path";import{load as s}from"cheerio";t();const c={path:`/:language?/:category?/:type?`,categories:[`multimedia`],example:`/7mmtv/zh/censored_list/all`,parameters:{language:"Language, see below, `en` as English by default",category:"Category, see below, `censored_list` as Censored by default",type:`Server, see below, all server by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},name:`Category`,maintainers:[`nczitzk`],handler:l,description:`**Language**

| English | 日本語 | 한국의 | 中文 |
| ------- | ------ | ------ | ---- |
| en      | ja     | ko     | zh   |

  **Category**

| Chinese subtitles AV | Censored       | Amateur          | Uncensored       | Asian self-timer | H comics     |
| -------------------- | -------------- | ---------------- | ---------------- | ---------------- | ------------ |
| chinese_list        | censored_list | amateurjav_list | uncensored_list | amateur_list    | hcomic_list |

| Chinese subtitles AV random | Censored random  | Amateur random     | Uncensored random  | Asian self-timer random | H comics random |
| --------------------------- | ---------------- | ------------------ | ------------------ | ----------------------- | --------------- |
| chinese_random             | censored_random | amateurjav_random | uncensored_random | amateur_random         | hcomic_random  |

  **Server**

| All Server | fembed(Full DL) | streamsb(Full DL) | doodstream | streamtape(Full DL) | avgle | embedgram | videovard(Full DL) |
| ---------- | --------------- | ----------------- | ---------- | ------------------- | ----- | --------- | ------------------ |
| all        | 21              | 30                | 28         | 29                  | 17    | 34        | 33                 |`};async function l(t){let c=`https://7mmtv.sx/${t.req.param(`language`)??`en`}/${t.req.param(`category`)??`censored_list`}/${t.req.param(`type`)??`all`}/1.html`,l=s((await a({method:`get`,url:c})).data),u=l(`.video`).toArray().map(e=>{e=l(e);let t=e.find(`.video-title a`);return{title:t.text(),author:e.find(`.video-channel`).text(),pubDate:i(e.find(`.small`).text()),link:t.attr(`href`),poster:e.find(`img`).attr(`data-src`),video:e.find(`video`).attr(`data-src`)}});return u=await Promise.all(u.map(t=>n.tryGet(t.link,async()=>{let n=s((await a({method:`get`,url:t.link})).data);return t.description=r(o.join(e,`templates/description-7c12cbba.art`),{cover:n(`.content_main_cover img`).attr(`src`),images:n(`.owl-lazy`).toArray().map(e=>n(e).attr(`data-src`)),description:n(`.video-introduction-images-text`).html(),poster:t.poster,video:t.video}),t.category=n(`.categories a`).toArray().map(e=>n(e).text()),delete t.poster,delete t.video,t}))),{title:l(`title`).text().replace(/ - Watch JAV Online/,``),link:c,item:u,description:l(`meta[name="description"]`).attr(`content`)}}export{c as route};