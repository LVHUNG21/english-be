(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[31],{523:function(e,t,r){"use strict";var a=r(3),n=r(28),c=r.n(n),o="/api/grammar",i={getGrammar:function(e){return c.a.get("".concat(o,"/get-grammar/").concat(e))},getGrammarById:function(e){return c.a.get("".concat(o,"/get-grammar-by-id/").concat(e))},getGrammarByLevel:function(e,t){return c.a.get("".concat(o,"/get-grammar-by-level/").concat(e),{headers:{Authorization:t}})},getGrammarLevels:function(e){return c.a.get("".concat(o,"/get-grammar-levels"),{headers:{Authorization:e}})},getAllGrammar:function(e){return c.a.get("".concat(o,"/get-all-grammar"),{headers:{Authorization:e}})},postGrammar:function(e){return c.a.post("".concat(o,"/post-grammar"),Object(a.a)({},e),{header:{"content-type":"multipart/form-data"}})},putGrammar:function(e,t){return c.a.put("".concat(o,"/put-grammar/").concat(e),Object(a.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteGrammar:function(e){return c.a.patch("".concat(o,"/delete-grammar/").concat(e))},searchGrammar:function(e){return c.a.get("".concat(o,"/search-grammar"),{params:{title:e}})}};t.a=i},552:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return l}));var a=r(16),n=r.n(a),c=r(27),o=r(54),i=r(523),s=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.getGrammar(e);case 3:200===(a=t.sent).status?r({type:o.a.GET_GRAMMAR,payload:a.data}):r({type:o.a.SET_GRAMMAR_ERROR,payload:a.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r({type:o.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.deleteGrammar(e);case 3:200===(a=t.sent).status?r({type:o.a.DELETE_GRAMMAR,payload:e}):r({type:o.a.SET_GRAMMAR_ERROR,payload:a.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r({type:o.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},605:function(e,t,r){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAMQAAP///9ZPT+aXl/TPz8sfH95vb+yvryH5BAUUAAEALAAAAAAQABAAAANCGLrc/pBAN8RsALRTimQFYCxDVhxNqQWq9YQCkbmPnAE0dJiXYtwfyA+XQTkIgswgkBQFmbel7wYIGmIbgcDYayQAADs="},606:function(e,t,r){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAD6wPv///53XneHz4WnCab7kvlG4UXnIeSH5BAUUAAEALAAAAAAQABAAAAM+GLrMcy2qQohswpxxV96dkhFcWBhkGJxGoT6AIAmuCICYYcgnUUcCQOsQ6wwMQkCqEwQUQwPn0kiUqVbWSwIAOw=="},731:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return M}));var a=r(11),n=r(3),c=r(4),o=r(0),i=r(753),s=r(726),l=r(507),u=r(602),d=r(56),b=r(599),j=r(700),m=r(699),p=r(759),h=r(512),O=r(503),f=r(19),g=r(552),x=r(20),A=r(488),w=r(29),v=r(5),y=r(605),C=r(606),R=r(1),G=["children","value","index"],k=Object(A.a)((function(){return{borderTopic:{borderStyle:"solid",borderColor:"initial",borderWidth:"1px",backgroundColor:"#ccff66",width:"700px",height:"auto"},grammarbox:{backgroundColor:"#99ffff",padding:"10px 10px",border:"1px solid #666",color:"black",marginBottom:"10px"},picture:{width:"50rem",height:"30rem",marginLeft:"15rem"},tabcontents:{border:"1px solid #2eb8b8",padding:"10px",backgroundColor:"#FFF",borderRadius:"0 3px 3px 3px"}}}));function E(e){var t=e.children,r=e.value,a=e.index,o=Object(c.a)(e,G);return Object(R.jsx)("div",Object(n.a)(Object(n.a)({role:"tabpanel",hidden:r!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},o),{},{children:r===a&&Object(R.jsx)(u.a,{sx:{p:3},children:Object(R.jsx)(l.a,{children:t})})}))}function Q(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function M(){Object(d.a)("Grammar");var e=k(),t=Object(o.useState)(0),r=Object(a.a)(t,2),c=r[0],A=r[1],G=Object(o.useState)(!1),M=Object(a.a)(G,2),S=M[0],I=M[1],T=Object(o.useState)(!1),_=Object(a.a)(T,2),B=_[0],F=_[1],L=Object(o.useState)(!0),U=Object(a.a)(L,2),D=U[0],P=U[1],Y=Object(x.i)().id,q=Object(f.c)((function(e){return e.grammarReducer})),z=q.grammar,N=q.questions,V=Object(f.b)();Object(o.useEffect)((function(){return V(Object(g.b)(Y),[V])}));var H=Object(o.useState)([]),W=Object(a.a)(H,2),X=W[0],J=(W[1],function(e){var t=[];return e&&(t=e.split("\n")),t}),K=null;z&&(K=Object(w.a)(z.Image?z.Image:v.c.IMAGE_SRC,200,200,!0,!0));var Z=Object(o.useState)([]),$=Object(a.a)(Z,2),ee=$[0],te=($[1],function(e,t){if(X[e])if(X[e].includes(t))for(var r=0;r<X[e].length;r++)X[e][r]==t&&X[e].splice(r,1);else X[e].push(t);else{X[e]=[],X[e].push(t)}});return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(h.a,{children:[Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(l.a,{variant:"h6",align:"center",children:z.Title}),Object(R.jsx)(l.a,{children:z.Content})]}),z.Video?Object(R.jsx)("div",{children:Object(R.jsx)(b.VideoCard,{src:!0===D&&z.Video,onEnded:function(){return P(!1)}})}):Object(R.jsx)("img",{className:e.picture,src:K,alt:"",align:"center"}),z.Audio&&Object(R.jsxs)("audio",{controls:!0,children:[Object(R.jsx)("source",{src:z.Audio,type:"audio/mpeg"}),"Your browser does not support the audio element."]}),Object(R.jsxs)(u.a,{sx:{width:"100%"},children:[Object(R.jsx)(u.a,{sx:{borderBottom:1,borderColor:"divider",backgroundColor:"#2eb8b8",color:"white"},children:Object(R.jsxs)(i.a,{value:c,onChange:function(e,t){A(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(R.jsx)(s.a,Object(n.a)({label:"Script"},Q(0))),Object(R.jsx)(s.a,Object(n.a)({label:"Grammar"},Q(1))),Object(R.jsx)(s.a,Object(n.a)({label:"Quiz"},Q(2)))]})}),Object(R.jsxs)("div",{className:e.tabcontents,children:[Object(R.jsx)(E,{value:c,index:0,children:Object(R.jsx)("td",{dangerouslySetInnerHTML:{__html:z.Script}})}),Object(R.jsx)(E,{value:c,index:1,children:z.Items&&z.Items.map((function(t,r){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(l.a,{className:e.grammarbox,children:Object(R.jsxs)("p",{children:[Object(R.jsxs)("strong",{children:["Point ",r+1," : "]}),t.Point]})}),Object(R.jsx)("div",{children:J(t.Examples).map((function(e){return Object(R.jsx)(l.a,{variant:"body2",align:"justify",children:e})}))})]})}))}),Object(R.jsxs)(E,{value:c,index:2,children:[Object(R.jsx)(l.a,{variant:"h6",children:"Answer the following questions about the interview."}),N&&N.map((function(e,t){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(l.a,{variant:"body2",children:[t+1,") ",e.Content,S&&1==ee[t]&&Object(R.jsx)("span",{children:Object(R.jsx)("img",{src:C.a,alt:"Correct!"})}),S&&0==ee[t]&&Object(R.jsx)("span",{children:Object(R.jsx)("img",{src:y.a,alt:"Correct!"})})]}),Object(R.jsx)(j.a,{children:e.Answers.map((function(e,r){return B&&1==e.isCorrect?Object(R.jsx)(m.a,{control:Object(R.jsx)(p.a,{color:"primary",id:"".concat(e,"-").concat(r),onClick:function(){return te(t,r)}}),label:Object(R.jsx)(l.a,{style:{color:"#008000"},children:Object(R.jsx)("strong",{children:e.content})})},r):Object(R.jsx)(m.a,{control:Object(R.jsx)(p.a,{color:"primary",id:"".concat(e,"-").concat(r),onClick:function(){return te(t,r)}}),label:e.content},r)}))})]})})),Object(R.jsx)(O.a,{color:"primary",onClick:function(){return function(){if(X.length>0)for(var e=0;e<X.length;e++)if(X[e])if(X[e].length>0){for(var t=0,r=0;r<N[e].Answers.length;r++)!0===N[e].Answers[r].isCorrect&&(t+=1),console.log(X[e]);if(t===X[e].length){ee[e]=!0;for(var a=0;a<X[e].length;a++)0==N[e].Answers[X[e][a]].isCorrect&&(ee[e]=!1)}else ee[e]=!1}else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();I(!0),F(!0)}()},children:"Check Answers"}),Object(R.jsx)(O.a,{color:"primary",onClick:function(){window.confirm("Do you want reload page again?")&&window.location.reload()},children:"Reset Quiz"}),Object(R.jsx)(O.a,{color:"primary",onClick:function(){F(!0)},children:"Show Answers"})]})]})]})]})})}}}]);
//# sourceMappingURL=31.8b278979.chunk.js.map