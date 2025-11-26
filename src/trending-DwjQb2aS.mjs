import{n as e,t}from"./esm-shims-BKVRry6h.mjs";import{t as n}from"./config-uQhBoCds.mjs";import"./logger-DQf7gybc.mjs";import"./ofetch-7N8fmlQ6.mjs";import"./helpers-C6Jountz.mjs";import{t as r}from"./render-_fW2cbJz.mjs";import{t as i}from"./got-DcbI0XpN.mjs";import{t as a}from"./types-CaC5w-Pp.mjs";import{t as o}from"./config-not-found-DGyG6Tbz.mjs";import s from"node:path";import{load as c}from"cheerio";e();const l={path:`/trending/:since/:language/:spoken_language?`,categories:[`programming`],example:`/github/trending/daily/javascript/en`,view:a.Notifications,parameters:{since:{description:`time range`,options:[{value:`daily`,label:`Today`},{value:`weekly`,label:`This week`},{value:`monthly`,label:`This month`}]},language:{description:"the feed language, available in [Trending page](https://github.com/trending/javascript?since=monthly) 's URL, don't filter option is `any`",default:`any`},spoken_language:{description:`natural language, available in [Trending page](https://github.com/trending/javascript?since=monthly) 's URL`}},features:{requireConfig:[{name:`GITHUB_ACCESS_TOKEN`,description:``}],requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`github.com/trending`],target:`/trending/:since`}],name:`Trending`,maintainers:[`DIYgod`,`jameschensmith`],handler:u,url:`github.com/trending`};async function u(e){if(!n.github||!n.github.access_token)throw new o(`GitHub trending RSS is disabled due to the lack of <a href="https://docs.rsshub.app/deploy/config#route-specific-configurations">relevant config</a>`);let a=e.req.param(`since`),l=e.req.param(`language`)===`any`?``:e.req.param(`language`),u=e.req.param(`spoken_language`)??``,d=`https://github.com/trending/${encodeURIComponent(l)}?since=${a}&spoken_language_code=${u}`,{data:f}=await i({method:`get`,url:d,headers:{Referer:d}}),p=c(f),m=p(`article`).toArray().map(e=>{let[t,n]=p(e).find(`h2`).text().split(`/`);return{name:n.trim(),owner:t.trim()}}),{data:h}=await i({method:`post`,url:`https://api.github.com/graphql`,headers:{Authorization:`bearer ${n.github.access_token}`},json:{query:`
            query {
            ${m.map((e,t)=>`
                _${t}: repository(owner: "${e.owner}", name: "${e.name}") {
                    ...RepositoryFragment
                }
            `).join(`
`)}
            }

            fragment RepositoryFragment on Repository {
                description
                forkCount
                nameWithOwner
                openGraphImageUrl
                primaryLanguage {
                    name
                }
                stargazerCount
            }
            `}}),g=Object.values(h.data).map(e=>({...m.find(t=>`${t.owner}/${t.name}`===e.nameWithOwner),...e}));return{title:p(`title`).text(),link:d,item:g.map(e=>({title:e.nameWithOwner,author:e.owner,description:r(s.join(t,`templates/trending-description-ae7ed569.art`),{cover:e.openGraphImageUrl,desc:e.description,forks:e.forkCount,lang:e.primaryLanguage?.name||`Unknown`,stars:e.stargazerCount}),link:`https://github.com/${e.nameWithOwner}`}))}}export{l as route};