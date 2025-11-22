import"./esm-shims-D5mxTuu_.mjs";import"./config-CDM38Tpk.mjs";import"./logger-B0B1yUZ6.mjs";import"./ofetch-FkpIOIxH.mjs";import"./helpers-CMl_ndRq.mjs";import{t as e}from"./cache-C6z2tE2n.mjs";import{t}from"./parse-date-Cv8vEJfE.mjs";import{t as n}from"./got-CxBlPaz_.mjs";import{t as r}from"./timezone-DuBj3K5r.mjs";import{load as i}from"cheerio";const a={gjldrhd:`gjldrhd_674881`,wsrc:`wsrc_674883`,wjbxw:`wjbxw_674885`,sjxw:`sjxw_674887`,fyrbt:`fyrbt_674889`,cfhsl:`cfhsl_674891`,dsrm:`dsrm_674893`,zwbd:`zwbd_674895`,zcjd:`zcjd`},o={path:[`/fmprc/:category?`,`/mfa/wjdt/:category?`],name:`Unknown`,maintainers:[`nicolaszf`,`nczitzk`],handler:s,description:`| 分类       | category |
| ---------- | -------- |
| 领导人活动 | gjldrhd  |
| 外事日程   | wsrc     |
| 部领导活动 | wjbxw    |
| 业务动态   | sjxw     |
| 发言人表态 | fyrbt    |
| 吹风会     | cfhsl    |
| 大使任免   | dsrm     |
| 驻外报道   | zwbd     |
| 政策解读   | zcjd     |`};async function s(o){let s=`https://www.mfa.gov.cn/web/wjdt_674879/${a[o.req.param(`category`)??`gjldrhd`]}`,c=i((await n({method:`get`,url:s})).data),l=c(`ul.list1 li a`).slice(0,o.req.query(`limit`)?Number.parseInt(o.req.query(`limit`)):35).toArray().map(e=>(e=c(e),{title:e.text(),link:e.attr(`href`).replace(/^\./,s)}));return l=await Promise.all(l.map(a=>e.tryGet(a.link,async()=>{let e=i((await n({method:`get`,url:a.link})).data);return a.description=e(`#News_Body_Txt_A`).html(),a.pubDate=r(t(e(`.time span`).last().text()),8),a.category=e(`meta[name="Keywords"]`).attr(`content`)?.split(`;`)??[],a}))),{title:c(`title`).text(),link:s,item:l}}export{o as route};