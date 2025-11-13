import{n as e,t}from"./esm-shims-L08rKynx.mjs";import"./config-Bs8nOQqi.mjs";import"./logger-BvLYiR5T.mjs";import"./ofetch-1TBKTiHL.mjs";import"./helpers-mo8InLYm.mjs";import{t as n}from"./render-CBhnapAf.mjs";import{t as r}from"./got-Be7Twwza.mjs";import{t as i}from"./utils-B7CjPeCQ.mjs";import a from"node:path";e();const o={path:`/new-arrivals/:country/:gender`,categories:[`shopping`],example:`/arcteryx/new-arrivals/us/mens`,parameters:{country:`country`,gender:`gender`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`arcteryx.com/:country/en/c/:gender/new-arrivals`]}],name:`New Arrivals`,maintainers:[`EthanWng97`],handler:s,description:`Country

| United States | Canada | United Kingdom |
| ------------- | ------ | -------------- |
| us            | ca     | gb             |

  gender

| male | female |
| ---- | ------ |
| mens | womens |

::: tip
  Parameter \`country\` can be found within the url of \`Arcteryx\` website.
:::`};async function s(e){let{country:o,gender:s}=e.req.param(),c=`https://arcteryx.com/${o}/en/`,l=`${c}api/fredhopper/query`,u=`${c}shop/`,d=`${c}c/${s}/new-arrivals`,f=(await r({method:`get`,url:l,searchParams:{fh_location:`//catalog01/en_CA/gender>{${s}}/intended_use>{newarrivals}`,fh_country:o,fh_view_size:`all`}})).data.universes.universe[1][`items-section`].items.item.map((e,t,n)=>i(e,t,n,o));return{title:`Arcteryx - New Arrivals(${o.toUpperCase()}) - ${s.toUpperCase()}`,link:d,description:`Arcteryx - New Arrivals(${o.toUpperCase()}) - ${s.toUpperCase()}`,item:f.map(e=>({title:e.name,link:u+e.slug,description:n(a.join(t,`templates/product-description-3714d586.art`),{item:e})}))}}export{o as route};