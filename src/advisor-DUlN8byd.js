import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import{ofetch_default as n}from"./ofetch-ZUQ1sEMc.js";import{got_default as r}from"./got-CB83B8oA.js";import{load as i}from"cheerio";const a={path:`/advisor/data/:type?/:category?`,categories:[`programming`],example:`/github/advisor/data/reviewed/composer`,features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`github.com/advisories`,`github.com`]}],name:`Github Advisory Database RSS`,maintainers:[`sd0ric4`],handler:o,description:`
| Type | Description | Explanation |
| --- | --- | --- |
| reviewed | Reviewed | 已审核 |
| unreviewed | Unreviewed | 未审核 |

| Category | Description | Explanation |
| --- | --- | --- |
| composer | Composer | PHP 依赖管理工具 |
| go | Go | Go 语言包管理工具 |
| maven | Maven | Java 项目管理工具 |
| npm | NPM | Node.js 包管理工具 |
| nuget | NuGet | .NET 包管理工具 |
| pip | Pip | Python 包管理工具 |
| pub | Pub | Dart 包管理工具 |
| rubygems | RubyGems | Ruby 包管理工具 |
| rust | Rust | Rust 包管理工具 |
| erlang | Erlang | Erlang 包管理工具 |
| actions | Actions | GitHub Actions |
| swift | Swift | Swift 包管理工具 |`};async function o(a){let{category:o,type:s}=a.req.param(),c=`https://github.com/advisories?query=type%3A${s}+ecosystem%3A${o}`,l=await r({method:`get`,url:c}),u=i(l.data),d=u(`div.Box-row`).toArray().map(t=>{t=u(t);let n=t.find(`a.Link--primary`),r=t.find(`relative-time`).attr(`datetime`),i=n.text()||`No title`,a=n.attr(`href`)||`#`,o=e(r||``);return{title:i,link:`https://github.com${a}`,pubDate:o,description:``}}),f=await Promise.all(d.map(e=>t.tryGet(e.link,async()=>{let t=await n(e.link),r=i(t);return e.description=r(`.comment-body`).first().html()||``,e})));return{title:`GitHub Advisory Database RSS - ${o} - ${s}`,link:`https://github.com/advisories`,item:f}}export{a as route};