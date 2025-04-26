import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t,parseRelativeDate as n}from"./parse-date-DHsdom8D.js";import{got_default as r}from"./got-BwctkUCD.js";import{load as i}from"cheerio";const a=`https://bbs.kanxue.com/`,o={iot:[128,`智能设备`],android:[161,`Android安全`],ios:[166,`iOS安全`],harmonyos:[178,`HarmonyOS安全`],re:[4,`软件逆向`],coding:[41,`编程技术`],unpack:[88,`加壳脱壳`],crypto:[132,`密码应用`],vuln:[150,`二进制漏洞`],ctf:[37,`CTF对抗`],pwn:[171,`Pwn`],web:[151,`WEB安全`],chat:[45,`茶余饭后`],geekzone:[172,`极客空间`],translate:[32,`外文翻译`]},s={path:`/topic/:category?/:type?`,categories:[`bbs`],example:`/kanxue/topic/android/digest`,parameters:{category:"版块, 缺省为`all`",type:"类型, 缺省为`latest`"},name:`论坛`,maintainers:[`renzhexigua`],handler:l,description:`| 版块           | category  |
| -------------- | --------- |
| 智能设备       | iot       |
| Android 安全   | android   |
| iOS 安全       | ios       |
| HarmonyOS 安全 | harmonyos |
| 软件逆向       | re        |
| 编程技术       | coding    |
| 加壳脱壳       | unpack    |
| 密码应用       | crypto    |
| 二进制漏洞     | vuln      |
| CTF 对抗       | ctf       |
| Pwn            | pwn       |
| WEB 安全       | web       |
| 茶余饭后       | chat      |
| 极客空间       | geekzone  |
| 外文翻译       | translate |
| 全站           | all       |

| 类型     | type   |
| -------- | ------ |
| 最新主题 | latest |
| 精华主题 | digest |`},c=1e3*60*60*24*3;async function l(s){let l=s.req.param(`category`)||`all`,u=s.req.param(`type`)||`latest`,d,f;Object.hasOwn(o,l)?u===`digest`?(d=`forum-${o[l][0]}-1.htm?digest=1`,f=`看雪论坛精华主题 - ${o[l][1]}`):(d=`forum-${o[l][0]}.html`,f=`看雪论坛最新主题 - ${o[l][1]}`):l===`digest`?(d=`new-digest.htm`,f=`看雪论坛精华主题`):(d=`new-tid.htm`,f=`看雪论坛最新主题`);let p=await r({method:`get`,url:a+d,headers:{Referer:a}}),m=i(p.data),h=m(`.thread`),g=await Promise.all(h?h.filter((e,r)=>{let i=m(`.date`,r).eq(0).text(),a=i.endsWith(`前`)?n(i):t(i.substring(1));return!r.attribs.class.includes(`top`)||Date.now()-a.valueOf()<c}).map((o,s)=>{let c=m(`.subject a`,s).eq(1),l=m(`.date`,s).eq(0).text(),u=l.endsWith(`前`)?n(l):t(l.substring(1)),d=`${a}${c.attr(`href`)}`,f=`kanxue: ${d}`;return e.tryGet(f,async()=>{let e=await r({method:`get`,url:d}),t=i(e.data);t(`.card`).eq(0).find(`.message img`).each((e,n)=>{n=t(n);let r=n.attr(`src`);r!==void 0&&!r.startsWith(`https://`)&&!r.startsWith(`http://`)&&n.attr(`src`,`https://bbs.kanxue.com/${r}`)});let n=t(`.card`).eq(0).find(`.message`).html();return{title:c.text(),link:d,pubDate:u,description:n}})}).get():[]);return{title:f,link:a+d,item:g,allowEmpty:!0}}export{s as route};