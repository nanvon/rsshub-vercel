import"./esm-shims-BGJi2y--.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-rK3Yp7nj.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import"./render-DftO2d-b.js";import"./parse-date-DHsdom8D.js";import"./got-Bnno2HfO.js";import{ProcessItems as t,defaultGenre as n,defaultLanguage as r,defaultMode as i,rootUrl as a}from"./utils-C27HHIav.js";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`,features:{nsfw:!0}};async function s(o){let s=o.req.param(`mode`)??i,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??r;return await t(l,`${a}/${l}/vl_genre.php?list&g=${c}&mode=${s}`,e.tryGet)}export{o as route};