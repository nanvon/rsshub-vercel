import{parseDate as e}from"./parse-date-DHsdom8D.js";const t=(e,t)=>e.content.reduce((e,t)=>{switch(t.type){case`text`:e+=`<div>${t.content}</div>`;break;case`image`:e+=`<img src="${t.url.replaceAll(/_.+\.jpg/g,`.jpg`)}" />`;break;case`video`:try{e+=`<video
            controls="controls"
            width="${t.playlist.hd.width}"
            height="${t.playlist.hd.height}"
            poster="${t.cover_info.thumbnail}"
            src="${t.playlist.hd.play_url}"
          >`}catch{e+=`<video
                controls="controls"
                width="${t.playlist.pop().width}"
                height="${t.playlist.pop().height}"
                poster="${t.thumbnail}"
                src="${t.playlist.pop().play_url}"
              >`}break;case`link`:e+=`<div><a href="${t.url}">${t.title}</a><br><img src="${t.image_url}" /></div>`;break;default:e+=`未知类型，请点击<a href="https://github.com/DIYgod/RSSHub/issues">链接</a>提交issue`}return e},t),n=n=>n.map(n=>{let r=n.target??n,i=e(r.created*1e3),a=r.author.name,o=`${a}：${r.excerpt_title}`,s=`https://www.zhihu.com/pin/${r.id}`,c=t(r,`<a href="https://www.zhihu.com${r.author.url}">${a}</a>：`);if(r.origin_pin!==void 0){let e=r.origin_pin,n=`<a href="https://www.zhihu.com/pin/${e.id}">转发原文</a>：`,i=t(e,`<a href="https://www.zhihu.com${e.author.url}">${e.author.name}</a>：`);c=`${c} ${n} ${i}`}return{title:o,description:c,author:a,pubDate:i,link:s}});export{n as generateData};