(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(25),i=c.n(s),r=(c(36),c(37),c(12)),l=c(10),j=c.n(l),o=c(0);function b(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){j.a.get("http://127.0.0.1:8000/api/get_all_posts/").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsx)("p",{className:"post",children:e.title},e.id)}))})}c.p;var d=c(26),h=c(27),u=c(31),O=c(30),x=function(e){Object(u.a)(c,e);var t=Object(O.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).mySubmitHandler=function(e){e.preventDefault(),j()({method:"post",url:"http://127.0.0.1:8000/api/login/",headers:{},data:{email:n.state.email,password:n.state.password}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.emailHandler=function(e){n.setState({email:e.target.value})},n.passwordHandler=function(e){n.setState({password:e.target.value})},n.state={email:"",password:""},n}return Object(h.a)(c,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.mySubmitHandler,className:"container-column",children:[Object(o.jsx)("label",{className:"title-lgn",children:"\u0412\u0445\u043e\u0434"}),Object(o.jsx)("input",{type:"text",onChange:this.emailHandler,placeholder:"\u041b\u043e\u0433\u0438\u043d",className:"login-input",required:!0}),Object(o.jsx)("input",{type:"password",onChange:this.passwordHandler,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"password-input",required:!0}),Object(o.jsx)("label",{className:"label-registration",children:"\u0423 \u043c\u0435\u043d\u044f \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"}),Object(o.jsx)("input",{type:"submit",className:"btn-login",value:"\u043e\u043a"})]})}}]),c}(a.a.Component),p=c(8),m=c(2);function f(e){var t=Object(n.useState)({}),c=Object(r.a)(t,2),a=c[0],s=c[1],i=!1;Object(n.useEffect)((function(){j.a.get("http://127.0.0.1:8000/api/me/").then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}),[]),a.username&&(i=!0);return Object(o.jsx)("div",{children:Object(o.jsxs)(p.a,{children:[Object(o.jsx)("meta",{charSet:"utf-8"}),Object(o.jsx)("meta",{name:"viewport",content:"width=device-width"}),Object(o.jsx)("div",{className:"navigation",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/",children:"UseRoot"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/rules",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/",children:"\u0422\u0435\u043c\u044b"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/chat",children:"\u0427\u0430\u0442"})}),Object(o.jsx)("li",{children:i?a.avatar?Object(o.jsx)("img",{className:"avatar",src:a.avatar},a.id):Object(o.jsx)("img",{className:"avatar",src:"http://127.0.0.1:8000/media/C%3A/Users/cewim/Desktop/GitHub/Forum/backend/useroot/media/default.png"},a.id):Object(o.jsx)("li",{className:"log-in",children:Object(o.jsx)(p.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})},a.id)}),Object(o.jsx)("li",{className:"search",children:Object(o.jsx)(p.b,{to:"/search",children:"\u041f\u043e\u0438\u0441\u043a"})})]})})}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/rules",children:Object(o.jsx)(v,{})}),Object(o.jsx)(m.a,{path:"/login",children:Object(o.jsx)(w,{})}),Object(o.jsx)(m.a,{path:"/search",children:Object(o.jsx)(N,{})}),Object(o.jsx)(m.a,{path:"/chat",children:Object(o.jsx)(S,{})}),Object(o.jsx)(m.a,{path:"/",children:Object(o.jsx)(g,{})})]})]})})}function g(){return Object(o.jsx)(b,{})}function v(){return Object(o.jsx)("h2",{children:"Rules"})}function w(){return Object(o.jsx)(x,{})}function N(){return Object(o.jsx)("h2",{children:"Search"})}function S(){return Object(o.jsx)("h2",{children:"Chat"})}var C=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(f,{})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),y()}},[[66,1,2]]]);
//# sourceMappingURL=main.d8b70de4.chunk.js.map