import"./esm-shims-BC3isTv8.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CfXAR0UO.js";import"./helpers-Cqaav28H.js";import{t as e}from"./got-dCh-Ojgc.js";import t from"query-string";const n={path:`/firmware/:device/:type?/:region?`,categories:[`program-update`],example:`/miui/firmware/aries`,parameters:{device:"the device `codename` eg. `aries` for Mi 2S",type:`type`,region:"Region, default to `cn`"},name:`New firmware`,maintainers:[`Indexyz`],description:`  | stable  | development |
| ------- | ----------- |
| release | dev         |

| region | region |
| ------ | ------ |
| China  | cn     |
| Global | global |`,handler:r};async function r(n){let{type:r=`release`,device:i,region:a=`cn`}=n.req.param(),o=r===`release`?`F`:`X`,s=r===`release`?`稳定版`:`开发版`,c=a===`global`?`global`:`cn`,l=(await e({method:`get`,url:`http://update.miui.com/updates/miota-fullrom.php`,searchParams:t.stringify({d:i,b:o,r:c,l:`zh_CN`,n:``})})).data;return{title:`MIUI 更新 - ${i} - ${r===`release`?`稳定版`:`开发版`}`,link:`http://www.miui.com/download.html`,item:[{title:`${i} 有新的 ${s}本: ${l.LatestFullRom.version}`,guid:l.LatestFullRom.md5,description:l.LatestFullRom.filename,link:l.LatestFullRom.descriptionUrl}]}}export{n as route};