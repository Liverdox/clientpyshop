import{c as O,h as ee,v as Lt,a as De,g as kt,b as St,d as Tt,e as Ve,f as Et,u as xt,i as _t,j as $t,Q as Bt}from"./use-router-link.979e086c.js";import{c as f,h as S,g as D,o as X,H as He,w as C,a as U,n as j,d as B,l as z,s as Te,e as zt,f as Pt,P as Mt,i as Ee,j as Ot,k as oe,p as pe,m as Re,q as ye,r as Se,t as ge,u as Ze,v as I,x as T,y as Dt,z as xe,A as et,B as Vt,C as tt,D as ie,E as Ht,F as Rt,G as nt,_ as ot,I as Z,J as ue,K as M,L as R,M as Wt,N as it,O as At,Q as We,R as Ft,S as Qt,T as Nt,U as It}from"./index.2b038f88.js";import{u as _e,a as $e}from"./use-dark.bee4bffd.js";var lt=O({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const o=f(()=>parseInt(e.lines,10)),l=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=f(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>S("div",{style:t.value,class:l.value},ee(n.default))}}),Xt=O({name:"QList",props:{..._e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const o=D(),l=$e(e,o.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:t.value},ee(n.default))}});function Ut(e,n,o){let l;function t(){l!==void 0&&(He.remove(l),l=void 0)}return X(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>o.value===!0,handler:n},He.add(l)}}}const jt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Yt=["beforeShow","show","beforeHide","hide"];function Kt({showing:e,canShow:n,hideOnRouteChange:o,handleShow:l,handleHide:t,processOnMount:i}){const s=D(),{props:d,emit:c,proxy:u}=s;let a;function w(m){e.value===!0?p(m):q(m)}function q(m){if(d.disable===!0||m!==void 0&&m.qAnchorHandled===!0||n!==void 0&&n(m)!==!0)return;const g=d["onUpdate:modelValue"]!==void 0;g===!0&&(c("update:modelValue",!0),a=m,j(()=>{a===m&&(a=void 0)})),(d.modelValue===null||g===!1)&&v(m)}function v(m){e.value!==!0&&(e.value=!0,c("beforeShow",m),l!==void 0?l(m):c("show",m))}function p(m){if(d.disable===!0)return;const g=d["onUpdate:modelValue"]!==void 0;g===!0&&(c("update:modelValue",!1),a=m,j(()=>{a===m&&(a=void 0)})),(d.modelValue===null||g===!1)&&E(m)}function E(m){e.value!==!1&&(e.value=!1,c("beforeHide",m),t!==void 0?t(m):c("hide",m))}function L(m){d.disable===!0&&m===!0?d["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):m===!0!==e.value&&(m===!0?v:E)(a)}C(()=>d.modelValue,L),o!==void 0&&Lt(s)===!0&&C(()=>u.$route.fullPath,()=>{o.value===!0&&e.value===!0&&p()}),i===!0&&U(()=>{L(d.modelValue)});const b={show:q,hide:p,toggle:w};return Object.assign(u,b),b}const Gt=[null,document,document.body,document.scrollingElement,document.documentElement];function Jt(e,n){let o=kt(n);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Gt.includes(o)?window:o}function rt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function at(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function be(){if(le!==void 0)return le;const e=document.createElement("p"),n=document.createElement("div");De(e,{width:"100%",height:"200px"}),De(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const o=e.offsetWidth;n.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=n.clientWidth),n.remove(),le=o-l,le}function Zt(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let G=0,we,qe,J,Ce=!1,Ae,Fe,Qe,F=null;function en(e){tn(e)&&Te(e)}function tn(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=zt(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||l?e.deltaY:e.deltaX;for(let i=0;i<n.length;i++){const s=n[i];if(Zt(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ne(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:n}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(J===void 0||n!==window.innerHeight)&&(J=o-n,document.scrollingElement.scrollTop=l),l>J&&(document.scrollingElement.scrollTop-=Math.ceil((l-J)/8))}))}function Ie(e){const n=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(n);we=at(window),qe=rt(window),Ae=n.style.left,Fe=n.style.top,Qe=window.location.href,n.style.left=`-${we}px`,n.style.top=`-${qe}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,B.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,z.passiveCapture),window.visualViewport.addEventListener("scroll",re,z.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ne,z.passiveCapture))}B.is.desktop===!0&&B.is.mac===!0&&window[`${e}EventListener`]("wheel",en,z.notPassive),e==="remove"&&(B.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",re,z.passiveCapture),window.visualViewport.removeEventListener("scroll",re,z.passiveCapture)):window.removeEventListener("scroll",Ne,z.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Ae,n.style.top=Fe,window.location.href===Qe&&window.scrollTo(we,qe),J=void 0)}function nn(e){let n="add";if(e===!0){if(G++,F!==null){clearTimeout(F),F=null;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(n="remove",B.is.ios===!0&&B.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{Ie(n),F=null},100);return}}Ie(n)}function on(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,nn(n))}}}function ln(){let e=null;const n=D();function o(){e!==null&&(clearTimeout(e),e=null)}return Pt(o),X(o),{removeTimeout:o,registerTimeout(l,t){o(),St(n)===!1&&(e=setTimeout(l,t))}}}const Be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},rn=Object.keys(Be);Be.all=!0;function Xe(e){const n={};for(const o of rn)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Be:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const an=["INPUT","TEXTAREA"];function Ue(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&an.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function un(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Mt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,n,o){const l=Se(e);let t,i=l.left-n.event.x,s=l.top-n.event.y,d=Math.abs(i),c=Math.abs(s);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?t=i<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",d>c&&(u.left===!0&&i<0?t="left":u.right===!0&&i>0&&(t="right"))):u.down===!0&&s>0?(t="down",d>c&&(u.left===!0&&i<0?t="left":u.right===!0&&i>0&&(t="right"))):u.left===!0&&i<0?(t="left",d<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&i>0&&(t="right",d<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,a=!0,t==="left"||t==="right"?(l.left-=i,d=0,i=0):(l.top-=s,c=0,s=0)}return{synthetic:a,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:l,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:d,y:c},offset:{x:i,y:s},delta:{x:l.left-n.event.lastX,y:l.top-n.event.lastY}}}}let sn=0;var ke=Tt({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&B.has.touch!==!0)return;function l(i,s){o.mouse===!0&&s===!0?Te(i):(o.stop===!0&&ye(i),o.prevent===!0&&Re(i))}const t={uid:"qvtp_"+sn++,handler:n,modifiers:o,direction:Xe(o),noop:Ee,mouseStart(i){Ue(i,t)&&Ot(i)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ue(i,t)){const s=i.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(B.is.firefox===!0&&pe(e,!0),t.lastEvt=i,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Re(u),i.cancelBubble===!0&&ye(u),Object.assign(u,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:u}}ye(i)}const{left:d,top:c}=Se(i);t.event={x:d,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:c}},move(i){if(t.event===void 0)return;const s=Se(i),d=s.left-t.event.x,c=s.top-t.event.y;if(d===0&&c===0)return;t.lastEvt=i;const u=t.event.mouse===!0,a=()=>{l(i,u);let v;o.preserveCursor!==!0&&o.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),un(),t.styleCleanup=p=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),u===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{E(),p()},50):E()}else p!==void 0&&p()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:v,synthetic:p}=Le(i,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=p===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const w=Math.abs(d),q=Math.abs(c);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&c<0||t.direction.down===!0&&w<q&&c>0||t.direction.left===!0&&w>q&&d<0||t.direction.right===!0&&w>q&&d>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(ge(t,"temp"),B.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(i===void 0?t.lastEvt:i,t).payload);const{payload:d}=Le(i===void 0?t.lastEvt:i,t,!0),c=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const i=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}B.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=Xe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ge(n,"main"),ge(n,"temp"),B.is.firefox===!0&&pe(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function ae(e,n,o){return o<=n?n:Math.min(o,Math.max(n,e))}const je=150;var cn=O({name:"QDrawer",inheritAttrs:!1,props:{...jt,..._e,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Yt,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:l}){const t=D(),{proxy:{$q:i}}=t,s=$e(e,i),{preventBodyScroll:d}=on(),{registerTimeout:c,removeTimeout:u}=ln(),a=Ze(xe,I);if(a===I)return console.error("QDrawer needs to be child of QLayout"),I;let w,q=null,v;const p=T(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),E=f(()=>e.mini===!0&&p.value!==!0),L=f(()=>E.value===!0?e.miniWidth:e.width),b=T(e.showIfAbove===!0&&p.value===!1?!0:e.modelValue===!0),m=f(()=>e.persistent!==!0&&(p.value===!0||st.value===!0));function g(r,y){if(W(),r!==!1&&a.animate(),$(0),p.value===!0){const x=a.instances[te.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),V(1),a.isContainer.value!==!0&&d(!0)}else V(0),r!==!1&&ve(!1);c(()=>{r!==!1&&ve(!0),y!==!0&&o("show",r)},je)}function h(r,y){Y(),r!==!1&&a.animate(),V(0),$(Q.value*L.value),me(),y!==!0?c(()=>{o("hide",r)},je):u()}const{show:k,hide:_}=Kt({showing:b,hideOnRouteChange:m,handleShow:g,handleHide:h}),{addToHistory:W,removeFromHistory:Y}=Ut(b,_,m),A={belowBreakpoint:p,hide:_},P=f(()=>e.side==="right"),Q=f(()=>(i.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),ze=T(0),N=T(!1),se=T(!1),Pe=T(L.value*Q.value),te=f(()=>P.value===!0?"left":"right"),ce=f(()=>b.value===!0&&p.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),de=f(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(P.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),K=f(()=>e.overlay===!1&&b.value===!0&&p.value===!1),st=f(()=>e.overlay===!0&&b.value===!0&&p.value===!1),ct=f(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&N.value===!1?" hidden":"")),dt=f(()=>({backgroundColor:`rgba(0,0,0,${ze.value*.4})`})),Me=f(()=>P.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ft=f(()=>P.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),vt=f(()=>{const r={};return a.header.space===!0&&Me.value===!1&&(de.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&ft.value===!1&&(de.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),mt=f(()=>{const r={width:`${L.value}px`,transform:`translateX(${Pe.value}px)`};return p.value===!0?r:Object.assign(r,vt.value)}),ht=f(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),pt=f(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(p.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(de.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Me.value===!0?" q-drawer--top-padding":""))),yt=f(()=>{const r=i.lang.rtl===!0?e.side:te.value;return[[ke,qt,void 0,{[r]:!0,mouse:!0}]]}),gt=f(()=>{const r=i.lang.rtl===!0?te.value:e.side;return[[ke,Oe,void 0,{[r]:!0,mouse:!0}]]}),bt=f(()=>{const r=i.lang.rtl===!0?te.value:e.side;return[[ke,Oe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){Ct(p,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(p,r=>{r===!0?(w=b.value,b.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?($(0),V(0),me()):k(!1))}),C(()=>e.side,(r,y)=>{a.instances[y]===A&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=A,a[r].size=L.value,a[r].space=K.value,a[r].offset=ce.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),C(()=>e.behavior+e.breakpoint,fe),C(a.isContainer,r=>{b.value===!0&&d(r!==!0),r===!0&&fe()}),C(a.scrollbarWidth,()=>{$(b.value===!0?0:void 0)}),C(ce,r=>{H("offset",r)}),C(K,r=>{o("onLayout",r),H("space",r)}),C(P,()=>{$()}),C(L,r=>{$(),he(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{he(r,L.value)}),C(()=>i.lang.rtl,()=>{$()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(wt(),a.animate())}),C(E,r=>{o("miniState",r)});function $(r){r===void 0?j(()=>{r=b.value===!0?0:L.value,$(Q.value*r)}):(a.isContainer.value===!0&&P.value===!0&&(p.value===!0||Math.abs(r)===L.value)&&(r+=Q.value*a.scrollbarWidth.value),Pe.value=r)}function V(r){ze.value=r}function ve(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function wt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,q=setTimeout(()=>{q=null,se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function qt(r){if(b.value!==!1)return;const y=L.value,x=ae(r.distance.x,0,y);if(r.isFinal===!0){x>=Math.min(75,y)===!0?k():(a.animate(),V(0),$(Q.value*y)),N.value=!1;return}$((i.lang.rtl===!0?P.value!==!0:P.value)?Math.max(y-x,0):Math.min(0,x-y)),V(ae(x/y,0,1)),r.isFirst===!0&&(N.value=!0)}function Oe(r){if(b.value!==!0)return;const y=L.value,x=r.direction===e.side,ne=(i.lang.rtl===!0?x!==!0:x)?ae(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,y)===!0?(a.animate(),V(1),$(0)):_(),N.value=!1;return}$(Q.value*ne),V(ae(1-ne/y,0,1)),r.isFirst===!0&&(N.value=!0)}function me(){d(!1),ve(!0)}function H(r,y){a.update(e.side,r,y)}function Ct(r,y){r.value!==y&&(r.value=y)}function he(r,y){H("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=A,he(e.miniToOverlay,L.value),H("space",K.value),H("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),U(()=>{o("onLayout",K.value),o("miniState",E.value),w=e.showIfAbove===!0;const r=()=>{(b.value===!0?g:h)(!1,!0)};if(a.totalWidth.value!==0){j(r);return}v=C(a.totalWidth,()=>{v(),v=void 0,b.value===!1&&e.showIfAbove===!0&&p.value===!1?k(!1):r()})}),X(()=>{v!==void 0&&v(),q!==null&&(clearTimeout(q),q=null),b.value===!0&&me(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const r=[];p.value===!0&&(e.noSwipeOpen===!1&&r.push(Dt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),yt.value)),r.push(Ve("div",{ref:"backdrop",class:ct.value,style:dt.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>bt.value)));const y=E.value===!0&&n.mini!==void 0,x=[S("div",{...l,key:""+y,class:[ht.value,l.class]},y===!0?n.mini():ee(n.default))];return e.elevated===!0&&b.value===!0&&x.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ve("aside",{ref:"content",class:pt.value,style:mt.value},x,"contentclose",e.noSwipeClose!==!0&&p.value===!0,()=>gt.value)),S("div",{class:"q-drawer-container"},r)}}}),dn=O({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=D(),l=Ze(xe,I);if(l===I)return console.error("QPageContainer needs to be child of QLayout"),I;et(Vt,!0);const t=f(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>S("div",{class:"q-page-container",style:t.value},ee(n.default))}});const{passive:Ye}=z,fn=["both","horizontal","vertical"];var vn=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>fn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;C(()=>e.scrollTarget,()=>{c(),d()});function s(){l!==null&&l();const w=Math.max(0,rt(t)),q=at(t),v={top:w-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const p=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:w,left:q},o.directionChanged=o.direction!==p,o.delta=v,o.directionChanged===!0&&(o.direction=p,o.inflectionPoint=o.position),n("scroll",{...o})}function d(){t=Jt(i,e.scrollTarget),t.addEventListener("scroll",u,Ye),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Ye),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[q,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{v(q),l=null}}}const{proxy:a}=D();return C(()=>a.$q.lang.rtl,s),U(()=>{i=a.$el.parentNode,d()}),X(()=>{l!==null&&l(),c()}),Object.assign(a,{trigger:u,getPosition:()=>o}),Ee}});function mn(){const e=T(!tt.value);return e.value===!1&&U(()=>{e.value=!0}),e}const ut=typeof ResizeObserver!="undefined",Ke=ut===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ge=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,l,t={width:-1,height:-1};function i(c){c===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:c,offsetHeight:u}=l;(c!==t.width||u!==t.height)&&(t={width:c,height:u},n("resize",t))}}const{proxy:d}=D();if(ut===!0){let c;const u=a=>{l=d.$el.parentNode,l?(c=new ResizeObserver(i),c.observe(l),s()):a!==!0&&j(()=>{u(!0)})};return U(()=>{u()}),X(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),Ee}else{let a=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",i,z.passive),u=void 0)},w=function(){a(),l&&l.contentDocument&&(u=l.contentDocument.defaultView,u.addEventListener("resize",i,z.passive),s())};const c=mn();let u;return U(()=>{j(()=>{l=d.$el,l&&w()})}),X(a),d.trigger=i,()=>{if(c.value===!0)return S("object",{style:Ke.style,tabindex:-1,type:"text/html",data:Ke.url,"aria-hidden":"true",onLoad:w})}}}}),hn=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=D(),t=T(null),i=T(l.screen.height),s=T(e.container===!0?0:l.screen.width),d=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),u=T(tt.value===!0?0:be()),a=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),q=f(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),v=f(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function p(h){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};d.value=k,e.onScroll!==void 0&&o("scroll",k)}}function E(h){const{height:k,width:_}=h;let W=!1;i.value!==k&&(W=!0,i.value=k,e.onScrollHeight!==void 0&&o("scrollHeight",k),b()),s.value!==_&&(W=!0,s.value=_),W===!0&&e.onResize!==void 0&&o("resize",h)}function L({height:h}){c.value!==h&&(c.value=h,b())}function b(){if(e.container===!0){const h=i.value>c.value?be():0;u.value!==h&&(u.value=h)}}let m=null;const g={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:i,containerHeight:c,scrollbarWidth:u,totalWidth:f(()=>s.value+u.value),rows:f(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:d,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(h,k,_){g[h][k]=_}};if(et(xe,g),be()>0){let _=function(){h=null,k.classList.remove("hide-scrollbar")},W=function(){if(h===null){if(k.scrollHeight>l.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(_,300)},Y=function(A){h!==null&&A==="remove"&&(clearTimeout(h),_()),window[`${A}EventListener`]("resize",W)},h=null;const k=document.body;C(()=>e.container!==!0?"add":"remove",Y),e.container!==!0&&Y("add"),Ht(()=>{Y("remove")})}return()=>{const h=Et(n.default,[S(vn,{onScroll:p}),S(Ge,{onResize:E})]),k=S("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},h);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Ge,{onResize:L}),S("div",{class:"absolute-full",style:q.value},[S("div",{class:"scroll",style:v.value},[k])])]):k}}}),Je=O({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const o=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:o.value},ee(n.default))}}),pn=O({name:"QItem",props:{..._e,...xt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=D(),t=$e(e,l),{hasLink:i,linkAttrs:s,linkClass:d,linkTag:c,navigateOnClick:u}=_t(),a=T(null),w=T(null),q=f(()=>e.clickable===!0||i.value===!0||e.tag==="label"),v=f(()=>e.disable!==!0&&q.value===!0),p=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=f(()=>{if(e.insetLevel===void 0)return null;const g=l.lang.rtl===!0?"Right":"Left";return{["padding"+g]:16+e.insetLevel*56+"px"}});function L(g){v.value===!0&&(w.value!==null&&(g.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),u(g))}function b(g){if(v.value===!0&&Rt(g,13)===!0){Te(g),g.qKeyEvent=!0;const h=new MouseEvent("click",g);h.qKeyEvent=!0,a.value.dispatchEvent(h)}o("keyup",g)}function m(){const g=$t(n.default,[]);return v.value===!0&&g.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:w})),g}return()=>{const g={ref:a,class:p.value,style:E.value,role:"listitem",onClick:L,onKeyup:b};return v.value===!0?(g.tabindex=e.tabindex||"0",Object.assign(g,s.value)):q.value===!0&&(g["aria-disabled"]="true"),S(c.value,g,m())}}});const yn=nt({name:"EssentialLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}});function gn(e,n,o,l,t,i){return Z(),ue(pn,{clickable:"",tag:"a",href:e.link},{default:M(()=>[e.icon?(Z(),ue(Je,{key:0,avatar:""},{default:M(()=>[R(Bt,{name:e.icon},null,8,["name"])]),_:1})):Wt("",!0),R(Je,null,{default:M(()=>[R(lt,null,{default:M(()=>[it(At(e.title),1)]),_:1})]),_:1})]),_:1},8,["href"])}var bn=ot(yn,[["render",gn]]);const wn=[{title:"Register",icon:"school",link:"#/"},{title:"User management",icon:"code",link:"#/user"}],qn=nt({name:"MainLayout",components:{EssentialLink:bn},setup(){const e=T(!1);return{essentialLinks:wn,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Cn(e,n,o,l,t,i){const s=We("EssentialLink"),d=We("router-view");return Z(),ue(hn,{view:"lHh Lpr lFf"},{default:M(()=>[R(cn,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[0]||(n[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:M(()=>[R(Xt,null,{default:M(()=>[R(lt,{header:""},{default:M(()=>[it(" Essential Links ")]),_:1}),(Z(!0),Ft(Nt,null,Qt(e.essentialLinks,c=>(Z(),ue(s,It({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),R(dn,null,{default:M(()=>[R(d)]),_:1})]),_:1})}var En=ot(qn,[["render",Cn]]);export{En as default};