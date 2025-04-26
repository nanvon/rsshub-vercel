import{__dirname as e,init_esm_shims as t}from"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{art as n}from"./render-DE4LRFBD.js";import{got_default as r}from"./got-BwctkUCD.js";import i from"node:path";t();const a={path:`/user/sheets/:username/:iso?/:freeOnly?`,categories:[`shopping`],example:`/mymusicsheet/user/sheets/HalcyonMusic/USD/1`,parameters:{username:`用户名，可在URL中找到`,iso:"用于显示价格的ISO 4217货币代码, 支持常见代码, 默认为人民币, 即`CNY`",freeOnly:`只返回免费谱, 任意值为开启`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`mymusicsheet.com/:username/*`,`mymusicsheet.com/:username`],target:`/user/sheets/:username`}],name:`User Sheets`,maintainers:[`Freddd13`],handler:o,description:`关于 ISO 4217，请参考[维基百科](https://zh.wikipedia.org/zh-cn/ISO_4217#%E7%8E%B0%E8%A1%8C%E4%BB%A3%E7%A0%81)`};async function o(t){let a=`https://www.mymusicsheet.com`,o=`https://mms.pd.mapia.io/mms/graphql`,s=`https://payport.pd.mapia.io/v2/currency`,{username:c,iso:l=`CNY`,freeOnly:u}=t.req.param(),d=await r(s,{searchParams:{serviceProvider:`mms`,"ngsw-bypass":!0,"no-cache":Date.now(),skipHeaders:!0},responseType:`json`}),f=d.data,p=await r.post(o,{json:{operationName:`loadArtistSheets`,query:`
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
          }`,variables:{data:{listNum:10,paginate:`page`,includeChord:null,includeLyrics:null,page:1,level:null,instruments:[],orderBy:{createdAt:`DESC`},isFree:!!u,category:null,artistUrl:c,aggregationKeywords:[`PACKAGE_IDS`,`TAG_IDS`,`INSTRUMENTS`,`SHEET_TYPE`,`INCLUDE_CHORD`,`INCLUDE_LYRICS`,`INSTRUMENTATION`,`LEVEL`,`CATEGORY`],aggregationKeySize:20}}},responseType:`json`}),m=p.data.data.sheetSearch.list,h=m.map(t=>{let r=`Unknown`,o=Number.parseFloat(t.price);if(t.price===0)r=`Free`;else if(!isNaN(o)&&isFinite(o)){let e=f[l];e&&(r=`${(o*e).toFixed(2)} ${l}`)}let s=t.youtubeId,u={musicName:t.metaSong,musicMemo:t.metaMemo,musicianName:t.metaMusician,author:t.author.name,instruments:t.instruments,status:t.status,price:r};return{title:`${t.author.name} | ${t.title} | ${r}`,link:`${a}/${c}/${t.sheetId}`,itunes_item_image:t.author.profileUrl,description:n(i.join(e,`templates/description-21692767.art`),{youtubeId:s,content:u})}});return{title:`${c}'s sheets`,link:`https://www.mymusicsheet.com/${c}?viewType=sheet&orderBy=createdAt`,item:h}}export{a as route};