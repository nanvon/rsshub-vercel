import"./esm-shims-BKVRry6h.mjs";import"./config-uQhBoCds.mjs";import"./logger-DQf7gybc.mjs";import"./ofetch-7N8fmlQ6.mjs";import"./helpers-C6Jountz.mjs";import{t as e}from"./cache-BXZZTZVV.mjs";import"./render-_fW2cbJz.mjs";import"./parse-date-C2HciIa2.mjs";import"./got-DcbI0XpN.mjs";import{a as t,n,o as r,r as i,t as a}from"./utils-DsPltUI-.mjs";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`,features:{nsfw:!0}};async function s(o){let s=o.req.param(`mode`)??t,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??i;return await a(l,`${r}/${l}/vl_genre.php?list&g=${c}&mode=${s}`,e.tryGet)}export{o as route};