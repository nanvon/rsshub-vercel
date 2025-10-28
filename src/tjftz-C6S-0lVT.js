import"./esm-shims-mGm6WwCc.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-BASlBuka.js";import"./helpers-Cqaav28H.js";import{t as e}from"./parse-date-CHEO0z5G.js";import{t}from"./got-CgQXMNWI.js";import{load as n}from"cheerio";const r={path:`/tianjin/tjftz-notice/:channelId`,categories:[`government`],example:`/gov/tianjin/tjftz-notice/6302`,parameters:{channelId:`公告分类id、详细信息点击源网站https://www.tjftz.gov.cn/请求中寻找`},radar:[{source:[`tjftz.gov.cn/channels/:channelId.html`],target:`/tianjin/tjftz-notice/:channelId`}],name:`天津港保税区-公告`,url:`tjftz.gov.cn`,maintainers:[`HaoyuLee`],description:`
| 公告类别         | channelId |
| ------------ | -- |
| 首页>新闻>保税区要闻>区域聚焦     | 6302  |
    `,async handler(r){let{channelId:i=`6302`}=r.req.param(),a=`https://www.tjftz.gov.cn/channels/${i}.html`,{data:o}=await t(a),s=n(o)(`.location`).text().trim();return{title:`天津港保税区-公告`,link:a,item:n(o)(`#sec_right>ul li>.layui-row`).toArray().map(t=>{let r=n(t);return{title:`天津保税区:${r(`a`).attr(`title`)}`,link:`https://www.tjftz.gov.cn${r(`a`).attr(`href`)}`,pubDate:e(r(`span`).text().trim()),author:`天津保税区`,description:`
                        <h4>${s}</h4>
                        <a href="https://www.tjftz.gov.cn${r(`a`).attr(`href`)}">${r(`a`).attr(`title`)}</a>
                    `}})}}};export{r as route};