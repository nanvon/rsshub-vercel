import"./esm-shims-CGUM9TC6.js";import"./config-C9m9eBw5.js";import"./logger-CC3afzWM.js";import{parseDate as e}from"./parse-date-D4osZfpm.js";import"./dist-0j_z2rfc.js";import"./helpers-nWIDkd0K.js";import{cache_default as t}from"./cache-GwMhal7i.js";import"./ofetch-ZUQ1sEMc.js";import{got_default as n}from"./got-CB83B8oA.js";import{load as r}from"cheerio";const i={path:`/:category?`,categories:[`programming`],example:`/smashingmagazine/react`,parameters:{category:`Find in URL or Table below`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`smashingmagazine.com/category/:category`],target:`/:category`}],name:`Category`,maintainers:[`Rjnishant530`],handler:a,url:`smashingmagazine.com/articles/`,description:`| **Category**       |                    |
| ------------------ | ------------------ |
| Accessibility      | accessibility      |
| Best practices     | best-practices     |
| Business           | business           |
| Career             | career             |
| Checklists         | checklists         |
| CSS                | css                |
| Data Visualization | data-visualization |
| Design             | design             |
| Design Patterns    | design-patterns    |
| Design Systems     | design-systems     |
| E-Commerce         | e-commerce         |
| Figma              | figma              |
| Freebies           | freebies           |
| HTML               | html               |
| Illustrator        | illustrator        |
| Inspiration        | inspiration        |
| JavaScript         | javascript         |
| Mobile             | mobile             |
| Performance        | performance        |
| Privacy            | privacy            |
| React              | react              |
| Responsive Design  | responsive-design  |
| Round-Ups          | round-ups          |
| SEO                | seo                |
| Typography         | typography         |
| Tools              | tools              |
| UI                 | ui                 |
| Usability          | usability          |
| UX                 | ux                 |
| Vue                | vue                |
| Wallpapers         | wallpapers         |
| Web Design         | web-design         |
| Workflow           | workflow           |`};async function a(i){let a=i.req.param(`category`),o=`https://www.smashingmagazine.com`,s=a?`/category/${a}`:`/articles`,{data:c}=await n(`${o}${s}`),l=r(c),u=l(`article.article--post`).toArray().map(t=>{t=l(t);let n=t.find(`h2.article--post__title a`),r=t.find(`p.article--post__teaser`).clone().children().remove().end().text(),i=t.find(`span.article--post__author-name a`).text(),a=l(`p.article--post__teaser time`).attr(`datetime`),s=e(a,`YYYY-MM-DD`);return{title:n.text(),link:`${o}${n.attr(`href`)}`,pubDate:s,description:r,author:i}}),d=await Promise.all(u.map(e=>t.tryGet(e.link,async()=>{let{data:t}=await n(e.link),i=r(t);e.category=i(`li.meta-box--tags a`).toArray().map(e=>i(e).text());let a=i(`div#article__content header.article-header`).clone().children(`ul`).remove().end().html(),o=i(`div#article__content section.article__summary`).html(),s=i(`div#article__content div.c-garfield-the-cat`).clone().children(`div`).remove().end().toArray().map(e=>i(e).html());return e.description=[a,o,...s].join(``),e})));return{title:`Smashing Magazine Articles`,link:`${o}${s}`,item:d,description:`Latest Articles on Smashingmagazine.com`,logo:`https://www.smashingmagazine.com/images/favicon/apple-touch-icon.png`,icon:`https://www.smashingmagazine.com/images/favicon/favicon.svg`,language:`en-us`}}export{i as route};