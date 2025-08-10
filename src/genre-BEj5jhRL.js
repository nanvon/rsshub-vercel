import"./esm-shims-wKwH419_.js";import"./config-CCdhzIDL.js";import"./logger-tpjCqWRm.js";import"./dist-CTnfpkZH.js";import"./helpers-DzX-lcQO.js";import{cache_default as e}from"./cache-BqH0BkVy.js";import"./render-CxhTJIsl.js";import"./parse-date-Bgabdhlb.js";import"./ofetch-CeSje37P.js";import"./got-CgIPcr_1.js";import{ProcessItems as t,defaultGenre as n,defaultLanguage as r,defaultMode as i,rootUrl as a}from"./utils-CsrGGox-.js";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`};async function s(o){let s=o.req.param(`mode`)??i,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??r,u=`${a}/${l}/vl_genre.php?list&g=${c}&mode=${s}`;return await t(l,u,e.tryGet)}export{o as route};