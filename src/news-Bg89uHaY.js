import"./esm-shims-BC3isTv8.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CfXAR0UO.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import{t}from"./parse-date-CHEO0z5G.js";import{t as n}from"./got-dCh-Ojgc.js";const r={0:`全部`,15:`直播`,3:`科技新鲜事`,7:`互联网槽点`,5:`趣味科技`,6:`DEBUG TIME`,1:`游戏`,8:`视频`,9:`公里每小时`},i={path:`/news/:caty?`,categories:[`new-media`],example:`/chaping/news/15`,parameters:{caty:`分类，默认为全部资讯`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`资讯`,maintainers:[`nczitzk`],handler:a,description:`| 编号 | 分类       |
| ---- | ---------- |
| 15   | 直播       |
| 3    | 科技新鲜事 |
| 7    | 互联网槽点 |
| 5    | 趣味科技   |
| 6    | DEBUG TIME |
| 1    | 游戏       |
| 8    | 视频       |
| 9    | 公里每小时 |`};async function a(i){let a=i.req.param(`caty`)??``,o=`https://chaping.cn/news?cate=${a}`,s=(await n({method:`get`,url:`https://chaping.cn/api/official/information/news?page=1&limit=16&cate=${a}`})).data.data.map(e=>({title:e.title,link:`https://chaping.cn/news/${e.id}`,pubDate:t(e.time_publish_timestamp*1e3)})),c=await Promise.all(s.map(t=>e.tryGet(t.link,async()=>{let e=await n({method:`get`,url:t.link});return t.description=JSON.parse(e.data.match(/"current":(.*?),"optionsList":/)[1]).content,t})));return{title:`差评资讯 - ${r[i.req.param(`caty`)===``?0:i.req.param(`caty`)]}`,link:o,item:c}}export{i as route};