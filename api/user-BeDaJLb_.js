import"./esm-shims-CtP6w_ML.js";import{config as e}from"./config-DYqAlsU3.js";import"./logger-BlLSmUdl.js";import{ofetch_default as t}from"./ofetch-CWQqZcqz.js";import{cache_default as n}from"./cache-CvppK6AM.js";import"./render-DE4LRFBD.js";import"./parse-date-DHsdom8D.js";import{baseUrl$1 as r,getBuildId as i,getData$1 as a,getList$1 as o}from"./utils--1o639ZS.js";const s=`
  query AuthorFeed(
    $loggedIn: Boolean! = false
    $userId: ID!
    $after: String
    $first: Int
    $supportedTypes: [String!] = [
      "article"
      "share"
      "freeform"
      "video:youtube"
      "collection"
    ]
  ) {
    page: authorFeed(
      author: $userId
      after: $after
      first: $first
      ranking: TIME
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
        contentHtml
        ...UserPost @include(if: $loggedIn)
      }
    }
  }
  fragment FeedPost on Post {
    ...SharedPostInfo
    sharedPost {
      ...SharedPostInfo
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
  fragment SharedPostInfo on Post {
    id
    title
    titleHtml
    image
    readTime
    permalink
    commentsPermalink
    summary
    createdAt
    private
    upvoted
    commented
    bookmarked
    views
    numUpvotes
    numComments
    videoId
    scout {
      ...UserShortInfo
    }
    author {
      ...UserShortInfo
    }
    type
    tags
    source {
      ...SourceBaseInfo
    }
    downvoted
    flags {
      promoteToPublic
    }
    userState {
      vote
      flags {
        feedbackDismiss
      }
    }
    slug
  }
  fragment SourceBaseInfo on Source {
    id
    active
    handle
    name
    permalink
    public
    type
    description
    image
    membersCount
    privilegedMembers {
      user {
        id
      }
      role
    }
    currentMember {
      ...CurrentMember
    }
    memberPostingRole
    memberInviteRole
  }
  fragment CurrentMember on SourceMember {
    user {
      id
    }
    permissions
    role
    referralToken
    flags {
      hideFeedPosts
      collapsePinnedPosts
    }
  }
  fragment UserShortInfo on User {
    id
    name
    image
    permalink
    username
    bio
    createdAt
    reputation
  }
  fragment UserPost on Post {
    read
    upvoted
    commented
    bookmarked
    downvoted
  }`,c={path:`/user/:userId/:innerSharedContent?`,example:`/daily/user/kramer`,radar:[{source:[`app.daily.dev/:userId/posts`,`app.daily.dev/:userId`]}],parameters:{innerSharedContent:{description:`Where to Fetch inner Shared Posts instead of original`,default:`false`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]}},name:`User Posts`,maintainers:[`TonyRL`],handler:l,url:`app.daily.dev`};async function l(c){let l=c.req.param(`userId`),u=c.req.query(`limit`)?Number.parseInt(c.req.query(`limit`),10):7,d=c.req.param(`innerSharedContent`)?JSON.parse(c.req.param(`innerSharedContent`)):!1,f=await i(),p=await n.tryGet(`daily:user:${l}`,async()=>{let e=await t(`${r}/_next/data/${f}/en/${l}.json`,{query:{userId:l}});return e.pageProps}),m=p.user,h=await n.tryGet(`daily:user:${l}:posts`,async()=>{let e=await a({query:s,variables:{userId:m.id,first:u,loggedIn:!1}});return o(e,d,!0)},e.cache.routeExpire,!1);return{title:`${m.name} | daily.dev`,description:m.bio,link:`${r}/${l}/posts`,item:h,image:m.image,logo:m.image,icon:m.image,language:`en-us`}}export{c as route};