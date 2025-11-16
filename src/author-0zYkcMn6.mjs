import"./esm-shims-L08rKynx.mjs";import"./config-L8Ls2W7q.mjs";import"./logger-C50fTRi5.mjs";import{t as e}from"./ofetch-BMqiDsx_.mjs";import"./parse-date-bKmkZ9gg.mjs";import{n as t,r as n,t as r}from"./utils-Pjrqbno7.mjs";const i={path:`/author/:uid`,name:`Author`,example:`/matters/author/robertu`,parameters:{uid:`Author id, can be found at author's homepage url`},maintainers:[`Cerebrater`,`xosdy`],handler:async i=>{let{uid:a}=i.req.param(),o=(await e(t,{method:`POST`,body:{query:`{
                user(input: {userName: "${a}"}) {
                  displayName
                  avatar
                  info {
                    description
                  }
                  articles(input: {first: ${i.req.query(`limit`)?Number.parseInt(i.req.query(`limit`),10):20}}) {
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
              }`}})).data.user;return{title:`Matters | ${o.displayName}`,link:`${r}/@${a}`,description:o.info.description,image:o.avatar,item:o.articles.edges.map(({node:e})=>n(e))}},radar:[{source:[`matters.town/:uid`],target:e=>`/matters/author/${e.uid.slice(1)}`}]};export{i as route};