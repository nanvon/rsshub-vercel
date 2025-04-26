import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CWQqZcqz.js";import{load as t}from"cheerio";const n=`wohnnet.at`,r=`https://www.wohnnet.at/media/images/wohnnet/icon_192_192.png`,i=`de`,a=`/wohnnet/`,o=`https://www.wohnnet.at/immobilien/`,s={name:`Immobiliensuche`,path:`/:category/:region/*`,maintainers:[`sk22`],categories:[`other`],description:`
Only returns the first page of search results, allowing you to keep track of
newly added apartments. If you're looking for an apartment, make sure to also
look through the other pages on the website.

:::tip
Note that the parameter \`&sortierung=neueste-zuerst\` for chronological order
is automatically appended.
:::

:::tip
To get your query URL, go to https://www.wohnnet.at/immobilien/suche, apply
all desired filters (but at least a category and a region!) and click the
"… Treffer anzeigen" link. From the resulting URL, cut off the
\`https://www.wohnnet.at/immobilien/\` part at the beginning and replace only
the \`?\` (the \`&\`s stay as is!) after the region name with a \`/\`.

Examples:

* \`${o}mietwohnungen/wien\`
    - → \`${a}mietwohnungen/wien\`
* \`${o}mietwohnungen/wien?unterregionen=g90101\`
    - → \`${a}mietwohnungen/wien/unterregionen=g90101\`
* \`${o}mietwohnungen/wien?unterregionen=g90101&merkmale=balkon\`
    - → \`${a}mietwohnungen/wien/unterregionen=g90101&merkmale=balkon\`
:::
`,example:a+`mietwohnungen/wien/unterregionen=g90101--g90201--g90301--g90401--g90501&flaeche=40&preis=-1000`,parameters:{category:"Category (`mietwohnungen`, `eigentumswohnungen`, `grundstuecke`, …)",region:"Region (`wien`, `oesterreich`, …)",unterregionen:"Unterregionen (e.g. `g90101--g90201--g90301`)",intention:"Intention (`kauf` | `miete`)",zimmer:"Zimmer (at least number, e.g. `2`)",flaeche:"Fläche (m², `40-` = at least 40 m², `40-60` = between 40 m² and 60 m²)",preis:"Preis (€, `-1000` = at most 1,000 €, `500-1000` = between 500 € and 1,000 €)",merkmale:"Merkmale (multiple, delimited by `--`, e.g. `balkon--garten--kurzzeitmiete--moebliert--parkplatz--provisionsfrei--sofort-beziehbar`)"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},async handler(s){let c=s.req.param(`category`),l=s.req.param(`region`),u=s.req.path.slice(`${a}${c}/${l}/`.length)+`&sortierung=neueste-zuerst`;u.startsWith(`&`)&&(u=u.slice(1));let d=`${o}${c}/${l}/?${u}`,f=await e(d),p=t(f),m=p(`a:has(> .realty)`).toArray().map(e=>{let t=p(e),n=t.attr(`href`),[r,i]=t.find(`.realty-detail-title-address`).text().split(`
`).map(e=>e.trim()).filter(e=>e.length),a=t.find(`.realty-detail-area-rooms .text-right`).text().trim(),s=t.find(`.realty-detail-area-rooms`).text().split(`
`).map(e=>e.trim()).filter(e=>e.length),c=t.find(`.realty-detail-badges .badge`).toArray().map(e=>p(e).text().trim()),l=t.find(`.realty-detail-agency`).text(),u=t.find(`.realty-image img`).attr(`src`),d=`${i} · ${a} | ${r}`,f=new URL(n??``,o).href,m=`${s.join(` · `)} | ${c.join(` · `)} | ${l}`,h=c.filter(e=>!e.endsWith(` Bilder`)),g=u?new URL(u,o).href:void 0;return{title:d,link:f,description:m,category:h,image:g}});return{title:n,language:i,logo:r,allowEmpty:!0,item:m,link:d}}};export{s as route};