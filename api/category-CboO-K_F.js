import{ofetch_default as e}from"./ofetch-CWQqZcqz.js";import{cache_default as t}from"./cache-CvppK6AM.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{timezone as r}from"./timezone-CCdTtC9I.js";import{load as i}from"cheerio";const a=async(a,o)=>{let s=`https://insider.finology.in`,c=await e(a),l=i(c),u=l(o.selector).toArray().map(e=>{let t=l(e),i=t.find(`p.text-m-height`).text(),a=t.find(`a`).attr(`href`),c=o.date?r(n(t.find(`div.text-light p`).first().text()),0):``,u=t.find(`img`).attr(`src`),d=[t.find(`p.pt025`).text()];return{title:i,link:`${s}${a}`,pubDate:c,itunes_item_image:u,category:d}}),d=(await Promise.allSettled(u.map(r=>r.link===void 0?r:t.tryGet(r.link,async()=>{let t=await e(r.link||``),a=i(t),s=a(`div.w60.flex.flex-wrap-badge`);return r.author=s.find(`div a p`).text(),r.updated=o.date?n(s.find(`p:contains("Updated on") span`).text()):``,r.description=a(`div#main-wrapper div#insiderhead`).find(`div.flex.flex-col.w100.align-center`).children(`div.m-position-r`).remove().end().find(`a[href="https://quest.finology.in/"]`).remove().end().find(`div.blur-wall-wrap`).remove().end().html()??``,r})))).map((e,t)=>e.status===`fulfilled`?e.value:{...u[t],description:`Website did not load within Timeout Limits. <a href="${u[t].link}">Check with Website if the page is slow</a>`}),f=l(`h1.font-heading.fs1875`)?.text(),p=d.filter(e=>e!==null&&typeof e!=`string`);return{items:p,topicName:f}},o={path:`/category/:category`,categories:[`finance`],url:`insider.finology.in/business`,example:`/finology/success-stories`,parameters:{category:`Refer Table below or find in URL`},radar:[{source:[`insider.finology.in/:category`]}],name:`Category`,maintainers:[`Rjnishant530`],handler:s,description:`::: info Category
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
:::`};async function s(e){let{category:t}=e.req.param(),n={description:e=>`Articles for your research and knowledge under ${e}`,date:!0,selector:`div.card`};return await c(`https://insider.finology.in`,`/${t}`,n)}async function c(e,t,n){let{items:r,topicName:i}=await a(`${e}${t}`,n);return{title:`${i} - Finology Insider`,link:`${e}${t}`,item:r,description:n.description(i||``),logo:`https://insider.finology.in/Images/favicon/favicon.ico`,icon:`https://insider.finology.in/Images/favicon/favicon.ico`,language:`en-us`}}export{c as commonHandler,o as route$2};