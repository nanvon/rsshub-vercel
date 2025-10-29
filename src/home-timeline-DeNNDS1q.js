import"./esm-shims-BC3isTv8.js";import{t as e}from"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CfXAR0UO.js";import"./helpers-Cqaav28H.js";import"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import{t}from"./got-dCh-Ojgc.js";import{t as n}from"./types-Bn7An2Wc.js";import{t as r}from"./config-not-found-CX6cWM57.js";import{n as i}from"./readable-social-D1ub39Fn.js";import{t as a}from"./utils-IaOK5m2n.js";import o from"node:querystring";const s={path:`/timeline/home/:site/:routeParams?`,categories:[`social-media`],view:n.SocialMedia,example:`/misskey/timeline/home/misskey.io`,parameters:{site:"instance address, domain only, without `http://` or `https://` protocol header",routeParams:`
| Key                  | Description                             | Accepted Values | Default |
| -------------------- | --------------------------------------- | --------------- | ------- |
| limit                | Number of notes to return               | integer         | 10      |
| withFiles            | Only return notes containing files      | 0/1/true/false  | false   |
| withRenotes          | Include renotes in the timeline         | 0/1/true/false  | true    |
| allowPartial         | Allow partial results                   | 0/1/true/false  | true    |
| simplifyAuthor       | Simplify author field in feed items     | 0/1/true/false  | true    |

Note: If \`withFiles\` is set to true, renotes will not be included in the timeline regardless of the value of \`withRenotes\`.

Examples:
- /misskey/timeline/home/misskey.io/limit=20&withFiles=true
- /misskey/timeline/home/misskey.io/withRenotes=false
        `},features:{requireConfig:[{name:`MISSKEY_ACCESS_TOKEN`,optional:!1,description:`
                    Access token for Misskey API. Requires \`read:account\` access.

                    Visit the specified site's settings page to obtain an access token. E.g. https://misskey.io/settings/api
                `}],requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`misskey.io`]}],name:`Home Timeline`,maintainers:[`HanaokaYuzu`],handler:c,description:`::: warning
    This route is only available for self-hosted instances.
:::`};async function c(n){let s=e.misskey.accessToken;if(!s)throw new r("Missing access token for Misskey API. Please set `MISSKEY_ACCESS_TOKEN` environment variable.");let c=n.req.param(`site`);if(!e.feature.allow_user_supply_unsafe_domain&&!a.allowSiteList.includes(c))throw new r(`This RSS is disabled unless 'ALLOW_USER_SUPPLY_UNSAFE_DOMAIN' is set to 'true'.`);let l=`https://${c}/api/notes/timeline`,u=o.parse(n.req.param(`routeParams`)),d=(await t({method:`post`,url:l,headers:{Authorization:`Bearer ${s}`},json:{limit:Number(u.limit??10),withFiles:i(u.withFiles??!1),withRenotes:i(u.withRenotes??!0),allowPartial:i(u.allowPartial??!0)}})).data,f=i(u.simplifyAuthor??!0);return{title:`Home Timeline on ${c}`,link:`https://${c}`,item:a.parseNotes(d,c,f)}}export{s as route};