import"./esm-shims-DhF_MXa4.mjs";import"./config-PItPnVIx.mjs";import"./logger-BoKmWr7Z.mjs";import{t as e}from"./ofetch-DVhBwO41.mjs";import{t}from"./cache-KwJARS5Z.mjs";import"./parse-date-9Tu6hSFW.mjs";import"./timezone-CQaZZkB1.mjs";import{t as n}from"./invalid-parameter-BazIyKVP.mjs";import{a as r,i,n as a,r as o,t as s}from"./utils-8kXx43Ug.mjs";import{load as c}from"cheerio";const l={path:[`/hub/:tagId?/:sort?/:range?`],categories:[`programming`],example:`/baai/hub`,parameters:{tagId:`社群 ID，可在 [社群页](https://hub.baai.ac.cn/taglist) 或 URL 中找到`,sort:"排序，见下表，默认为 `new`",range:"时间跨度，仅在排序 `readCnt` 时有效"},description:`排序

| 最新 | 最热    |
| ---- | ------- |
| new  | readCnt |

时间跨度

| 3 天 | 本周 | 本月 |
| ---- | ---- | ---- |
| 3    | 7    | 30   |`,radar:[{source:[`baai.ac.cn/`],target:(e,t)=>{let n=new URL(t).searchParams,r=n.get(`tag_id`),i=n.get(`sort`),a=n.get(`time_range`);return`/baai/hub${r?`/${r}`:``}${i?`/${i}`:``}${a?`/${a}`:``}`}}],name:`智源社区`,maintainers:[`TonyRL`],handler:u};async function u(l){let{tagId:u=``,sort:d=`new`,range:f}=l.req.param(),p,m,h,g;if(u){let e=(await o()).find(e=>e.id===u);if(e)p=e.title,m=e.description,h=e.brief,g=e.iconUrl;else throw new n(`Tag not found`)}let _=(await e(`${s}/api/v1/story/list`,{method:`POST`,query:{page:1,sort:d,tag_id:u,time_range:f}})).data.map(e=>r(e)),v=await Promise.all(_.map(n=>t.tryGet(n.link,async()=>{if(n.eventId)n.description=await i(n);else{let t=c(await e(n.link));n.description=n.is_event?t(`div.box2`).html():t(`.post-content`).html()}return n})));return{title:`${p?`${p} - `:``}${m?`${m} - `:``}智源社区`,description:h,link:`${a}/?${u?`tag_id=${u}&`:``}sort=${d}${f?`&time_range=${f}`:``}`,image:g,item:v}}export{l as route};