import{__dirname as e,init_esm_shims as t}from"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{art as n}from"./render-DE4LRFBD.js";import{parseDate as r}from"./parse-date-DHsdom8D.js";import{got_default as i}from"./got-BwctkUCD.js";import a from"node:path";t();const o=`https://api.hashnode.com`,s={path:`/blog/:username`,categories:[`blog`],example:`/hashnode/blog/inklings`,parameters:{username:`博主名称，用户头像 URL 中找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`hashnode.dev/`]}],name:`用户博客`,maintainers:[`hnrainll`],handler:c,url:`hashnode.dev/`,description:"::: tip\n  username 为博主用户名，而非`xxx.hashnode.dev`中`xxx`所代表的 blog 地址。\n:::"};async function c(t){let s=t.req.param(`username`);if(!s)return;let c=`
    {
        user(username: "${s}") {
            publication {
                posts{
                    slug
                    title
                    brief
                    coverImage
                    dateAdded
                }
            }
        }
    }
    `,l=`https://${s}.hashnode.dev`,u=await i({method:`POST`,url:o,headers:{Referer:l,"Content-type":`application/json`},body:JSON.stringify({query:c})}),d=u.data.data.user.publication;if(!d)return;let f=d.posts;return{title:`Hashnode by ${s}`,link:l,item:f.map(t=>({title:t.title,description:n(a.join(e,`templates/description-88dc298d.art`),{image:t.coverImage,brief:t.brief}),pubDate:r(t.dateAdded),link:`${l}/${t.slug}`})).filter(e=>e!==``)}}export{s as route};