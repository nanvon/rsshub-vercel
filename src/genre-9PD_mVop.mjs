import"./esm-shims-D5mxTuu_.mjs";import"./config-CDM38Tpk.mjs";import"./logger-B0B1yUZ6.mjs";import"./ofetch-FkpIOIxH.mjs";import"./helpers-CMl_ndRq.mjs";import{t as e}from"./cache-C6z2tE2n.mjs";import"./render-D2i47mnC.mjs";import"./parse-date-Cv8vEJfE.mjs";import"./got-CxBlPaz_.mjs";import{a as t,n,o as r,r as i,t as a}from"./utils-BqgsJvxo.mjs";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`,features:{nsfw:!0}};async function s(o){let s=o.req.param(`mode`)??t,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??i;return await a(l,`${r}/${l}/vl_genre.php?list&g=${c}&mode=${s}`,e.tryGet)}export{o as route};