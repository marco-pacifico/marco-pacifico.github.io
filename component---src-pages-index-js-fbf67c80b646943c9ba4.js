(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Zttt"),i=a("wtQ5"),c=a("vOnD"),d=a("dudK"),l=a("REs1"),s=c.c.div.withConfig({displayName:"HeroSection__SectionContainer",componentId:"sc-m533en-0"})(["max-width:100%;margin-left:",";display:flex;justify-content:center;align-items:start;flex-direction:column;height:76vh;padding:auto 0;border-bottom:1px solid var(--color-border-tertiary);"],d.a.space.site),m=c.c.div.withConfig({displayName:"HeroSection__HeadingContainer",componentId:"sc-m533en-1"})(["width:100%;"]),p=c.c.div.withConfig({displayName:"HeroSection__BodyContainer",componentId:"sc-m533en-2"})(["padding-top:",";width:90vw;max-width:1600px;"],d.a.space.s3),g=function(e){var t=e.data[0].node.frontmatter,a=t.greeting,n=t.name,o=t.role,i=t.location;return r.a.createElement(s,null,r.a.createElement(m,null,r.a.createElement(l.c,null,a," I’m ",n," ")),r.a.createElement(p,null,r.a.createElement(l.b,null,o," ",r.a.createElement("br",null)," ",i)))},u=a("Wbzz"),f=a("A2+M"),h=c.c.img.withConfig({displayName:"ProjectCard__ProjectThumbnail",componentId:"sc-1os1aes-0"})(["display:block;width:100%;border-radius:max(8px,1rem);margin-left:0;margin-bottom:max(16px,",");transition:all .3s ease-out;align-self:start;"],d.a.space.s3),x=c.c.div.withConfig({displayName:"ProjectCard__CardContaner",componentId:"sc-1os1aes-1"})(["display:flex;flex-direction:column-reverse;justify-content:space-between;padding-bottom:max(16px,",");transition:all .25s ease-out;&:hover{z-index:100;}&:hover "," a{background-size:100% 100%;}&:hover "," a::after{visibility:visible;transform:scale(1);}&:hover ","{box-shadow:",";transform:translateY(-",");}"],d.a.space.s3,l.f,l.f,h,d.a.shadows.default,d.a.space.s5),b=c.c.div.withConfig({displayName:"ProjectCard__DescriptionContainer",componentId:"sc-1os1aes-2"})(["align-self:start;"]),w=function(e){return r.a.createElement(x,null,r.a.createElement(b,null,r.a.createElement(l.o,null,e.overline),r.a.createElement(l.f,null,r.a.createElement("a",{href:"/",style:{borderBottom:"none"}},e.title)),r.a.createElement(l.g,null,e.description)),r.a.createElement(h,{src:e.image}))},y=c.c.div.withConfig({displayName:"WorkSection__SectionContainer",componentId:"sc-utksd9-0"})(["margin:0 ",";"],d.a.space.site),v=c.c.div.withConfig({displayName:"WorkSection__HeadingContainer",componentId:"sc-utksd9-1"})(["padding-top:max(24px,",");"],d.a.space.s1),E=c.c.div.withConfig({displayName:"WorkSection__BodyContainer",componentId:"sc-utksd9-2"})(["padding-top:max(16px,",");margin-bottom:max(40px,",");width:80vw;@media (max-width:480px){width:100%;}"],d.a.space.s3,d.a.space.s1),_=c.c.div.withConfig({displayName:"WorkSection__ProjectGrid",componentId:"sc-utksd9-3"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:max(16px,",");@media (max-width:1024px){grid-template-columns:repeat(2,1fr);}@media (max-width:480px){grid-template-columns:1fr;grid-gap:none;}"],d.a.space.s2),C=c.c.div.withConfig({displayName:"WorkSection__Project",componentId:"sc-utksd9-4"})(["border-bottom:none;border-right:1px solid var(--color-border-tertiary);padding-right:max(16px,",");&:nth-child(3){border-right:none;}@media (max-width:1024px){&:nth-child(2){border-right:none;}&:nth-child(3){border-right:1px solid var(--color-border-tertiary);}&:nth-child(4){border-right:none;}}@media (max-width:480px){border-right:none;padding-right:0;}"],d.a.space.s2),k=c.c.div.withConfig({displayName:"WorkSection__ButtonSection",componentId:"sc-utksd9-5"})(["display:grid;align-items:center;border-top:1px solid var(--color-border-tertiary);border-bottom:1px solid var(--color-border-tertiary);margin-top:max(24px,",");"],d.a.space.s2),S=c.c.button.withConfig({displayName:"WorkSection__MoreButton",componentId:"sc-utksd9-6"})(["padding:max(8px,",") max(12px,",");margin:max(16px,",") auto;background:transparent;border-radius:max(8px,0.64rem);cursor:pointer;font-weight:400;:hover{background:var(--color-background-secondary);}:focus{outline:none;}"],d.a.space.s5,d.a.space.s4,d.a.space.s3),I=function(e){var t=e.content,a=e.projects,o=Object(n.useState)(!1),i=o[0],c=o[1],d=a.slice(0,3),s=i?a:d;return r.a.createElement(y,null,r.a.createElement(v,null,r.a.createElement(l.d,null,t[0].node.frontmatter.title)),r.a.createElement(E,null,r.a.createElement(l.e,null,r.a.createElement(f.MDXRenderer,null,t[0].node.body))),r.a.createElement(_,null,s.map((function(e){var t=e.node,a=t.fields,n=t.frontmatter,o=a.slug,i=n.company,c=n.title,d=n.description,l=n.cardImage.publicURL;return r.a.createElement(C,null,r.a.createElement(u.Link,{to:o},r.a.createElement(w,{overline:i,title:c,description:d,image:l})))}))),r.a.createElement(k,null,r.a.createElement(S,{onClick:function(){return c(!i)}},r.a.createElement(l.f,{style:{margin:0,fontWeight:400}},"Show ",i?"fewer":"more"," projects"))))},j=a("uNJ5"),N=c.c.div.withConfig({displayName:"WritingSection__SectionContainer",componentId:"sc-4mjqrd-0"})(["padding-bottom:",";margin:",";margin-bottom:max(40px,",");"],d.a.space.s1,d.a.space.site,d.a.space.s1),W=c.c.div.withConfig({displayName:"WritingSection__HeadingContainer",componentId:"sc-4mjqrd-1"})(["padding-top:max(24px,",");"],d.a.space.s1),B=c.c.div.withConfig({displayName:"WritingSection__BodyContainer",componentId:"sc-4mjqrd-2"})(["padding-top:max(16px,",");margin-bottom:max(24px,",");width:80vw;@media (max-width:480px){width:100%;}"],d.a.space.s3,d.a.space.s2),P=c.c.ul.withConfig({displayName:"WritingSection__ArticleUL",componentId:"sc-4mjqrd-3"})(["list-style-type:none;"]),q=c.c.li.withConfig({displayName:"WritingSection__ArticleLI",componentId:"sc-4mjqrd-4"})([""]),D=c.c.div.withConfig({displayName:"WritingSection__ButtonSection",componentId:"sc-4mjqrd-5"})(["display:grid;align-items:center;border-top:1px solid var(--color-border-tertiary);border-bottom:1px solid var(--color-border-tertiary);margin-top:max(24px,",");"],d.a.space.s2),H=c.c.button.withConfig({displayName:"WritingSection__MoreButton",componentId:"sc-4mjqrd-6"})(["padding:max(8px,",") max(12px,",");margin:max(16px,",") auto;background:transparent;border-radius:max(8px,0.64rem);cursor:pointer;font-weight:400;:hover{background:var(--color-background-secondary);}:focus{outline:none;}"],d.a.space.s5,d.a.space.s4,d.a.space.s3),L=function(e){var t=e.content,a=e.articles,o=Object(n.useState)(!1),i=o[0],c=o[1],d=a.slice(0,5),s=i?a:d;return r.a.createElement(N,null,r.a.createElement(W,null,r.a.createElement(l.d,null,t[0].node.frontmatter.title)),r.a.createElement(B,null,r.a.createElement(l.e,null,r.a.createElement(f.MDXRenderer,null,t[0].node.body))),r.a.createElement(P,null,s.map((function(e){var t=e.node,a=t.fields,n=t.frontmatter,o=a.slug,i=n.company,c=n.title,d=n.description,l=n.link;return null===l?r.a.createElement(q,{key:o},r.a.createElement(u.Link,{to:o},r.a.createElement(j.a,{overline:i,title:c,description:d}))):r.a.createElement(q,{key:o},r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},r.a.createElement(j.a,{overline:i,title:c,description:d})))}))),r.a.createElement(D,null,r.a.createElement(H,{onClick:function(){return c(!i)}},r.a.createElement(l.f,{style:{margin:0,fontWeight:400}},"Show ",i?"fewer":"more"," posts"))))};t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Design Portfolio",description:"Product Design Portfolio and Blog"}),r.a.createElement(g,{data:t.hero.edges}),r.a.createElement(I,{content:t.work.edges,projects:t.projects.edges}),r.a.createElement(L,{content:t.writing.edges,articles:t.posts.edges}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-fbf67c80b646943c9ba4.js.map