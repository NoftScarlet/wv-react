var q=Object.create;var u=Object.defineProperty,A=Object.defineProperties,j=Object.getOwnPropertyDescriptor,U=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,X=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))P.call(t,r)&&v(e,r,t[r]);return e},I=(e,t)=>A(e,U(t)),Y=e=>u(e,"__esModule",{value:!0});var l=(e,t)=>{var r={};for(var o in e)y.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&f)for(var o of f(e))t.indexOf(o)<0&&P.call(e,o)&&(r[o]=e[o]);return r};var T=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var z=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of J(t))!y.call(e,n)&&(r||n!=="default")&&u(e,n,{get:()=>t[n],enumerable:!(o=j(t,n))||o.enumerable});return e},h=(e,t)=>z(Y(u(e!=null?q(X(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var S=T((De,E)=>{"use strict";var ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";E.exports=ee});var g=T((xe,M)=>{"use strict";var te=S();function C(){}function W(){}W.resetWarningCache=C;M.exports=function(){function e(o,n,c,i,p,a){if(a!==te){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W,resetWarningCache:C};return r.PropTypes=r,r}});var x=T((ve,O)=>{O.exports=g()();var Ve,Pe});import G,{createContext as K,useMemo as Q,useState as Z}from"react";var m=K({instance:void 0,setInstance:()=>{}});function R({children:e,instance:t}){let[r,o]=Z(t),n=Q(()=>({instance:r,setInstance:o}),[r,o]);return G.createElement(m.Provider,{value:n},e)}import{useContext as $}from"react";function D(){return $(m)}var d=D;import N,{useEffect as re,useRef as oe}from"react";var V=h(x());import ne from"@pdftron/webviewer";var L=N.forwardRef((n,o)=>{var c=n,{onReady:e,className:t}=c,r=l(c,["onReady","className"]);let i=oe(null),{instance:p,setInstance:a}=d();return re(()=>{p?e&&e(p):ne(r,i.current).then(s=>{e&&e(s),a(s)})},[]),N.createElement("div",{className:t,ref:o||i})});L.propTypes={className:V.default.string,onReady:V.default.func};var w=L;import F,{useCallback as ie}from"react";var _=["header","toolsHeader","viewControlsButton","leftPanelButton","searchButton","menuButton","textPopup","contextMenuPopup"];var k=h(x()),B=F.forwardRef((o,r)=>{var n=o,{onReady:e}=n,t=l(n,["onReady"]);let c=ie(i=>{i.Core.documentViewer.addEventListener("documentLoaded",()=>{let{documentViewer:p,DisplayMode:a,DisplayModes:s}=i.Core;p.getDisplayModeManager().setDisplayMode(new a(p,s.Single)),i.UI.setFitMode(i.UI.FitMode.FitPage)},{once:!0}),e&&e(i)},[]);return F.createElement(w,I(b({onReady:c,disabledElements:_},t),{ref:r}))});B.propTypes={onReady:k.default.func};var H=B;var Fe=d;export{w as DocumentViewer,m as DocumentViewerContext,R as DocumentViewerProvider,H as DocumentViewerSimpleDisplay,Fe as default};