import{__dirname as e,init_esm_shims as t}from"./esm-shims-2LyWUseo.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-BLnIkXRv.js";import"./helpers-gUVC02jt.js";import{cache_default as n}from"./cache-Dfid4xgQ.js";import{art as r}from"./render-CSnicFA3.js";import{parseDate as i}from"./parse-date-DHsdom8D.js";import"./got-DPq_2TLS.js";import{ViewType as a}from"./types-Bi82qguM.js";import{getAuthorFeed as o,getProfile as s,resolveHandle as c}from"./utils-okmG57bN.js";import l from"node:path";import u from"node:querystring";t();const d={path:`/profile/:handle/:routeParams?`,categories:[`social-media`],view:a.SocialMedia,example:`/bsky/profile/bsky.app`,parameters:{handle:`User handle, can be found in URL`,routeParams:`Filter parameter, Use filter to customize content types`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`bsky.app/profile/:handle`]}],name:`Post`,maintainers:[`TonyRL`],handler:f,description:`
| Filter Value | Description |
|--------------|-------------|
| posts_with_replies | Includes Posts, Replies, and Reposts |
| posts_no_replies | Includes Posts and Reposts, without Replies |
| posts_with_media | Shows only Posts containing media |
| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |

Default value for filter is \`posts_and_author_threads\` if not specified.

Example:
- \`/bsky/profile/bsky.app/filter=posts_with_replies\``};async function f(t){let a=t.req.param(`handle`),d=u.parse(t.req.param(`routeParams`)).filter||`posts_and_author_threads`,f=await c(a,n.tryGet),p=await s(f,n.tryGet),m=await o(f,d,n.tryGet),h=m.feed.map(({post:t})=>({title:t.record.text.split(`
`)[0],description:r(l.join(e,`templates/post-7b0043bb.art`),{text:t.record.text.replaceAll(`
`,`<br>`),embed:t.embed}),author:t.author.displayName,pubDate:i(t.record.createdAt),link:`https://bsky.app/profile/${t.author.handle}/post/${t.uri.split(`app.bsky.feed.post/`)[1]}`,upvotes:t.likeCount,comments:t.replyCount}));return t.set(`json`,{DID:f,profile:p,authorFeed:m}),{title:`${p.displayName} (@${p.handle}) — Bluesky`,description:p.description?.replaceAll(`
`,` `),link:`https://bsky.app/profile/${p.handle}`,image:p.avatar,icon:p.avatar,logo:p.avatar,item:h,allowEmpty:!0}}export{d as route};