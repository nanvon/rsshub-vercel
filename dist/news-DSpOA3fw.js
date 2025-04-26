import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-BwctkUCD.js";import{load as r}from"cheerio";const i={tracker:123,feature:124,opinion:125},a={path:`/news/:category?/:id?`,categories:[`traditional-media`],example:`/now/news`,parameters:{category:`分类，见下表，默认为首页`,id:`编号，可在对应专题/节目页 URL 中找到 topicId`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`news.now.com/`]}],name:`新聞`,maintainers:[`nczitzk`],handler:o,url:`news.now.com/`,description:`::: tip
  **编号** 仅对事件追蹤、評論節目、新聞專題三个分类起作用，例子如下：

  对于 [事件追蹤](https://news.now.com/home/tracker) 中的 [塔利班奪權](https://news.now.com/home/tracker/detail?catCode=123&topicId=1056) 话题，其网址为 \`https://news.now.com/home/tracker/detail?catCode=123&topicId=1056\`，其中 \`topicId\` 为 1056，则对应路由为 [\`/now/news/tracker/1056\`](https://rsshub.app/now/news/tracker/1056)
:::

| 首頁 | 港聞  | 兩岸國際      | 娛樂          |
| ---- | ----- | ------------- | ------------- |
|      | local | international | entertainment |

| 生活 | 科技       | 財經    | 體育   |
| ---- | ---------- | ------- | ------ |
| life | technology | finance | sports |

| 事件追蹤 | 評論節目 | 新聞專題 |
| -------- | -------- | -------- |
| tracker  | feature  | opinion  |`};async function o(a){let o=a.req.param(`category`)||``,s=a.req.param(`id`)||``,c=`https://news.now.com`,l=Object.hasOwn(i,o)?`${c}/home/${o}/detail?catCode=${i[o]}&topicId=${s}`:`${c}/home${o?`/${o}`:``}`,u=await n({method:`get`,url:l}),d=r(u.data),f=d(`${o===``?`.homeFeaturedNews `:`.newsCategoryColLeft `}.newsTitle`).map((e,t)=>(t=d(t),{title:t.text(),link:`${c}${t.parent().parent().attr(`href`)}`})).get(),p=await Promise.all(f.map(i=>e.tryGet(i.link,async()=>{let e=await n({method:`get`,url:i.link}),a=r(e.data),o=e.data.match(/"imageUrl":"(.*?)","image2Url":/);return i.pubDate=t(a(`.published`).attr(`datetime`)),i.description=(o?`<img src="${o[1]}">`:``)+a(`.newsLeading`).html(),i})));return{title:String(Object.hasOwn(i,o)?d(`title`).text():(d(`.smallSpace.active`).text()||`首頁`)+` | Now 新聞`),link:l,item:p}}export{a as route};