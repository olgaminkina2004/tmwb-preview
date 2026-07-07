import{e as i,_ as p}from"./index-Bw0gY6HR.js";import{r as s,g as u}from"./plural-C7hYmreL.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],w=i("crown",f);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],g=i("flame",_);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],m=i("user",y);function l(t,e){return`wb-rank-${e==="nav"?"navburst":"reveal"}-seen-${t}`}function M(t,e,a="modal"){if(!t||!e)return!1;try{const r=localStorage.getItem(l(t,a));return r?JSON.parse(r).periodDate===e:!1}catch{return!1}}function $(t,e,a="modal"){if(!(!t||!e))try{const r={periodDate:e};localStorage.setItem(l(t,a),JSON.stringify(r))}catch{}}function S(t){return t?t.top1_streak>=2?{text:`${t.top1_streak} ${s.day(t.top1_streak)} на 1-м месте`,short:`${t.top1_streak} ${s.day(t.top1_streak)}`,top1:!0,days:t.top1_streak}:t.top3_streak>=2?{text:`${t.top3_streak} ${s.day(t.top3_streak)} в топ-3`,short:`${t.top3_streak} ${s.day(t.top3_streak)}`,top1:!1,days:t.top3_streak}:null:null}const k={levelup:{pop:80,spread:95,vel:42,ticks:160,sideMs:0,sidePart:0},promotion:{pop:140,spread:110,vel:48,ticks:220,sideMs:900,sidePart:7},podium:{pop:200,spread:120,vel:52,ticks:250,sideMs:1400,sidePart:10},champion:{pop:270,spread:130,vel:58,ticks:300,sideMs:2200,sidePart:14}};async function P(t){if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||t==="demotion")return;const e=k[t];try{const a=(await p(async()=>{const{default:o}=await import("./confetti.module-C2jkTI5u.js");return{default:o}},[])).default,r=["--color-primary","--color-success","--color-warn","--color-info"].map(o=>u(o)).filter(o=>!!o),c=r.length?r:void 0,n={ticks:e.ticks,colors:c,disableForReducedMotion:!0};if(a({...n,particleCount:e.pop,spread:e.spread,startVelocity:e.vel,origin:{x:.5,y:.5}}),e.sideMs>0){const o=Date.now()+e.sideMs,d=()=>{a({...n,particleCount:e.sidePart,angle:60,spread:85,startVelocity:65,origin:{x:0,y:.75}}),a({...n,particleCount:e.sidePart,angle:120,spread:85,startVelocity:65,origin:{x:1,y:.75}}),Date.now()<o&&requestAnimationFrame(d)};requestAnimationFrame(d)}}catch{}}export{w as C,g as F,m as U,S as a,P as f,M as h,$ as m};
