import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CWQqZcqz.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";const n=e=>{let t={};if(!e)return t;let n=e.split(`&`);for(let e of n){let[n,r]=e.split(`=`);t[n]=r}return t},r={path:`/events/:filter?`,name:`Events`,url:`app.questn.com`,maintainers:[`cxheng315`],example:`/questn/events`,parameters:{filter:`Filter string`},description:`
::: tip

Filter parameters:
- category: 100: trending, 200: newest, 300: top
- status_filter: 0: all, 100: available, 400: missed
- community_filter: 0: all community, 100: verified, 200: followed
- rewards_filter: 0: all rewards, 100: nft, 200: token, 400: whitelist
- chain_filter: 0: all chains, 1: ethereum, 56: bsc, 137: polygon, 42161: arb, 10: op, 324: zksync, 43114: avax
- search: 'Search keyword',
- count: 'Number of events to fetch',
- page: 'Page number',
:::`,categories:[`other`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`app.questn.com/explore`],target:`/events/:category?/:status_filter?/:community_filter?/:reward_filter?/:chain_filter?/:search?/:count?/:page?`}],handler:i};async function i(r){let i=`https://api.questn.com/consumer/explore/list/`,a=n(r.req.param(`filter`)),o={category:a.category||`200`,status_filter:a.status_filter||`100`,community_filter:a.community_filter||`0`,rewards_filter:a.reward_filter||`0`,chain_filter:a.chain_filter||`0`,search:a.search||``,count:a.count||r.req.query(`limit`)||`20`,page:a.page||`1`},s=await e(`${i}?${new URLSearchParams(o)}`,{method:`GET`,headers:{"Content-Type":`application/json`}}),c=await s.result.data,l=c.map(e=>({title:e.title,link:`https://app.questn.com/quest/${e.id}`,author:e.community_info?e.community_info.name:``,guid:e.id,pubDate:t(e.start_time*1e3),itunes_duration:e.end_time>0?e.end_time-e.start_time:0}));return{title:`QuestN Events`,link:`https://app.questn.com/explore`,description:`A Quest Protocol Dedicated to DePIN and AI Training`,image:`https://app.questn.com/static/svgs/logo-white.svg`,logo:`https://app.questn.com/static/svgs/logo-white.svg`,author:`QuestN`,item:l&&l.length>0?l:[{title:`No events found`,description:`No events found`,link:`https://app.questn.com/explore`}]}}export{r as route};