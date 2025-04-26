import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CWQqZcqz.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";const n={path:`/quest/:alias`,name:`Quest`,url:`app.galxe.com`,maintainers:[`cxheng315`],example:`/galxe/quest/MissionWeb3`,categories:[`other`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`app.galxe.com/quest/:alias`],target:`/quest/:alias`}],handler:r};async function r(n){let r=`https://graphigo.prd.galaxy.eco/query`,i=n.req.param(`alias`),a=await e(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:{variables:{alias:i,campaignInput:{first:n.req.query(`limit`)?Number.parseInt(n.req.query(`limit`)):50,excludeChildren:!0,listType:`Newest`}},query:`
                query BrowseSpaceCampaigns($id: Int, $alias: String, $campaignInput: ListCampaignInput!) {
                    space(id: $id, alias: $alias) {
                        id
                        name
                        alias
                        info
                        campaigns(input: $campaignInput) {
                            list {
                                startTime
                                endTime
                                id
                                name
                                description
                                __typename
                            }
                            pageInfo {
                                endCursor
                                hasNextPage
                                __typename
                            }
                            __typename
                        }
                        __typename
                    }
                }
            `}}),o=a.data.space,s=o.campaigns.list.map(e=>({title:e.name,link:`https://app.galxe.com/quest/${i}/${e.id}`,description:e.description,pubDate:e.startTime?t(e.startTime*1e3):null}));return{title:o.name,description:o.info,link:`https://app.galxe.com/quest/${i}`,item:s,author:o.alias}}export{n as route};