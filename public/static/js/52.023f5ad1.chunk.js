(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[52],{754:function(t,e,n){"use strict";n.r(e);var c=n(16),r=n.n(c),a=n(3),o=n(27),i=n(11),s=n(520),u=n(240),d=n(241),l=n(242),j=n(243),m=n(244),g=(n(5),n(56)),b=n(0),x=n(488),h=Object(x.a)((function(t){return{root:{padding:"1.2rem 1.2rem",boxShadow:"var(--box-shadow-2)",borderRadius:"var(--sm-border-radius)",cursor:"pointer",backgroundColor:"var(--bg-color-accent)",transition:"all 0.25s",minHeight:"10rem",height:"100%"},icon:{width:"4.4rem",height:"4.4rem",marginRight:"1.4rem"},title:{color:"var(--primary-color)",fontWeight:500,fontSize:"1.4rem",letterSpacing:"0.5px"},count:{color:"var(--primary-color)",fontWeight:500,fontSize:"4rem",letterSpacing:"0.5px"}}})),O=n(689),f=n.n(O),p=n(1);var v=function(t){var e=t.count,n=t.icon,c=t.title,r=h();return Object(p.jsxs)("div",{className:"".concat(r.root," flex-center--ver w-100"),children:[Object(p.jsx)("img",{className:r.icon,src:n,alt:"Icon"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{className:r.title,children:c}),Object(p.jsx)("h3",{className:r.count,children:Object(p.jsx)(f.a,{end:e||0,duration:2,separator:" "})})]})]})},w=n(28),z=n.n(w),N="/api/statistics",S={countUser:function(){return z.a.get("".concat(N,"/count-user"))},countWord:function(){return z.a.get("".concat(N,"/count-word"))},countListening:function(){return z.a.get("".concat(N,"/count-listening"))},countQuiz:function(){return z.a.get("".concat(N,"/count-quiz"))},countGrammar:function(){return z.a.get("".concat(N,"/count-grammar"))}},k=n(19);e.default=function(){Object(g.a)("Admin");var t=Object(b.useState)({user:0,word:0,listen:0,quiz:0,grammar:0}),e=Object(i.a)(t,2),n=e[0],c=e[1],x=Object(k.c)((function(t){return t.authReducer})).user;return Object(b.useEffect)((function(){return Object(o.a)(r.a.mark((function t(){var e,o,i,s,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.countUser();case 2:return e=t.sent,t.next=5,S.countWord();case 5:return o=t.sent,t.next=8,S.countListening();case 8:return i=t.sent,t.next=11,S.countQuiz();case 11:return s=t.sent,t.next=14,S.countGrammar();case 14:u=t.sent,c(Object(a.a)(Object(a.a)({},n),{},{user:e.data.count,word:o.data.count,listen:i.data.count,quiz:s.data.count,grammar:u.data.count}));case 16:case"end":return t.stop()}}),t)})))(),function(){}}),[n]),Object(p.jsx)("div",{className:"container my-10",children:Object(p.jsxs)(s.a,{container:!0,spacing:3,children:["admin"===x.roleType&&Object(p.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(p.jsx)(v,{icon:l.a,title:"Ng\u01b0\u1eddi d\xf9ng",count:n.user})}),Object(p.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(p.jsx)(v,{icon:d.a,title:"T\u1eeb v\u1ef1ng",count:n.word})}),Object(p.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(p.jsx)(v,{icon:u.a,title:"B\xe0i nghe",count:n.listen})}),Object(p.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(p.jsx)(v,{icon:m.a,title:"Quiz",count:n.quiz})}),Object(p.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(p.jsx)(v,{icon:j.a,title:"Ng\u1eef ph\xe1p",count:n.grammar})})]})})}}}]);
//# sourceMappingURL=52.023f5ad1.chunk.js.map