import"./esm-shims-Dqvxr0BZ.js";import"./config-BL2l-VlN.js";import"./logger-DWogN5HJ.js";import"./ofetch-e4r9n7lx.js";import"./helpers-gUVC02jt.js";import{got_default as e}from"./got-DF7DsGgk.js";const t={path:`/bookstore/newest`,categories:[`social-media`],example:`/zhihu/bookstore/newest`,parameters:{},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`知乎书店 - 新书`,maintainers:[`xyqfer`],handler:n};async function n(){return{title:`知乎书店-新书抢鲜`,link:`https://www.zhihu.com/pub/features/new`,item:(await e({method:`get`,url:`https://api.zhihu.com/books/features/new`})).data.data.map(e=>{let t=e.authors.map(e=>e.name).join(`、`);return{title:e.title,link:e.url,description:`
          <img src="${e.cover.replaceAll(/_.+\.jpg/g,`.jpg`)}"><br>
          <strong>${e.title}</strong><br>
          作者: ${t}<br><br>
          ${e.description}<br><br>
          价格: ${e.promotion.price/100}元
        `}})}}export{t as route};