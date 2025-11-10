import"./esm-shims-DIdKin6S.mjs";import"./config-PItPnVIx.mjs";import"./logger-BoKmWr7Z.mjs";import"./ofetch-rVU2XYFs.mjs";import"./cache-KwJARS5Z.mjs";import"./render-ZYpwNl2L.mjs";import"./parse-date-9Tu6hSFW.mjs";import"./utils-DzzhRRHM.mjs";import{t as e}from"./review-B4sLPeLO.mjs";const t={path:`/intl/review/:id/:order?/:lang?`,categories:[`game`],example:`/taptap/intl/review/82354/recent`,parameters:{id:`Game's App ID, you may find it from the URL of the Game`,order:"Sort Method, default is `helpful`, checkout the table below for possible values",lang:"Language, checkout the table below for possible values, default is `en_US`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.taptap.io/app/:id/review`,`www.taptap.io/app/:id`],target:`/intl/review/:id`}],name:`Ratings & Reviews`,maintainers:[`hoilc`,`TonyRL`,`ETiV`],handler:e,description:`Sort Method

| Most Helpful | Most Recent |
| ------------ | ----------- |
| helpful      | recent      |

Language Code

| English (US) | 繁體中文 | 한국어 | 日本語 |
| ------------ | -------- | ------ | ------ |
| en_US       | zh_TW   | ko_KR | ja_JP |`};export{t as route};