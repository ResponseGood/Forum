(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(25),r=n.n(s),i=(n(36),n(37),n(12)),j=n(9),l=n.n(j),o=n(0);function u(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){l.a.get("http://127.0.0.1:8000/api/get_all_posts/").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)("div",{children:n.map((function(e){return Object(o.jsx)("p",{className:"post",children:e.title},e.id)}))})}n.p;var h=n(26),d=n(27),b=n(31),O=n(30),x=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).mySubmitHandler=function(e){e.preventDefault(),l()({method:"post",url:"http://127.0.0.1:8000/auth/token/login/",headers:{},data:{username:c.state.username,password:c.state.password}}).then((function(e){var t=e.data;console.log(t.auth_token),console.log(e.headers),l.a.defaults.headers.common.Authorization="Token ".concat(t.auth_token),console.log(e.headers)})).catch((function(e){console.log(e)}))},c.usernameHandler=function(e){c.setState({username:e.target.value})},c.passwordHandler=function(e){c.setState({password:e.target.value})},c.state={username:"",password:""},c}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.mySubmitHandler,children:[Object(o.jsx)("label",{className:"title-lgn",children:"\u0412\u0445\u043e\u0434"}),Object(o.jsx)("input",{type:"text",onChange:this.usernameHandler,placeholder:"\u041b\u043e\u0433\u0438\u043d",className:"login-input"}),Object(o.jsx)("input",{type:"password",onChange:this.passwordHandler,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"password-input"}),Object(o.jsx)("label",{className:"acc-registration",children:"\u0423 \u043c\u0435\u043d\u044f \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"}),Object(o.jsx)("input",{type:"submit",className:"btn-login",value:"\u043e\u043a"})]})}}]),n}(a.a.Component),p=n(8),m=n(2);function f(e){var t=Object(c.useState)({}),n=Object(i.a)(t,2),a=n[0],s=n[1],r=!1;Object(c.useEffect)((function(){l.a.get("http://127.0.0.1:8000/auth/users/me/").then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}),[]),a.username&&(r=!0);return Object(o.jsx)("div",{children:Object(o.jsxs)(p.a,{children:[Object(o.jsx)("meta",{charSet:"utf-8"}),Object(o.jsx)("meta",{name:"viewport",content:"width=device-width"}),Object(o.jsx)("div",{className:"navigation",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/",children:"UseRoot"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/rules",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/",children:"\u0422\u0435\u043c\u044b"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/chat",children:"\u0427\u0430\u0442"})}),Object(o.jsx)("li",{children:r?a.avatar?Object(o.jsx)("img",{className:"avatar",src:a.avatar},a.id):Object(o.jsx)("img",{className:"avatar",src:"http://127.0.0.1:8000/media/C%3A/Users/cewim/Desktop/GitHub/Forum/backend/useroot/media/default.png"},a.id):Object(o.jsx)("li",{className:"log-in",children:Object(o.jsx)(p.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})},a.id)}),Object(o.jsx)("li",{className:"search",children:Object(o.jsx)(p.b,{to:"/search",children:"\u041f\u043e\u0438\u0441\u043a"})})]})})}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/rules",children:Object(o.jsx)(v,{})}),Object(o.jsx)(m.a,{path:"/login",children:Object(o.jsx)(w,{})}),Object(o.jsx)(m.a,{path:"/search",children:Object(o.jsx)(N,{})}),Object(o.jsx)(m.a,{path:"/chat",children:Object(o.jsx)(S,{})}),Object(o.jsx)(m.a,{path:"/",children:Object(o.jsx)(g,{})})]})]})})}function g(){return Object(o.jsx)(u,{})}function v(){return Object(o.jsx)("h2",{children:"Rules"})}function w(){return Object(o.jsx)(x,{})}function N(){return Object(o.jsx)("h2",{children:"Search"})}function S(){return Object(o.jsx)("h2",{children:"Chat"})}var k=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(f,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.6289df37.chunk.js.map