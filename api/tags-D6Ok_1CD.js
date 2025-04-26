import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CDAeBYLA.js";import{cache_default as t}from"./cache-7MGQxbL-.js";import"./parse-date-B2cCVoGk.js";import{baseUrl$3 as n,gqlEndpoint as r,parseItem$3 as i}from"./utils-DYSMrqCK.js";import*as a from"cheerio";const o=r=>t.tryGet(`matters:tags:${r}`,async()=>{let t=await e(`${n}/tags/${r}`),i=a.load(t),o=JSON.parse(i(`script#__NEXT_DATA__`).text()),s=Object.entries(o.props.apolloState.data.ROOT_QUERY).find(([e])=>e.startsWith(`node`))?.pop();return s?.id.split(`:`)[1]}),s=async t=>{let{tid:a}=t.req.param(),s=t.req.query(`limit`)?Number.parseInt(t.req.query(`limit`),10):20,c=await o(a),l=await e(r,{method:`POST`,body:{query:`{
                node(input: {id: "${c}"}) {
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
              }`}}),u=l.data.node;return{title:`Matters | ${u.content}`,link:`${n}/tags/${a}`,description:u.description,item:u.articles.edges.map(({node:e})=>i(e))}},c={path:`/tags/:tid`,name:`Tags`,example:`/matters/tags/972-哲學`,parameters:{tid:`Tag id, can be found in the url of the tag page`},maintainers:[`Cerebrater`],handler:s,radar:[{source:[`matters.town/tags/:tid`]}]};export{c as route};