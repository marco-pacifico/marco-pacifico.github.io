(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function p(){l=e(s.map((function(e){return e.props}))),u.canUseDOM?t(l):n&&(l=n(l))}var u=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),p()},i.componentDidUpdate=function(){p()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),p()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(u,"canUseDOM",c),u}}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},REs1:function(e,t,n){"use strict";n.d(t,"n",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return g})),n.d(t,"o",(function(){return x})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return w})),n.d(t,"k",(function(){return T})),n.d(t,"l",(function(){return E})),n.d(t,"m",(function(){return C})),n.d(t,"a",(function(){return S})),n.d(t,"q",(function(){return A})),n.d(t,"p",(function(){return I})),n.d(t,"h",(function(){return k}));var r=n("vOnD"),o=n("dudK"),a=Object(r.b)(["font-size:min(",",max(18px,","));line-height:none;font-weight:400;color:var(--color-text-primary);"],o.a.fontSize.pmin,o.a.fontSize.t5),i=r.c.p.withConfig({displayName:"Typography__NAVITEM",componentId:"sc-131gzld-0"})(["",";"],a),c=Object(r.b)(["font-size:min(128px,max(36px,","));line-height:",";font-weight:300;letter-spacing:",";}"],o.a.fontSize.t1,o.a.lineHeight.htight,o.a.letterSpacing.tight),l=r.c.h1.withConfig({displayName:"Typography__H1",componentId:"sc-131gzld-1"})(["",";"],c),s=r.c.h1.withConfig({displayName:"Typography__H1A",componentId:"sc-131gzld-2"})(["",";color:var(--color-text-tertiary);"],c),p=Object(r.b)(["font-size:min(96px,max(36px,","));line-height:",";font-weight:300;letter-spacing:",";}"],o.a.fontSize.t2,o.a.lineHeight.hloose,o.a.letterSpacing.tight),u=r.c.h2.withConfig({displayName:"Typography__H2",componentId:"sc-131gzld-3"})(["",";"],p),f=(r.c.h1.withConfig({displayName:"Typography__H2A",componentId:"sc-131gzld-4"})(["",";color:var(--color-text-tertiary);"],p),Object(r.b)(["font-size:min(72px,max(30px,","));line-height:",";font-weight:300;color:var(--color-text-primary);letter-spacing:",";"],o.a.fontSize.t3,o.a.lineHeight.hloose,o.a.letterSpacing.tight)),d=r.c.h3.withConfig({displayName:"Typography__H3",componentId:"sc-131gzld-5"})(["",";"],f),m=Object(r.b)(["font-size:min(24px,max(18px,","));line-height:",";font-weight:500;margin-bottom:max(8px,0.8rem);"],o.a.fontSize.t4,o.a.lineHeight.hloose),h=r.c.h4.withConfig({displayName:"Typography__H4",componentId:"sc-131gzld-6"})(["",";"],m),g=r.c.h4.withConfig({displayName:"Typography__H4L",componentId:"sc-131gzld-7"})(["",";color:var(--color-text-tertiary);margin-bottom:0;"],m),y=Object(r.b)(["font-size:",";line-height:",";font-weight:300;color:var(--color-text-secondary);"],o.a.fontSize.t4,o.a.lineHeight.ptight),b=(r.c.p.withConfig({displayName:"Typography__P",componentId:"sc-131gzld-8"})(["",";"],y),Object(r.b)(["font-size:max(12px,",");line-height:",";font-weight:400;text-transform:uppercase;letter-spacing:",";color:var(--color-text-secondary);margin-bottom:max(8px,",");"],o.a.fontSize.t6,o.a.lineHeight.ploose,o.a.letterSpacing.loose,o.a.space.s5)),x=r.c.p.withConfig({displayName:"Typography__OVERLINE",componentId:"sc-131gzld-9"})(["",";"],b),v=r.c.h1.withConfig({displayName:"Typography__MDH1",componentId:"sc-131gzld-10"})(["font-size:min(38px,max(28px,","));line-height:",";font-weight:500;margin-top:min(80px,max(64px,","));padding-bottom:16px;"],o.a.fontSize.t3,o.a.lineHeight.htight,o.a.space.s3),w=r.c.h2.withConfig({displayName:"Typography__MDH2",componentId:"sc-131gzld-11"})(["font-size:min(28px,max(",",","));line-height:",";font-weight:500;letter-spacing:",";margin-top:min(80px,max(64px,","));"],o.a.fontSize.pmid,o.a.fontSize.th2,o.a.lineHeight.hloose,o.a.letterSpacing.tight,o.a.space.s3),T=r.c.h3.withConfig({displayName:"Typography__MDH3",componentId:"sc-131gzld-12"})(["font-size:min(",",max(",",","));line-height:",";font-weight:500;letter-spacing:",";margin-top:min(40px,max(24px,","));"],o.a.fontSize.pmax,o.a.fontSize.pmin,o.a.fontSize.t4,o.a.lineHeight.ptight,o.a.letterSpacing.tight,o.a.space.s4),E=r.c.p.withConfig({displayName:"Typography__MDP",componentId:"sc-131gzld-13"})(["font-family:",";font-size:min(",",max(",",","));line-height:",";font-weight:400;color:var(--color-text-secondary);margin-top:min(24px,max(12px,","));padding-bottom:min(24px,max(12px,","));"],o.a.fonts.serif,o.a.fontSize.pmax,o.a.fontSize.pmin,o.a.fontSize.t4,o.a.lineHeight.ptight,o.a.space.s5,o.a.space.s5),C=r.c.strong.withConfig({displayName:"Typography__MDPS",componentId:"sc-131gzld-14"})(["font-family:",";font-size:min(",",max(",",","));line-height:",";font-weight:500;color:var(--color-text-secondary);margin-top:min(24px,max(12px,","));padding-bottom:min(24px,max(12px,","));"],o.a.fonts.sans,o.a.fontSize.pmax,o.a.fontSize.pmin,o.a.fontSize.t4,o.a.lineHeight.ptight,o.a.space.s5,o.a.space.s5),O=Object(r.b)(["width:150%;padding-left:max(16px,",");display:block;position:relative;margin:max(24px,",") 0;z-index:-1;&:before{content:'';height:100%;width:3px;border-radius:4px;background:var(--color-border-tertiary);position:absolute;left:0;z-index:-1;}p{",";font-family:",";*padding-bottom:max(4px,",");}figcaption{",";font-family:",";text-transform:none;margin-top:max(8px,",");margin-bottom:0;}@media (max-width:480px){width:100%;}"],o.a.space.s3,o.a.space.s2,f,o.a.fonts.sans,o.a.space.s7,b,o.a.fonts.sans,o.a.space.s4),S=r.c.blockquote.withConfig({displayName:"Typography__Blockquote",componentId:"sc-131gzld-15"})(["",";"],O),_=Object(r.b)(["font-family:",";font-size:min(",",max(",",","));line-height:",";color:var(--color-text-secondary);font-weight:400;margin-bottom:max(24px,",");margin-left:max(24px,",");margin-top:min(24px,max(12px,","));padding-bottom:min(24px,max(12px,","));"],o.a.fonts.serif,o.a.fontSize.pmax,o.a.fontSize.pmin,o.a.fontSize.t4,o.a.lineHeight.ptight,o.a.space.s3,o.a.space.s3,o.a.space.s5,o.a.space.s5),A=r.c.ul.withConfig({displayName:"Typography__Ul",componentId:"sc-131gzld-16"})(["",";"],_),I=r.c.ol.withConfig({displayName:"Typography__Ol",componentId:"sc-131gzld-17"})(["",";"],_),j=Object(r.b)(["margin-bottom:max(8px,",");padding-left:max(4px,",");line-height:",";"],o.a.space.s5,o.a.space.s7,o.a.lineHeight.ptight),k=r.c.li.withConfig({displayName:"Typography__Li",componentId:"sc-131gzld-18"})(["",""],j)},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),i=n("8OQS"),c=["scope","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=n("q1tI"),u=n("7ljp").mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,c),l=f(t),d=p.useMemo((function(){if(!n)return null;var e=s({React:p,mdx:u},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return p.createElement(d,s({},a))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},Zttt:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("Wbzz"),c=n("2HnI"),l=function(){var e=o.a.useContext(c.a),t=e.colorMode,n=e.setColorMode;return t?o.a.createElement("label",{style:{cursor:"pointer"}},o.a.createElement("input",{type:"checkbox",checked:"dark"===t,onChange:function(e){n(e.target.checked?"dark":"light")}})," ","🌗"):null},s=n("dudK"),p=n("REs1"),u=a.c.div.withConfig({displayName:"Nav__NavBar",componentId:"sc-14flg1n-0"})(["display:flex;padding:"," "," "," ",";justify-content:space-between;position:-webkit-sticky;position:sticky;top:0;background:var(--color-background);border-bottom:1px solid var(--color-border-tertiary);z-index:1000;@media (max-width:768px){padding:"," ",";}"],s.a.space.s3,s.a.space.s2,s.a.space.s3,s.a.space.site,s.a.space.s2,s.a.space.site),f={borderBottom:"none"},d=a.c.div.withConfig({displayName:"Nav__NavHome",componentId:"sc-14flg1n-1"})(["align-self:center;"]),m=a.c.div.withConfig({displayName:"Nav__NavLinks",componentId:"sc-14flg1n-2"})(["display:flex;"]),h=a.c.div.withConfig({displayName:"Nav__NavWork",componentId:"sc-14flg1n-3"})(["margin-right:40px;align-self:center;display:none;"]),g=a.c.div.withConfig({displayName:"Nav__NavWriting",componentId:"sc-14flg1n-4"})(["margin-right:40px;align-self:center;display:none;"]),y=a.c.div.withConfig({displayName:"Nav__NavToggle",componentId:"sc-14flg1n-5"})(["align-self:center;"]),b=a.c.div.withConfig({displayName:"Nav__NavAbout",componentId:"sc-14flg1n-6"})(["align-self:center;display:none;"]);var x=function(){var e=Object(i.useStaticQuery)("3159585216");return o.a.createElement(u,null,o.a.createElement(d,null,o.a.createElement(p.n,null,o.a.createElement(i.Link,{to:"/",style:f},e.site.siteMetadata.title))),o.a.createElement(m,null,o.a.createElement(y,null,o.a.createElement(p.n,null,o.a.createElement(l,null))),o.a.createElement(h,null,o.a.createElement(p.n,null,o.a.createElement(i.Link,{to:"/blog",style:f},"Writing"))),o.a.createElement(g,null,o.a.createElement(p.n,null,o.a.createElement(i.Link,{to:"/blog",style:f},"Reading"))),o.a.createElement(b,null,o.a.createElement(p.n,null,o.a.createElement(i.Link,{to:"/blog",style:f},"Bio")))))},v=a.c.div.withConfig({displayName:"Footer__SectionContainer",componentId:"sc-dbt6v-0"})(["max-width:100vw;padding:max(40px,",") 0;padding-left:",";"],s.a.space.s1,s.a.space.site),w=a.c.div.withConfig({displayName:"Footer__HeadingContainer",componentId:"sc-dbt6v-1"})(["margin-bottom:max(24px,",");width:80vw;"],s.a.space.s3),T=a.c.div.withConfig({displayName:"Footer__BodyContainer",componentId:"sc-dbt6v-2"})(["padding-top:",";padding-bottom:",";width:70vw;"],s.a.space.s3,s.a.space.s2),E=a.c.ul.withConfig({displayName:"Footer__ArticleUL",componentId:"sc-dbt6v-3"})(["list-style-type:none;"]),C=a.c.li.withConfig({displayName:"Footer__ArticleLI",componentId:"sc-dbt6v-4"})(["margin-bottom:max(24px,",");"],s.a.space.s3),O=function(){return o.a.createElement("footer",null,o.a.createElement(v,null,o.a.createElement(w,null,o.a.createElement(p.b,null,"Say hello")),o.a.createElement(T,null,o.a.createElement(E,null,o.a.createElement(C,null,o.a.createElement(p.f,null,o.a.createElement("a",{href:"mailto:marco.pacifico@gmail.com",target:"_blank",rel:"noreferrer"},"Email"))),o.a.createElement(C,null,o.a.createElement(p.f,null,o.a.createElement("a",{href:"https://www.linkedin.com/in/marcopacifico/",target:"_blank",rel:"noreferrer"},"LinkedIn"))),o.a.createElement(C,null,o.a.createElement(p.f,null,o.a.createElement("a",{href:"https://twitter.com/marcopacifico",target:"_blank",rel:"noreferrer"},"Twitter"))),o.a.createElement(C,null,o.a.createElement(p.f,null,o.a.createElement("a",{href:"https://dribbble.com/marcopacifico",target:"_blank",rel:"noreferrer"},"Dribbble"))),o.a.createElement(C,null,o.a.createElement(p.f,null,o.a.createElement("a",{href:"https://www.instagram.com/marcopacifico",target:"_blank",rel:"noreferrer"},"Instagram")))))))};t.a=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null),t,o.a.createElement(O,null))}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,p;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(p=t.entries();!(l=p.next()).done;)if(!i.has(l.value[0]))return!1;for(p=t.entries();!(l=p.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(p=t.entries();!(l=p.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("E9XD");var r,o,a,i,c=n("17x9"),l=n.n(c),s=n("8+s/"),p=n.n(s),u=n("bmMU"),f=n.n(u),d=n("q1tI"),m=n.n(d),h=n("YVoz"),g=n.n(h),y="bodyAttributes",b="htmlAttributes",x="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",O="innerHTML",S="itemprop",_="name",A="property",I="rel",j="src",k="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",P="defer",M="encodeSpecialCharacters",L="onChangeClientState",H="titleTemplate",R=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=$(e,v.TITLE),n=$(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,z);return t||r||void 0},V=function(e){return $(e,L)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===I&&"canonical"===e[n].toLowerCase()||l===I&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==T&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=g()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){G(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:e.requestAnimationFrame||G,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,p=e.styleTags,u=e.title,f=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(u,f);var d={baseTag:se(v.BASE,n),linkTags:se(v.LINK,a),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,p)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var p=a.indexOf(l);-1!==p&&a.splice(p,1)}for(var u=a.length-1;u>=0;u--)n.removeAttribute(a[u]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=ue(n,r),[m.a.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return ue(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,p=e.title,u=void 0===p?"":p,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(b,o,r),link:fe(v.LINK,a,r),meta:fe(v.META,i,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,l,r),style:fe(v.STYLE,s,r),title:fe(v.TITLE,{title:u,titleAttributes:f},r)}},me=p()((function(e){return{baseTag:Q([E,k],e),bodyAttributes:J(y,e),defer:$(e,P),encode:$(e,M),htmlAttributes:J(b,e),linkTags:Z(v.LINK,[I,E],e),metaTags:Z(v.META,[_,w,C,A,S],e),noscriptTags:Z(v.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:Z(v.SCRIPT,[j,O],e),styleTags:Z(v.STYLE,[T],e),title:X(e),titleAttributes:J(x,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return U({},o,((t={})[r.type]=i,t.titleAttributes=U({},a),t));case v.BODY:return U({},o,{bodyAttributes:U({},a)});case v.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((n={})[r.type]=U({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,i){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},uNJ5:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("dudK"),c=n("REs1"),l=a.c.div.withConfig({displayName:"PostCard__CardContaner",componentId:"sc-1jkfjzf-0"})(["display:flex;flex-direction:row-reverse;justify-content:space-between;max-width:max(100%,80vw);padding:max(16px,",") 0;transition:background-size,visibility,transform .25s ease-out;&:hover "," a{background-size:100% 100%;}&:hover "," a::after{visibility:visible;transform:scale(1);}"],i.a.space.s4,c.f,c.f),s=a.c.div.withConfig({displayName:"PostCard__DescriptionContainer",componentId:"sc-1jkfjzf-1"})(["border-left:1px solid var(--color-border-tertiary);padding:"," 0 "," ",";width:100%;align-self:center;"],i.a.space.s5,i.a.space.s5,i.a.space.s3);t.a=function(e){return o.a.createElement(l,null,o.a.createElement(s,null,o.a.createElement(c.f,null,o.a.createElement("a",{href:"/",style:{borderBottom:"none"}},e.title)),o.a.createElement(c.g,null,e.description)))}},wtQ5:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("qhky"),i=n("Wbzz");function c(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,l=Object(i.useStaticQuery)("63159454").site,s=t||l.siteMetadata.description;return o.a.createElement(a.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=291a736a4998dc6bb1e7dae6dfd245355445eafd-de0d529d13da3027eacb.js.map