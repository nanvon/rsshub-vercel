import{__dirname as e,init_esm_shims as t}from"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CDAeBYLA.js";import"./helpers-RrXnNmv1.js";import{cache_default as n}from"./cache-7MGQxbL-.js";import{art as r}from"./render-DlHIMz-Z.js";import{parseDate as i}from"./parse-date-B2cCVoGk.js";import"./got-Cw4D6IS5.js";import{ViewType as a}from"./types-DygLf1a3.js";import{getAuthorFeed as o,getProfile as s,resolveHandle as c}from"./utils-D5Hf-BiS.js";import l from"node:path";import u from"querystring";t();const d={path:`/profile/:handle/:routeParams?`,categories:[`social-media`,`popular`],view:a.SocialMedia,example:`/bsky/profile/bsky.app`,parameters:{handle:`User handle, can be found in URL`,routeParams:`Filter parameter, Use filter to customize content types`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`bsky.app/profile/:handle`]}],name:`Post`,maintainers:[`TonyRL`],handler:f,description:`
| Filter Value | Description |
|--------------|-------------|
| posts_with_replies | Includes Posts, Replies, and Reposts |
| posts_no_replies | Includes Posts and Reposts, without Replies |
| posts_with_media | Shows only Posts containing media |
| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |

Default value for filter is \`posts_and_author_threads\` if not specified.

Example:
- \`/bsky/profile/bsky.app/filter=posts_with_replies\``};async function f(t){let a=t.req.param(`handle`),d=u.parse(t.req.param(`routeParams`)),f=d.filter||`posts_and_author_threads`,p=await c(a,n.tryGet),m=await s(p,n.tryGet),h=await o(p,f,n.tryGet),g=h.feed.map(({post:t})=>({title:t.record.text.split(`
`)[0],description:r(l.join(e,`templates/post-7b0043bb.art`),{text:t.record.text.replaceAll(`
`,`<br>`),embed:t.embed}),author:t.author.displayName,pubDate:i(t.record.createdAt),link:`https://bsky.app/profile/${t.author.handle}/post/${t.uri.split(`app.bsky.feed.post/`)[1]}`,upvotes:t.likeCount,comments:t.replyCount}));return t.set(`json`,{DID:p,profile:m,authorFeed:h}),{title:`${m.displayName} (@${m.handle}) — Bluesky`,description:m.description?.replaceAll(`
`,` `),link:`https://bsky.app/profile/${m.handle}`,image:m.avatar,icon:m.avatar,logo:m.avatar,item:g,allowEmpty:!0}}export{d as route};