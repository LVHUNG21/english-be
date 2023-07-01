(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[31],{526:function(e,t,n){"use strict";var c=n(3),a=n(28),r=n.n(a),i="/api/listening",s={getListening:function(e){return r.a.get("".concat(i,"/get-listening/").concat(e))},getListenByTopic:function(e,t){return r.a.get("".concat(i,"/get-listen-by-topic"),{params:{topic:e,type:t}})},getListenById:function(e){return r.a.get("".concat(i,"/get-listen-by-id/").concat(e))},getListenTopics:function(e,t){return r.a.get("".concat(i,"/get-listen-topics"),{params:{topic:e,type:t}})},getAllListen:function(e){return r.a.get("".concat(i,"/get-all-listen"),{params:{type:e}})},searchListen:function(e){return r.a.get("".concat(i,"/search-listen"),{params:{name:e}})},postListen:function(e){return r.a.post("".concat(i,"/post-listen"),Object(c.a)({},e),{header:{"content-type":"multipart/form-data"}})},putListen:function(e,t){return r.a.put("".concat(i,"/put-listen/").concat(e),Object(c.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteListen:function(e){return r.a.delete("".concat(i,"/delete-listen/").concat(e))}};t.a=s},556:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var c=n(16),a=n.n(c),r=n(27),i=n(46),s=n(526),o=(n(181),function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.getListening(e);case 3:200===(c=t.sent).status?n({type:i.a.GET_LISTENING,payload:c.data}):n({type:i.a.SET_LISTEN_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:i.a.SET_LISTEN_ERROR,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}),l=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.deleteListen(e);case 3:200===(c=t.sent).status?n({type:i.a.DELETE_LISTEN,payload:e}):n({type:i.a.SET_LISTEN_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:i.a.SET_LISTEN_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},604:function(e,t,n){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAMQAAP///9ZPT+aXl/TPz8sfH95vb+yvryH5BAUUAAEALAAAAAAQABAAAANCGLrc/pBAN8RsALRTimQFYCxDVhxNqQWq9YQCkbmPnAE0dJiXYtwfyA+XQTkIgswgkBQFmbel7wYIGmIbgcDYayQAADs="},605:function(e,t,n){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAD6wPv///53XneHz4WnCab7kvlG4UXnIeSH5BAUUAAEALAAAAAAQABAAAAM+GLrMcy2qQohswpxxV96dkhFcWBhkGJxGoT6AIAmuCICYYcgnUUcCQOsQ6wwMQkCqEwQUQwPn0kiUqVbWSwIAOw=="},711:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var c=n(11),a=n(3),r=n(4),i=n(0),s=n(739),o=n(714),l=n(510),u=n(601),b=n(56),d=(n(598),n(713)),j=n(712),p=n(745),h=n(515),f=n(506),O=n(19),g=n(556),x=n(20),A=n(604),m=n(605),w=n(491),y=n(1),v=["children","value","index"],C=Object(w.a)((function(e){return{tabcontents:{border:"1px solid #2eb8b8",padding:"10px",backgroundColor:"#FFF",borderRadius:"0 3px 3px 3px"}}}));function E(e){var t=e.children,n=e.value,c=e.index,i=Object(r.a)(e,v);return Object(y.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:n!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:n===c&&Object(y.jsx)(u.a,{sx:{p:3},children:Object(y.jsx)(l.a,{children:t})})}))}function L(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function k(){Object(b.a)("Listening");var e=C(),t=Object(i.useState)(1),n=Object(c.a)(t,2),r=n[0],w=n[1],v=Object(i.useState)(!1),k=Object(c.a)(v,2),S=k[0],T=k[1],Q=Object(i.useState)(!1),R=Object(c.a)(Q,2),I=R[0],N=R[1],_=Object(x.i)().id,B=Object(O.c)((function(e){return e.listeningReducer})),G=B.listen,D=B.questions,U=Object(O.b)();Object(i.useEffect)((function(){return U(Object(g.b)(_),[U])}));var F=Object(i.useState)([]),q=Object(c.a)(F,2),Y=q[0],P=(q[1],Object(i.useState)([])),H=Object(c.a)(P,2),M=H[0],X=(H[1],function(e,t){if(Y[e])if(Y[e].includes(t))for(var n=0;n<Y[e].length;n++)Y[e][n]==t&&Y[e].splice(n,1);else Y[e].push(t);else{Y[e]=[],Y[e].push(t)}});return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(l.a,{variant:"h6",align:"center",children:G.Name}),Object(y.jsx)(l.a,{children:G.Description}),Object(y.jsx)("p",{align:"center",children:Object(y.jsx)("iframe",{src:G.Video,width:"500",height:"300"})}),Object(y.jsxs)(u.a,{sx:{width:"100%"},children:[Object(y.jsx)(u.a,{sx:{borderBottom:1,borderColor:"divider",backgroundColor:"#2eb8b8",color:"white"},children:Object(y.jsxs)(s.a,{value:r,onChange:function(e,t){w(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(y.jsx)(o.a,Object(a.a)({label:"Script"},L(0))),Object(y.jsx)(o.a,Object(a.a)({label:"Quiz"},L(1)))]})}),Object(y.jsxs)("div",{className:e.tabcontents,children:[Object(y.jsx)(E,{value:r,index:0,children:Object(y.jsx)("td",{dangerouslySetInnerHTML:{__html:G.Script}})}),Object(y.jsxs)(E,{value:r,index:1,children:[Object(y.jsx)(l.a,{variant:"h6",children:"Answer the following questions about the interview."}),D&&D.map((function(e,t){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(l.a,{variant:"body2",children:[t+1,") ",e.Content,S&&1==M[t]&&Object(y.jsx)("span",{children:Object(y.jsx)("img",{src:m.a,alt:"Correct!"})}),S&&0==M[t]&&Object(y.jsx)("span",{children:Object(y.jsx)("img",{src:A.a,alt:"Correct!"})})]}),Object(y.jsx)(d.a,{children:e.Answers.map((function(e,n){return I&&1==e.isCorrect?Object(y.jsx)(j.a,{control:Object(y.jsx)(p.a,{color:"primary",id:"".concat(e,"-").concat(n),onClick:function(){return X(t,n)}}),label:Object(y.jsx)(l.a,{style:{color:"#008000"},children:Object(y.jsx)("strong",{children:e.content})})},n):Object(y.jsx)(j.a,{control:Object(y.jsx)(p.a,{color:"primary",id:"".concat(e,"-").concat(n),onClick:function(){return X(t,n)}}),label:e.content},n)}))})]})})),Object(y.jsx)(f.a,{color:"primary",onClick:function(){return function(){if(Y.length>0)for(var e=0;e<Y.length;e++)if(Y[e])if(Y[e].length>0){for(var t=0,n=0;n<D[e].Answers.length;n++)1==D[e].Answers[n].isCorrect&&(t+=1),console.log(Y[e]);if(t==Y[e].length){M[e]=!0;for(var c=0;c<Y[e].length;c++)0==D[e].Answers[Y[e][c]].isCorrect&&(M[e]=!1)}else M[e]=!1}else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();T(!0),N(!0)}()},children:"Check Answers"}),Object(y.jsx)(f.a,{color:"primary",onClick:function(){window.confirm("Do you want reload page again?")&&window.location.reload()},children:"Reset Quiz"}),Object(y.jsx)(f.a,{color:"primary",onClick:function(){N(!0)},children:"Show Answers"})]})]})]})]})})}}}]);
//# sourceMappingURL=31.1ac2f187.chunk.js.map