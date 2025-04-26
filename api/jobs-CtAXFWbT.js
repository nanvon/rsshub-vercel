import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as e}from"./ofetch-CDAeBYLA.js";import{parseDate as t}from"./parse-date-B2cCVoGk.js";import{ViewType as n}from"./types-DygLf1a3.js";import r from"dayjs";import{load as i}from"cheerio";var a=class{constructor(e,t,n,r,i,a,o){this.title=e,this.link=t,this.company=n,this.location=r,this.pubDate=i,this.recruiter=a,this.description=o}};const o=`keywords`,s=`f_JT`,c={F:`full-time`,P:`part-time`,C:`contract`},l=`f_E`,u={1:`internship`,2:`entry`,3:`associate`,4:`mid-senior`,5:`director`};function d(e,t){if(!e)return``;let n=e.split(`-`).filter(e=>e in t);return n.join(`,`)}function f(e,t){if(!e)return``;let n=e.split(`-`).filter(e=>e in t).map(e=>t[e]);return n.join(`,`)}function p(e){let t=i(e),n=t(`li`).toArray().map(e=>{let n=t(e),r=n.find(`a.base-card__full-link, a.base-card--link`)?.attr(`href`)?.split(`?`)[0],i=n.find(`h3.base-search-card__title`)?.text()?.trim(),o=n.find(`h4.base-search-card__subtitle`)?.text()?.trim(),s=n.find(`span.job-search-card__location`)?.text()?.trim(),c=n.find(`time`)?.attr(`datetime`);return new a(i,r,o,s,c)});return n}const m=e=>!e||typeof e!=`string`?`all`:encodeURIComponent(e.split(`,`).join(`-`)),h=`https://www.linkedin.com/`,g=`/jobs-guest/jobs/api/seeMoreJobPostings/search`,_={path:`/jobs/:job_types/:exp_levels/:keywords?/:routeParams?`,categories:[`social-media`,`popular`],view:n.Notifications,example:`/linkedin/jobs/C-P/1/software engineer`,parameters:{job_types:`See the following table for details, use '-' as delimiter`,exp_levels:`See the following table for details, use '-' as delimiter`,keywords:`keywords`,routeParams:`additional query parameters, see the table below`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.linkedin.com/jobs/search`],target:(e,t)=>{let n=new URLSearchParams(new URL(t).search),r=m(n.get(`f_JT`)),i=m(n.get(`f_E`)),a=encodeURIComponent(n.get(`keywords`)||``),o=new URLSearchParams;for(let[e,t]of n.entries())[`f_JT`,`f_E`,`keywords`].includes(e)||o.append(e,t);return`/linkedin/jobs/${r}/${i}/${a}/?${o.toString()}`}}],name:`Jobs`,maintainers:[`BrandNewLifeJackie26`,`zhoukuncheng`],handler:v,description:`#### \`job_types\` list

| Full Time | Part Time | Contractor | All |
| --------- | --------- | ---------- | --- |
| F         | P         | C          | all |

#### \`exp_levels\` list

| Intership | Entry Level | Associate | Mid-Senior Level | Director | All |
| --------- | ----------- | --------- | ---------------- | -------- | --- |
| 1         | 2           | 3         | 4                | 5        | all |

#### \`routeParams\` additional query parameters

##### \`f_WT\` list

| Onsite | Remote | Hybrid |
| ------ | ------- | ------ |
|    1   |    2    |   3    |

##### \`geoId\`

  Geographic location ID. You can find this ID in the URL of a LinkedIn job search page that is filtered by location.

  For example:
  91000012 is the ID of East Asia.

##### \`f_TPR\`

  Time posted range. Here are some possible values:

  *   \`r86400\`: Past 24 hours
  *   \`r604800\`: Past week
  *   \`r2592000\`: Past month

  For example:

  1.  If we want to search software engineer jobs of all levels and all job types, use \`/linkedin/jobs/all/all/software engineer\`
  2.  If we want to search all entry level contractor/part time software engineer jobs, use \`/linkedin/jobs/P-C/2/software engineer\`
  3.  If we want to search remote mid-senior level software engineer jobs in APAC posted within the last month, use \`/linkedin/jobs/F/4/software%20engineer/f_WT=2&geoId=91000003&f_TPR=r2592000\`

  **To make it easier, the recommended way is to start a search on [LinkedIn](https://www.linkedin.com/jobs/search) and use [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) to load the specific feed.**`};async function v(n){let r=d(n.req.param(`job_types`),c),i=d(n.req.param(`exp_levels`),u),a=new URLSearchParams(n.req.param(`routeParams`)),m=new URL(g,h);m.searchParams.append(o,n.req.param(`keywords`)||``),m.searchParams.append(s,r),m.searchParams.append(l,i);for(let[e,t]of a)m.searchParams.has(e)||m.searchParams.append(e,t);m=m.toString();let _=await e(m),v=p(_),y=f(n.req.param(`job_types`),c),b=f(n.req.param(`exp_levels`),u),x=`LinkedIn Job Listing`+(y?` | Job Types: ${y}`:``)+(b?` | Experience Levels: ${b}`:``)+(n.req.param(`keywords`)?` | Keywords: ${n.req.param(`keywords`)}`:``);return{title:x,link:m,description:`This feed gets LinkedIn job posts`,item:v.map(e=>{let n=`${e.company} is hiring ${e.title}`,r=`Title: ${e.title} | Company: ${e.company} | Location: ${e.location} `;return{title:n,description:r,pubDate:t(e.pubDate),link:e.link}})}}export{_ as route};