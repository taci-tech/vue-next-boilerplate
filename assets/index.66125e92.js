import{o as e,c as t,r as o,a as n,u as a,b as s,w as i,d as l,e as r,f as d,g as c}from"./vendor.9bf1ca35.js";const p={name:"App",data:()=>({isAtTop:!0}),methods:{onScroll(){window.scrollY<12?this.isAtTop=!0:this.isAtTop=!1}},mounted(){document.addEventListener("scroll",this.onScroll)},unmounted(){document.removeEventListener("scroll",this.onScroll)}},f=Object.assign(p,{setup:function(n){return(n,a)=>{const s=o("router-view");return e(),t(s)}}}),h={name:"DefinedButton"},u={class:"defined-button"};h.render=function(o,a,s,i,l,r){return e(),t("button",u,[n(o.$slots,"default")])};const g={name:"DefinedLink"},m=Object.assign(g,{props:{goto:{type:String,required:!1},href:{type:String,required:!1}},setup:function(o){const s=o,i=a();return(o,a)=>(e(),t("button",{class:"defined-link",onClick:a[1]||(a[1]=e=>{void 0!==s.goto?i.push(s.goto):void 0!==s.href&&(window.location.href=s.href)})},[n(o.$slots,"default")]))}}),b={name:"DefinedText",props:{align:{type:String,default:"center"}}};b.render=function(o,a,s,i,l,r){return e(),t("span",{align:this.align,class:"defined-text"},[n(o.$slots,"default")],8,["align"])};const v=[h,m,b];const x={class:"home-cover content-container",style:{height:"100vh",display:"flex"}},y={class:"home-cover-content-wrapper",align:"left"},w=s("h1",{align:"left",class:"non-selectable home-cover-title",style:{position:"relative","line-height":"1.05em","padding-top":"10px"}},[l(" It is "),s("span",{style:{color:"#f4606c"}},"hard"),l(","),s("br"),l("but we never give up. ")],-1),k=l("Let's blast the design."),_=l("Learn more"),z={align:"left",style:{"padding-top":"13px"}},T=l("The illustration is from "),S=l("icons8"),j=l("."),A=s("img",{class:"home-cover-img non-clickable",src:"assets/eastwood-order-completed.dafb5f4a.svg",draggable:"false"},null,-1),L={setup:n=>(n,a)=>{const l=o("defined-text"),r=o("defined-link");return e(),t("div",x,[s("div",y,[w,s(l,{class:"home-cover-text",style:{"padding-right":"12px"}},{default:i((()=>[k])),_:1}),s(r,{class:"home-cover-text",goto:"/products"},{default:i((()=>[_])),_:1}),s("div",z,[s(l,{style:{"font-size":"12px",color:"#afafaf"}},{default:i((()=>[T])),_:1}),s(r,{style:{"font-size":"12px"},href:"https://icons8.com/"},{default:i((()=>[S])),_:1}),s(l,{style:{"font-size":"12px",color:"#afafaf"}},{default:i((()=>[j])),_:1})])]),A])}};const O={style:{width:"100%",height:"100vh",display:"flex","align-items":"center",position:"relative"}},D=s("div",{align:"center",style:{position:"relative",width:"100%","max-width":"1020px",margin:"0 auto"}},[s("h1",{align:"center",class:"non-selectable",style:{"font-size":"min(250px, 40vh)","line-height":"1.15em","padding-bottom":"min(18vh, 230px)",color:"#efefef"}}," Oops "),s("img",{class:"non-clickable",src:"assets/eastwood-come-back-later.ab4f7276.svg",style:{position:"absolute",height:"100vh","max-height":"800px",overflow:"hidden","margin-bottom":"max(-45vh, -35%)",left:"50%",transform:"translateX(-50%)",bottom:"0"},draggable:"false"})],-1),E={style:{position:"absolute",width:"calc(100% - 40px)","max-width":"980px",margin:"0 20px",left:"50%",transform:"translateX(calc(-50% - 20px))",bottom:"40px",background:"#fdfdfdcf","backdrop-filter":"saturate(125%) blur(30px)","-webkit-backdrop-filter":"saturate(125%) blur(30px)","border-radius":"20px","border-width":"2px","border-style":"solid","border-color":"#00000004"}},M={style:{width:"100%","max-width":"940px",margin:"0 20px","padding-bottom":"15px"}},$=s("h3",{align:"left"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-scuba-mask",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[s("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1z"}),s("path",{d:"M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5"})]),s("span",{style:{"padding-left":"10px"}},"What happened?")],-1),q=s("p",{align:"left"},[l(" Oh no! The page has gone!"),s("br"),l("It is probably that you do not have the permission to access this page or the website is down by an error. ")],-1),B={align:"left"},C=l("You can click"),I=l(),X=l("here"),Y=l(),F=l("to back home."),H={align:"left",style:{"padding-top":"13px"}},N=l("The illustration is from "),W=l("icons8"),G=l(".");const J={name:"NotFound"},K=[{path:"/",component:L},{path:"/:catchAll(.*)",component:Object.assign(J,{setup:function(n){return(n,a)=>{const l=o("defined-link");return e(),t("div",O,[D,s("div",E,[s("div",M,[$,q,s("div",B,[s(b,null,{default:i((()=>[C])),_:1}),I,s(l,{goto:"/"},{default:i((()=>[X])),_:1}),Y,s(b,null,{default:i((()=>[F])),_:1})]),s("div",H,[s(b,{style:{"font-size":"12px",color:"#afafaf"}},{default:i((()=>[N])),_:1}),s(l,{style:{"font-size":"12px"},href:"https://icons8.com/"},{default:i((()=>[W])),_:1}),s(b,{style:{"font-size":"12px",color:"#afafaf"}},{default:i((()=>[G])),_:1})])])])])}}})}],P=r({mode:"history",history:d(),routes:K}),Q=c(f);var R;Q.use(P),R=Q,v.forEach((e=>{R.component(e.name,e)})),Q.mount("#app");
