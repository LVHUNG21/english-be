(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[45],{528:function(t,n,e){"use strict";var c=e(4),r=e(2),i=e(0),a=(e(7),e(6)),o=e(8),s=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=parseFloat(t);return"".concat(e/n).concat(String(t).replace(String(e),"")||"px")}var d=i.forwardRef((function(t,n){var e=t.alignContent,o=void 0===e?"stretch":e,s=t.alignItems,u=void 0===s?"stretch":s,l=t.classes,d=t.className,x=t.component,g=void 0===x?"div":x,m=t.container,f=void 0!==m&&m,j=t.direction,p=void 0===j?"row":j,b=t.item,v=void 0!==b&&b,h=t.justify,w=t.justifyContent,O=void 0===w?"flex-start":w,y=t.lg,S=void 0!==y&&y,z=t.md,C=void 0!==z&&z,W=t.sm,N=void 0!==W&&W,k=t.spacing,I=void 0===k?0:k,G=t.wrap,M=void 0===G?"wrap":G,q=t.xl,B=void 0!==q&&q,E=t.xs,R=void 0!==E&&E,D=t.zeroMinWidth,Q=void 0!==D&&D,J=Object(c.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),L=Object(a.a)(l.root,d,f&&[l.container,0!==I&&l["spacing-xs-".concat(String(I))]],v&&l.item,Q&&l.zeroMinWidth,"row"!==p&&l["direction-xs-".concat(String(p))],"wrap"!==M&&l["wrap-xs-".concat(String(M))],"stretch"!==u&&l["align-items-xs-".concat(String(u))],"stretch"!==o&&l["align-content-xs-".concat(String(o))],"flex-start"!==(h||O)&&l["justify-content-xs-".concat(String(h||O))],!1!==R&&l["grid-xs-".concat(String(R))],!1!==N&&l["grid-sm-".concat(String(N))],!1!==C&&l["grid-md-".concat(String(C))],!1!==S&&l["grid-lg-".concat(String(S))],!1!==B&&l["grid-xl-".concat(String(B))]);return i.createElement(g,Object(r.a)({className:L,ref:n},J))})),x=Object(o.a)((function(t){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,n){var e={};return s.forEach((function(c){var r=t.spacing(c);0!==r&&(e["spacing-".concat(n,"-").concat(c)]={margin:"-".concat(l(r,2)),width:"calc(100% + ".concat(l(r),")"),"& > $item":{padding:l(r,2)}})})),e}(t,"xs"),t.breakpoints.keys.reduce((function(n,e){return function(t,n,e){var c={};u.forEach((function(t){var n="grid-".concat(e,"-").concat(t);if(!0!==t)if("auto"!==t){var r="".concat(Math.round(t/12*1e8)/1e6,"%");c[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else c[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else c[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===e?Object(r.a)(t,c):t[n.breakpoints.up(e)]=c}(n,t,e),n}),{}))}),{name:"MuiGrid"})(d);n.a=x},740:function(t,n,e){"use strict";e.r(n);var c=e(16),r=e.n(c),i=e(3),a=e(27),o=e(11),s=e(528),u=e(195),l=e(196),d=e(243),x=e(197),g=e(244),m=(e(5),e(56)),f=e(0),j=e(491),p=Object(j.a)((function(t){return{root:{padding:"1.2rem 1.2rem",boxShadow:"var(--box-shadow-2)",borderRadius:"var(--sm-border-radius)",cursor:"pointer",backgroundColor:"var(--bg-color-accent)",transition:"all 0.25s",minHeight:"10rem",height:"100%"},icon:{width:"4.4rem",height:"4.4rem",marginRight:"1.4rem"},title:{color:"var(--primary-color)",fontWeight:500,fontSize:"1.4rem",letterSpacing:"0.5px"},count:{color:"var(--primary-color)",fontWeight:500,fontSize:"4rem",letterSpacing:"0.5px"}}})),b=e(1);var v=function(t){var n=t.count,e=t.icon,c=t.title,r=p();return Object(b.jsxs)("div",{className:"".concat(r.root," flex-center--ver w-100"),children:[Object(b.jsx)("img",{className:r.icon,src:e,alt:"Icon"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{className:r.title,children:c}),Object(b.jsx)("h3",{className:r.count,children:n})]})]})},h=e(28),w=e.n(h),O="/api/statistics",y={countUser:function(){return w.a.get("".concat(O,"/count-user"))},countWord:function(){return w.a.get("".concat(O,"/count-word"))},countListening:function(){return w.a.get("".concat(O,"/count-listening"))},countQuiz:function(){return w.a.get("".concat(O,"/count-quiz"))},countGrammar:function(){return w.a.get("".concat(O,"/count-grammar"))}},S=e(19);n.default=function(){Object(m.a)("Admin");var t=Object(f.useState)({user:0,word:0,listen:0,quiz:0,grammar:0}),n=Object(o.a)(t,2),e=n[0],c=n[1],j=Object(S.c)((function(t){return t.authReducer})).user;return Object(f.useEffect)((function(){return Object(a.a)(r.a.mark((function t(){var n,a,o,s,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.countUser();case 2:return n=t.sent,t.next=5,y.countWord();case 5:return a=t.sent,t.next=8,y.countListening();case 8:return o=t.sent,t.next=11,y.countQuiz();case 11:return s=t.sent,t.next=14,y.countGrammar();case 14:u=t.sent,c(Object(i.a)(Object(i.a)({},e),{},{user:n.data.count,word:a.data.count,listen:o.data.count,quiz:s.data.count,grammar:u.data.count}));case 16:case"end":return t.stop()}}),t)})))(),function(){}}),[e]),Object(b.jsx)("div",{className:"container my-10",children:Object(b.jsxs)(s.a,{container:!0,spacing:3,children:["admin"===j.roleType&&Object(b.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)(v,{icon:d.a,title:"Ng\u01b0\u1eddi d\xf9ng",count:e.user})}),Object(b.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)(v,{icon:l.a,title:"T\u1eeb v\u1ef1ng",count:e.word})}),Object(b.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)(v,{icon:u.a,title:"B\xe0i nghe",count:e.listen})}),Object(b.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)(v,{icon:g.a,title:"Quiz",count:e.quiz})}),Object(b.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)(v,{icon:x.a,title:"Ng\u1eef ph\xe1p",count:e.grammar})})]})})}}}]);
//# sourceMappingURL=45.f519f87d.chunk.js.map