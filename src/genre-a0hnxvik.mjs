import"./esm-shims-DIdKin6S.mjs";import"./config-PItPnVIx.mjs";import"./logger-BoKmWr7Z.mjs";import"./ofetch-rVU2XYFs.mjs";import"./helpers-vRt84cId.mjs";import{t as e}from"./cache-KwJARS5Z.mjs";import"./render-ZYpwNl2L.mjs";import"./parse-date-9Tu6hSFW.mjs";import"./got-BeQM9q-W.mjs";import{a as t,n,o as r,r as i,t as a}from"./utils-BrN0Dx_S.mjs";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`,features:{nsfw:!0}};async function s(o){let s=o.req.param(`mode`)??t,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??i;return await a(l,`${r}/${l}/vl_genre.php?list&g=${c}&mode=${s}`,e.tryGet)}export{o as route};