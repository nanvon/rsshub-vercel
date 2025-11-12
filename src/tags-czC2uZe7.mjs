import"./esm-shims-C3MSy80G.mjs";import"./config-PItPnVIx.mjs";import"./logger-BoKmWr7Z.mjs";import{t as e}from"./ofetch-Byd8Ct7M.mjs";import{t}from"./cache-KwJARS5Z.mjs";import"./parse-date-9Tu6hSFW.mjs";import{n,r,t as i}from"./utils-DAqQsLA-.mjs";import*as a from"cheerio";const o=n=>t.tryGet(`matters:tags:${n}`,async()=>{let t=await e(`${i}/tags/${n}`),r=a.load(t),o=JSON.parse(r(`script#__NEXT_DATA__`).text());return(Object.entries(o.props.apolloState.data.ROOT_QUERY).find(([e])=>e.startsWith(`node`))?.pop())?.id.split(`:`)[1]}),s={path:`/tags/:tid`,name:`Tags`,example:`/matters/tags/972-哲學`,parameters:{tid:`Tag id, can be found in the url of the tag page`},maintainers:[`Cerebrater`],handler:async t=>{let{tid:a}=t.req.param(),s=t.req.query(`limit`)?Number.parseInt(t.req.query(`limit`),10):20,c=(await e(n,{method:`POST`,body:{query:`{
                node(input: {id: "${await o(a)}"}) {
                  ... on Tag {
                    content
                    description
                    articles(input: {first: ${s}}) {
                      edges {
                        node {
                          title
                          shortHash
                          content
                          createdAt
                          author {
                            displayName
                          }
                          tags {
                            content
                          }
                        }
                      }
                    }
                  }
                }
              }`}})).data.node;return{title:`Matters | ${c.content}`,link:`${i}/tags/${a}`,description:c.description,item:c.articles.edges.map(({node:e})=>r(e))}},radar:[{source:[`matters.town/tags/:tid`]}]};export{s as route};