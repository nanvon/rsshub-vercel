import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-BwctkUCD.js";import{timezone as r}from"./timezone-CCdTtC9I.js";import{load as i}from"cheerio";const a={gjldrhd:`gjldrhd_674881`,wsrc:`wsrc_674883`,wjbxw:`wjbxw_674885`,sjxw:`sjxw_674887`,fyrbt:`fyrbt_674889`,cfhsl:`cfhsl_674891`,dsrm:`dsrm_674893`,zwbd:`zwbd_674895`,zcjd:`zcjd`},o={path:[`/fmprc/:category?`,`/mfa/wjdt/:category?`],name:`Unknown`,maintainers:[`nicolaszf`,`nczitzk`],handler:s,description:`| 分类       | category |
| ---------- | -------- |
| 领导人活动 | gjldrhd  |
| 外事日程   | wsrc     |
| 部领导活动 | wjbxw    |
| 业务动态   | sjxw     |
| 发言人表态 | fyrbt    |
| 吹风会     | cfhsl    |
| 大使任免   | dsrm     |
| 驻外报道   | zwbd     |
| 政策解读   | zcjd     |`};async function s(o){let s=o.req.param(`category`)??`gjldrhd`,c=`https://www.mfa.gov.cn`,l=`${c}/web/wjdt_674879/${a[s]}`,u=await n({method:`get`,url:l}),d=i(u.data),f=d(`ul.list1 li a`).slice(0,o.req.query(`limit`)?Number.parseInt(o.req.query(`limit`)):35).toArray().map(e=>(e=d(e),{title:e.text(),link:e.attr(`href`).replace(/^\./,l)}));return f=await Promise.all(f.map(a=>e.tryGet(a.link,async()=>{let e=await n({method:`get`,url:a.link}),o=i(e.data);return a.description=o(`#News_Body_Txt_A`).html(),a.pubDate=r(t(o(`.time span`).last().text()),8),a.category=o(`meta[name="Keywords"]`).attr(`content`)?.split(`;`)??[],a}))),{title:d(`title`).text(),link:l,item:f}}export{o as route};