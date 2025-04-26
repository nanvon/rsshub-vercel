import"./esm-shims-CtP6w_ML.js";import"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import"./ofetch-CWQqZcqz.js";import"./cache-CvppK6AM.js";import"./render-DE4LRFBD.js";import"./parse-date-DHsdom8D.js";import{ViewType as e}from"./types-Bi82qguM.js";import{baseUrl$1 as t,getData$1 as n,getList$1 as r,variables as i}from"./utils--1o639ZS.js";const a=`
    query MostUpvotedFeed(
    $loggedIn: Boolean! = false
    $first: Int
    $after: String
    $period: Int
    $supportedTypes: [String!] = ["article","share","freeform","video:youtube","collection"]
    $source: ID
    $tag: String
  ) {
    page: mostUpvotedFeed(first: $first, after: $after, period: $period, supportedTypes: $supportedTypes, source: $source, tag: $tag) {
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
      clickbaitTitleDetected
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
    clickbaitTitleDetected
  }


  
  fragment UserPost on Post {
    read
    upvoted
    commented
    bookmarked
    downvoted
  }

`,o={path:`/upvoted/:period?/:innerSharedContent?/:dateSort?`,example:`/daily/upvoted/7`,view:e.Articles,radar:[{source:[`app.daily.dev/upvoted`]}],parameters:{innerSharedContent:{description:`Where to Fetch inner Shared Posts instead of original`,default:`false`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},dateSort:{description:`Sort posts by publication date instead of popularity`,default:`true`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},period:{description:`Period of Lookup`,default:`7`,options:[{value:`7`,label:`Last Week`},{value:`30`,label:`Last Month`},{value:`365`,label:`Last Year`}]}},name:`Most upvoted`,maintainers:[`Rjnishant530`],handler:s,url:`app.daily.dev/upvoted`};async function s(e){let o=`${t}/posts/upvoted`,s=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):20,c=e.req.param(`innerSharedContent`)?JSON.parse(e.req.param(`innerSharedContent`)):!1,l=e.req.param(`dateSort`)?JSON.parse(e.req.param(`dateSort`)):!0,u=e.req.param(`period`)?Number.parseInt(e.req.param(`period`),10):7,d=await n({query:a,variables:{...i,period:u,first:s}}),f=r(d,c,l);return{title:`Most upvoted posts for developers | daily.dev`,link:o,item:f,description:`Find the most upvoted developer posts on daily.dev. Explore top-rated content in coding, tutorials, and tech news from the largest developer network in the world.`,logo:`${t}/favicon-32x32.png`,icon:`${t}/favicon-32x32.png`,language:`en-us`}}export{o as route};