import"./esm-shims-Dqvxr0BZ.js";import"./config-1ATZGjxb.js";import"./logger-B19BYg4C.js";import{ofetch_default as e}from"./ofetch-B4O0sZDE.js";import"./parse-date-DHsdom8D.js";import{baseUrl as t,gqlEndpoint as n,parseItem as r}from"./utils-7OR11wpp.js";const i=async i=>{let{type:a=`latest`}=i.req.param(),o=i.req.query(`limit`)?Number.parseInt(i.req.query(`limit`),10):20,s={latest:{title:`最新`,apiType:`newest`},heat:{title:`熱議`,apiType:`hottest`},essence:{title:`精華`,apiType:`icymi`}},c=await e(n,{method:`POST`,body:{query:`{
                viewer {
                  recommendation {
                    feed: ${s[a].apiType}(input: {first: ${o}}) {
                      edges {
                        node {
                          shortHash
                          title
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
              }`}}),l=c.data.viewer.recommendation.feed.edges.map(({node:e})=>r(e));return{title:`Matters | ${s[a].title}`,link:t,item:l}},a={path:`/latest/:type?`,name:`Latest, heat, essence`,example:`/matters/latest/heat`,parameters:{uid:`Defaults to latest, see table below`},maintainers:[`xyqfer`,`Cerebrater`,`xosdy`],handler:i,radar:[{source:[`matters.town`]}],description:`| 最新   | 热门 | 精华    |
| ------ | ---- | ------- |
| latest | heat | essence |`};export{a as route};