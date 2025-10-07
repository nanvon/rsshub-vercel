import"./esm-shims-BGJi2y--.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as e}from"./ofetch-CISb_5Uo.js";import{cache_default as t}from"./cache-Dfid4xgQ.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{ViewType as r}from"./types-Bi82qguM.js";import{load as i}from"cheerio";const a=async r=>{let{id:a=`xwdt/gzdt`}=r.req.param(),o=Number.parseInt(r.req.query(`limit`)??`17`,10),s=`https://www.samrdprc.org.cn`,c=new URL(a.endsWith(`/`)?a:`${a}/`,s).href,l=await e(c),u=i(l),d=u(`html`).attr(`lang`)??`zh`,f=[];return f=u(`div.boxl_ul ul li`).slice(0,o).toArray().map(e=>{let t=u(e),r=t.find(`a`).first(),i=r.text(),a=t.find(`span`).text(),o=r.attr(`href`),s=a;return{title:i,pubDate:a?n(a):void 0,link:o?new URL(o,c).href:void 0,updated:s?n(s):void 0,language:d}}),f=await Promise.all(f.map(r=>r.link?t.tryGet(r.link,async()=>{let t=await e(r.link),a=i(t),o=a(`div.show_tit`).text(),s=a(`div.TRS_Editor div.TRS_Editor`).html()??void 0,c=a(`div.show_tit2`).text().split(/：/).pop()?.trim(),l=a(`meta[name="keywords"]`).attr(`content`)?.split(/,/)??[],u=c,f={title:o,description:s,pubDate:c?n(c):r.pubDate,category:l,content:{html:s,text:s},updated:u?n(u):r.updated,language:d};return{...r,...f}}):r)),{title:u(`title`).text(),description:u(`meta[name="description"]`).attr(`content`),link:c,item:f,allowEmpty:!0,image:new URL(`images/logo_DPRC.png`,s).href,author:u(`meta[name="keyword"]`).attr(`content`)?.split(/,/)[0],language:d,id:u(`meta[property="og:url"]`).attr(`content`)}},o={path:`/:id{.+}?`,name:`栏目`,url:`www.samrdprc.org.cn`,maintainers:[`nczitzk`],handler:a,example:`/samrdprc/xwdt/gzdt`,parameters:{id:{description:"栏目 id，默认为 `xwdt/gzdt`，即国内新闻，可在对应分类页 URL 中找到",options:[{label:`新闻动态`,value:`xwdt/gzdt`},{label:`网站公告`,value:`wzgg`},{label:`汽车召回`,value:`qczh`},{label:`消费品召回`,value:`xfpzh`},{label:`技术报告`,value:`yjgz/jsyj`},{label:`SAC/TC463`,value:`yjgz/sactc`},{label:`研究动态`,value:`yjgz/yjfx`},{label:`安全教育`,value:`aqjy`},{label:`国内法规`,value:`flfg/gnfg`}]}},description:`::: tip
订阅 [网站公告](https://www.samrdprc.org.cn/wzgg/)，其源网址为 \`https://www.samrdprc.org.cn/wzgg/\`，请参考该 URL 指定部分构成参数，此时路由为 [\`/samrdprc/wzgg\`](https://rsshub.app/samrdprc/wzgg)。
:::

<details>
  <summary>更多分类</summary>

  #### 网站首页

  | [新闻动态](https://www.samrdprc.org.cn/xwdt/gzdt/) | [网站公告](https://www.samrdprc.org.cn/wzgg/) | [汽车召回](https://www.samrdprc.org.cn/qczh/) | [消费品召回](https://www.samrdprc.org.cn/xfpzh/) |
  | -------------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ------------------------------------------------ |
  | [xwdt/gzdt](https://rsshub.app/samrdprc/xwdt/gzdt) | [wzgg](https://rsshub.app/samrdprc/wzgg)      | [qczh](https://rsshub.app/samrdprc/qczh)      | [xfpzh](https://rsshub.app/samrdprc/xfpzh)       |

  #### 科学研究

  | [技术报告](https://www.samrdprc.org.cn/yjgz/jsyj/) | [SAC/TC463](https://www.samrdprc.org.cn/yjgz/sactc/) | [研究动态](https://www.samrdprc.org.cn/yjgz/yjfx/) |
  | -------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
  | [yjgz/jsyj](https://rsshub.app/samrdprc/yjgz/jsyj) | [yjgz/sactc](https://rsshub.app/samrdprc/yjgz/sactc) | [yjgz/yjfx](https://rsshub.app/samrdprc/yjgz/yjfx) |

  #### 安全教育

  | [安全教育](https://www.samrdprc.org.cn/aqjy/) |
  | --------------------------------------------- |
  | [aqjy](https://rsshub.app/samrdprc/aqjy)      |

  #### 法律法规

  | [国内法规](https://www.samrdprc.org.cn/flfg/gnfg/) |
  | -------------------------------------------------- |
  | [flfg/gnfg](https://rsshub.app/samrdprc/flfg/gnfg) |
</details>
`,categories:[`government`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportRadar:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.samrdprc.org.cn/:id`],target:`/:id`},{title:`网站首页 - 新闻动态`,source:[`www.samrdprc.org.cn/xwdt/gzdt/`],target:`/xwdt/gzdt`},{title:`网站首页 - 网站公告`,source:[`www.samrdprc.org.cn/wzgg/`],target:`/wzgg`},{title:`网站首页 - 汽车召回`,source:[`www.samrdprc.org.cn/qczh/`],target:`/qczh`},{title:`网站首页 - 消费品召回`,source:[`www.samrdprc.org.cn/xfpzh/`],target:`/xfpzh`},{title:`科学研究 - 技术报告`,source:[`www.samrdprc.org.cn/yjgz/jsyj/`],target:`/yjgz/jsyj`},{title:`科学研究 - SAC/TC463`,source:[`www.samrdprc.org.cn/yjgz/sactc/`],target:`/yjgz/sactc`},{title:`科学研究 - 研究动态`,source:[`www.samrdprc.org.cn/yjgz/yjfx/`],target:`/yjgz/yjfx`},{title:`安全教育 - 安全教育`,source:[`www.samrdprc.org.cn/aqjy/`],target:`/aqjy`},{title:`法律法规 - 国内法规`,source:[`www.samrdprc.org.cn/flfg/gnfg/`],target:`/flfg/gnfg`}],view:r.Articles};export{a as handler,o as route};