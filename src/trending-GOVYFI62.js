import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import"./dist-CRTt8uUM.js";import"./cache-Sft5n2jg.js";import"./parse-date-Bgabdhlb.js";import{ofetch_default as e}from"./ofetch-BHWobzJG.js";import{ProcessFeed as t,getCategoryBrief as n,parseList as r}from"./utils-DLI4aYee.js";const i={path:`/trending/:category/:type`,categories:[`programming`],example:`/juejin/trending/ios/monthly`,parameters:{category:`分类名`,type:`类型`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`热门`,maintainers:[`moaix`],handler:a,description:`| category | 标签     |
| -------- | -------- |
| android  | Android  |
| frontend | 前端     |
| ios      | iOS      |
| backend  | 后端     |
| design   | 设计     |
| product  | 产品     |
| freebie  | 工具资源 |
| article  | 阅读     |
| ai       | 人工智能 |
| devops   | 运维     |
| all      | 全部     |

| type       | 类型     |
| ---------- | -------- |
| weekly     | 本周最热 |
| monthly    | 本月最热 |
| historical | 历史最热 |`};async function a(i){let{category:a,type:o}=i.req.param(),s=``,c=``,l=`recommended`,u=await n(),d=u.find(e=>e.category_url===a);d&&(s=d.category_id,c=d.category_name,l=d.category_url);let f={monthly:{period:`month`,title:`本月`,link:`monthly_hottest`,sort_type:30},weekly:{period:`week`,title:`本周`,link:`weekly_hottest`,url:`get_entry_by_period`,sort_type:7},historical:{period:``,title:`历史`,link:`hottest`,sort_type:0}},p=f[o],m=`掘金${c}${p.title}最热`,h=`https://juejin.im/${l}?sort=${p.link}`,g=`https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed`,_={cursor:`0`,id_type:2,limit:20,sort_type:p.sort_type};l!==`recommended`&&(g=`https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed`,_.cate_id=s);let v=await e(g,{method:`POST`,body:_}),y=v.data;(a===`all`||a===`devops`||a===`product`||a===`design`)&&(y=v.data.filter(e=>e.item_type===2).map(e=>e.item_info));let b=r(y),x=await t(b);return{title:m,link:h,item:x}}export{i as route};