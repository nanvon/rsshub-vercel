import{n as e,t}from"./esm-shims-L08rKynx.mjs";import"./config-L8Ls2W7q.mjs";import"./logger-C50fTRi5.mjs";import"./ofetch-DXVwJZV0.mjs";import"./helpers-mo8InLYm.mjs";import{t as n}from"./render-CBhnapAf.mjs";import{t as r}from"./got-D6JCV29k.mjs";import i from"node:path";e();const a=`https://leetcode.com`,o={path:`/dailyquestion/en`,radar:[{source:[`leetcode.com/`]}],name:`Unknown`,maintainers:[],handler:s,url:`leetcode.com/`};async function s(){let e={date:``,link:``,titleSlug:``,content:``,frontedId:``,difficulty:``,tags:``},o=a+`/graphql`,s={query:`query questionOfToday {
            activeDailyCodingChallengeQuestion {
                date
                link
                question {
                    frontendQuestionId: questionFrontendId
                    titleSlug
                }
            }
        } `,variables:{}},c=(await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(s)})).data.data.activeDailyCodingChallengeQuestion;e.date=c.date,e.link=a+c.link,e.titleSlug=c.question.titleSlug;let l={operationName:`questionData`,query:`query questionData($titleSlug: String!) {
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
        }`,variables:{titleSlug:e.titleSlug}},u=await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(l)}),d={Medium:`🟡`,Easy:`🟢`,Hard:`🔴`},f=u.data.data.question;e.content=f.content,e.frontedId=f.questionFrontendId,e.difficulty=d[f.difficulty];let p=f.topicTags;p=p.map(e=>{let t=`#`+e.slug;return t=t.replaceAll(`-`,`_`),t}),e.tags=p.join(` `);let m={title:e.frontedId+`.`+e.titleSlug,description:n(i.join(t,`templates/question-description-1f696f3d.art`),{question:e}),link:e.link};return{title:`LeetCode Daily Question`,link:`https://leetcode.com`,description:`Leetcode Daily Question`,item:[{title:m.title,description:m.description+e.content,link:m.link}]}}export{o as route};