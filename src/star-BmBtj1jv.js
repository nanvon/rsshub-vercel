import"./esm-shims-DtWyl6zt.js";import"./config-CT-9jq-j.js";import"./logger-BsClR5PH.js";import"./dist-BrnquCU2.js";import"./helpers-DzX-lcQO.js";import{cache_default as e}from"./cache-DNP0KCHb.js";import"./render-sowsPyZZ.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-Of9UBhau.js";import"./got-Cw3q2eEq.js";import{ProcessItems as t,defaultLanguage as n,defaultMode as r,rootUrl as i}from"./utils-CSZjcGmr.js";const a={path:`/star/:id/:language?/:mode?`,categories:[`multimedia`],example:`/javlibrary/star/abbds/en`,parameters:{id:`Star id, can be found in URL`,language:"Language, see below, Japanese by default, as `ja`",mode:"Mode, see below, videos with comments (by date) by default, as `1`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},name:`Videos by star`,maintainers:[`nczitzk`],handler:o,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Ranking](https://www.javlibrary.com/en/star_mostfav.php) to view stars by ranks.

  See [Directory](https://www.javlibrary.com/en/star_list.php) to view all stars.
:::`};async function o(a){let o=a.req.param(`id`),s=a.req.param(`mode`)??r,c=a.req.param(`language`)??n,l=`${i}/${c}/vl_star.php?list&s=${o}&mode=${s}`;return await t(c,l,e.tryGet)}export{a as route};