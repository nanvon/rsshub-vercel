import{__dirname as e,init_esm_shims as t}from"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import{logger_default as n}from"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as r}from"./cache-CvppK6AM.js";import{art as i}from"./render-DE4LRFBD.js";import{parseDate as a}from"./parse-date-DHsdom8D.js";import{got_default as o}from"./got-BwctkUCD.js";import s from"node:path";const c=`https://bbs-api-os.hoyolab.com`,l=`/community/post/wapi/getPostFull`,u=`/community/post/wapi/getNewsList`,d=`https://www.hoyolab.com`,f=`<img src="https://hoyolab-upload-private.hoyolab.com/upload`,p=`<img src="https://upload-os-bbs.hoyolab.com/upload`,m={2:27,6:39,8:47,1:31,4:35,5:43},h=e=>e(`hoyolab:gameNameList`,async()=>{let{data:e}=await o(`https://bbs-api-os-static.hoyolab.com/community/apihub/static/api/getAppConfig`);return JSON.parse(e.data.config.hoyolab_game_info_list)}),g=async(e,t,n)=>{let r=await h(n),i=r.find(t=>t.game_id===Number.parseInt(e,10));return{name:i?.game_name_list.find(e=>e.locale===t)?.raw_name??i?.game_name_list.find(e=>e.locale===`en-us`)?.raw_name,icon:i?.game_icon}},_=(e,t)=>t(`hoyolab:type:${e}`,async()=>{let{data:t}=await o(`https://webstatic.hoyoverse.com/admin/mi18n/bbs_oversea/m07281525151831/m07281525151831-${e}.json`);return{1:{title:t.official_notify,sort:`notices`},2:{title:t.official_activity,sort:`events`},3:{title:t.official_info,sort:`news`}}});t();const v=async({type:e,gids:t,size:n,language:r})=>{let i=new URLSearchParams({type:e,gids:t,page_size:n}).toString(),a=`${c}${u}?${i}`,s=await o({method:`get`,url:a,headers:{"X-Rpc-Language":r}}),l=s?.data?.data?.list||[];return l},y=e=>e.replaceAll(f,p),b=(t,{language:n})=>Promise.all(t.map(async t=>{let u=t.post,f=u.post_id,p=new URLSearchParams({post_id:f,language:n}).toString(),m=`${c}${l}?${p}`;return await r.tryGet(m,async()=>{let r=await o({method:`get`,url:m,headers:{"X-Rpc-Language":n}}),c=r?.data?.data?.post?.user?.nickname||``,l=r?.data?.data?.post?.post?.content||``;(l===n||!l)&&(l=u.content);let p=i(s.join(e,`templates/post-b135d099.art`),{hasCover:u.has_cover,coverList:t.cover_list,content:y(l)});return{title:u.subject,link:`${d}/article/${f}`,description:p,pubDate:a(u.created_at*1e3),author:c}})})),x={path:`/news/:language/:gids/:type`,categories:[`game`],example:`/hoyolab/news/zh-cn/2/2`,parameters:{language:`Language`,gids:`Game ID`,type:`Announcement type`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Official Announcement`,maintainers:[`ZenoTian`],handler:S,description:`| Language         | Code  |
| ---------------- | ----- |
| 简体中文         | zh-cn |
| 繁體中文         | zh-tw |
| 日本語           | ja-jp |
| 한국어           | ko-kr |
| English (US)     | en-us |
| Español (EU)     | es-es |
| Français         | fr-fr |
| Deutsch          | de-de |
| Русский          | ru-ru |
| Português        | pt-pt |
| Español (Latino) | es-mx |
| Indonesia        | id-id |
| Tiếng Việt       | vi-vn |
| ภาษาไทย          | th-th |

| Honkai Impact 3rd | Genshin Impact | Tears of Themis | HoYoLAB | Honkai: Star Rail | Zenless Zone Zero |
| ----------------- | -------------- | --------------- | ------- | ----------------- | ----------------- |
| 1                 | 2              | 4               | 5       | 6                 | 8                 |

| Notices | Events | Info |
| ------- | ------ | ---- |
| 1       | 2      | 3    |`};async function S(e){try{let{type:t,gids:n,language:i}=e.req.param(),a={type:t,gids:n,language:i,size:Number.parseInt(e.req.query(`limit`))||15},o=await g(n,i,r.tryGet),s=await _(i,r.tryGet),c=await v(a),l=await b(c,a);return{title:`HoYoLAB-${o.name}-${s[t].title}`,link:`${d}/circles/${n}/${m[n]}/official?page_type=${m[n]}&page_sort=${s[t].sort}`,item:l,image:o.icon,icon:o.icon,logo:o.icon}}catch(e){n.error(e)}}export{x as route};