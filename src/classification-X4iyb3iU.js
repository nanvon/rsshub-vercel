import"./esm-shims-Dqvxr0BZ.js";import"./config-BL2l-VlN.js";import"./logger-DWogN5HJ.js";import"./ofetch-e4r9n7lx.js";import"./helpers-gUVC02jt.js";import{got_default as e}from"./got-DF7DsGgk.js";const t={path:`/movie/classification/:sort?/:score?/:tags?`,categories:[`social-media`],example:`/douban/movie/classification/R/7.5/Netflix,2020`,parameters:{sort:`排序方式，默认为U`,score:`最低评分，默认不限制`,tags:`分类标签，多个标签之间用英文逗号分隔，常见的标签到豆瓣电影的分类页面查看，支持自定义标签`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`豆瓣电影分类`,maintainers:[`zzwab`],handler:n,description:`排序方式可选值如下

| 近期热门 | 标记最多 | 评分最高 | 最近上映 |
| -------- | -------- | -------- | -------- |
| U        | T        | S        | R        |`};async function n(t){let n=t.req.param(`sort`)||`U`,r=Number.parseFloat(t.req.param(`score`))||0,i=t.req.param(`tags`)||``,a=(await e({method:`get`,url:`https://movie.douban.com/j/new_search_subjects?sort=${n}&range=0,10&tags=${i}&start=0`})).data.data;return{title:`豆瓣电影分类${r?`超过 ${r} 分的`:``}影视`,link:`https://movie.douban.com/tag/#/?sort=U&range=0,10&tags=`,item:a.map(e=>(Number.parseFloat(e.rate)||0)>=r?{title:e.title,description:`标题：${e.title}<br>
                        评分：${e.rate}<br>
                        导演：${e.directors.join(` / `)}<br>
                        主演：${e.casts.join(` / `)}<br>
                        <img src="${e.cover}">`,link:e.url}:null).filter(Boolean),allowEmpty:!0}}export{t as route};