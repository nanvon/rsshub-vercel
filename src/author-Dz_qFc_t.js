import"./esm-shims-Dqvxr0BZ.js";import"./config-BL2l-VlN.js";import"./logger-DWogN5HJ.js";import{ofetch_default as e}from"./ofetch-e4r9n7lx.js";import"./parse-date-DHsdom8D.js";import{baseUrl as t,gqlEndpoint as n,parseItem as r}from"./utils-7OR11wpp.js";const i={path:`/author/:uid`,name:`Author`,example:`/matters/author/robertu`,parameters:{uid:`Author id, can be found at author's homepage url`},maintainers:[`Cerebrater`,`xosdy`],handler:async i=>{let{uid:a}=i.req.param(),o=i.req.query(`limit`)?Number.parseInt(i.req.query(`limit`),10):20,s=(await e(n,{method:`POST`,body:{query:`{
                user(input: {userName: "${a}"}) {
                  displayName
                  avatar
                  info {
                    description
                  }
                  articles(input: {first: ${o}}) {
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
              }`}})).data.user;return{title:`Matters | ${s.displayName}`,link:`${t}/@${a}`,description:s.info.description,image:s.avatar,item:s.articles.edges.map(({node:e})=>r(e))}},radar:[{source:[`matters.town/:uid`],target:e=>`/matters/author/${e.uid.slice(1)}`}]};export{i as route};