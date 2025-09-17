import"./esm-shims-BmHUa0Yk.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-DCfHHxuQ.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import"./render-CSnicFA3.js";import"./parse-date-DHsdom8D.js";import"./got-D5TEN1xL.js";import{ProcessItems as t,defaultLanguage as n,defaultMode as r,rootUrl as i}from"./utils-CMde2dzC.js";const a={path:`/star/:id/:language?/:mode?`,categories:[`multimedia`],example:`/javlibrary/star/abbds/en`,parameters:{id:`Star id, can be found in URL`,language:"Language, see below, Japanese by default, as `ja`",mode:"Mode, see below, videos with comments (by date) by default, as `1`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},name:`Videos by star`,maintainers:[`nczitzk`],handler:o,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Ranking](https://www.javlibrary.com/en/star_mostfav.php) to view stars by ranks.

  See [Directory](https://www.javlibrary.com/en/star_list.php) to view all stars.
:::`};async function o(a){let o=a.req.param(`id`),s=a.req.param(`mode`)??r,c=a.req.param(`language`)??n,l=`${i}/${c}/vl_star.php?list&s=${o}&mode=${s}`;return await t(c,l,e.tryGet)}export{a as route};