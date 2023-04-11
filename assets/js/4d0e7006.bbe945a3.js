"use strict";(self.webpackChunkai_workshop_docs=self.webpackChunkai_workshop_docs||[]).push([[840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,k=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Introductie Python",l={unversionedId:"python/intro",id:"python/intro",title:"Introductie Python",description:'Welkom bij de workshop "BDD met ChatGPT". In deze workshop leer je hoe je AI kunt inzetten in Behaviour-Driven Development. We werken een klantcase uit zodat de praktische toepasbaarheid duidelijk wordt en je de opgedane kennis direct kunt toepassen bij je klant of project. Met behulp van ChatGPT optimaliseren we de requirements, werken dit vervolgens uit naar testcases en tot slot een werkende applicatie, zonder dat je een ervaren developer hoeft te zijn. Waarom zou je AI willen gebruiken in je project? Hoe communiceer je dit naar je opdrachtgever? Hoe kan je AI effici\xebnt inzetten? In deze workshop leer je hoe je als testexpert of DevOps engineer AI effectief kunt inzetten in je project.',source:"@site/docs/python/1.intro.md",sourceDirName:"python",slug:"/python/intro",permalink:"/ai-workshop-docs/docs/python/intro",draft:!1,editUrl:"https://github.com/codecentricnl/ai-workshop-docs/docs/python/1.intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"pythonSidebar",next:{title:"Voorbereidingen",permalink:"/ai-workshop-docs/docs/python/voorbereidingen"}},p={},s=[{value:"Wat is BDD?",id:"wat-is-bdd",level:2},{value:"Wat heb je nodig",id:"wat-heb-je-nodig",level:2},{value:"Wat haal jij hieruit?",id:"wat-haal-jij-hieruit",level:2},{value:"Hulp nodig?",id:"hulp-nodig",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introductie-python"},"Introductie Python"),(0,o.kt)("p",null,'Welkom bij de workshop "BDD met ChatGPT". In deze workshop leer je hoe je AI kunt inzetten in Behaviour-Driven Development. We werken een klantcase uit zodat de praktische toepasbaarheid duidelijk wordt en je de opgedane kennis direct kunt toepassen bij je klant of project. Met behulp van ChatGPT optimaliseren we de requirements, werken dit vervolgens uit naar testcases en tot slot een werkende applicatie, zonder dat je een ervaren developer hoeft te zijn. Waarom zou je AI willen gebruiken in je project? Hoe communiceer je dit naar je opdrachtgever? Hoe kan je AI effici\xebnt inzetten? In deze workshop leer je hoe je als testexpert of DevOps engineer AI effectief kunt inzetten in je project.'),(0,o.kt)("h2",{id:"wat-is-bdd"},"Wat is BDD?"),(0,o.kt)("p",null,"Regelmatig lees of hoor je dat IT-projecten falen, een langere doorlooptijd nodig hebben dan oorspronkelijk gepland en veel meer kosten dan oorspronkelijk gedacht. De oorzaken hiervoor zijn veelal te herleiden naar communicatieproblemen zoals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"De business is niet in staat om het gewenste gedrag eenduidig te benoemen."),(0,o.kt)("li",{parentName:"ul"},"De ontwikkelaars begrijpen niet wat het gewenste gedrag is dat ze moeten ontwikkelen."),(0,o.kt)("li",{parentName:"ul"},"De business begrijpt niet welke technische uitdagingen het gewenste gedrag met zich meebrengt.")),(0,o.kt)("p",null,"Het primaire doel van BDD is om mensen te laten communiceren en de kloof te dichten tussen \u2019technische\u2019 en \u2018business\u2019 mensen. BDD zorgt voor communicatie tussen iemand met diepgaande technische kennis, iemand met een grondige business kennis en een professionele tester. Door deze verschillende stakeholders de functionaliteit te laten bespreken, de problemen te bespreken en te praten over hoe ze deze kunnen oplossen, zal leiden tot specificaties die door alle stakeholders op dezelfde wijze wordt begrepen."),(0,o.kt)("p",null,"Veel plezier!"),(0,o.kt)("h2",{id:"wat-heb-je-nodig"},"Wat heb je nodig"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://chat.openai.com/auth/login"},"ChatGPT (Pro)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"een IDE, in de workshop gebruiken we ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/pycharm/download/"},"PyCharm"),". Wil je een andere IDE gebruiken bekijk dan of de te nemen stappen ook mogelijk zijn zoals het gebruik van plugins.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Python"))),(0,o.kt)("h2",{id:"wat-haal-jij-hieruit"},"Wat haal jij hieruit?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kennis om dit morgen direct toe te passen in je opdracht.")),(0,o.kt)("h2",{id:"hulp-nodig"},"Hulp nodig?"),(0,o.kt)("p",null,"Wanneer je hulp nodig hebt vraag om hulp bij iemand met een ",(0,o.kt)("strong",{parentName:"p"},"the/experts")," shirt."))}c.isMDXComponent=!0}}]);