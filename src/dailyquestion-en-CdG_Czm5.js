import{__dirname as e,init_esm_shims as t}from"./esm-shims-Dqvxr0BZ.js";import"./config-1ATZGjxb.js";import"./logger-B19BYg4C.js";import"./ofetch-B4O0sZDE.js";import"./helpers-LVq640iW.js";import{art as n}from"./render-DE4LRFBD.js";import{got_default as r}from"./got-CW2W8CRN.js";import i from"node:path";t();const a=`https://leetcode.com`,o={path:`/dailyquestion/en`,radar:[{source:[`leetcode.com/`]}],name:`Unknown`,maintainers:[],handler:s,url:`leetcode.com/`};async function s(){let t={date:``,link:``,titleSlug:``,content:``,frontedId:``,difficulty:``,tags:``},o=a+`/graphql`,s={query:`query questionOfToday {
            activeDailyCodingChallengeQuestion {
                date
                link
                question {
                    frontendQuestionId: questionFrontendId
                    titleSlug
                }
            }
        } `,variables:{}},c=await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(s)}),l=c.data.data.activeDailyCodingChallengeQuestion;t.date=l.date,t.link=a+l.link,t.titleSlug=l.question.titleSlug;let u={operationName:`questionData`,query:`query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                title
                titleSlug
                content
                translatedTitle
                translatedContent
                difficulty
                topicTags {
                    name
                    slug
                    translatedName
                    __typename
                }
                __typename
            }
        }`,variables:{titleSlug:t.titleSlug}},d=await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(u)}),f={Medium:`🟡`,Easy:`🟢`,Hard:`🔴`},p=d.data.data.question;t.content=p.content,t.frontedId=p.questionFrontendId,t.difficulty=f[p.difficulty];let m=p.topicTags;m=m.map(e=>{let t=`#`+e.slug;return t=t.replaceAll(`-`,`_`),t}),t.tags=m.join(` `);let h={title:t.frontedId+`.`+t.titleSlug,description:n(i.join(e,`templates/question-description-1f696f3d.art`),{question:t}),link:t.link};return{title:`LeetCode Daily Question`,link:`https://leetcode.com`,description:`Leetcode Daily Question`,item:[{title:h.title,description:h.description+t.content,link:h.link}]}}export{o as route};