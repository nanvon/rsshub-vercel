import{__dirname as e,init_esm_shims as t}from"./esm-shims-BGJi2y--.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-rK3Yp7nj.js";import"./helpers-gUVC02jt.js";import{cache_default as n}from"./cache-Dfid4xgQ.js";import{art as r}from"./render-DftO2d-b.js";import{parseDate as i}from"./parse-date-DHsdom8D.js";import{got_default as a}from"./got-Bnno2HfO.js";import{timezone as o}from"./timezone-CMz5pnRe.js";import s from"node:path";t();const c={path:[`/column/:id?`,`/:id?`],categories:[`traditional-media`],example:`/cankaoxiaoxi/column/diyi`,parameters:{id:"栏目 id，默认为 `diyi`，即第一关注"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`栏目`,maintainers:[`yuxinliu-alex`,`nczitzk`],handler:l,description:`| 栏目           | id       |
| -------------- | -------- |
| 第一关注       | diyi     |
| 中国           | zhongguo |
| 国际           | gj       |
| 观点           | guandian |
| 锐参考         | ruick    |
| 体育健康       | tiyujk   |
| 科技应用       | kejiyy   |
| 文化旅游       | wenhualy |
| 参考漫谈       | cankaomt |
| 研究动态       | yjdt     |
| 海外智库       | hwzk     |
| 业界信息・观点 | yjxx     |
| 海外看中国城市 | hwkzgcs  |
| 译名趣谈       | ymymqt   |
| 译名发布       | ymymfb   |
| 双语汇         | ymsyh    |
| 参考视频       | video    |
| 军事           | junshi   |
| 参考人物       | cankaorw |`};async function l(t){let c=t.req.param(`id`)??`diyi`,l=t.req.query(`limit`)?Number.parseInt(t.req.query(`limit`)):50,u=`https://china.cankaoxiaoxi.com`,d=`${u}/json/channel/${c}/list.json`,f=`${u}/json/channel/${c}.channeljson`,p=`${u}/#/generalColumns/${c}`,m=await a({method:`get`,url:d}),h=await a({method:`get`,url:f}),g=m.data.list.slice(0,l).map(e=>({title:e.data.title,author:e.data.userName,category:e.data.channelName,pubDate:o(i(e.data.publishTime),8),link:e.data.moVideoPath?e.data.sourceUrl:`${u}/json/content/${e.data.url.match(/\/pages\/(.*?)\.html/)[1]}.detailjson`,video:e.data.moVideoPath,cover:e.data.mCoverImg}));return g=await Promise.all(g.map(t=>n.tryGet(t.link,async()=>{if(t.video)t.description=r(s.join(e,`templates/description-5183a709.art`),{video:t.video,cover:t.cover});else{let e=(await a({method:`get`,url:t.link})).data;t.link=`${u}/#/detailsPage/${c}/${e.id}/1/${e.publishTime.split(` `)[0]}`,t.description=e.txt}return t}))),{title:`参考消息 - ${h.data.name}`,link:p,description:`参考消息`,language:`zh-cn`,item:g}}export{c as route};