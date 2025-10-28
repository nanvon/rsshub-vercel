import"./esm-shims-mGm6WwCc.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import{t as e}from"./ofetch-BASlBuka.js";import{t}from"./cache-CpEhLexq.js";import{t as n}from"./parse-date-CHEO0z5G.js";import{load as r}from"cheerio";const i={path:`/articles`,name:`Articles`,url:`sustainabilitymag.com/articles`,maintainers:[`mintyfrankie`],categories:[`other`],example:`/sustainabilitymag/articles`,radar:[{source:[`https://sustainabilitymag.com/articles`],target:`/sustainabilitymag/articles`}],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},handler:c},a=e=>Object.keys(e).filter(e=>e.startsWith(`inline_free_`)||e.startsWith(`hero_landscape_`)).toSorted((e,t)=>Number.parseInt(t.split(`_`)[2])-Number.parseInt(e.split(`_`)[2]))[0],o=(e,t)=>`<figure><img src="${e}" alt="${t}" /><figcaption>${t}</figcaption></figure>`,s=e=>e.map(e=>{switch(e.type){case`text`:return e.html;case`blockquote`:return`<blockquote>${e.html}</blockquote>`;case`keyFacts`:return`<div><ul>${e.keyFacts.map(e=>`<li>${e.text}</li>`).join(``)}</ul></div>`;case`inlineVideo`:return e.provider===`youtube`?`<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube-nocookie.com/embed/${e.videoId}" frameborder="0" allowfullscreen></iframe>`:Error(`Unhandled inlineVideo provider: ${e.provider}`);case`inlineImage`:return e.inlineImageImages.map(e=>{let t=e.images[a(e.images)][0];return o(t.url,t.caption)}).join(``);default:throw Error(`Unhandled widget type: ${e.type}`)}}).join(``);async function c(){let i=`https://sustainabilitymag.com`,c=`${i}/articles`,l=`${i}/graphql`,u=JSON.stringify({query:`query PaginatedQuery($url: String!, $page: Int = 1, $widgetType: String!) {
          paginatedWidget(url: $url, widgetType: $widgetType) {
            ... on SimpleArticleGridWidget {
              articles(page: $page) {
                results {
                  _id
                  headline
                  fullUrlPath
                  featured
                  category
                  contentType
                  tags {
                    tag
                  }
                  attribution
                  subAttribution
                  sell
                  images {
                    thumbnail_widescreen_553 {
                      url
                    }
                  }
                }
              }
            }
          }
        }`,operationName:`PaginatedQuery`,variables:{widgetType:`simpleArticleGrid`,page:1,url:`https://sustainabilitymag.com/articles`}}),d=(await e(l,{method:`POST`,headers:{"Content-Type":`application/json`},body:u})).data.paginatedWidget.articles.results.map(e=>({title:e.headline,link:`${i}${e.fullUrlPath}`,image:e.images?.thumbnail_widescreen_553?.url,category:e.category})),f=await Promise.all(d.map(i=>t.tryGet(i.link,async()=>{let t=r(await e(i.link)),c=JSON.parse(t(`script#__NEXT_DATA__`).text()).props.pageProps.article;i.pubDate=n(c.displayDate),i.author=c.author.name;let l=c.images[a(c.images)][0];return i.description=o(l.url,l.caption)+s(c.body.widgets),i})));return{title:`Sustainability Magazine Articles`,language:`en`,description:`Sustainability Magazine Articles`,link:`https://${c}`,item:f}}export{i as route};