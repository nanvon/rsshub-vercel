import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./parse-date-DHsdom8D.js";import"./timezone-CCdTtC9I.js";import{getData as e,getList as t}from"./utils-C-7EwXW7.js";const n={path:`/:topic`,categories:[`programming`],example:`/alistapart/application-development`,parameters:{topic:`Any Topic or from the table below. Defaults to All Articles`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`alistapart.com/blog/topic/:topic`],target:`/:topic`}],name:`Topics`,maintainers:[`Rjnishant530`],handler:r,url:`alistapart.com/articles/`,description:`You have the option to utilize the main heading or use individual categories as topics for the path.

| **Code**                    | *code*                    |
| --------------------------- | ------------------------- |
| **Application Development** | *application-development* |
| **Browsers**                | *browsers*                |
| **CSS**                     | *css*                     |
| **HTML**                    | *html*                    |
| **JavaScript**              | *javascript*              |
| **The Server Side**         | *the-server-side*         |

| **Content**          | *content*          |
| -------------------- | ------------------ |
| **Community**        | *community*        |
| **Content Strategy** | *content-strategy* |
| **Writing**          | *writing*          |

| **Design**                 | *design*               |
| -------------------------- | ---------------------- |
| **Brand Identity**         | *brand-identity*       |
| **Graphic Design**         | *graphic-design*       |
| **Layout & Grids**         | *layout-grids*         |
| **Mobile/Multidevice**     | *mobile-multidevice*   |
| **Responsive Design**      | *responsive-design*    |
| **Typography & Web Fonts** | *typography-web-fonts* |

| **Industry & Business** | *industry-business* |
| ----------------------- | ------------------- |
| **Business**            | *business*          |
| **Career**              | *career*            |
| **Industry**            | *industry*          |
| **State of the Web**    | *state-of-the-web*  |

| **Process**            | *process*            |
| ---------------------- | -------------------- |
| **Creativity**         | *creativity*         |
| **Project Management** | *project-management* |
| **Web Strategy**       | *web-strategy*       |
| **Workflow & Tools**   | *workflow-tools*     |

| **User Experience**          | *user-experience*          |
| ---------------------------- | -------------------------- |
| **Accessibility**            | *accessibility*            |
| **Information Architecture** | *information-architecture* |
| **Interaction Design**       | *interaction-design*       |
| **Usability**                | *usability*                |
| **User Research**            | *user-research*            |`};async function r(n){let r=`https://alistapart.com`,i=`/wp-json/wp/v2/categories?slug=`,a=`/wp-json/wp/v2/article?categories=`,o=n.req.param(`topic`),s=(await e(`${r}${i}${o}`))[0]?.id,c=await e(`${r}${a}${s}&_embed`),l=await t(c);return{title:`A List Apart`,link:`${r}/blog/topic/${o}`,item:l,description:`${o[0].toUpperCase()+o.slice(1)} Articles on aListApart.com`,logo:`https://i0.wp.com/alistapart.com/wp-content/uploads/2019/03/cropped-icon_navigation-laurel-512.jpg?fit=192,192&ssl=1`,icon:`https://i0.wp.com/alistapart.com/wp-content/uploads/2019/03/cropped-icon_navigation-laurel-512.jpg?fit=32,32&ssl=1`,language:`en-us`}}export{n as route};