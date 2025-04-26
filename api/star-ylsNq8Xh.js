import"./esm-shims-CtP6w_ML.js";import{config as e}from"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CDAeBYLA.js";import"./helpers-RrXnNmv1.js";import{got_default as t}from"./got-Cw4D6IS5.js";import{ViewType as n}from"./types-DygLf1a3.js";import{config_not_found_default as r}from"./config-not-found-DTjmIGAO.js";const i={path:`/stars/:user/:repo`,categories:[`programming`,`popular`],example:`/github/stars/DIYgod/RSSHub`,view:n.Notifications,parameters:{user:`GitHub username`,repo:`GitHub repo name`},features:{requireConfig:[{name:`GITHUB_ACCESS_TOKEN`,description:`GitHub Access Token`}]},radar:[{source:[`github.com/:user/:repo/stargazers`,`github.com/:user/:repo`]}],name:`Repo Stars`,maintainers:[`HenryQW`],handler:a};async function a(n){if(!e.github||!e.github.access_token)throw new r(`GitHub star RSS is disabled due to the lack of <a href="https://docs.rsshub.app/deploy/config#route-specific-configurations">relevant config</a>`);let i=n.req.param(`user`),a=n.req.param(`repo`),o=`https://github.com/${i}/${a}/stargazers`,s=`https://api.github.com/graphql`,c=await t({method:`post`,url:s,headers:{Authorization:`bearer ${e.github.access_token}`},json:{query:`
            {
                repository(owner: "${i}", name: "${a}") {
                  stargazers(last: 10) {
                    edges {
                      node {
                        login
                        avatarUrl
                      }
                    }
                  }
                }
              }
            `}}),l=c.data.data.repository.stargazers.edges.reverse();return{allowEmpty:!0,title:`${i}/${a}’s stargazers`,link:o,item:l.map(e=>({title:`${e.node.login} starred ${i}/${a}`,author:e.node.login,description:`<a href="https://github.com/${e.node.login}">${e.node.login}</a> <br> <img sytle="width:50px;" src='${e.node.avatarUrl}'>`,link:`https://github.com/${e.node.login}`}))}}export{i as route};