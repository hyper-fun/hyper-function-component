// 0.1.9
(()=>{"use strict";var e={418:(e,t,n)=>{function o(e){const{h:t,ref:n,watch:o,toRef:r,reactive:s,computed:a,Teleport:l,onMounted:i,onUnmounted:c,defineComponent:d}=e;return function(e){e.propTypes=e.propTypes||{};const u=Object.keys(e.propTypes.attrs||{}),p=Object.keys(e.propTypes.events||{}),m=Object.keys(e.propTypes.slots||{}),f={};for(let e=0;e<p.length;e++){const t=p[e];f["on"+t[0].toUpperCase()+t.slice(1)]=t}const w={};for(let e=0;e<m.length;e++){const t=m[e];w[t.toLowerCase()]=t}const h=Object.keys(f);return d({props:u,setup(d,{slots:p,attrs:m}){const v=n(),y={};if(h.length)for(let e=0;e<h.length;e++){const t=h[e],n=m[t];n&&(y[f[t]]=n)}const g={},_=s({});let $;Object.keys(p).forEach((e=>{const t=w[e.replace(/-/g,"").toLowerCase()];if(!t)return;const n=p[e];g[t]=function(e,o){if(!e)return void delete _[t];const r=_[t];r?(r.container!==e&&(r.container=e),r.args=o):_[t]={name:t,container:e,slot:n,args:o}}}));const E={};if(u.length)for(let t=0;t<u.length;t++){const n=u[t];if(null==d[n])continue;let s=d[n];""===s&&"#b"===e.propTypes.attrs[n].t&&(s=!0),E[n]=s,o(r(d,n),((e,t)=>{var o;E[n]=e,null===(o=$.changed)||void 0===o||o.call($,"attr",n,t,e)}),{deep:!0})}$=new e({attrs:E,events:y,slots:g}),i((()=>{$.connected(v.value)})),c((()=>{var e;null===(e=$.disconnected)||void 0===e||e.call($)}));const b=a((()=>Object.keys(_).map((e=>{const n=_[e];return t(l,{to:n.container},n.slot(n.args))}))));return()=>[t("div",{ref:v}),b.value]}})}}n.r(t),n.d(t,{default:()=>o})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n.S={};var e={},t={};n.I=(o,r)=>{r||(r=[]);var s=t[o];if(s||(s=t[o]={}),!(r.indexOf(s)>=0)){if(r.push(s),e[o])return e[o];n.o(n.S,o)||(n.S[o]={}),n.S[o];var a=[];return e[o]=a.length?Promise.all(a).then((()=>e[o]=1)):1}}})(),(()=>{function e(e){return new Promise(((t,n)=>{const o=document.createElement("script");o.async=!0,o.src=e,o.onload=()=>{o.onerror=o.onload=null,t(null)},o.onerror=()=>{o.onerror=o.onload=null,n(new Error(`Failed to load ${e}`))},(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}))}const t=new Promise((e=>{"complete"===document.readyState?e():window.addEventListener("load",(()=>e()))}));function o(e){let t;try{t=new Function("$data",`with ($data) { return (${e}) }`)({})}catch(t){console.error(`${t.message} in expression: ${e}`)}return t}function r(t,r){const s=t.reactive({teleports:[]}),a=t.createApp({data:()=>s,render:()=>s.teleports.map((e=>t.h(t.Teleport,{to:e.target},e.component)))});function l(){const e=document.querySelectorAll("template[hfz]");if(!e.length)return;const n=[];e.forEach((e=>{var o,r,s;const l=i(e);if(l.name)return a.component(l.name,l),void(null===(o=e.parentNode)||void 0===o||o.removeChild(e));let c;if(e.hasAttribute("mount")){if(c=document.querySelector(e.getAttribute("mount")),!c)return}else c=document.createElement("div"),null===(r=e.parentNode)||void 0===r||r.insertBefore(c,e);n.push({target:c,component:t.h(l)}),null===(s=e.parentNode)||void 0===s||s.removeChild(e)})),s.teleports=s.teleports.concat(n)}function i(s){let a={};const l=s.content.querySelector("script");if(l){const e=l.textContent.trim(),t=e.slice(e.indexOf("{"));a=new Function("return "+t)()}s.hasAttribute(":data")&&!a.data&&(a.data=o(s.getAttribute(":data"))),s.hasAttribute(":props")&&!a.props&&(a.props=o(s.getAttribute(":props")));const c={};if(s.getAttributeNames().forEach((o=>{if("import:"!==o.slice(0,7))return;const a=o.split(":"),l=a[1],d=a[2];let u=s.getAttribute(o);var p;"."===u[0]||"/"===u[0]?c[d||l]=(p=u,t.defineAsyncComponent({loader:()=>new Promise(((e,t)=>{var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==this.readyState){if(200==this.status){const t=this.responseText,n=document.createElement("template");n.innerHTML=t;const o=n.content.querySelector("template");return void e(i(o))}t(new Error("fail to load remote template: "+p))}},n.open("GET",p,!0),n.send()}))})):c[d||l]=function(o,s){return t.defineAsyncComponent({loader(){let a="@hyper.fun/"+o;s&&(a=a+"@"+s);let l=window.$HFC_NPM_CDN_URL;const i=window[`$HFC_CDN_REWRITE_${a}`];return i&&(l=i),e(`${l}/${a}/wfm/entry.js`).then((()=>(function(e){new Promise(((t,n)=>{const o=document.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,o.onload=()=>{o.onerror=o.onload=null,t(null)},o.onerror=()=>{o.onerror=o.onload=null,n(new Error(`Failed to load ${e}`))},(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}))}(`${l}/${a}/hfc.css`),function(e){const t=window.$HFC_WFM_CONTAINERS[e],o=t.init(n.S.default);return(o&&o.then?o:Promise.resolve()).then((()=>t.get("./hfc"))).then((e=>e()))}("@hyper.fun/"+o)))).then((e=>r(e.default,!0))).catch((e=>(console.error(e),console.warn(`[hfz] faild to load component: ${o} ${s} `),t.defineComponent({}))))}})}(l,u)})),a.name=s.getAttribute("name"),a.components=c,a.render=t.compile(s.innerHTML,{runtimeGlobalName:"$HFZ_VUE"}),"function"!=typeof a.data){const e=a.data;a.data=()=>e}return a}a.component("block",{emits:["mounted","unmounted"],setup:(e,{slots:n,emit:o})=>(t.onMounted((()=>o("mounted"))),t.onUnmounted((()=>o("unmounted"))),()=>n.default&&n.default())}),a.mount(document.createElement("template")),l(),window.$HFZ_MOUNT_TEMPLATES=l}window.$HFC_NPM_CDN_URL=window.$HFC_NPM_CDN_URL||"https://npm.hyper.fun/npm",window.$HFC_WFM_CONTAINERS=window.$HFC_WFM_CONTAINERS||{},Promise.all([new Promise((t=>{var n;if(!window.$HFZ_VUE)return"object"==typeof(n=window.Vue)&&"3"===n.version[0]&&n.compile&&n.Teleport?(window.$HFZ_VUE=window.Vue,void t(window.$HFZ_VUE)):void e(window.$HFC_NPM_CDN_URL+"/vue@3.2.31/dist/vue.global.prod.js").then((()=>{window.$HFZ_VUE=window.Vue,t(window.$HFZ_VUE)}));t(window.$HFZ_VUE)})),Promise.resolve().then(n.bind(n,418)),t,function(){const e=n.I("default");return e.then?e:Promise.resolve()}()]).then((([e,t])=>{!function(e,t,o){const r=n.S.default.vue=n.S.default.vue||{},s=r[t];s&&s.loaded||(r[t]={get:()=>Promise.resolve((()=>o)),from:"hfc",eager:!1})}(0,window.$HFZ_VUE.version,window.$HFZ_VUE),r(e,t.default(e))})).catch((e=>{console.warn("[hfz] faild to init"),console.error(e)}))})()})();