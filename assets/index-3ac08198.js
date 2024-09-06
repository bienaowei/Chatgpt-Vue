import{a9 as mt,c as G,a as i,aa as D,ab as le,f as Ve,ac as pt,ad as gt,d as J,u as Ae,g as he,ae as bt,r as z,b as yt,h as C,t as xt,e as wt,af as Me,L as ye,ag as kt,j as we,k as $t,l as ke,m as _,V as _t,n as St,ah as Ct,p as zt,T as Ue,z as re,ai as de,aj as ce,ak as Rt,al as Tt,am as It,an as Dt,ao as Vt,ap as Mt,aq as Nt,A as Bt,P as Pt,W as At,M as Ee,C as O,D as Q,E as o,H as l,I as p,G as c,N as ue,J as k,a5 as B,a6 as P,$ as Ut,_ as W,ar as Et,U as Ft,a4 as jt,as as Ht,O as Y,X as Ot,F as $e,a0 as _e,at as Lt,au as xe,av as Gt}from"./index-05152c9f.js";import{u as Fe,a as Wt,b as Kt}from"./index-e95ce0b1.js";function Ne(n){return window.TouchEvent&&n instanceof window.TouchEvent}function Be(){const n=new Map,a=f=>r=>{n.set(f,r)};return mt(()=>{n.clear()}),[n,a]}const Xt=G([i("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[D("reverse",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),D("vertical",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),i("slider-marks",[i("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),D("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[i("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[i("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),i("slider-rail",`
 height: 100%;
 `,[le("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),D("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),i("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[i("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),i("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[i("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),D("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[i("slider-handle",`
 cursor: not-allowed;
 `)]),D("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),G("&:hover",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),D("active",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),i("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[i("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),i("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[le("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),i("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[i("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[i("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),G("&:focus",[i("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),i("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[D("transition-disabled",[i("slider-dot","transition: none;")]),i("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[D("active","border: var(--n-dot-border-active);")])])]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ve()]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[D("top",`
 margin-bottom: 12px;
 `),D("right",`
 margin-left: 12px;
 `),D("bottom",`
 margin-top: 12px;
 `),D("left",`
 margin-right: 12px;
 `),Ve()]),pt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-modal);")])),gt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Yt=0,Jt=Object.assign(Object.assign({},he.props),{to:ke.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Pe=J({name:"Slider",props:Jt,setup(n){const{mergedClsPrefixRef:a,namespaceRef:f,inlineThemeDisabled:r}=Ae(n),u=he("Slider","-slider",Xt,bt,n,a),v=z(null),[b,S]=Be(),[d,m]=Be(),x=z(new Set),E=yt(n),{mergedDisabledRef:A}=E,F=C(()=>{const{step:e}=n;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let s=0;return t.includes(".")&&(s=t.length-t.indexOf(".")-1),s}),L=z(n.defaultValue),ve=xt(n,"value"),q=wt(ve,L),V=C(()=>{const{value:e}=q;return(n.range?e:[e]).map(Re)}),Z=C(()=>V.value.length>2),y=C(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),$=C(()=>{const{marks:e}=n;return e?Object.keys(e).map(Number.parseFloat):null}),g=z(-1),j=z(-1),N=z(-1),M=z(!1),ee=z(!1),fe=C(()=>{const{vertical:e,reverse:t}=n;return e?t?"top":"bottom":t?"right":"left"}),je=C(()=>{if(Z.value)return;const e=V.value,t=te(n.range?Math.min(...e):n.min),s=te(n.range?Math.max(...e):e[0]),{value:h}=fe;return n.vertical?{[h]:`${t}%`,height:`${s-t}%`}:{[h]:`${t}%`,width:`${s-t}%`}}),He=C(()=>{const e=[],{marks:t}=n;if(t){const s=V.value.slice();s.sort((T,I)=>T-I);const{value:h}=fe,{value:w}=Z,{range:R}=n,U=w?()=>!1:T=>R?T>=s[0]&&T<=s[s.length-1]:T<=s[0];for(const T of Object.keys(t)){const I=Number(T);e.push({active:U(I),label:t[T],style:{[h]:`${te(I)}%`}})}}return e});function Oe(e,t){const s=te(e),{value:h}=fe;return{[h]:`${s}%`,zIndex:t===g.value?1:0}}function Se(e){return n.showTooltip||N.value===e||g.value===e&&M.value}function Le(e){return M.value?!(g.value===e&&j.value===e):!0}function Ge(e){var t;~e&&(g.value=e,(t=b.get(e))===null||t===void 0||t.focus())}function We(){d.forEach((e,t)=>{Se(t)&&e.syncPosition()})}function Ce(e){const{"onUpdate:value":t,onUpdateValue:s}=n,{nTriggerFormInput:h,nTriggerFormChange:w}=E;s&&re(s,e),t&&re(t,e),L.value=e,h(),w()}function ze(e){const{range:t}=n;if(t){if(Array.isArray(e)){const{value:s}=V;e.join()!==s.join()&&Ce(e)}}else Array.isArray(e)||V.value[0]!==e&&Ce(e)}function me(e,t){if(n.range){const s=V.value.slice();s.splice(t,1,e),ze(s)}else ze(e)}function pe(e,t,s){const h=s!==void 0;s||(s=e-t>0?1:-1);const w=$.value||[],{step:R}=n;if(R==="mark"){const I=ne(e,w.concat(t),h?s:void 0);return I?I.value:t}if(R<=0)return t;const{value:U}=F;let T;if(h){const I=Number((t/R).toFixed(U)),H=Math.floor(I),ge=I>H?H:H-1,be=I<H?H:H+1;T=ne(t,[Number((ge*R).toFixed(U)),Number((be*R).toFixed(U)),...w],s)}else{const I=Xe(e);T=ne(e,[...w,I])}return T?Re(T.value):t}function Re(e){return Math.min(n.max,Math.max(n.min,e))}function te(e){const{max:t,min:s}=n;return(e-s)/(t-s)*100}function Ke(e){const{max:t,min:s}=n;return s+(t-s)*e}function Xe(e){const{step:t,min:s}=n;if(Number(t)<=0||t==="mark")return e;const h=Math.round((e-s)/t)*t+s;return Number(h.toFixed(F.value))}function ne(e,t=$.value,s){if(!(t!=null&&t.length))return null;let h=null,w=-1;for(;++w<t.length;){const R=t[w]-e,U=Math.abs(R);(s===void 0||R*s>0)&&(h===null||U<h.distance)&&(h={index:w,distance:U,value:t[w]})}return h}function Te(e){const t=v.value;if(!t)return;const s=Ne(e)?e.touches[0]:e,h=t.getBoundingClientRect();let w;return n.vertical?w=(h.bottom-s.clientY)/h.height:w=(s.clientX-h.left)/h.width,n.reverse&&(w=1-w),Ke(w)}function Ye(e){if(A.value||!n.keyboard)return;const{vertical:t,reverse:s}=n;switch(e.key){case"ArrowUp":e.preventDefault(),se(t&&s?-1:1);break;case"ArrowRight":e.preventDefault(),se(!t&&s?-1:1);break;case"ArrowDown":e.preventDefault(),se(t&&s?1:-1);break;case"ArrowLeft":e.preventDefault(),se(!t&&s?1:-1);break}}function se(e){const t=g.value;if(t===-1)return;const{step:s}=n,h=V.value[t],w=Number(s)<=0||s==="mark"?h:h+s*e;me(pe(w,h,e>0?1:-1),t)}function Je(e){var t,s;if(A.value||!Ne(e)&&e.button!==Yt)return;const h=Te(e);if(h===void 0)return;const w=V.value.slice(),R=n.range?(s=(t=ne(h,w))===null||t===void 0?void 0:t.index)!==null&&s!==void 0?s:-1:0;R!==-1&&(e.preventDefault(),Ge(R),qe(),me(pe(h,V.value[R]),R))}function qe(){M.value||(M.value=!0,n.onDragstart&&re(n.onDragstart),de("touchend",document,ie),de("mouseup",document,ie),de("touchmove",document,oe),de("mousemove",document,oe))}function ae(){M.value&&(M.value=!1,n.onDragend&&re(n.onDragend),ce("touchend",document,ie),ce("mouseup",document,ie),ce("touchmove",document,oe),ce("mousemove",document,oe))}function oe(e){const{value:t}=g;if(!M.value||t===-1){ae();return}const s=Te(e);s!==void 0&&me(pe(s,V.value[t]),t)}function ie(){ae()}function Qe(e){g.value=e,A.value||(N.value=e)}function Ze(e){g.value===e&&(g.value=-1,ae()),N.value===e&&(N.value=-1)}function et(e){N.value=e}function tt(e){N.value===e&&(N.value=-1)}Me(g,(e,t)=>void ye(()=>j.value=t)),Me(q,()=>{if(n.marks){if(ee.value)return;ee.value=!0,ye(()=>{ee.value=!1})}ye(We)}),kt(()=>{ae()});const Ie=C(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:s,fillColor:h,fillColorHover:w,handleColor:R,opacityDisabled:U,dotColor:T,dotColorModal:I,handleBoxShadow:H,handleBoxShadowHover:ge,handleBoxShadowActive:be,handleBoxShadowFocus:nt,dotBorder:st,dotBoxShadow:at,railHeight:ot,railWidthVertical:it,handleSize:lt,dotHeight:rt,dotWidth:dt,dotBorderRadius:ct,fontSize:ut,dotBorderActive:ht,dotColorPopover:vt},common:{cubicBezierEaseInOut:ft}}=u.value;return{"--n-bezier":ft,"--n-dot-border":st,"--n-dot-border-active":ht,"--n-dot-border-radius":ct,"--n-dot-box-shadow":at,"--n-dot-color":T,"--n-dot-color-modal":I,"--n-dot-color-popover":vt,"--n-dot-height":rt,"--n-dot-width":dt,"--n-fill-color":h,"--n-fill-color-hover":w,"--n-font-size":ut,"--n-handle-box-shadow":H,"--n-handle-box-shadow-active":be,"--n-handle-box-shadow-focus":nt,"--n-handle-box-shadow-hover":ge,"--n-handle-color":R,"--n-handle-size":lt,"--n-opacity-disabled":U,"--n-rail-color":t,"--n-rail-color-hover":s,"--n-rail-height":ot,"--n-rail-width-vertical":it,"--n-mark-font-size":e}}),K=r?we("slider",void 0,Ie,n):void 0,De=C(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:s,indicatorTextColor:h,indicatorBorderRadius:w}}=u.value;return{"--n-font-size":e,"--n-indicator-border-radius":w,"--n-indicator-box-shadow":s,"--n-indicator-color":t,"--n-indicator-text-color":h}}),X=r?we("slider-indicator",void 0,De,n):void 0;return{mergedClsPrefix:a,namespace:f,uncontrolledValue:L,mergedValue:q,mergedDisabled:A,mergedPlacement:y,isMounted:$t(),adjustedTo:ke(n),dotTransitionDisabled:ee,markInfos:He,isShowTooltip:Se,shouldKeepTooltipTransition:Le,handleRailRef:v,setHandleRefs:S,setFollowerRefs:m,fillStyle:je,getHandleStyle:Oe,activeIndex:g,arrifiedValues:V,followerEnabledIndexSet:x,handleRailMouseDown:Je,handleHandleFocus:Qe,handleHandleBlur:Ze,handleHandleMouseEnter:et,handleHandleMouseLeave:tt,handleRailKeyDown:Ye,indicatorCssVars:r?void 0:De,indicatorThemeClass:X==null?void 0:X.themeClass,indicatorOnRender:X==null?void 0:X.onRender,cssVars:r?void 0:Ie,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender}},render(){var n;const{mergedClsPrefix:a,themeClass:f,formatTooltip:r}=this;return(n=this.onRender)===null||n===void 0||n.call(this),_("div",{class:[`${a}-slider`,f,{[`${a}-slider--disabled`]:this.mergedDisabled,[`${a}-slider--active`]:this.activeIndex!==-1,[`${a}-slider--with-mark`]:this.marks,[`${a}-slider--vertical`]:this.vertical,[`${a}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},_("div",{class:`${a}-slider-rail`},_("div",{class:`${a}-slider-rail__fill`,style:this.fillStyle}),this.marks?_("div",{class:[`${a}-slider-dots`,this.dotTransitionDisabled&&`${a}-slider-dots--transition-disabled`]},this.markInfos.map(u=>_("div",{key:u.label,class:[`${a}-slider-dot`,{[`${a}-slider-dot--active`]:u.active}],style:u.style}))):null,_("div",{ref:"handleRailRef",class:`${a}-slider-handles`},this.arrifiedValues.map((u,v)=>{const b=this.isShowTooltip(v);return _(_t,null,{default:()=>[_(St,null,{default:()=>_("div",{ref:this.setHandleRefs(v),class:`${a}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":u,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(u,v),onFocus:()=>{this.handleHandleFocus(v)},onBlur:()=>{this.handleHandleBlur(v)},onMouseenter:()=>{this.handleHandleMouseEnter(v)},onMouseleave:()=>{this.handleHandleMouseLeave(v)}},Ct(this.$slots.thumb,()=>[_("div",{class:`${a}-slider-handle`})]))}),this.tooltip&&_(zt,{ref:this.setFollowerRefs(v),show:b,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(v),teleportDisabled:this.adjustedTo===ke.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>_(Ue,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(v),onEnter:()=>{this.followerEnabledIndexSet.add(v)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(v)}},{default:()=>{var S;return b?((S=this.indicatorOnRender)===null||S===void 0||S.call(this),_("div",{class:[`${a}-slider-handle-indicator`,this.indicatorThemeClass,`${a}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof r=="function"?r(u):u)):null}})})]})})),this.marks?_("div",{class:`${a}-slider-marks`},this.markInfos.map(u=>_("div",{key:u.label,class:`${a}-slider-mark`,style:u.style},u.label))):null))}}),qt=G([G("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),i("spin-container",`
 position: relative;
 `,[i("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Rt()])]),i("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),i("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[D("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),i("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),i("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[D("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Qt={small:20,medium:18,large:16},Zt=Object.assign(Object.assign({},he.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),en=J({name:"Spin",props:Zt,setup(n){const{mergedClsPrefixRef:a,inlineThemeDisabled:f}=Ae(n),r=he("Spin","-spin",qt,Tt,n,a),u=C(()=>{const{size:d}=n,{common:{cubicBezierEaseInOut:m},self:x}=r.value,{opacitySpinning:E,color:A,textColor:F}=x,L=typeof d=="number"?It(d):x[Dt("size",d)];return{"--n-bezier":m,"--n-opacity-spinning":E,"--n-size":L,"--n-color":A,"--n-text-color":F}}),v=f?we("spin",C(()=>{const{size:d}=n;return typeof d=="number"?String(d):d[0]}),u,n):void 0,b=Vt(n,["spinning","show"]),S=z(!1);return Mt(d=>{let m;if(b.value){const{delay:x}=n;if(x){m=window.setTimeout(()=>{S.value=!0},x),d(()=>{clearTimeout(m)});return}}S.value=b.value}),{mergedClsPrefix:a,active:S,mergedStrokeWidth:C(()=>{const{strokeWidth:d}=n;if(d!==void 0)return d;const{size:m}=n;return Qt[typeof m=="number"?"medium":m]}),cssVars:f?void 0:u,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var n,a;const{$slots:f,mergedClsPrefix:r,description:u}=this,v=f.icon&&this.rotate,b=(u||f.description)&&_("div",{class:`${r}-spin-description`},u||((n=f.description)===null||n===void 0?void 0:n.call(f))),S=f.icon?_("div",{class:[`${r}-spin-body`,this.themeClass]},_("div",{class:[`${r}-spin`,v&&`${r}-spin--rotate`],style:f.default?"":this.cssVars},f.icon()),b):_("div",{class:[`${r}-spin-body`,this.themeClass]},_(Nt,{clsPrefix:r,style:f.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),b);return(a=this.onRender)===null||a===void 0||a.call(this),f.default?_("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},_("div",{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},f),_(Ue,{name:"fade-in-transition"},{default:()=>this.active?S:null})):S}});function tn(){const n=new Date,a=n.getDate(),f=n.getMonth()+1;return`${n.getFullYear()}-${f}-${a}`}const nn={class:"p-4 space-y-5 min-h-[200px]"},sn={class:"space-y-6"},an={class:"flex items-center space-x-4"},on={class:"flex-shrink-0 w-[100px]"},ln={class:"flex-1"},rn={class:"flex items-center space-x-4"},dn={class:"flex-shrink-0 w-[100px]"},cn={class:"w-[200px]"},un={class:"flex items-center space-x-4"},hn={class:"flex-shrink-0 w-[100px]"},vn={class:"flex-1"},fn={class:"flex-shrink-0 w-[100px]"},mn={class:"flex flex-wrap items-center gap-4"},pn={class:"flex items-center space-x-4"},gn={class:"flex-shrink-0 w-[100px]"},bn={class:"flex flex-wrap items-center gap-4"},yn={class:"flex items-center space-x-4"},xn={class:"flex-shrink-0 w-[100px]"},wn={class:"flex flex-wrap items-center gap-4"},kn={class:"flex items-center space-x-4"},$n={class:"flex-shrink-0 w-[100px]"},_n=J({__name:"General",setup(n){const a=Bt(),f=Pt(),{isMobile:r}=At(),u=Ee(),v=C(()=>a.theme),b=C(()=>f.userInfo),S=z(b.value.avatar??""),d=z(b.value.name??""),m=z(b.value.description??"");function x(y){f.updateUserInfo(y),u.success(Y("common.success"))}const E=C({get(){return a.language},set(y){a.setLanguage(y)}}),A=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],F=[{label:"English",key:"en-US",value:"en-US"},{label:"简体中文",key:"zh-CN",value:"zh-CN"}];function L(){f.resetUserInfo(),a.resetAppInfo(),u.success(Y("common.success")),window.location.reload()}function ve(){localStorage.removeItem("chatStorage"),location.reload()}function q(){const y=tn(),$=localStorage.getItem("chatStorage")||"{}",g=JSON.stringify(JSON.parse($),null,2),j=new Blob([g],{type:"application/json"}),N=URL.createObjectURL(j),M=document.createElement("a");M.href=N,M.download=`chatStore_${y}.json`,document.body.appendChild(M),M.click(),document.body.removeChild(M)}function V(){const y=document.getElementById("fileInput");y&&y.click()}function Z(y){const $=y.target;if(!$||!$.files)return;const g=$.files[0];if(!g)return;const j=new FileReader;j.onload=()=>{try{const N=JSON.parse(j.result);localStorage.setItem("chatStorage",JSON.stringify(N)),u.success(Y("common.success")),location.reload()}catch{u.error(Y("common.invalidFileFormat"))}},j.readAsText(g)}return(y,$)=>(O(),Q("div",nn,[o("div",sn,[o("div",an,[o("span",on,l(y.$t("setting.avatarLink")),1),o("div",ln,[p(c(ue),{value:S.value,"onUpdate:value":$[0]||($[0]=g=>S.value=g),placeholder:""},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:$[1]||($[1]=g=>x({avatar:S.value}))},{default:k(()=>[B(l(y.$t("common.save")),1)]),_:1})]),o("div",rn,[o("span",dn,l(y.$t("setting.name")),1),o("div",cn,[p(c(ue),{value:d.value,"onUpdate:value":$[2]||($[2]=g=>d.value=g),placeholder:""},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:$[3]||($[3]=g=>x({name:d.value}))},{default:k(()=>[B(l(y.$t("common.save")),1)]),_:1})]),o("div",un,[o("span",hn,l(y.$t("setting.description")),1),o("div",vn,[p(c(ue),{value:m.value,"onUpdate:value":$[4]||($[4]=g=>m.value=g),placeholder:""},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:$[5]||($[5]=g=>x({description:m.value}))},{default:k(()=>[B(l(y.$t("common.save")),1)]),_:1})]),o("div",{class:Ut(["flex items-center space-x-4",c(r)&&"items-start"])},[o("span",fn,l(y.$t("setting.chatHistory")),1),o("div",mn,[p(c(P),{size:"small",onClick:q},{icon:k(()=>[p(c(W),{icon:"ri:download-2-fill"})]),default:k(()=>[B(" "+l(y.$t("common.export")),1)]),_:1}),o("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:Z},null,32),p(c(P),{size:"small",onClick:V},{icon:k(()=>[p(c(W),{icon:"ri:upload-2-fill"})]),default:k(()=>[B(" "+l(y.$t("common.import")),1)]),_:1}),p(c(Et),{placement:"bottom",onPositiveClick:ve},{trigger:k(()=>[p(c(P),{size:"small"},{icon:k(()=>[p(c(W),{icon:"ri:close-circle-line"})]),default:k(()=>[B(" "+l(y.$t("common.clear")),1)]),_:1})]),default:k(()=>[B(" "+l(y.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),o("div",pn,[o("span",gn,l(y.$t("setting.theme")),1),o("div",bn,[(O(),Q(Ft,null,jt(A,g=>p(c(P),{key:g.key,size:"small",type:g.key===v.value?"primary":void 0,onClick:j=>c(a).setTheme(g.key)},{icon:k(()=>[p(c(W),{icon:g.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),o("div",yn,[o("span",xn,l(y.$t("setting.language")),1),o("div",wn,[p(c(Ht),{style:{width:"140px"},value:E.value,options:F,onUpdateValue:$[6]||($[6]=g=>c(a).setLanguage(g))},null,8,["value"])])]),o("div",kn,[o("span",$n,l(y.$t("setting.resetUserInfo")),1),p(c(P),{size:"small",onClick:L},{default:k(()=>[B(l(y.$t("common.reset")),1)]),_:1})])])]))}}),Sn="chatgpt-vue",Cn="module",zn="1.0.0",Rn="JiangChuan",Tn={preinstall:"npx only-allow pnpm",dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules","common:prepare":"husky install"},In={"@vscode/markdown-it-katex":"^1.0.3","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0","html-to-image":"^1.11.11",katex:"^0.16.4","markdown-it":"^13.0.1","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},Dn={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.20",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.41",rimraf:"^4.3.0",tailwindcss:"^3.4.10",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},Vn={name:Sn,type:Cn,version:zn,private:!1,author:Rn,scripts:Tn,dependencies:In,devDependencies:Dn,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},Mn={class:"p-4 space-y-4"},Nn={class:"text-xl font-bold"},Bn={key:0},Pn={key:1},An=J({__name:"About",setup(n){const a=Fe(),f=z(!1),r=z(),u=C(()=>!!a.isChatGPTAPI);async function v(){try{f.value=!0;const{data:b}=await Wt();r.value=b}finally{f.value=!1}}return Ot(()=>{v()}),(b,S)=>(O(),$e(c(en),{show:f.value},{default:k(()=>{var d,m,x,E,A,F;return[o("div",Mn,[o("h2",Nn," Version - "+l(c(Vn).version),1),o("p",null,l(b.$t("setting.api"))+"："+l(((d=r.value)==null?void 0:d.apiModel)??"-"),1),u.value?(O(),Q("p",Bn,l(b.$t("setting.monthlyUsage"))+"："+l(((m=r.value)==null?void 0:m.usage)??"-"),1)):_e("",!0),u.value?_e("",!0):(O(),Q("p",Pn,l(b.$t("setting.reverseProxy"))+"："+l(((x=r.value)==null?void 0:x.reverseProxy)??"-"),1)),o("p",null,l(b.$t("setting.timeout"))+"："+l(((E=r.value)==null?void 0:E.timeoutMs)??"-"),1),o("p",null,l(b.$t("setting.socks"))+"："+l(((A=r.value)==null?void 0:A.socksProxy)??"-"),1),o("p",null,l(b.$t("setting.httpsProxy"))+"："+l(((F=r.value)==null?void 0:F.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Un={class:"p-4 space-y-5 min-h-[200px]"},En={class:"space-y-6"},Fn={class:"flex items-center space-x-4"},jn={class:"flex-shrink-0 w-[120px]"},Hn={class:"flex-1"},On={class:"flex items-center space-x-4"},Ln={class:"flex-shrink-0 w-[120px]"},Gn={class:"flex-1"},Wn={class:"flex items-center space-x-4"},Kn={class:"flex-shrink-0 w-[120px]"},Xn={class:"flex-1"},Yn={class:"flex items-center space-x-4"},Jn=o("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),qn=J({__name:"Advanced",setup(n){const a=Kt(),f=Ee(),r=z(a.systemMessage??""),u=z(a.temperature??.5),v=z(a.top_p??1);function b(d){a.updateSetting(d),f.success(Y("common.success"))}function S(){a.resetSetting(),f.success(Y("common.success")),window.location.reload()}return(d,m)=>(O(),Q("div",Un,[o("div",En,[o("div",Fn,[o("span",jn,l(d.$t("setting.role")),1),o("div",Hn,[p(c(ue),{value:r.value,"onUpdate:value":m[0]||(m[0]=x=>r.value=x),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:m[1]||(m[1]=x=>b({systemMessage:r.value}))},{default:k(()=>[B(l(d.$t("common.save")),1)]),_:1})]),o("div",On,[o("span",Ln,l(d.$t("setting.temperature")),1),o("div",Gn,[p(c(Pe),{value:u.value,"onUpdate:value":m[2]||(m[2]=x=>u.value=x),max:2,min:0,step:.1},null,8,["value"])]),o("span",null,l(u.value),1),p(c(P),{size:"tiny",text:"",type:"primary",onClick:m[3]||(m[3]=x=>b({temperature:u.value}))},{default:k(()=>[B(l(d.$t("common.save")),1)]),_:1})]),o("div",Wn,[o("span",Kn,l(d.$t("setting.top_p")),1),o("div",Xn,[p(c(Pe),{value:v.value,"onUpdate:value":m[4]||(m[4]=x=>v.value=x),max:1,min:0,step:.1},null,8,["value"])]),o("span",null,l(v.value),1),p(c(P),{size:"tiny",text:"",type:"primary",onClick:m[5]||(m[5]=x=>b({top_p:v.value}))},{default:k(()=>[B(l(d.$t("common.save")),1)]),_:1})]),o("div",Yn,[Jn,p(c(P),{size:"small",onClick:S},{default:k(()=>[B(l(d.$t("common.reset")),1)]),_:1})])])]))}}),Qn={class:"ml-2"},Zn={class:"min-h-[100px]"},es={class:"ml-2"},ts={class:"min-h-[100px]"},ns={class:"ml-2"},ss={class:"min-h-[100px]"},is=J({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(n,{emit:a}){const f=n,r=a,u=Fe(),v=C(()=>!!u.isChatGPTAPI),b=z("General"),S=C({get(){return f.visible},set(d){r("update:visible",d)}});return(d,m)=>(O(),$e(c(Gt),{show:S.value,"onUpdate:show":m[1]||(m[1]=x=>S.value=x),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:k(()=>[o("div",null,[p(c(Lt),{value:b.value,"onUpdate:value":m[0]||(m[0]=x=>b.value=x),type:"line",animated:""},{default:k(()=>[p(c(xe),{name:"General",tab:"General"},{tab:k(()=>[p(c(W),{class:"text-lg",icon:"ri:file-user-line"}),o("span",Qn,l(d.$t("setting.general")),1)]),default:k(()=>[o("div",Zn,[p(_n)])]),_:1}),p(c(xe),{name:"Config",tab:"Config"},{tab:k(()=>[p(c(W),{class:"text-lg",icon:"ri:list-settings-line"}),o("span",es,l(d.$t("setting.config")),1)]),default:k(()=>[o("div",ts,[p(An)])]),_:1}),v.value?(O(),$e(c(xe),{key:0,name:"Advanced",tab:"Advanced"},{tab:k(()=>[p(c(W),{class:"text-lg",icon:"ri:equalizer-line"}),o("span",ns,l(d.$t("setting.advanced")),1)]),default:k(()=>[o("div",ss,[p(qn)])]),_:1})):_e("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{is as default};
