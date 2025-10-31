import{n as e,t}from"./esm-shims-BC3isTv8.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import{t as n}from"./ofetch-CfXAR0UO.js";import{t as r}from"./cache-CpEhLexq.js";import{t as i}from"./render-d6AVTUl2.js";import{t as a}from"./parse-date-CHEO0z5G.js";import o from"node:path";e();const s={path:`/user/sheets/:username/:iso?/:freeOnly?`,categories:[`shopping`],example:`/mymusicsheet/user/sheets/HalcyonMusic/USD/1`,parameters:{username:`Username, can be found in the URL`,iso:"ISO 4217 currency code for displaying prices, defaults to `USD`",freeOnly:`Only return free scores, any value to enable`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`mymusicfive.com/:username/*`,`mymusicfive.com/:username`],target:`/user/sheets/:username`}],name:`User Sheets`,maintainers:[`Freddd13`],handler:c,description:`Please refer to [Wikipedia](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) for ISO 4217.`};async function c(e){let s=`https://mms.pd.mapia.io/mms/graphql`,{username:c,iso:l=`USD`,freeOnly:u}=e.req.param(),d=await r.tryGet(`mymusicfive:exchangeRate`,()=>n(`https://payport.pd.mapia.io/v2/currency`,{query:{serviceProvider:`mms`,"ngsw-bypass":!0,"no-cache":Date.now(),skipHeaders:!0}})),f=(await r.tryGet(`mymusicfive:artistInfo:${c}`,()=>n(s,{method:`POST`,body:{operationName:`ArtistDetailLoadUser`,query:`
              query ArtistDetailLoadUser($artistUrl: String!) {
                user(artistUrl: $artistUrl) {
                  coverUrl
                  coverImageMeta {
                    isDark
                    isLight
                    startRgba: rgba(opacity: 1)
                    endRgba: rgba(opacity: 0.24)
                  }
                  createdAt
                  instruments
                  userId
                  name
                  profileUrl
                  iamUuid
                  artistUrl
                  profileImageMeta {
                    startRgba: rgba(opacity: 1)
                    endRgba: rgba(opacity: 0.24)
                    hex
                    isDark
                  }
                  social {
                    type
                    url
                  }
                  sheetsCount
                  isArtist
                  isOfficial
                  likes
                  seoInfo {
                    title
                    description
                    keywords
                    imageUrl
                  }
                  uploadedInstrumentGroups {
                    name
                    instruments {
                      name
                    }
                  }
                }
              }`,variables:{artistUrl:c}}}))).data.user,p=(await n(s,{method:`POST`,body:{operationName:`loadArtistSheets`,query:`
          query loadArtistSheets($data: SheetSearchInput!) {
            sheetSearch(data: $data) {
              list {
                productId
                productType
                metaSong
                metaMaker
                metaMusician
                metaMemo
                instruments
                createdAt
                level
                price
                sheetId
                status
                author {
                  name
                  artistUrl
                  profileUrl
                }
                youtubeId
                title
                supportCountry
                excludeCountries
                __typename
              }
              total
              current
              listNum
            }
          }`,variables:{data:{listNum:10,paginate:`page`,includeChord:null,includeLyrics:null,page:1,level:null,instruments:[],orderBy:{createdAt:`DESC`},isFree:u?!0:null,category:null,artistUrl:c,aggregationKeywords:[`PACKAGE_IDS`,`TAG_IDS`,`INSTRUMENTS`,`SHEET_TYPE`,`INCLUDE_CHORD`,`INCLUDE_LYRICS`,`INSTRUMENTATION`,`LEVEL`,`CATEGORY`],aggregationKeySize:20}}}})).data.sheetSearch.list.map(e=>{let n=`Unknown`,r=Number.parseFloat(e.price);if(e.price===0)n=`Free`;else if(!Number.isNaN(r)&&Number.isFinite(r)){let e=Number.parseFloat(d[l]);e&&(n=`${(r*e).toFixed(2)} ${l}`)}let s=e.youtubeId,u={musicName:e.metaSong,musicMemo:e.metaMemo,musicianName:e.metaMusician,instruments:e.instruments,status:e.status,price:n};return{title:`${e.title} | ${n}`,link:`https://www.mymusicfive.com/${c}/${e.sheetId}`,guid:`https://www.mymusicsheet.com/${c}/${e.sheetId}`,itunes_item_image:e.author.profileUrl,description:i(o.join(t,`templates/description-6ed77af6.art`),{youtubeId:s,content:u}),author:e.author.name,pubDate:a(e.createdAt)}});return{title:f.seoInfo.title||`${f.name}'s Music Sheets`,description:f.seoInfo.description,image:f.profileUrl,link:`https://www.mymusicfive.com/${c}?viewType=sheet&orderBy=createdAt`,item:p}}export{s as route};