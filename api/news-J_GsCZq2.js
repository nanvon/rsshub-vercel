import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-BwctkUCD.js";const r={global:`最新`,shares:`股市`,bonds:`债市`,commodities:`商品`,forex:`外汇`,enterprise:`公司`,"asset-manage":`资管`,tmt:`科技`,estate:`地产`,car:`汽车`,medicine:`医药`},i={path:`/news/:category?`,categories:[`finance`],example:`/wallstreetcn/news`,radar:[{source:[`wallstreetcn.com/news/:category`,`wallstreetcn.com/`]}],name:`资讯`,maintainers:[`nczitzk`],handler:a,description:`| id           | 分类 |
| ------------ | ---- |
| global       | 最新 |
| shares       | 股市 |
| bonds        | 债市 |
| commodities  | 商品 |
| forex        | 外汇 |
| enterprise   | 公司 |
| asset-manage | 资管 |
| tmt          | 科技 |
| estate       | 地产 |
| car          | 汽车 |
| medicine     | 医药 |`};async function a(i){let a=i.req.param(`category`)??`global`,o=`https://wallstreetcn.com`,s=`https://api-one.wallstcn.com`,c=`${o}/news/${a}`,l=`${s}/apiv1/content/information-flow?channel=${a}-channel&accept=article&limit=${i.req.query(`limit`)??25}`,u=await n({method:`get`,url:l}),d=u.data.data.items.filter(e=>e.resource_type!==`ad`).map(e=>({type:e.resource_type,guid:e.resource.id,link:e.resource.uri,pubDate:t(e.resource.display_time*1e3)}));return d=await Promise.all(d.map(t=>e.tryGet(t.link,async()=>{let e=await n({method:`get`,url:`${s}/apiv1/content/${t.type===`live`?`lives/${t.guid}`:`articles/${t.guid}?extract=0`}`}),r=e.data;if(r.code!==2e4)return null;let i=r.data;return t.title=i.title||i.content_text,t.author=i.source_name??i.author.display_name,t.description=i.content+(i.content_more??``),t.category=i.asset_tags?.map(e=>e.name)??[],i.audio_uri&&(t.enclosure_type=`audio/mpeg`,t.enclosure_url=i.audio_uri,t.itunes_item_image=i.image?.uri??``,t.itunes_duration=i.audio_info?.duration??``),delete t.type,t}))),d=d.filter(e=>e!==null),{title:`华尔街见闻 - 资讯 - ${r[a]}`,link:c,item:d,itunes_author:`华尔街见闻`,image:`https://static.wscn.net/wscn/_static/favicon.png`}}export{i as route};