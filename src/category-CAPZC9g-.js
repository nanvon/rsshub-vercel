import{ofetch_default as e}from"./ofetch-CISb_5Uo.js";import{cache_default as t}from"./cache-Dfid4xgQ.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{timezone as r}from"./timezone-CMz5pnRe.js";import{load as i}from"cheerio";const a=async(a,o)=>{let s=await e(a),c=i(s),l=c(o.selector).toArray().map(e=>{let t=c(e),i=t.find(`p.text-m-height`).text(),a=t.find(`a`).attr(`href`),s=o.date?r(n(t.find(`div.text-light p`).first().text()),0):``,l=t.find(`img`).attr(`src`),u=[t.find(`p.pt025`).text()];return{title:i,link:`https://insider.finology.in${a}`,pubDate:s,itunes_item_image:l,category:u}}),u=(await Promise.allSettled(l.map(r=>r.link===void 0?r:t.tryGet(r.link,async()=>{let t=await e(r.link||``),a=i(t),s=a(`div.w60.flex.flex-wrap-badge`);return r.author=s.find(`div a p`).text(),r.updated=o.date?n(s.find(`p:contains("Updated on") span`).text()):``,r.description=a(`div#main-wrapper div#insiderhead`).find(`div.flex.flex-col.w100.align-center`).children(`div.m-position-r`).remove().end().find(`a[href="https://quest.finology.in/"]`).remove().end().find(`div.blur-wall-wrap`).remove().end().html()??``,r})))).map((e,t)=>e.status===`fulfilled`?e.value:{...l[t],description:`Website did not load within Timeout Limits. <a href="${l[t].link}">Check with Website if the page is slow</a>`}),d=c(`h1.font-heading.fs1875`)?.text();return{items:u.filter(e=>e!==null&&typeof e!=`string`),topicName:d}},o={path:`/category/:category`,categories:[`finance`],url:`insider.finology.in/business`,example:`/finology/success-stories`,parameters:{category:`Refer Table below or find in URL`},radar:[{source:[`insider.finology.in/:category`]}],name:`Category`,maintainers:[`Rjnishant530`],handler:s,description:`::: info Category
| Category              | Link               |
| --------------------- | ------------------ |
| **Business**          | business           |
| Big Shots             | entrepreneurship   |
| Startups              | startups-india     |
| Brand Games           | success-stories    |
| Juicy Scams           | juicy-scams        |
| **Finance**           | finance            |
| Macro Moves           | economy            |
| News Platter          | market-news        |
| Tax Club              | tax                |
| Your Money            | your-money         |
| **Invest**            | investing          |
| Stock Market          | stock-market       |
| Financial Ratios      | stock-ratios       |
| Investor's Psychology | behavioral-finance |
| Mutual Funds          | mutual-fund        |
:::`};async function s(e){let{category:t}=e.req.param();return await c(`https://insider.finology.in`,`/${t}`,{description:e=>`Articles for your research and knowledge under ${e}`,date:!0,selector:`div.card`})}async function c(e,t,n){let{items:r,topicName:i}=await a(`${e}${t}`,n);return{title:`${i} - Finology Insider`,link:`${e}${t}`,item:r,description:n.description(i||``),logo:`https://insider.finology.in/Images/favicon/favicon.ico`,icon:`https://insider.finology.in/Images/favicon/favicon.ico`,language:`en-us`}}export{c as commonHandler,o as route};