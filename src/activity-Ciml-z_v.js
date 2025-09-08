import{__dirname as e,init_esm_shims as t}from"./esm-shims-Dqvxr0BZ.js";import"./config-1ATZGjxb.js";import"./logger-B19BYg4C.js";import"./ofetch-B4O0sZDE.js";import"./helpers-LVq640iW.js";import{art as n}from"./render-DE4LRFBD.js";import{parseDate as r}from"./parse-date-DHsdom8D.js";import{got_default as i}from"./got-CW2W8CRN.js";import{timezone as a}from"./timezone-CMz5pnRe.js";import{invalid_parameter_default as o}from"./invalid-parameter-B0jPSaWz.js";import{isValidHost as s}from"./valid-host-yksGEaHF.js";import c from"node:path";import{load as l}from"cheerio";t();const u={path:`/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?`,categories:[`shopping`],example:`/myfigurecollection/activity`,parameters:{category:`Category, Figures by default`,language:"Language, as above, `en` by default",latestAdditions:"Latest Additions, on as `1` by default, off as `0`",latestEdits:"Changes, on as `1` by default, off as `0`",latestAlerts:"Alerts, on as `1` by default, off as `0`",latestPictures:"Pictures, on as `1` by default, off as `0`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`zh.myfigurecollection.net/browse`,`zh.myfigurecollection.net/`],target:`/:category?/:language?`}],name:`Activity`,maintainers:[`nczitzk`],handler:d,url:`zh.myfigurecollection.net/browse`,description:`Category

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
| zh | 中文       |`};async function d(t){let u=t.req.param(`category`)??`-1`,d=t.req.param(`language`)??``,f=t.req.param(`latestAdditions`)??`1`,p=t.req.param(`latestEdits`)??`1`,m=t.req.param(`latestAlerts`)??`1`,h=t.req.param(`latestPictures`)??`1`;if(d&&!s(d))throw new o(`Invalid language`);let g=`https://${d===`en`||d===``?``:`${d}.`}myfigurecollection.net`,_=`${g}/browse.v4.php?mode=activity&latestAdditions=${f}&latestEdits=${p}&latestAlerts=${m}&latestPictures=${h}&rootId=${u}`,v=await i({method:`get`,url:_}),y=l(v.data),b=y(`.activity-wrapper`).toArray().map(t=>(t=y(t),{title:`${t.find(`.activity-label`).text().split(` • `)[0]}: ${t.find(`.stamp-anchor`).text()}`,link:`${g}${t.find(`.stamp-anchor .tbx-tooltip`).attr(`href`)}`,pubDate:a(r(t.find(`.activity-time span`).attr(`title`)),0),author:t.find(`.user-anchor`).text(),description:n(c.join(e,`templates/activity-e381f9d5.art`),{changelog:t.find(`.changelog`).text(),pictures:t.find(`.picture-icon`).toArray().map(e=>y(e).html().match(/url\((.*)\)/)[1].replace(/\/thumbnails/,``))})}));return{title:y(`title`).text().replace(/ \(.*\)/,``),link:_,item:b}}export{u as route};