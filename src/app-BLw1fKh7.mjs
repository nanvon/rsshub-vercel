import{n as e,t}from"./esm-shims-D4LgnpSl.mjs";import"./config-L8Ls2W7q.mjs";import"./logger-C50fTRi5.mjs";import"./ofetch-CvLG4YCQ.mjs";import"./helpers-mo8InLYm.mjs";import{t as n}from"./cache-ZTWfXd2T.mjs";import{t as r}from"./render-CBhnapAf.mjs";import{t as i}from"./parse-date-bKmkZ9gg.mjs";import{t as a}from"./got-AYh7EWi-.mjs";import{t as o}from"./timezone-CE0MDOJ-.mjs";import s from"node:path";import{load as c}from"cheerio";e();const l={path:`/app/:column?`,categories:[`traditional-media`],example:`/gzdaily/app/74`,parameters:{column:`栏目 ID，点击对应栏目后在地址栏找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`客户端`,maintainers:[`TimWu007`],handler:u,description:`::: tip
  在北京时间深夜可能无法获取内容。
:::

  常用栏目 ID：

| 栏目名 | ID   |
| ------ | ---- |
| 首页   | 74   |
| 时局   | 374  |
| 广州   | 371  |
| 大湾区 | 397  |
| 城区   | 2980 |`};async function u(e){let l=e.req.param(`column`)??74,{data:u}=await a(`https://app.gzdaily.cn/app_if/getArticles?columnId=${l}&page=1`),d=u.list.filter(e=>e.newstype===0).map(e=>({title:e.title,description:r(s.join(t,`templates/description-60b509f9.art`),{thumb:e.picBig}),pubDate:o(i(e.publishtime),8),link:e.shareUrl,colName:e.colName,author:e.arthorName})),f=``,p=await Promise.all(d.map(e=>n.tryGet(e.link,async()=>{let t=c((await a({method:`get`,url:e.link})).data);return f=f===``?e.colName:f,t(`.abstract`).text()&&(t(`.abstract`).find(`span`).remove(),e.description+=`<blockquote>`+t(`.abstract`).text()+`</blockquote>`),e.description+=t(`.article`).html()??``,e})));return{title:`广州日报客户端 - ${f}`,link:`https://www.gzdaily.cn/amucsite/web/index.html#/home/${l}`,item:p}}export{l as route};