(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),r=c(25),i=c.n(r),s=(c(36),c(37),c(12)),a=c(11),o=c.n(a),l=c(0);function b(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],j=t[1];return Object(n.useEffect)((function(){o.a.get("http://127.0.0.1:8000/api/get_all_posts/").then((function(e){j(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)("p",{className:"post",children:e.title},e.id)}))})}c.p;var h=c(26),u=c(27),d=c(31),O=c(30),x=function(e){Object(d.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(l.jsx)("form",{method:"post",onSubmit:function(e){return console.log(e)},children:Object(l.jsx)("button",{children:this.props.text})})}}]),c}(j.a.Component);var f=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"\u0412\u043e\u0439\u0442\u0438"}),Object(l.jsx)("input",{type:"text",id:"username",placeholder:"\u041b\u043e\u0433\u0438\u043d"}),Object(l.jsx)("input",{type:"text",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)(x,{text:"\u043e\u043a",type:"submit",handler:void console.log(1)})]})})},p=c(8),m=c(2);function v(e){var t=Object(n.useState)({}),c=Object(s.a)(t,2),j=c[0],r=c[1];Object(n.useEffect)((function(){o.a.get("http://127.0.0.1:8000/auth/users/me").then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log(e)}))}),[]);var i=!1;j.username&&(i=!0);return Object(l.jsx)("div",{children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)("meta",{charSet:"utf-8"}),Object(l.jsx)("meta",{name:"viewport",content:"width=device-width"}),Object(l.jsx)("div",{className:"navigation",children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/",children:"UseRoot"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/rules",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/",children:"\u0422\u0435\u043c\u044b"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/chat",children:"\u0427\u0430\u0442"})}),function(){if(i){var e=j.avatar;return console.log(e),Object(l.jsx)("img",{className:"log-in",src:e,children:Object(l.jsx)(p.b,{to:"/profile"})},j.id)}return Object(l.jsx)("li",{className:"log-in",children:Object(l.jsx)(p.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})},j.id)}(),Object(l.jsx)("li",{className:"search",children:Object(l.jsx)(p.b,{to:"/search",children:"\u041f\u043e\u0438\u0441\u043a"})})]})})}),Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{path:"/rules",children:Object(l.jsx)(S,{})}),Object(l.jsx)(m.a,{path:"/login",children:Object(l.jsx)(w,{})}),Object(l.jsx)(m.a,{path:"/search",children:Object(l.jsx)(y,{})}),Object(l.jsx)(m.a,{path:"/chat",children:Object(l.jsx)(N,{})}),Object(l.jsx)(m.a,{path:"/",children:Object(l.jsx)(g,{})})]})]})})}function g(){return Object(l.jsx)(b,{})}function S(){return Object(l.jsx)("h2",{children:"Rules"})}function w(){return Object(l.jsx)(f,{})}function y(){return Object(l.jsx)("h2",{children:"Search"})}function N(){return Object(l.jsx)("h2",{children:"Chat"})}var C=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(v,{})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,j=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),j(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(j.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),F()}},[[66,1,2]]]);
//# sourceMappingURL=main.970098bb.chunk.js.map