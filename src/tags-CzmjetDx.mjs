import"./esm-shims-D5mxTuu_.mjs";import"./config-CDM38Tpk.mjs";import"./logger-B0B1yUZ6.mjs";import{t as e}from"./ofetch-FkpIOIxH.mjs";import{t}from"./cache-C6z2tE2n.mjs";import"./parse-date-Cv8vEJfE.mjs";import{n,r,t as i}from"./utils-BUBJ9Pm8.mjs";import*as a from"cheerio";const o=n=>t.tryGet(`matters:tags:${n}`,async()=>{let t=await e(`${i}/tags/${n}`),r=a.load(t),o=JSON.parse(r(`script#__NEXT_DATA__`).text());return(Object.entries(o.props.apolloState.data.ROOT_QUERY).find(([e])=>e.startsWith(`node`))?.pop())?.id.split(`:`)[1]}),s={path:`/tags/:tid`,name:`Tags`,example:`/matters/tags/972-哲學`,parameters:{tid:`Tag id, can be found in the url of the tag page`},maintainers:[`Cerebrater`],handler:async t=>{let{tid:a}=t.req.param(),s=t.req.query(`limit`)?Number.parseInt(t.req.query(`limit`),10):20,c=(await e(n,{method:`POST`,body:{query:`{
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