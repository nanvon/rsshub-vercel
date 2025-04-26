import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CWQqZcqz.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";const n={path:`/profile/:handle`,name:`Link3 Profile`,url:`link3.to`,maintainers:[`cxheng315`],example:`/link3/profile/synfutures_defi`,parameters:{handle:`Profile handle`},categories:[`other`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`link3.to/:handle`],target:`/:handle`}],handler:r};async function r(n){let r=`https://api.cyberconnect.dev/profile/`,i=n.req.param(`handle`),a=await e(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:{variables:{handle:i},query:`
                query getProfile($id: ID, $handle: String) {
                    profile(id: $id, handle: $handle) {
                        status
                        data {
                            handle
                            ... on OrgProfile {
                                displayName
                                bio
                                profilePicture
                                backgroundPicture
                                __typename
                            }
                            ... on PerProfile {
                                bio
                                personalDisplayName: displayName {
                                    displayName
                                }
                                personalProfilePicture: profilePicture {
                                    picture
                                }
                                personalBackgroundPicture: backgroundPicture {
                                    picture
                                }
                                __typename
                            }
                            blocks {
                                ... on Block {
                                    ... on EventBlock {
                                        __typename
                                        events {
                                            id
                                            title
                                            info
                                            posterUrl
                                            startTimestamp
                                            endTimestamp
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            `}}),o=a.data.profile.status;if(o!==`SUCCESS`)return{title:`Error`,description:`Profile not found`,items:[{title:`Error`,description:`Profile not found`,link:`https://link3.to/${i}`}]};let s=a.data.profile.data,c=s.blocks.filter(e=>e.__typename===`EventBlock`).flatMap(e=>e.events).map(e=>({title:e.title,link:`https://link3.to/e/${e.id}`,description:e.info??``,author:s.handle,guid:e.id,pubDate:e.startTimestamp?t(e.startTimestamp*1e3):null,itunes_item_image:e.posterUrl,itunes_duration:e.endTimestamp-e.startTimestamp}));return{title:s.displayName??s.personalDisplayName.displayName,link:`https://link3.to/${s.handle}`,description:s.bio,logo:s.profilePicture??s.personalProfilePicture.picture,image:s.profilePicture??s.personalProfilePicture.picture,author:s.handle,item:c&&c.length>0?c:[{title:`No events`,description:`No events`,link:`https://link3.to/${i}`}]}}export{n as route};