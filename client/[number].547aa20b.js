import{S as e,i as t,s,q as n,j as a,e as r,t as c,C as l,d as i,k as o,c as u,a as h,b as d,f,g as m,h as $,l as p,m as v,o as g,p as E,r as b,D as x,B as w,u as D,n as T,v as _,w as A,x as L,y as S,z as O,A as H}from"./client.980d713f.js";import{O as y,L as C}from"./index.4b19dc16.js";function M(e,t,s){const n=e.slice();return n[9]=t[s],n}function R(e){let t,s,l,p,v,g=e[4].title+"",E=("closed"===e[4].state?n.i18n.incidentFixed:n.i18n.incidentOngoing)+"";return{c(){t=c(g),s=a(),l=r("span"),p=c(E),this.h()},l(e){t=d(e,g),s=o(e),l=u(e,"SPAN",{class:!0});var n=h(l);p=d(n,E),n.forEach(i),this.h()},h(){f(l,"class",v=w(e[4].state)+" svelte-320s8x")},m(e,n){m(e,t,n),m(e,s,n),m(e,l,n),$(l,p)},p(e,s){16&s&&g!==(g=e[4].title+"")&&D(t,g),16&s&&E!==(E=("closed"===e[4].state?n.i18n.incidentFixed:n.i18n.incidentOngoing)+"")&&D(p,E),16&s&&v!==(v=w(e[4].state)+" svelte-320s8x")&&f(l,"class",v)},d(e){e&&i(t),e&&i(s),e&&i(l)}}}function I(e){let t,s=n.i18n.incidentDetails+"";return{c(){t=c(s)},l(e){t=d(e,s)},m(e,s){m(e,t,s)},p:T,d(e){e&&i(t)}}}function N(e){let t,s,l,p,v,g,E,b,x,w,L,S,O,H,y,C,R,I,N,B=n.i18n.incidentOpenedAt+"",V=new Date(e[4].created_at).toLocaleString()+"",j=n.i18n.incidentSubscribe+"",F=n.i18n.incidentViewOnGitHub+"",k=e[4].closed_at&&P(e),q=e[3],z=[];for(let t=0;t<q.length;t+=1)z[t]=U(M(e,q,t));return{c(){t=r("div"),s=r("dl"),l=r("dt"),p=c(B),v=r("dd"),g=c(V),k&&k.c(),E=a(),b=r("div"),x=r("p"),w=r("a"),L=c(j),O=a(),H=r("p"),y=r("a"),C=c(F),I=a();for(let e=0;e<z.length;e+=1)z[e].c();N=_(),this.h()},l(e){t=u(e,"DIV",{class:!0});var n=h(t);s=u(n,"DL",{class:!0});var a=h(s);l=u(a,"DT",{class:!0});var r=h(l);p=d(r,B),r.forEach(i),v=u(a,"DD",{class:!0});var c=h(v);g=d(c,V),c.forEach(i),k&&k.l(a),a.forEach(i),E=o(n),b=u(n,"DIV",{class:!0});var f=h(b);x=u(f,"P",{class:!0});var m=h(x);w=u(m,"A",{href:!0});var $=h(w);L=d($,j),$.forEach(i),m.forEach(i),O=o(f),H=u(f,"P",{class:!0});var D=h(H);y=u(D,"A",{href:!0});var T=h(y);C=d(T,F),T.forEach(i),D.forEach(i),f.forEach(i),n.forEach(i),I=o(e);for(let t=0;t<z.length;t+=1)z[t].l(e);N=_(),this.h()},h(){f(l,"class","svelte-320s8x"),f(v,"class","svelte-320s8x"),f(s,"class","svelte-320s8x"),f(w,"href",S=`https://github.com/${n.owner}/${n.repo}/issues/${e[0]}`),f(x,"class","svelte-320s8x"),f(y,"href",R=`https://github.com/${n.owner}/${n.repo}/issues/${e[0]}`),f(H,"class","svelte-320s8x"),f(b,"class","r svelte-320s8x"),f(t,"class","f")},m(e,n){m(e,t,n),$(t,s),$(s,l),$(l,p),$(s,v),$(v,g),k&&k.m(s,null),$(t,E),$(t,b),$(b,x),$(x,w),$(w,L),$(b,O),$(b,H),$(H,y),$(y,C),m(e,I,n);for(let t=0;t<z.length;t+=1)z[t].m(e,n);m(e,N,n)},p(e,t){if(16&t&&V!==(V=new Date(e[4].created_at).toLocaleString()+"")&&D(g,V),e[4].closed_at?k?k.p(e,t):(k=P(e),k.c(),k.m(s,null)):k&&(k.d(1),k=null),1&t&&S!==(S=`https://github.com/${n.owner}/${n.repo}/issues/${e[0]}`)&&f(w,"href",S),1&t&&R!==(R=`https://github.com/${n.owner}/${n.repo}/issues/${e[0]}`)&&f(y,"href",R),40&t){let s;for(q=e[3],s=0;s<q.length;s+=1){const n=M(e,q,s);z[s]?z[s].p(n,t):(z[s]=U(n),z[s].c(),z[s].m(N.parentNode,N))}for(;s<z.length;s+=1)z[s].d(1);z.length=q.length}},i:T,o:T,d(e){e&&i(t),k&&k.d(),e&&i(I),A(z,e),e&&i(N)}}}function B(e){let t,s;return t=new C({}),{c(){L(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){O(t,e,n),s=!0},p:T,i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){H(t,e)}}}function P(e){let t,s,a,l,o=n.i18n.incidentClosedAt+"",p=new Date(e[4].closed_at).toLocaleString()+"";return{c(){t=r("dt"),s=c(o),a=r("dd"),l=c(p),this.h()},l(e){t=u(e,"DT",{class:!0});var n=h(t);s=d(n,o),n.forEach(i),a=u(e,"DD",{class:!0});var r=h(a);l=d(r,p),r.forEach(i),this.h()},h(){f(t,"class","svelte-320s8x"),f(a,"class","svelte-320s8x")},m(e,n){m(e,t,n),$(t,s),m(e,a,n),$(a,l)},p(e,t){16&t&&p!==(p=new Date(e[4].closed_at).toLocaleString()+"")&&D(l,p)},d(e){e&&i(t),e&&i(a)}}}function U(e){let t,s,c,l,d,p=e[5](e[9].body)+"",v=n.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"";return{c(){t=r("article"),s=r("p"),c=a(),l=r("div"),d=a(),this.h()},l(e){t=u(e,"ARTICLE",{});var n=h(t);s=u(n,"P",{class:!0}),h(s).forEach(i),c=o(n),l=u(n,"DIV",{}),h(l).forEach(i),d=o(n),n.forEach(i),this.h()},h(){f(s,"class","svelte-320s8x")},m(e,n){m(e,t,n),$(t,s),s.innerHTML=p,$(t,c),$(t,l),l.innerHTML=v,$(t,d)},p(e,t){8&t&&p!==(p=e[5](e[9].body)+"")&&(s.innerHTML=p),8&t&&v!==(v=n.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"")&&(l.innerHTML=v)},d(e){e&&i(t)}}}function V(e){let t,s,b,x,w,D,T,_,A,L,S,O,H=n.i18n.incidentBack+"";function y(e,t){return e[2]?I:R}document.title=t=n.i18n.incidentTitle.replace("$NUMBER",e[0]);let C=y(e),M=C(e);const P=[B,N],U=[];function V(e,t){return e[1]?0:1}return D=V(e),T=U[D]=P[D](e),{c(){s=a(),b=r("h2"),M.c(),x=a(),w=r("section"),T.c(),_=a(),A=r("footer"),L=r("a"),S=c(H),this.h()},l(e){l('[data-svelte="svelte-1txp228"]',document.head).forEach(i),s=o(e),b=u(e,"H2",{class:!0});var t=h(b);M.l(t),t.forEach(i),x=o(e),w=u(e,"SECTION",{});var n=h(w);T.l(n),n.forEach(i),_=o(e),A=u(e,"FOOTER",{class:!0});var a=h(A);L=u(a,"A",{href:!0});var r=h(L);S=d(r,H),r.forEach(i),a.forEach(i),this.h()},h(){f(b,"class","svelte-320s8x"),f(L,"href","/"),f(A,"class","svelte-320s8x")},m(e,t){m(e,s,t),m(e,b,t),M.m(b,null),m(e,x,t),m(e,w,t),U[D].m(w,null),m(e,_,t),m(e,A,t),$(A,L),$(L,S),O=!0},p(e,[s]){(!O||1&s)&&t!==(t=n.i18n.incidentTitle.replace("$NUMBER",e[0]))&&(document.title=t),C===(C=y(e))&&M?M.p(e,s):(M.d(1),M=C(e),M&&(M.c(),M.m(b,null)));let a=D;D=V(e),D===a?U[D].p(e,s):(p(),v(U[a],1,1,()=>{U[a]=null}),g(),T=U[D],T||(T=U[D]=P[D](e),T.c()),E(T,1),T.m(w,null))},i(e){O||(E(T),O=!0)},o(e){v(T),O=!1},d(e){e&&i(s),e&&i(b),M.d(),e&&i(x),e&&i(w),U[D].d(),e&&i(_),e&&i(A)}}}function j(e,t,s){let{number:a}=t,r=x,c=!0,l=!0;const i=new y({userAgent:n["user-agent"]}),o=n.owner,u=n.repo;let h=[],d={};return b(async()=>{s(4,d=(await i.issues.get({owner:o,repo:u,issue_number:a,sort:"created",direction:"desc"})).data),s(2,l=!1),s(3,h=(await i.issues.listComments({owner:o,repo:u,issue_number:a})).data.reverse()),s(1,c=!1)}),e.$$set=e=>{"number"in e&&s(0,a=e.number)},[a,c,l,h,d,r]}class F extends e{constructor(e){super(),t(this,e,j,V,s,{number:0})}}function k(e){let t,s;return t=new F({props:{number:e[0]}}),{c(){L(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){O(t,e,n),s=!0},p(e,[s]){const n={};1&s&&(n.number=e[0]),t.$set(n)},i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){H(t,e)}}}async function q(e){const{number:t}=e.params;return{number:t}}function z(e,t,s){let{number:n}=t;return e.$$set=e=>{"number"in e&&s(0,n=e.number)},[n]}export default class extends e{constructor(e){super(),t(this,e,z,k,s,{number:0})}}export{q as preload};
