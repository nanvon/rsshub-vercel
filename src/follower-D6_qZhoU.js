import"./esm-shims-BGJi2y--.js";import{config as e}from"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CbgiXYAi.js";import"./helpers-gUVC02jt.js";import{got_default as t}from"./got-Do9KqzqD.js";import{config_not_found_default as n}from"./config-not-found-B7nOMdXp.js";const r={path:`/user/followers/:user`,categories:[`programming`],example:`/github/user/followers/HenryQW`,parameters:{user:`GitHub username`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`github.com/:user`]}],name:`User Followers`,maintainers:[`HenryQW`],handler:i};async function i(r){if(!e.github||!e.github.access_token)throw new n(`GitHub follower RSS is disabled due to the lack of <a href="https://docs.rsshub.app/deploy/config#route-specific-configurations">relevant config</a>`);let i=r.req.param(`user`),a=`https://github.com/${i}`,o=(await t({method:`post`,url:`https://api.github.com/graphql`,headers:{Authorization:`bearer ${e.github.access_token}`},json:{query:`
            {
                user(login: "${i}") {
                  followers(first: 10) {
                    edges {
                      node {
                        login
                        avatarUrl
                      }
                    }
                  }
                }
              }
            `}})).data.data.user.followers.edges;return{allowEmpty:!0,title:`${i}'s followers`,link:a,item:o.map(e=>({title:`${e.node.login} started following ${i}`,author:e.node.login,description:`<a href="https://github.com/${e.node.login}">${e.node.login}</a> <br> <img sytle="width:50px;" src='${e.node.avatarUrl}'>`,link:`https://github.com/${e.node.login}`}))}}export{r as route};