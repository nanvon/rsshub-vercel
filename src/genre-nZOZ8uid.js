import"./esm-shims-2LyWUseo.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-BLnIkXRv.js";import"./helpers-gUVC02jt.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import"./render-CSnicFA3.js";import"./parse-date-DHsdom8D.js";import"./got-DPq_2TLS.js";import{ProcessItems as t,defaultGenre as n,defaultLanguage as r,defaultMode as i,rootUrl as a}from"./utils-CEURoTqu.js";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`};async function s(o){let s=o.req.param(`mode`)??i,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??r,u=`${a}/${l}/vl_genre.php?list&g=${c}&mode=${s}`;return await t(l,u,e.tryGet)}export{o as route};