(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{517:function(e,t,a){"use strict";var r=a(3),c=a(11),n=a(4),o=a(280),i=a(449),l=a(499),s=a(460),d=a(0),b=a(488),u=Object(b.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),j=a(1),m=["label","options","className","error","resetFlag","index","onChange"];function v(e){var t,a=e.label,b=e.options,v=e.className,h=e.error,O=e.resetFlag,p=e.index,x=e.onChange,f=Object(n.a)(e,m),g=Object(d.useState)(null===(t=b[p])||void 0===t?void 0:t.value),N=Object(c.a)(g,2),C=N[0],w=N[1],y=u();return Object(d.useEffect)((function(){var e;O&&w(null===(e=b[0])||void 0===e?void 0:e.value)}),[O]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{className:"".concat(y.root," ").concat(v),variant:"filled",children:[Object(j.jsx)(i.a,{classes:{root:y.label,focused:y.labelFocus},id:a,children:a}),Object(j.jsx)(s.a,Object(r.a)(Object(r.a)({classes:{root:y.selectRoot,icon:y.selectIcon},MenuProps:{classes:{paper:y.selectMenu}},disableUnderline:!0,error:h,labelId:a,label:a,value:C,onChange:function(e){w(e.target.value),x(e)}},f),{},{children:b&&b.map((function(e,t){return Object(j.jsx)(l.a,{value:e.value,children:e.label},t)}))}))]})})}v.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=v},518:function(e,t,a){"use strict";var r=a(26),c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),o=(0,r(a(34)).default)(n.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=o},519:function(e,t,a){"use strict";var r=a(3),c=a(4),n=a(11),o=a(495),i=a(0),l=a(1),s=["children"];t.a=function(e){var t=Object(i.useState)(!1),a=Object(n.a)(t,2),d=a[0],b=a[1],u=Object(i.useState)(-1),j=Object(n.a)(u,2),m=j[0],v=j[1],h=e.children,O=Object(c.a)(e,s);return Object(i.useEffect)((function(){var e=!0;return document.body.offsetWidth>576?e&&v(!0):e&&v(!1),function(){return e=!1}}),[]),Object(l.jsx)(l.Fragment,{children:-1!==m&&Object(l.jsx)(l.Fragment,{children:m?Object(l.jsx)(o.a,Object(r.a)(Object(r.a)({},O),{},{children:h})):Object(l.jsx)(o.a,Object(r.a)(Object(r.a)({},O),{},{open:d,onClick:function(){return b(!d)},children:h}))})})}},521:function(e,t,a){"use strict";var r=a(26),c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),o=(0,r(a(34)).default)(n.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},523:function(e,t,a){"use strict";var r=a(3),c=a(28),n=a.n(c),o="/api/grammar",i={getGrammar:function(e){return n.a.get("".concat(o,"/get-grammar/").concat(e))},getGrammarById:function(e){return n.a.get("".concat(o,"/get-grammar-by-id/").concat(e))},getGrammarByLevel:function(e,t){return n.a.get("".concat(o,"/get-grammar-by-level/").concat(e),{headers:{Authorization:t}})},getGrammarLevels:function(e){return n.a.get("".concat(o,"/get-grammar-levels"),{headers:{Authorization:e}})},getAllGrammar:function(e){return n.a.get("".concat(o,"/get-all-grammar"),{headers:{Authorization:e}})},postGrammar:function(e){return n.a.post("".concat(o,"/post-grammar"),Object(r.a)({},e),{header:{"content-type":"multipart/form-data"}})},putGrammar:function(e,t){return n.a.put("".concat(o,"/put-grammar/").concat(e),Object(r.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteGrammar:function(e){return n.a.patch("".concat(o,"/delete-grammar/").concat(e))},searchGrammar:function(e){return n.a.get("".concat(o,"/search-grammar"),{params:{title:e}})}};t.a=i},525:function(e,t,a){"use strict";var r=a(26),c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),o=(0,r(a(34)).default)(n.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=o},526:function(e,t,a){"use strict";var r=a(26),c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),o=(0,r(a(34)).default)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},534:function(e,t,a){"use strict";var r=a(26),c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),o=(0,r(a(34)).default)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=o},542:function(e,t,a){"use strict";var r=a(0),c=a(564),n=a.n(c),o=a(1),i={buttons:["source","|","bold","strikethrough","underline","italic","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","video","table","link","|","align","undo","redo","|","hr","eraser","copyformat","|","symbol","fullsize","print","about"]};t.a=function(e){var t=e.initialValue,a=e.getValue,c=Object(r.useRef)(null);return Object(o.jsx)(n.a,{ref:c,value:t,config:i,tabIndex:1,onChange:function(e){return a(e)}})}},546:function(e,t,a){"use strict";var r=a(11),c=a(0),n=a(1);function o(e){var t=e.className,a=e.onTouchAnchor,o=e.threshold,i=Object(c.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&a()}),{threshold:o})),l=Object(c.useState)(null),s=Object(r.a)(l,2),d=s[0],b=s[1];return Object(c.useEffect)((function(){var e=d,t=i.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[d]),Object(n.jsx)("div",{className:t,ref:b,children:e.children})}o.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.a=o},548:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=[{value:"1",label:"Level 1",image:a.p+"static/media/Level1.43c26585.jpg"},{value:"2",label:"Level 2",image:a.p+"static/media/Level2.740c60b7.jpg"},{value:"3",label:"Level 3",image:a.p+"static/media/Level3.3f74cba2.jpg"},{value:"4",label:"Level 4",image:a.p+"static/media/Level4.183c28e0.jpg"}]},563:function(e,t,a){"use strict";var r=a(2),c=a(4),n=a(0),o=(a(7),a(6)),i=a(8),l=a(507),s=n.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,d=e.disableTypography,b=void 0!==d&&d,u=Object(c.a)(e,["children","classes","className","disableTypography"]);return n.createElement("div",Object(r.a)({className:Object(o.a)(i.root,s),ref:t},u),b?a:n.createElement(l.a,{component:"h2",variant:"h6"},a))}));t.a=Object(i.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},751:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(16),n=a.n(c),o=a(3),i=a(4),l=a(27),s=a(11),d=a(523),b=a(19),u=a(10),j=a(180),m=a(503),v=a(520),h=a(178),O=a.n(h),p=a(525),x=a.n(p),f=a(518),g=a.n(f),N=a(145),C=a(517),w=a(64),y=a(94),S=a(534),k=a.n(S),I=a(519),z=a(488),L=Object(z.a)((function(){return{root:{padding:"2.8rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",backgroundColor:"var(--bg-color-sec)"},title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.8rem",marginBottom:"1.2rem"},grid:{marginTop:"2.4rem",marginBottom:"2.4rem"},tooltipIcon:{fontSize:"1.6rem",color:"var(--label-color)"},btn:{marginLeft:"1rem",textTransform:"none",minWidth:"14rem"},btnReset:{borderColor:"var(--accent-color) !important",color:"var(--accent-color) !important","&:hover, &:active":{filter:"brightness(0.85)"}},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},root2:{marginTop:"3.2rem","& ::-webkit-scrollbar":{width:"2px"},"& ::-webkit-scrollbar-track":{background:"none"},"& ::-webkit-scrollbar-thumb":{borderRadius:"25px"}},contentWrap:{marginTop:"2.4rem"},listWrap:{padding:"1.2rem 0.4rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)"},list:{padding:"0 2.4rem",height:"calc(100vh - 24rem)",overflow:"auto"},listItem:{margin:"0.6rem 0"},skeleton:{height:"100%","& > *":{margin:"1.2rem 0",height:"calc(10% - 1.2rem)"}},root3:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}}}})),P=a(1);var V=function(e){var t=e.title,a=L();return Object(P.jsx)(I.a,{title:t,className:"cur-help",children:Object(P.jsx)(k.a,{className:a.tooltipIcon})})},M=a(602),E=a(753),T=a(726),F=a(20),A=a(48),R=a(29),W=a(548),_=a(500),B=a(501),G=a(563),H=a(502),q=a(521),D=a.n(q),U=a(546),J=a(526),K=a.n(J),Q=a(542),X=["children","value","index"],Y=y.b().shape({Title:y.d().trim().required("Input value"),Content:y.d().required("Input value"),Level:y.d().required("Select one").oneOf(W.a.map((function(e){return e.value}))),LinkVideo:y.d(),Script:y.d(),Items:y.a(),Point:y.d().required("Input value"),Examples:y.d().required("Input value")});function Z(e){var t=e.children,a=e.value,r=e.index,c=Object(i.a)(e,X);return Object(P.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},c),{},{children:a===r&&Object(P.jsx)(M.a,{sx:{p:3},children:Object(P.jsx)(v.a,{children:t})})}))}function $(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function ee(e){var t,a,c,n,i,l,d=e.onSubmitForm,h=e.submitting,p=L(),f=Object(r.useState)(0),y=Object(s.a)(f,2),S=y[0],k=(y[1],Object(r.useState)(1)),I=Object(s.a)(k,2),z=I[0],q=I[1],J=Object(w.d)({resolver:Object(j.a)(Y)}),X=J.register,ee=J.handleSubmit,te=J.formState.errors,ae=Object(r.useState)(!0),re=Object(s.a)(ae,2),ce=re[0],ne=(re[1],Object(r.useState)([])),oe=Object(s.a)(ne,2),ie=(oe[0],oe[1],Object(r.useState)(!0)),le=Object(s.a)(ie,2),se=le[0],de=le[1],be=Object(r.useState)(!0),ue=Object(s.a)(be,2),je=ue[0],me=(ue[1],Object(r.useState)(!1)),ve=Object(s.a)(me,2),he=ve[0],Oe=ve[1],pe=Object(r.useState)(!1),xe=Object(s.a)(pe,2),fe=xe[0],ge=xe[1],Ne=Object(r.useState)(-1),Ce=Object(s.a)(Ne,2),we=Ce[0],ye=Ce[1],Se=Object(r.useState)([]),ke=Object(s.a)(Se,2),Ie=ke[0],ze=ke[1],Le=Object(r.useState)(1),Pe=Object(s.a)(Le,2),Ve=Pe[0],Me=Pe[1],Ee=Object(r.useRef)(0),Te=Object(r.useState)({Point:"",Examples:""}),Fe=Object(s.a)(Te,2),Ae=Fe[0],Re=Fe[1],We=function(e){var t=e.target,a=t.name,r=t.value;Re(Object(o.a)(Object(o.a)({},Ae),{},Object(u.a)({},a,r)))},_e=function(){Oe(!1),Re({Point:"",Examples:""})},Be=Object(b.b)(),Ge=Object(F.g)(),He="https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png",qe=Object(r.useState)(He),De=Object(s.a)(qe,2),Ue=De[0],Je=De[1],Ke=Object(r.useState)(null),Qe=Object(s.a)(Ke,2),Xe=Qe[0],Ye=Qe[1],Ze=Object(r.useState)(null),$e=Object(s.a)(Ze,2),et=$e[0],tt=$e[1],at=Object(r.useState)(""),rt=Object(s.a)(at,2),ct=rt[0],nt=rt[1];return Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{className:p.title,children:"Th\xeam ng\u1eef ph\xe1p"}),Object(P.jsx)("div",{className:"english-break"}),Object(P.jsxs)("form",{onSubmit:ee((function(e){d(Object(o.a)(Object(o.a)({},e),{},{VidUpload:Xe,Image:Ue,Audio:et,Script:ct,Items:Ie}))})),autoComplete:"off",children:[Object(P.jsx)(v.a,{container:!0,alignContent:"center",children:Object(P.jsxs)("div",{className:p.avtWrap,children:[Object(P.jsx)("img",{src:Ue||He,alt:"",className:"".concat(p.avt," w-100 h-100")}),Object(P.jsx)("div",{className:"".concat(p.cameraIconWrap," flex-center"),children:Object(P.jsx)("input",{type:"file",className:p.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||Be(Object(A.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&Be(Object(A.b)("Size too large","error")),Object(R.b)(t).then((function(e){Je(e)}))}catch(a){throw a}},accept:"image/*"})})]})}),Object(P.jsxs)(v.a,{className:p.grid,container:!0,spacing:3,children:[Object(P.jsxs)(v.a,{item:!0,xs:12,md:6,lg:4,children:[Object(P.jsx)(N.a,{className:"w-100",label:"Title (*)",error:Boolean(te.Title),inputProps:Object(o.a)({autoFocus:!0,name:"Title"},X("Title"))}),te.Title&&Object(P.jsx)("p",{className:"text-error",children:null===(t=te.Title)||void 0===t?void 0:t.message})]}),Object(P.jsxs)(v.a,{item:!0,xs:12,md:6,lg:4,children:[Object(P.jsx)(N.a,{className:"w-100",label:"Content (*)",error:Boolean(te.Content),inputProps:Object(o.a)({name:"Content"},X("Content"))}),te.Content&&Object(P.jsx)("p",{className:"text-error",children:null===(a=te.Content)||void 0===a?void 0:a.message})]}),Object(P.jsxs)(v.a,{item:!0,xs:12,md:6,lg:4,children:[Object(P.jsx)(C.a,{className:"w-100",label:"Level (*)",options:W.a,error:Boolean(te.Level),resetFlag:S,index:0,inputProps:Object(o.a)({name:"Level"},X("Level"))}),te.type&&Object(P.jsx)("p",{className:"text-error",children:null===(c=te.Level)||void 0===c?void 0:c.message})]}),Object(P.jsxs)(M.a,{sx:{width:"100%"},children:[Object(P.jsx)(M.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(P.jsxs)(E.a,{value:z,onChange:function(e,t){q(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(P.jsx)(T.a,Object(o.a)({label:"Upload"},$(0))),Object(P.jsx)(T.a,Object(o.a)({label:"Link"},$(1))),Object(P.jsx)(T.a,Object(o.a)({label:"Audio"},$(2)))]})}),Object(P.jsx)(Z,{value:z,index:0,children:Object(P.jsx)(v.a,{item:!0,xs:6,children:Object(P.jsx)(v.a,{container:!0,alignContent:"center",children:Object(P.jsx)("div",{className:p.avtWrap,children:Object(P.jsx)("div",{className:"".concat(p.cameraIconWrap," flex-center"),children:Object(P.jsx)("input",{type:"file",className:p.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||Be(Object(A.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&Be(Object(A.b)("Size too large","error")),Object(R.b)(t).then((function(e){Ye(e)}))}catch(a){throw a}},accept:"video/*"})})})})})}),Object(P.jsx)(Z,{value:z,index:1,children:Object(P.jsxs)(v.a,{item:!0,xs:6,children:[Object(P.jsx)(N.a,{className:"w-100",label:"Link Video",multiline:!0,endAdornment:Object(P.jsx)(V,{title:"Input link youtube"}),inputProps:Object(o.a)({name:"LinkVideo"},X("LinkVideo"))}),te.Video&&Object(P.jsx)("p",{className:"text-error",children:null===(n=te.Video)||void 0===n?void 0:n.message})]})}),Object(P.jsx)(Z,{value:z,index:2,children:Object(P.jsx)(v.a,{item:!0,xs:6,children:Object(P.jsx)(v.a,{container:!0,alignContent:"center",children:Object(P.jsx)("div",{className:p.avtWrap,children:Object(P.jsx)("div",{className:"".concat(p.cameraIconWrap," flex-center"),children:Object(P.jsx)("input",{type:"file",className:p.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||Be(Object(A.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&Be(Object(A.b)("Size too large","error")),Object(R.b)(t).then((function(e){tt(e)}))}catch(a){throw a}},accept:"audio/*"})})})})})})]})]}),Object(P.jsx)("div",{className:"row",children:Object(P.jsxs)("div",{className:"col-md-6",style:{margin:"auto",marginTop:"50px"},children:[Object(P.jsx)("div",{style:{textAlign:"center"},children:Object(P.jsx)("h3",{children:"Rich Text Editor"})}),Object(P.jsx)(Q.a,{initialValue:"",getValue:function(e){nt(e)}})]})}),Object(P.jsxs)("div",{className:"".concat(p.root2," english-container"),children:[Object(P.jsxs)("div",{className:"flex-center-between",children:[Object(P.jsx)("h1",{className:"english-title",children:"Add Content for grammar"}),Object(P.jsxs)("div",{children:[Object(P.jsx)(D.a,{className:"english-setting-icon mr-5",onClick:function(){Oe(!0)}}),Object(P.jsxs)(_.a,{onClose:_e,open:he,children:[Object(P.jsx)(G.a,{onClose:_e,children:"Add point"}),Object(P.jsx)(B.a,{dividers:!0,children:Object(P.jsxs)("form",{noValidate:!0,children:[Object(P.jsxs)(v.a,{item:!0,xs:12,children:[Object(P.jsx)(N.a,{className:"w-100",label:"Point",value:Ae.Point,endAdornment:Object(P.jsx)(V,{title:"Input value"}),error:Boolean(te.Point),inputProps:Object(o.a)({name:"Point"},X("Point")),onChange:We}),te.Point&&Object(P.jsx)("p",{className:"text-error",children:null===(i=te.Point)||void 0===i?void 0:i.message})]}),Object(P.jsxs)(v.a,{item:!0,xs:12,children:[Object(P.jsx)(N.a,{className:"w-100",label:"Examples",multiline:!0,value:Ae.Examples,endAdornment:Object(P.jsx)(V,{title:"Input value"}),error:Boolean(te.Examples),inputProps:Object(o.a)({name:"Examples"},X("Examples")),onChange:We}),te.Examples&&Object(P.jsx)("p",{className:"text-error",children:null===(l=te.Examples)||void 0===l?void 0:l.message})]})]})}),Object(P.jsxs)(H.a,{children:[Object(P.jsx)(m.a,{onClick:_e,color:"primary",children:"Cancel"}),Object(P.jsx)(m.a,{onClick:function(){""!==Ae.Point.trim()&&(fe?(Ie[we]=Ae,ge(!1),ye(-1)):Ie.push(Ae)),Oe(!1),Re({Point:"",Examples:""})},color:"primary",autoFocus:!0,children:"Save"})]})]})]})]}),Object(P.jsx)("div",{className:"english-break"}),Object(P.jsx)("div",{className:p.contentWrap,children:Object(P.jsx)("div",{className:"".concat(p.listWrap," w-100"),children:Object(P.jsx)("ul",{id:"dictionaryId",className:"".concat(p.list," flex-col w-100"),children:Object(P.jsx)(P.Fragment,{children:je&&Object(P.jsx)(P.Fragment,{children:Ie&&Ie.length>0&&Object(P.jsxs)(P.Fragment,{children:[Ie.map((function(e,t){return Object(P.jsx)("li",{className:p.listItem,children:Object(P.jsxs)("div",{className:"".concat(p.root3," flex-center-between"),children:[Object(P.jsx)("div",{className:"w-100 flex-center--ver",onClick:function(){return function(e){Re(Ie[e]),ge(!0),ye(e),Oe(!0)}(t)},children:Object(P.jsx)("div",{className:"ml-8 flex-grow-1",children:Object(P.jsx)("h3",{className:p.word,children:e.Point})})}),Object(P.jsxs)("div",{className:"flex-center--ver",children:[Object(P.jsx)("div",{className:"mr-5"}),Object(P.jsx)(K.a,{className:"english-setting-icon",onClick:function(){return function(e){for(var t=[],a=0;a<Ie.length;a++)a!==e&&t.push(Ie[a]);ze(t)}(t)}})]})]})},t)})),!ce&&se&&Object(P.jsx)(U.a,{onTouchAnchor:function(){Ve<Ee.current?Me(Ve+1):de(!1)},threshold:1,children:Object(P.jsx)("div",{className:"w-100 t-center",children:Object(P.jsx)(O.a,{className:"ani-spin"})})})]})})})})})})]}),Object(P.jsx)("div",{className:"english-break"}),Object(P.jsxs)("div",{className:"d-flex flex-end jus-content-end pt-5 w-100",children:[Object(P.jsx)(m.a,{className:"".concat(p.btn," ").concat(p.btnReset),color:"secondary",endIcon:Object(P.jsx)(x.a,{}),variant:"outlined",disabled:h,onClick:function(){return Ge.push("/admin/grammar")},children:"Return"}),Object(P.jsx)(m.a,{type:"submit",className:"".concat(p.btn," _btn _btn-primary"),disabled:h,endIcon:h?Object(P.jsx)(O.a,{className:"ani-spin"}):Object(P.jsx)(g.a,{}),variant:"contained",children:"Create"})]})]})]})}ee.defaultProps={onSubmitForm:function(){},submitting:!1};var te=ee,ae=["VidUpload","LinkVideo"],re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e||""===e)return null;var t=e.includes("https://www.youtube.com");return t||(t=e.includes("youtu.be/"))?e:null};var ce=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],u=Object(b.b)(),j=function(){var e=Object(l.a)(n.a.mark((function e(t){var a,r,l,s,b,j,m,v;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c(!0),a=t.VidUpload,r=t.LinkVideo,l=Object(i.a)(t,ae),!a||!r||""==r.trim()){e.next=7;break}return u(Object(A.b)("Ch\u1ecdn m\u1ed9t trong hai t\xf9y ch\u1ecdn \u0111\u1ec3 th\xeam video","warning")),c(!1),e.abrupt("return");case 7:if(s=[],null!=a){e.next=21;break}if(!r&&""==r.trim()){e.next=18;break}if(null!=(b=re(r))){e.next=15;break}return u(Object(A.b)("Link video is invalid.","warning")),c(!1),e.abrupt("return");case 15:s=Object(o.a)(Object(o.a)({},l),{},{Video:b}),e.next=19;break;case 18:s=Object(o.a)({},l);case 19:e.next=22;break;case 21:s=Object(o.a)(Object(o.a)({},l),{},{Video:a});case 22:return console.log(s),e.next=25,d.a.postGrammar(s);case 25:200===e.sent.status&&(u(Object(A.b)("Created grammar successfully","success")),c(!1)),e.next=34;break;case 29:e.prev=29,e.t0=e.catch(0),v=(null===(j=e.t0.response)||void 0===j||null===(m=j.data)||void 0===m?void 0:m.message)||"Error, can not create listening.",u(Object(A.b)(v,"error")),c(!1);case 34:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)(te,{onSubmitForm:j,submitting:a})},ne=Object(z.a)((function(){return{root:{margin:"3.2rem 0"}}}));t.default=function(){var e=ne();return Object(P.jsx)("div",{className:"container",children:Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)("div",{className:"ani-fade",children:Object(P.jsx)(ce,{})})})})}}}]);
//# sourceMappingURL=15.c30109df.chunk.js.map