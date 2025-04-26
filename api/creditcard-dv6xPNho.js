import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./helpers-RrXnNmv1.js";import{cache_default as e}from"./cache-CvppK6AM.js";import{got_default as t}from"./got-BwctkUCD.js";import*as n from"node:url";import{load as r}from"cheerio";import i from"iconv-lite";const a=e=>i.decode(e,`gbk`);async function o(e){let n=await t.get(e,{responseType:`buffer`}),i=r(a(n.data));i(`.lookMore`).remove(),i(`script, style`).remove(),i(`#loginDialog`).remove();let o=i(`.firstpost`);o.find(`ignore_js_op img`).each(function(){i(this).attr(`src`,i(this).attr(`file`));for(let e of[`id`,`aid`,`zoomfile`,`file`,`zoomfile`,`class`,`onclick`,`title`,`inpost`,`alt`,`onmouseover`])i(this).removeAttr(e)});let s=o.find(`ignore_js_op img`);o.find(`ignore_js_op`).remove(),o.append(s);let c=o.html();return{description:c}}const s=(e,t)=>{let i=`https://www.flyert.com`;return Promise.all(e.map(async e=>{let a=r(e),s=a(`.comiis_common a[data-track='版块页主题分类']`),c=a(`.comiis_common a[data-track='版块页文章']`),l=n.resolve(i,c.attr(`href`)),u={title:s.text()+`-`+c.text(),link:l,guid:l},d=await t.tryGet(l,()=>o(l));return Object.assign({},u,d)}))};var c={ProcessFeed:s};const l=e=>i.decode(e,`gbk`),u=`https://www.flyert.com`,d={path:`/creditcard/:bank`,categories:[`travel`],example:`/flyert/creditcard/zhongxin`,parameters:{bank:`信用卡板块各银行的拼音简称`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`flyert.com/`]}],name:`信用卡`,maintainers:[`nicolaszf`],handler:f,url:`flyert.com/`,description:`| 信用卡模块 | bank          |
| ---------- | ------------- |
| 国内信用卡 | creditcard    |
| 浦发银行   | pufa          |
| 招商银行   | zhaoshang     |
| 中信银行   | zhongxin      |
| 交通银行   | jiaotong      |
| 中国银行   | zhonghang     |
| 工商银行   | gongshang     |
| 广发银行   | guangfa       |
| 农业银行   | nongye        |
| 建设银行   | jianshe       |
| 汇丰银行   | huifeng       |
| 民生银行   | mingsheng     |
| 兴业银行   | xingye        |
| 花旗银行   | huaqi         |
| 上海银行   | shanghai      |
| 无卡支付   | wuka          |
| 投资理财   | 137           |
| 网站权益汇 | 145           |
| 境外信用卡 | intcreditcard |`};async function f(n){let i=n.req.param(`bank`),a=`${u}/forum-${i}-1.html`,o=``;switch(i){case`creditcard`:o=`国内信用卡`;break;case`pufa`:o=`浦发银行`;break;case`zhaoshang`:o=`招商银行`;break;case`zhongxin`:o=`中信银行`;break;case`jiaotong`:o=`交通银行`;break;case`zhonghang`:o=`中国银行`;break;case`gongshang`:o=`工商银行`;break;case`guangfa`:o=`广发银行`;break;case`nongye`:o=`农业银行`;break;case`jianshe`:o=`建设银行`;break;case`huifeng`:o=`汇丰银行`;break;case`mingsheng`:o=`民生银行`;break;case`xingye`:o=`兴业银行`;break;case`huaqi`:o=`花旗银行`;break;case`shanghai`:o=`上海银行`;break;case`wuka`:o=`无卡支付`;break;case`137`:o=`投资理财`;break;case`145`:o=`网站权益汇`;break;case`intcreditcard`:o=`境外信用卡`}let s=await t.get(a,{responseType:`buffer`}),d=r(l(s.data)),f=d(`[id*='normalthread']`).get(),p=await c.ProcessFeed(f,e);return{title:`飞客茶馆信用卡 - ${o}`,link:`https://www.flyert.com/`,description:`飞客茶馆信用卡 - ${o}`,item:p}}export{d as route};