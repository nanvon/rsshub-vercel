import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";const r={global:`最新`,shares:`股市`,bonds:`债市`,commodities:`商品`,forex:`外汇`,enterprise:`公司`,"asset-manage":`资管`,tmt:`科技`,estate:`地产`,car:`汽车`,medicine:`医药`},i={path:`/news/:category?`,categories:[`finance`],example:`/wallstreetcn/news`,radar:[{source:[`wallstreetcn.com/news/:category`,`wallstreetcn.com/`]}],name:`资讯`,maintainers:[`nczitzk`],handler:a,description:`| id           | 分类 |
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
| medicine     | 医药 |`};async function a(i){let a=i.req.param(`category`)??`global`,o=`https://api-one.wallstcn.com`,s=`https://wallstreetcn.com/news/${a}`,c=`${o}/apiv1/content/information-flow?channel=${a}-channel&accept=article&limit=${i.req.query(`limit`)??25}`,l=await n({method:`get`,url:c}),u=l.data.data.items.filter(e=>e.resource_type!==`ad`).map(t=>({type:t.resource_type,guid:t.resource.id,link:t.resource.uri,pubDate:e(t.resource.display_time*1e3)}));return u=await Promise.all(u.map(e=>t.tryGet(e.link,async()=>{let t=await n({method:`get`,url:`${o}/apiv1/content/${e.type===`live`?`lives/${e.guid}`:`articles/${e.guid}?extract=0`}`}),r=t.data;if(r.code!==2e4)return null;let i=r.data;return e.title=i.title||i.content_text,e.author=i.source_name??i.author.display_name,e.description=i.content+(i.content_more??``),e.category=i.asset_tags?.map(e=>e.name)??[],i.audio_uri&&(e.enclosure_type=`audio/mpeg`,e.enclosure_url=i.audio_uri,e.itunes_item_image=i.image?.uri??``,e.itunes_duration=i.audio_info?.duration??``),delete e.type,e}))),u=u.filter(e=>e!==null),{title:`华尔街见闻 - 资讯 - ${r[a]}`,link:s,item:u,itunes_author:`华尔街见闻`,image:`https://static.wscn.net/wscn/_static/favicon.png`}}export{i as route};