import{r as n,j as o}from"./vendor-react-ByKXmCfb.js";import{e as a,f as i}from"./index-C2tJzRn-.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],d=a("globe",h);function l({url:e,size:t=18}){const[c,s]=n.useState(!1);let r="";try{r=new URL(e).host}catch{try{r=new URL(`https://${e}`).host}catch{r=""}}return!r||c?o.jsx(d,{size:t,style:{color:i.textMuted},"aria-hidden":!0}):o.jsx("img",{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(r)}&sz=64`,alt:"",width:t,height:t,onError:()=>s(!0),style:{borderRadius:4,objectFit:"contain"}})}function p(e){const t=e.trim();if(!t)return"";try{return new URL(t).host}catch{try{return new URL(`https://${t}`).host}catch{return""}}}export{l as F,p as h};
