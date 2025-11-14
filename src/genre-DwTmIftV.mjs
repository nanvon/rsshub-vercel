import"./esm-shims-L08rKynx.mjs";import"./config-Bs8nOQqi.mjs";import"./logger-BvLYiR5T.mjs";import"./ofetch-1TBKTiHL.mjs";import"./helpers-mo8InLYm.mjs";import{t as e}from"./cache-BDs-9Wd7.mjs";import"./render-CBhnapAf.mjs";import"./parse-date-bKmkZ9gg.mjs";import"./got-Be7Twwza.mjs";import{a as t,n,o as r,r as i,t as a}from"./utils-Q5hd1dCa.mjs";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`,features:{nsfw:!0}};async function s(o){let s=o.req.param(`mode`)??t,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??i;return await a(l,`${r}/${l}/vl_genre.php?list&g=${c}&mode=${s}`,e.tryGet)}export{o as route};