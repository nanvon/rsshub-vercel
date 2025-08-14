import"./esm-shims-DtWyl6zt.js";import"./config-BpwDbAkH.js";import"./logger-B3QfaIfn.js";import"./dist-CKN2M7CD.js";import"./cache-BWStd97H.js";import"./render-CxhTJIsl.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CYKAhM9L.js";import"./utils-tspXUJ1q.js";import{handler as e}from"./review-Coh42H9b.js";const t={path:`/intl/review/:id/:order?/:lang?`,categories:[`game`],example:`/taptap/intl/review/82354/recent`,parameters:{id:`Game's App ID, you may find it from the URL of the Game`,order:"Sort Method, default is `helpful`, checkout the table below for possible values",lang:"Language, checkout the table below for possible values, default is `en_US`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.taptap.io/app/:id/review`,`www.taptap.io/app/:id`],target:`/intl/review/:id`}],name:`Ratings & Reviews`,maintainers:[`hoilc`,`TonyRL`,`ETiV`],handler:e,description:`Sort Method

| Most Helpful | Most Recent |
| ------------ | ----------- |
| helpful      | recent      |

Language Code

| English (US) | 繁體中文 | 한국어 | 日本語 |
| ------------ | -------- | ------ | ------ |
| en_US       | zh_TW   | ko_KR | ja_JP |`};export{t as route};