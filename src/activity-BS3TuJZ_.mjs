import{n as e,t}from"./esm-shims-DhF_MXa4.mjs";import"./config-PItPnVIx.mjs";import"./logger-BoKmWr7Z.mjs";import"./ofetch-DVhBwO41.mjs";import"./helpers-vRt84cId.mjs";import{t as n}from"./render-ZYpwNl2L.mjs";import{t as r}from"./parse-date-9Tu6hSFW.mjs";import{t as i}from"./got-D_XeVuz-.mjs";import{t as a}from"./timezone-CQaZZkB1.mjs";import{t as o}from"./invalid-parameter-BazIyKVP.mjs";import{t as s}from"./valid-host-BRWp2wq8.mjs";import c from"node:path";import{load as l}from"cheerio";e();const u={path:`/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?`,categories:[`shopping`],example:`/myfigurecollection/activity`,parameters:{category:`Category, Figures by default`,language:"Language, as above, `en` by default",latestAdditions:"Latest Additions, on as `1` by default, off as `0`",latestEdits:"Changes, on as `1` by default, off as `0`",latestAlerts:"Alerts, on as `1` by default, off as `0`",latestPictures:"Pictures, on as `1` by default, off as `0`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`zh.myfigurecollection.net/browse`,`zh.myfigurecollection.net/`],target:`/:category?/:language?`}],name:`Activity`,maintainers:[`nczitzk`],handler:d,url:`zh.myfigurecollection.net/browse`,description:`Category

| Figures | Goods | Media |
| ------- | ----- | ----- |
| 0       | 1     | 2     |

  Language

| Id | Language   |
| -- | ---------- |
|    | en         |
| de | Deutsch    |
| es | Español    |
| fi | Suomeksi   |
| fr | Français   |
| it | Italiano   |
| ja | 日本語     |
| nl | Nederlands |
| no | Norsk      |
| pl | Polski     |
| pt | Português  |
| ru | Русский    |
| sv | Svenska    |
| zh | 中文       |`};async function d(e){let u=e.req.param(`category`)??`-1`,d=e.req.param(`language`)??``,f=e.req.param(`latestAdditions`)??`1`,p=e.req.param(`latestEdits`)??`1`,m=e.req.param(`latestAlerts`)??`1`,h=e.req.param(`latestPictures`)??`1`;if(d&&!s(d))throw new o(`Invalid language`);let g=`https://${d===`en`||d===``?``:`${d}.`}myfigurecollection.net`,_=`${g}/browse.v4.php?mode=activity&latestAdditions=${f}&latestEdits=${p}&latestAlerts=${m}&latestPictures=${h}&rootId=${u}`,v=l((await i({method:`get`,url:_})).data),y=v(`.activity-wrapper`).toArray().map(e=>(e=v(e),{title:`${e.find(`.activity-label`).text().split(` • `)[0]}: ${e.find(`.stamp-anchor`).text()}`,link:`${g}${e.find(`.stamp-anchor .tbx-tooltip`).attr(`href`)}`,pubDate:a(r(e.find(`.activity-time span`).attr(`title`)),0),author:e.find(`.user-anchor`).text(),description:n(c.join(t,`templates/activity-e381f9d5.art`),{changelog:e.find(`.changelog`).text(),pictures:e.find(`.picture-icon`).toArray().map(e=>v(e).html().match(/url\((.*)\)/)[1].replace(/\/thumbnails/,``))})}));return{title:v(`title`).text().replace(/ \(.*\)/,``),link:_,item:y}}export{u as route};