import"./esm-shims-CtP6w_ML.js";import{config as e}from"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as t}from"./ofetch-CWQqZcqz.js";import{cache_default as n}from"./cache-CvppK6AM.js";import"./render-DE4LRFBD.js";import"./parse-date-DHsdom8D.js";import{baseUrl$1 as r,getBuildId as i,getData$1 as a,getList$1 as o}from"./utils--1o639ZS.js";const s=`
query SourceFeed($source: ID!, $loggedIn: Boolean! = false, $first: Int, $after: String, $ranking: Ranking, $supportedTypes: [String!]) {
  page: sourceFeed(
    source: $source
    first: $first
    after: $after
    ranking: $ranking
    supportedTypes: $supportedTypes
  ) {
    ...FeedPostConnection
  }
}

fragment FeedPostConnection on PostConnection {
  pageInfo {
    hasNextPage
    endCursor
  }
  edges {
    node {
      ...FeedPost
      pinnedAt
      contentHtml
      ...UserPost @include(if: $loggedIn)
    }
  }
}

fragment FeedPost on Post {
  ...FeedPostInfo
  sharedPost {
    id
    title
    image
    readTime
    permalink
    commentsPermalink
    createdAt
    type
    tags
    source {
      id
      handle
      permalink
      image
    }
    slug
  }
  trending
  feedMeta
  collectionSources {
    handle
    image
  }
  numCollectionSources
  updatedAt
  slug
}

fragment FeedPostInfo on Post {
  id
  title
  image
  readTime
  permalink
  commentsPermalink
  createdAt
  commented
  bookmarked
  views
  numUpvotes
  numComments
  summary
  bookmark {
    remindAt
  }
  author {
    id
    name
    image
    username
    permalink
  }
  type
  tags
  source {
    id
    handle
    name
    permalink
    image
    type
  }
  userState {
    vote
    flags {
      feedbackDismiss
    }
  }
  slug
}

fragment UserPost on Post {
  read
  upvoted
  commented
  bookmarked
  downvoted
}`,c={path:`/source/:sourceId/:innerSharedContent?`,example:`/daily/source/hn`,parameters:{sourceId:`The source id`,innerSharedContent:{description:`Where to Fetch inner Shared Posts instead of original`,default:`false`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]}},radar:[{source:[`app.daily.dev/sources/:sourceId`]}],name:`Source Posts`,maintainers:[`TonyRL`],handler:l,url:`app.daily.dev`};async function l(c){let l=c.req.param(`sourceId`),u=c.req.query(`limit`)?Number.parseInt(c.req.query(`limit`),10):10,d=c.req.param(`innerSharedContent`)?JSON.parse(c.req.param(`innerSharedContent`)):!1,f=`${r}/sources/${l}`,p=await i(),m=await n.tryGet(`daily:source:${l}`,async()=>{let e=await t(`${r}/_next/data/${p}/en/sources/${l}.json`);return e.pageProps.source}),h=await n.tryGet(`daily:source:${l}:posts`,async()=>{let e=await a({query:s,variables:{source:l,supportedTypes:[`article`,`video:youtube`,`collection`],period:30,first:u,after:``,loggedIn:!1}});return o(e,d,!0)},e.cache.routeExpire,!1);return{title:`${m.name} posts on daily.dev`,description:m.description,link:f,item:h,image:m.image,logo:m.image,icon:m.image,language:`en-us`}}export{c as route};