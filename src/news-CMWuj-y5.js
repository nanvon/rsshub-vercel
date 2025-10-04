import"./esm-shims-BGJi2y--.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-DqHh1IN2.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-VGofQtEf.js";const r={0:`全部`,15:`直播`,3:`科技新鲜事`,7:`互联网槽点`,5:`趣味科技`,6:`DEBUG TIME`,1:`游戏`,8:`视频`,9:`公里每小时`},i={path:`/news/:caty?`,categories:[`new-media`],example:`/chaping/news/15`,parameters:{caty:`分类，默认为全部资讯`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`资讯`,maintainers:[`nczitzk`],handler:a,description:`| 编号 | 分类       |
| ---- | ---------- |
| 15   | 直播       |
| 3    | 科技新鲜事 |
| 7    | 互联网槽点 |
| 5    | 趣味科技   |
| 6    | DEBUG TIME |
| 1    | 游戏       |
| 8    | 视频       |
| 9    | 公里每小时 |`};async function a(i){let a=i.req.param(`caty`)??``,o=`https://chaping.cn/news?cate=${a}`,s=`https://chaping.cn/api/official/information/news?page=1&limit=16&cate=${a}`,c=(await n({method:`get`,url:s})).data.data.map(e=>({title:e.title,link:`https://chaping.cn/news/${e.id}`,pubDate:t(e.time_publish_timestamp*1e3)})),l=await Promise.all(c.map(t=>e.tryGet(t.link,async()=>{let e=await n({method:`get`,url:t.link});return t.description=JSON.parse(e.data.match(/"current":(.*?),"optionsList":/)[1]).content,t})));return{title:`差评资讯 - ${r[i.req.param(`caty`)===``?0:i.req.param(`caty`)]}`,link:o,item:l}}export{i as route};