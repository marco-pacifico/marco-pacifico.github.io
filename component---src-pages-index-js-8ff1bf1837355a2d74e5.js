(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Zttt"),i=a("vOnD"),d=a("dudK"),c=a("REs1"),l=i.c.div.withConfig({displayName:"HeroSection__SectionContainer",componentId:"m533en-0"})(["max-width:100%;margin-left:",";display:flex;justify-content:center;align-items:end;flex-direction:column;height:76vh;padding:auto 0;border-bottom:1px solid var(--color-border-tertiary);"],d.a.space.site),m=i.c.div.withConfig({displayName:"HeroSection__HeadingContainer",componentId:"m533en-1"})(["width:100%;"]),s=i.c.div.withConfig({displayName:"HeroSection__BodyContainer",componentId:"m533en-2"})(["padding-top:",";width:min(800px,90vw);max-width:1600px;"],d.a.space.s3),p=function(e){var t=e.data[0].node.frontmatter,a=t.greeting,n=t.name,o=t.role,i=t.location;return r.a.createElement(l,null,r.a.createElement(m,null,r.a.createElement(c.c,null,a," I'm ",n," ")),r.a.createElement(s,null,r.a.createElement(c.d,null,o," ",i)))},g=a("Wbzz"),u=a("A2+M"),h=i.c.img.withConfig({displayName:"ProjectCard__ProjectThumbnail",componentId:"sc-1os1aes-0"})(["display:block;width:100%;border-radius:max(8px,1rem);margin-left:0;margin-bottom:max(16px,",");transition:all .3s ease-out;align-self:start;"],d.a.space.s3),f=i.c.div.withConfig({displayName:"ProjectCard__CardContaner",componentId:"sc-1os1aes-1"})(["display:flex;flex-direction:column-reverse;justify-content:space-between;padding-bottom:max(16px,",");transition:all .25s ease-out;&:hover{z-index:100;}&:hover "," a{background-size:100% 100%;}&:hover "," a::after{visibility:visible;transform:scale(1);}&:hover ","{box-shadow:",";transform:translateY(-",");}"],d.a.space.s3,c.f,c.f,h,d.a.shadows.default,d.a.space.s5),x=i.c.div.withConfig({displayName:"ProjectCard__DescriptionContainer",componentId:"sc-1os1aes-2"})(["align-self:start;"]),b=function(e){return r.a.createElement(f,null,r.a.createElement(x,null,r.a.createElement(c.m,null,e.overline),r.a.createElement(c.f,null,r.a.createElement("a",{href:"/",style:{borderBottom:"none"}},e.title)),r.a.createElement(c.g,null,e.description)),r.a.createElement(h,{src:e.image}))},w=i.c.div.withConfig({displayName:"WorkSection__SectionContainer",componentId:"utksd9-0"})(["margin:0 ",";"],d.a.space.site),y=i.c.div.withConfig({displayName:"WorkSection__HeadingContainer",componentId:"utksd9-1"})(["padding-top:max(24px,",");"],d.a.space.s1),v=i.c.div.withConfig({displayName:"WorkSection__BodyContainer",componentId:"utksd9-2"})(["padding-top:max(16px,",");margin-bottom:max(32px,",");width:70vw;@media (max-width:480px){width:100%;}"],d.a.space.s3,d.a.space.s1),E=i.c.div.withConfig({displayName:"WorkSection__ProjectGrid",componentId:"utksd9-3"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:max(16px,",");@media (max-width:1024px){grid-template-columns:repeat(2,1fr);}@media (max-width:480px){grid-template-columns:1fr;grid-gap:none;}"],d.a.space.s2),_=i.c.div.withConfig({displayName:"WorkSection__Project",componentId:"utksd9-4"})(["border-bottom:none;border-right:1px solid var(--color-border-tertiary);padding-right:max(16px,",");&:nth-child(3){border-right:none;}@media (max-width:1024px){&:nth-child(2){border-right:none;}&:nth-child(3){border-right:1px solid var(--color-border-tertiary);}&:nth-child(4){border-right:none;}}@media (max-width:480px){border-right:none;padding-right:0;}"],d.a.space.s2),C=i.c.div.withConfig({displayName:"WorkSection__ButtonSection",componentId:"utksd9-5"})(["display:grid;align-items:center;border-top:1px solid var(--color-border-tertiary);border-bottom:1px solid var(--color-border-tertiary);margin-top:max(24px,",");"],d.a.space.s2),k=i.c.button.withConfig({displayName:"WorkSection__MoreButton",componentId:"utksd9-6"})(["padding:max(8px,",") max(12px,",");margin:max(16px,",") auto;background:transparent;border-radius:max(8px,0.64rem);cursor:pointer;:hover{background:var(--color-background-secondary);}:focus{outline:none;}"],d.a.space.s5,d.a.space.s4,d.a.space.s3),I=function(e){var t=e.content,a=e.projects,o=Object(n.useState)(!1),i=o[0],d=o[1],l=a.slice(0,3),m=i?a:l;return r.a.createElement(w,null,r.a.createElement(y,null,r.a.createElement(c.d,null,t[0].node.frontmatter.title)),r.a.createElement(v,null,r.a.createElement(c.e,null,r.a.createElement(u.MDXRenderer,null,t[0].node.body))),r.a.createElement(E,null,m.map((function(e){var t=e.node,a=t.fields,n=t.frontmatter,o=a.slug,i=n.company,d=n.title,c=n.description,l=n.cardImage.publicURL;return r.a.createElement(_,null,r.a.createElement(g.a,{to:o},r.a.createElement(b,{overline:i,title:d,description:c,image:l})))}))),r.a.createElement(C,null,r.a.createElement(k,{onClick:function(){return d(!i)}},r.a.createElement(c.f,{style:{margin:0}},"Show ",i?"fewer":"more"," projects"))))},S=a("uNJ5"),j=i.c.div.withConfig({displayName:"WritingSection__SectionContainer",componentId:"sc-4mjqrd-0"})(["padding-bottom:",";margin:",";margin-bottom:max(40px,",");"],d.a.space.s1,d.a.space.site,d.a.space.s1),N=i.c.div.withConfig({displayName:"WritingSection__HeadingContainer",componentId:"sc-4mjqrd-1"})(["padding-top:max(24px,",");"],d.a.space.s1),W=i.c.div.withConfig({displayName:"WritingSection__BodyContainer",componentId:"sc-4mjqrd-2"})(["padding-top:max(16px,",");margin-bottom:max(16px,",");width:70vw;@media (max-width:480px){width:100%;}"],d.a.space.s3,d.a.space.s3),B=i.c.ul.withConfig({displayName:"WritingSection__ArticleUL",componentId:"sc-4mjqrd-3"})(["list-style-type:none;"]),q=i.c.li.withConfig({displayName:"WritingSection__ArticleLI",componentId:"sc-4mjqrd-4"})(["border-bottom:1px solid var(--color-border-tertiary);&:last-of-type{border-bottom:none;}"]),H=function(e){var t=e.content,a=e.articles,o=Object(n.useState)(!1),i=o[0],d=(o[1],a.slice(0,10)),l=i?a:d;return r.a.createElement(j,null,r.a.createElement(N,null,r.a.createElement(c.d,null,t[0].node.frontmatter.title)),r.a.createElement(W,null,r.a.createElement(c.e,null,r.a.createElement(u.MDXRenderer,null,t[0].node.body))),r.a.createElement(B,null,l.map((function(e){var t=e.node,a=t.fields,n=t.frontmatter,o=a.slug,i=n.company,d=n.title,c=n.description,l=n.link;return null===l?r.a.createElement(q,{key:o},r.a.createElement(g.a,{to:o},r.a.createElement(S.a,{overline:i,title:d,description:c}))):r.a.createElement(q,{key:o},r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},r.a.createElement(S.a,{overline:i,title:d,description:c})))}))))};t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(p,{data:t.hero.edges}),r.a.createElement(I,{content:t.work.edges,projects:t.projects.edges}),r.a.createElement(H,{content:t.writing.edges,articles:t.posts.edges}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8ff1bf1837355a2d74e5.js.map