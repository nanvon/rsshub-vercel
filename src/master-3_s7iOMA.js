import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import"./parse-date-D4osZfpm.js";import"./proxy-C5Qog9Rm.js";import"./dist-0j_z2rfc.js";import"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{puppeteer_default as e}from"./puppeteer-U-cQNky4.js";import"./puppeteer-utils-C_FH363M.js";import{baseUrl as t,parsePage as n}from"./utils--_ZN24aN.js";const r={path:`/master/:channel`,categories:[`traditional-media`],example:`/cw/master/8`,parameters:{channel:`主頻道 ID，可在 URL 中找到`},features:{requireConfig:!1,requirePuppeteer:!0,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`主頻道`,maintainers:[`TonyRL`],handler:i,description:`| 主頻道名稱 | 主頻道 ID |
| ---------- | --------- |
| 財經       | 8         |
| 產業       | 7         |
| 國際       | 9         |
| 管理       | 10        |
| 環境       | 12        |
| 教育       | 13        |
| 人物       | 14        |
| 政治社會   | 77        |
| 調查排行   | 15        |
| 健康關係   | 79        |
| 時尚品味   | 11        |
| 運動生活   | 103       |
| 重磅外媒   | 16        |`};async function i(r){let i=await e(),{$:a,items:o}=await n(`master`,i,r);return await i.close(),{title:a(`head title`).text(),description:a(`meta[name=description]`).attr(`content`),link:`${t}/masterChannel.action?idMasterChannel=${r.req.param(`channel`)}`,image:`${t}/assets_new/img/fbshare.jpg`,language:a(`meta[property="og:locale"]`).attr(`content`),item:o}}export{r as route};