(this.webpackJsonpsubreader_interview_test=this.webpackJsonpsubreader_interview_test||[]).push([[0],{28:function(e,n,t){"use strict";t.r(n);var r,c,o,i,a,d,l,s,b,j,m,p,u,h=t(1),O=t.n(h),f=t(15),g=t.n(f),v=t(2),x=t(7),y=t(5),k=t(3),w=t.p+"static/media/FjallaOne-Regular.c674a102.ttf",A=Object(k.a)(r||(r=Object(v.a)(["\n@font-face {\n  font-family: 'FjellaOne';\n  src: url(",");\n}\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: none;\n  }\n\n  html {\n    font-size: 62.5%\n  }\n\n  body {\n    background-color: #2f2f2f;\n    color: #eaeaea;\n    font-family: 'FjellaOne';\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n  h2 {\n    font-size: 3.5rem;\n  }\n  h3 {\n    font-size: 2.5rem;\n  }\n  h4 {\n    font-size: 2.3rem;\n  }\n  p {\n    font-size: 1.8rem;\n  }\n  code {\n    font-size: 1.5rem;\n    color: #000;\n    display:block\n  }\n  button {\n    padding: 1.2rem 3rem;\n    margin: 0rem 0.5rem;\n    font-weight: bolder;\n    border: none;\n    background-color: #e06c2e;\n    transition: all 0.3s ease-in-out;\n    color: #fff;\n    &:hover {\n    color: #e06c2e;\n    background-color: #fff;\n    }\n    &:focus {\n      outline: #fff 1px solid\n    }\n  }\n"])),w),C=t(0),z=k.b.div(c||(c=Object(v.a)(["\n  min-height: 10vh;\n  /* width: vw; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),F=k.b.div(o||(o=Object(v.a)(["\n  height: 0.5rem;\n  width: 35rem;\n  background-color: #e06c2e;\n"]))),S=function(){return Object(C.jsxs)(z,{children:[Object(C.jsx)("h1",{children:"TypeScript Type Generator"}),Object(C.jsx)(F,{})]})},T=t(4),I=k.b.div(i||(i=Object(v.a)(["\n  label {\n    font-size: 1.4rem;\n    margin: 0.5rem;\n  }\n"]))),N=Object(k.b)(I)(a||(a=Object(v.a)(["\n  margin-left: 5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  border: 1px solid #e06c2e;\n  border-radius: 1rem;\n  padding: 1rem;\n"]))),_=k.b.button(d||(d=Object(v.a)(["\n  margin-left: 5rem;\n\n  display: block;\n"]))),D=k.b.input(l||(l=Object(v.a)(["\n  width: 25rem;\n  padding: 1rem 0rem;\n  margin: 1rem 0rem;\n"]))),H=k.b.select(s||(s=Object(v.a)(["\n  margin: 0rem 1rem;\n  width: 10rem;\n  padding: 1rem 0rem;\n"]))),J=function e(n){var t=n.code,r=n.setCode,c=n.line,o=n.parent,i=Object(h.useState)("number"),a=Object(x.a)(i,2),d=a[0],l=a[1],s=Object(h.useState)(""),b=Object(x.a)(s,2),j=b[0],m=b[1],p=((null===c||void 0===c?void 0:c.props)||[]).map((function(n){return Object(C.jsx)(e,{code:t,setCode:r,line:n,parent:c},n.key)}));function u(){console.log("addPropsToObjHandler() initiated"),console.log(c.props);var e={name:"",type:"number",key:Object(y.v4)()};c.props?c.props.push(e):c.props=[e],console.log(c.props),r(Object(T.a)(t))}return Object(C.jsxs)(I,{children:["Array"!==(null===o||void 0===o?void 0:o.type)&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("label",{htmlFor:"",children:"Name:"}),Object(C.jsx)(D,{placeholder:"value",onChange:function(e){m(e.target.value),c.name=e.target.value,r(Object(T.a)(t))},value:j})]}),Object(C.jsx)("label",{htmlFor:"",children:"Type:"}),Object(C.jsxs)(H,{defaultValue:d,onChange:function(e){l(e.target.value),c.type=e.target.value,"Array"===e.target.value||"object"===e.target.value?(c.props=[],u()):delete c.props,r(Object(T.a)(t))},children:[Object(C.jsx)("option",{value:"number",children:"Number"}),Object(C.jsx)("option",{value:"string",children:"String"}),Object(C.jsx)("option",{value:"Array",children:"Array"}),Object(C.jsx)("option",{value:"object",children:"Object"})]}),0!==t.findIndex((function(e){return e.key===(null===c||void 0===c?void 0:c.key)}))&&"Array"!==(null===o||void 0===o?void 0:o.type)&&Object(C.jsx)("button",{onClick:function(e){if(console.log(c),null===o||void 0===o?void 0:o.props){var n=o.props.findIndex((function(e){return e.key===c.key}));console.log(n),console.log("Does have parent, deleting from it"),o.props.splice(n,1)}else{var i=t.findIndex((function(e){return e.key===c.key}));console.log(i),console.log("Doesn't have parent, deleting from code"),t.splice(i,1)}r(Object(T.a)(t))},children:"Delete"}),("object"===c.type||"Array"===c.type)&&Object(C.jsxs)(N,{children:[p,"object"===c.type&&Object(C.jsx)(_,{onClick:u,children:"Add new"})]})]})},B=k.b.div(b||(b=Object(v.a)(["\n  width: 100rem;\n  min-height: 80rem;\n  border-radius: 2rem;\n  border: 1px solid #eaeaea;\n  margin-right: 2rem;\n  padding: 5rem;\n  h3 {\n    margin-bottom: 2rem;\n  }\n"]))),E=function(e){var n=e.code,t=e.setCode;return Object(C.jsxs)(B,{children:[Object(C.jsx)("h3",{children:"Select input type and name. Then you will see the magic happen"}),void 0!==n&&n.map((function(e){return Object(C.jsx)(J,{code:n,setCode:t,line:e},e.key)})),Object(C.jsx)("button",{onClick:function(){console.log("addCodeHandler() initiated");var e,r={name:"",type:"number",key:Object(y.v4)()};e=void 0!==n?[].concat(Object(T.a)(n),[r]):[r],t(e),console.log(n)},children:"Add new"})]})},G=k.b.div(j||(j=Object(v.a)(["\n  margin-left: 2rem;\n  font-size: 1.1rem;\n"]))),M=function e(n){var t=n.line,r=(t.props||[]).map((function(n){return Object(C.jsx)(G,{children:t.props&&Object(C.jsx)(e,{line:n})},n.key)}));return Object(C.jsxs)("div",{className:"line-container",children:[Object(C.jsx)("code",{children:"Array"!==t.type&&"object"!==t.type&&"".concat(t.name,": ").concat(t.type)}),"Array"===t.type&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("code",{children:"".concat(t.name,": Array <*insert type of prop here*>")}),Object(C.jsxs)("div",{children:[Object(C.jsx)("code",{children:"Arraytype:"}),r]})]}),"object"===t.type&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("code",{children:"type ".concat(t.name," = {")}),t.props&&r,Object(C.jsx)("code",{children:"}"})]})]},t.key)},P=k.b.div(m||(m=Object(v.a)(["\n  max-width: 70rem;\n  flex-grow: 1;\n  min-height: 80rem;\n  border-radius: 2rem;\n  border: 1px solid #eaeaea;\n  h3 {\n    padding: 2rem;\n  }\n"]))),R=k.b.div(p||(p=Object(v.a)(["\n  margin: 0rem 3.5rem;\n  min-height: 50rem;\n  padding: 3rem 5rem;\n  background-color: #7f7f7f;\n  border: 2px solid #e06c2e;\n  border-radius: 1rem;\n"]))),V=function(e){var n=e.code;return Object(C.jsxs)(P,{children:[Object(C.jsx)("h3",{children:"Code goes here"}),Object(C.jsx)(R,{children:n.map((function(e){return Object(C.jsx)(M,{line:e},e.key)}))})]})},q={name:"",type:"number",key:Object(y.v4)()};var K=k.b.div(u||(u=Object(v.a)(["\n  min-height: 50vh;\n  margin: 2rem 5rem;\n  width: 95vw;\n  display: flex;\n  justify-content: space-between;\n"]))),L=function(){var e=Object(h.useState)([q]),n=Object(x.a)(e,2),t=n[0],r=n[1];return Object(C.jsxs)("div",{className:"app",children:[Object(C.jsx)(A,{}),Object(C.jsx)(S,{}),Object(C.jsxs)(K,{children:[Object(C.jsx)(E,{code:t,setCode:r}),Object(C.jsx)(V,{code:t})]})]})};g.a.render(Object(C.jsx)(O.a.StrictMode,{children:Object(C.jsx)(L,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2967933f.chunk.js.map