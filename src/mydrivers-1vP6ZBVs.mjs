import{n as e,t}from"./esm-shims-BKVRry6h.mjs";import"./config-uQhBoCds.mjs";import"./logger-DQf7gybc.mjs";import"./ofetch-7N8fmlQ6.mjs";import"./helpers-C6Jountz.mjs";import"./cache-BXZZTZVV.mjs";import{t as n}from"./render-_fW2cbJz.mjs";import{t as r}from"./parse-date-C2HciIa2.mjs";import{t as i}from"./got-DcbI0XpN.mjs";import{t as a}from"./timezone-BAp4uBjD.mjs";import{i as o,n as s,o as c,r as l,s as u,t as d}from"./util-D9KD6GUZ.mjs";import f from"node:path";import{load as p}from"cheerio";e();const m={path:`/:category{.+}?`,name:`分类`,parameters:{category:`分类，见下表，默认为最新`},example:`/mydrivers/bcid/801`,maintainers:[`kt286`,`nczitzk`],handler:h,radar:[{source:[`m.mydrivers.com/`],target:`/zhibo`}],description:`
#### 板块

| 电脑     | 手机     | 汽车     | 业界     | 游戏     |
| -------- | -------- | -------- | -------- | -------- |
| bcid/801 | bcid/802 | bcid/807 | bcid/803 | bcid/806 |

#### 话题

| 科学     | 排行     | 评测     | 一图     |
| -------- | -------- | -------- | -------- |
| tid/1000 | tid/1001 | tid/1002 | tid/1003 |

#### 品牌

| 安卓     | 阿里     | 微软    | 百度    | PS5       | Xbox     | 华为     |
| -------- | -------- | ------- | ------- | --------- | -------- | -------- |
| icid/121 | icid/270 | icid/90 | icid/67 | icid/6950 | icid/194 | icid/136 |

| 小米      | VIVO     | 三星     | 魅族     | 一加     | 比亚迪   | 小鹏      |
| --------- | -------- | -------- | -------- | -------- | -------- | --------- |
| icid/9355 | icid/288 | icid/154 | icid/140 | icid/385 | icid/770 | icid/7259 |

| 蔚来      | 理想       | 奔驰     | 宝马     | 大众     |
| --------- | ---------- | -------- | -------- | -------- |
| icid/7318 | icid/12947 | icid/429 | icid/461 | icid/481 |
`};async function h(e){let{category:m=`new`}=e.req.param(),h=``;/^(\w+\/\w+)$/.test(m)||(h=`${u} - ${Object.hasOwn(d,m)?d[m]:d[Object.keys(d)[0]]}`,m=`ac/${m}`);let g=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):20,_=s(m),v=new URL(`newsclass.aspx${_}`,c).href,y=new URL(`m/newslist.ashx${_}`,c).href,{data:b}=await i(y),x=p(b),S=x(`li[data-id]`).slice(0,g).toArray().map(e=>(e=x(e),{title:e.find(`div.news_title`).text(),link:new URL(e.find(`div.news_title span.newst a`).prop(`href`),c).href,description:n(f.join(t,`templates/description-8ef00cc6.art`),{image:e.find(`a.newsimg img`).prop(`src`)}),author:e.find(`p.tname`).text(),guid:e.prop(`data-id`),pubDate:a(r(e.find(`p.ttime`).text()),8),comments:e.find(`a.tpinglun`).text()?Number.parseInt(e.find(`a.tpinglun`).text(),10):0}));return S=await o(S),{...await l(v),...h?{title:h}:{},item:S}}export{m as route};