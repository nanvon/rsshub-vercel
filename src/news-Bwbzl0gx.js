import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";const r={0:`全部`,15:`直播`,3:`科技新鲜事`,7:`互联网槽点`,5:`趣味科技`,6:`DEBUG TIME`,1:`游戏`,8:`视频`,9:`公里每小时`},i={path:`/news/:caty?`,categories:[`new-media`],example:`/chaping/news/15`,parameters:{caty:`分类，默认为全部资讯`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`资讯`,maintainers:[`nczitzk`],handler:a,description:`| 编号 | 分类       |
| ---- | ---------- |
| 15   | 直播       |
| 3    | 科技新鲜事 |
| 7    | 互联网槽点 |
| 5    | 趣味科技   |
| 6    | DEBUG TIME |
| 1    | 游戏       |
| 8    | 视频       |
| 9    | 公里每小时 |`};async function a(i){let a=i.req.param(`caty`)??``,o=`https://chaping.cn/news?cate=${a}`,s=`https://chaping.cn/api/official/information/news?page=1&limit=16&cate=${a}`,c=await n({method:`get`,url:s}),l=c.data.data.map(t=>({title:t.title,link:`https://chaping.cn/news/${t.id}`,pubDate:e(t.time_publish_timestamp*1e3)})),u=await Promise.all(l.map(e=>t.tryGet(e.link,async()=>{let t=await n({method:`get`,url:e.link}),r=JSON.parse(t.data.match(/"current":(.*?),"optionsList":/)[1]);return e.description=r.content,e})));return{title:`差评资讯 - ${r[i.req.param(`caty`)===``?0:i.req.param(`caty`)]}`,link:o,item:u}}export{i as route};