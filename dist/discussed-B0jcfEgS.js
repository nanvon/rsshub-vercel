import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./cache-CvppK6AM.js";import"./render-DE4LRFBD.js";import"./parse-date-DHsdom8D.js";import{ViewType as e}from"./types-Bi82qguM.js";import{baseUrl$1 as t,getData$1 as n,getList$1 as r,variables as i}from"./utils--1o639ZS.js";const a=`
  query MostDiscussedFeed(
    $first: Int
    $supportedTypes: [String!] = ["article","share","freeform"]
    ) {
    page: mostDiscussedFeed(first: $first, supportedTypes: $supportedTypes) {
      ...FeedPostConnection
    }
  }

  fragment FeedPostConnection on PostConnection {
    edges {
      node {
        ...FeedPost
        contentHtml
      }
    }
  }

  fragment FeedPost on Post {
    ...SharedPostInfo
  }

  fragment SharedPostInfo on Post {
    id
    title
    image
    readTime
    permalink
    commentsPermalink
    summary
    createdAt
    numUpvotes
    numComments
    author {
      ...UserShortInfo
    }
    tags
  }

  fragment UserShortInfo on User {
    id
    name
    image
    permalink
    username
    bio
  }
`,o={path:`/discussed/:period?/:innerSharedContent?/:dateSort?`,example:`/daily/discussed/30`,view:e.Articles,radar:[{source:[`app.daily.dev/discussed`]}],name:`Most Discussed`,maintainers:[`Rjnishant530`],handler:s,url:`app.daily.dev/discussed`,parameters:{innerSharedContent:{description:`Where to Fetch inner Shared Posts instead of original`,default:`false`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},dateSort:{description:`Sort posts by publication date instead of popularity`,default:`true`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},period:{description:`Period of Lookup`,default:`7`,options:[{value:`7`,label:`Last Week`},{value:`30`,label:`Last Month`},{value:`365`,label:`Last Year`}]}}};async function s(e){let o=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):20,s=e.req.param(`innerSharedContent`)?JSON.parse(e.req.param(`innerSharedContent`)):!1,c=e.req.param(`dateSort`)?JSON.parse(e.req.param(`dateSort`)):!0,l=e.req.param(`period`)?Number.parseInt(e.req.param(`period`),10):7,u=`${t}/posts/discussed`,d=await n({query:a,variables:{...i,first:o,period:l}}),f=r(d,s,c);return{title:`Real-time discussions in the developer community | daily.dev`,link:u,item:f,description:`Stay on top of real-time developer discussions on daily.dev. Join conversations happening now and engage with the most active community members.`,logo:`${t}/favicon-32x32.png`,icon:`${t}/favicon-32x32.png`,language:`en-us`}}export{o as route};