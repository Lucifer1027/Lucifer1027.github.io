(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},i={app:0},a=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0bfa":function(e,t,o){"use strict";o("7dc1")},"0e21":function(e,t,o){"use strict";o("5c8d")},"2bd5":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("NavigationBar",{style:{position:e.navBarPosition},on:{"change-tab":e.changeTab}}),o("router-view"),o("Footer")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation-bar-container"},[n("div",{staticClass:"navigation-bar-logo-container",on:{click:e.goHomePage}},[n("img",{staticClass:"navigation-bar-logo",attrs:{src:o("e0dd")}})]),n("div",{staticClass:"navigation-bar-tab-container"},e._l(e.tabs,(function(t,o){return n("div",{key:t.key,staticClass:"navigation-bar-tab",class:{active:t.selected},on:{click:function(t){return e.changeTab(o)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])},s=[],c={data:function(){return{tabs:[{key:"projects",name:"Projects",selected:!1},{key:"notes",name:"Notes and Blogs",selected:!1}]}},methods:{changeTab:function(e){for(var t in this.tabs)this.tabs[t].selected=!1;this.tabs[e].selected=!0,this.$emit("change-tab",e+1)},goHomePage:function(){this.$router.push("home")}}},l=c,u=(o("f0bf"),o("2877")),d=Object(u["a"])(l,r,s,!1,null,"e59654a8",null),p=d.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-container"},[o("div",{staticClass:"info-container"},[o("div",{staticClass:"main-info"},[e._v(" Copyright © 2021 Lucifer1027 @ github.com All rights reserved. ")]),o("div",{staticClass:"other-info"})])])}],f=(o("8baa"),{}),v=Object(u["a"])(f,m,h,!1,null,"c4f3453c",null),y=v.exports,b={name:"App",components:{NavigationBar:p,Footer:y},data:function(){return{navBarPosition:"absolute"}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.navBarPosition=0!=e?"fixed":"absolute"},changeTab:function(e){switch(e){case 1:this.$router.push("projects");break;case 2:this.$router.push("notes");break}}}},g=b,w=(o("adfc"),Object(u["a"])(g,i,a,!1,null,"15f50150",null)),k=w.exports,_=(o("7d05"),o("bc3a")),C=o.n(_),I=o("5c96"),P=o.n(I),j=(o("0fae"),o("2f62")),O=o("8c4f"),S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"homepage"}},[o("div",{staticClass:"background-image"},[o("div",{staticClass:"homepage-info"},[o("div",{staticClass:"homepage-title"},[e._v(" Welcome to Eric's Website ")]),o("div",{staticClass:"homepage-description"},[e._v(" This is a blog site that records some of my projects and notes. ")])])])])}],T={name:"homepage",components:{},data:function(){return{}},methods:{bindChange:function(e){this.$refs.swiper.manualSwipe(e)},swiperChanged:function(e){0!=e&&e-1!=this.games.length&&(this.currentPic=e-1)}}},R=T,A=(o("da29"),Object(u["a"])(R,S,x,!1,null,"93b1daa4",null)),E=A.exports,$=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"projectspage"}},[o("div",{staticClass:"side-column"},[o("div",{staticClass:"side-column-title"},[e._v(" Notes and Blogs ")]),o("Collapse",{attrs:{"collapse-data":e.guide,"current-item":e.currentItem.name},on:{"click-collapse-item":e.clickCollapseItem}})],1),o("div",{staticClass:"main-panel"},["article"==e.currentItem.type?o("Article",{attrs:{article:e.currentItem}}):e._e()],1)])},L=[],B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"collapse-block"},[o("div",{staticClass:"collapse-title"},[e._v(" "+e._s(e.collapseData.title)+" ")]),e._l(e.collapseData.items,(function(t){return o("div",{key:t.key,staticClass:"collapse-item",class:[t.key==e.currentItem?"collapse-item-active":""],on:{click:function(o){return e.$emit("click-collapse-item",t)}}},[e._v(" "+e._s(t.name)+" ")])}))],2)},M=[],D={props:{collapseData:Object,currentItem:String},data:function(){return{currentIndex:-1}}},W=D,N=(o("0e21"),Object(u["a"])(W,B,M,!1,null,"fef6d08a",null)),F=N.exports,H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"article-body"},[o("div",{staticClass:"article-title"},[e._v(" "+e._s(e.article.title)+" ")]),e._l(e.article.paragraphs,(function(t){return o("div",{key:t.key,staticClass:"article-paragraph"},[o("div",{staticClass:"paragraph-title"},[e._v(" "+e._s(t.title)+" ")]),e._l(t.body,(function(t){return o("div",{key:t.key,staticClass:"paragraph-body"},[e._v(" "+e._s(t)+" ")])}))],2)}))],2)},q=[],Z={props:{article:Object}},z=Z,Y=(o("e594"),Object(u["a"])(z,H,q,!1,null,"1ae2df0b",null)),J=Y.exports,U={name:"overview",type:"article",title:"Project Overview",paragraphs:[{title:"1. About the project",body:["This project is a universal remote controller that could remotely control all your home electronics through your phone. The device learns your remote controllers’ frequencies and controls them via voice or phone. It supports infrared (IR), radio (RF), or voice control."]},{title:"2. License",body:["The License is MIT., I will post my code to my github repository."]}]},G=U,K={name:"checklist",type:"article",title:"Checklist",paragraphs:[{title:"Board (Processor)",body:["For this project, I have chosen Raspberry Pi Zero W for it supports WLAN and Bluetooth connection. Also, Raspberry Pi has a relatively big community so I could implement the voice recognition algorithm later on. However, you could also use other Raspberry boards as long as it supports the WLAN connection (Although it might not fit in the protection case). Technically speaking, if you only need the basic functionalities, you could choose whatever board you want. All you’ll need is to rewrite the codes in a different language, but the program skeleton will remain the same."]},{title:"Hardwares",body:["1. RF34D Duo Radio Frequency Decoding Module. You could choose any other module as long as it can decode/encode 315MHz and 433MHz RF signals.","2. ESP-M2 ESP8285 Wifi SoC","3. IR Receive/Emit Module. I'm uncertain if there's any frequency requirement. I choose 38kHz modules since they are the only type I could find.","4. LCD Screen, whatever type is okay. I use Waveshare 5.5 inches LCD CTP screen since it has excellent compatibility with the Raspberry Pi, plus I already have one by my hand.","5. OPTIONAL: 19-pin flat cable connector, with 0.5mm spacing. (To replace the hdmi port on Raspberry Pi Zero)","6. OPTIONAL: 3D printer. There's a lot of 3D printing services so its okay if you don't have one. Or you could just leave the modules without the protection case."]},{title:"Tools",body:["1. Soldering kit.","2. A USB micro A cable and an HDMI mini cable. (to connect Raspberry Pi Zero W).","3. A TF card and a card reader.","4. Wired keyboard and mouse. It's pretty hard to set up Raspberry Pi if you don't have these. Also, make sure they are wire-connected. I didn't realize I don't have a wired mouse until I start to set up my Raspberry Pi, which is quite a bummer.","5. A breadboard and some jumper wires."]},{title:"Software",body:["I'm not sure if there is any software requirement. I will specify in the following chapters if there are any."]}]},Q=K,V={name:"basicimplementation",type:"article",title:"Basic Implementation",paragraphs:[{title:"Install OS for your Raspberry Pi Zero W",body:["The first step is to set up your Raspberry Pi Zero. Because I also want to add a screen to my universal remote controller, I chose to use Debian on my Raspberry Pi. You could choose other Operating Systems if you wish."]},{title:"Config your Raspberry Pi",body:["You need to make several configurations before you move on to the next step.","1. First thing first you'll need to connect your Raspberry Pi to your wifi"]},{title:"Connect your IRM to your Raspberry Pi",body:["After we do all these previous setups, we could finally move on to the project. Connect your infrared module to your Raspberry Pi"]}]},X=V,ee={components:{Collapse:F,Article:J},data:function(){return{guide:{title:"Universal Remote Controller",items:[{key:"overview",index:0,name:"Overview"},{key:"checklist",index:1,name:"Checklist"},{key:"basicimplementation",index:2,name:"Basic Implementation"}]},articleList:{overview:G,checklist:Q,basicimplementation:X},currentItem:G}},methods:{clickCollapseItem:function(e){this.currentItem=this.articleList[e.key]}}},te=ee,oe=(o("b74f"),Object(u["a"])(te,$,L,!1,null,"7c669821",null)),ne=oe.exports,ie=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"notespage"}},[o("div",{staticClass:"side-column"},[o("div",{staticClass:"side-column-title"},[e._v(" Notes and Blogs ")]),o("Collapse",{attrs:{"collapse-data":e.guide,"current-item":e.currentItem.name},on:{"click-collapse-item":e.clickCollapseItem}})],1),o("div",{staticClass:"main-panel"},["article"==e.currentItem.type?o("Article",{attrs:{article:e.currentItem}}):e._e()],1)])},ae=[],re={components:{Collapse:F,Article:J},data:function(){return{guide:{title:"Wechat Miniapp",items:[{key:"overview",index:0,name:"Overview"},{key:"checklist",index:1,name:"Checklist"},{key:"basicimplementation",index:2,name:"Basic Implementation"}]},articleList:{overview:G,checklist:Q,basicimplementation:X},currentItem:G}},methods:{clickCollapseItem:function(e){this.currentItem=this.articleList[e.key]}}},se=re,ce=(o("0bfa"),Object(u["a"])(se,ie,ae,!1,null,"89383ef2",null)),le=ce.exports;n["default"].use(O["a"]);var ue=[{path:"/home",name:"home",component:E},{path:"/",redirect:"/home"},{path:"/projects",name:"projects",component:ne},{path:"/notes",name:"notes",component:le}],de=new O["a"]({routes:ue}),pe=de;n["default"].use(j["a"]);var me=new j["a"].Store({state:{loginState:window.sessionStorage.getItem("loginState")},mutations:{SET_LOGIN_STATE:function(e,t){e.loginState=t,window.sessionStorage.setItem("loginState",t)}}}),he=me;n["default"].use(P.a),n["default"].use(j["a"]),n["default"].prototype.$axios=C.a,n["default"].config.productionTip=!1,new n["default"]({el:"#app",router:pe,store:he,render:function(e){return e(k)}}).$mount("#app")},"5c8d":function(e,t,o){},"65e9":function(e,t,o){},"75ac":function(e,t,o){},"75bc":function(e,t,o){},"7d05":function(e,t,o){},"7dc1":function(e,t,o){},"8baa":function(e,t,o){"use strict";o("a471")},a471:function(e,t,o){},adfc:function(e,t,o){"use strict";o("75ac")},b74f:function(e,t,o){"use strict";o("2bd5")},bae0:function(e,t,o){},da29:function(e,t,o){"use strict";o("65e9")},e0dd:function(e,t,o){e.exports=o.p+"img/logo.c3b42c9c.png"},e594:function(e,t,o){"use strict";o("75bc")},f0bf:function(e,t,o){"use strict";o("bae0")}});
//# sourceMappingURL=app.2a24cf71.js.map