(function(t){function e(e){for(var r,a,u=e[0],l=e[1],s=e[2],b=0,d=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);i&&i(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==c[l]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var i=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0da9":function(t,e,n){"use strict";n("4401")},"32b0":function(t,e,n){"use strict";n("bfd4")},4401:function(t,e,n){},"4f07":function(t,e,n){"use strict";n("7231")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container-fluid"},o={class:"row justify-content-center"},a=Object(r["g"])("div",{class:"col=md-10 col-lg-7"},null,-1);function u(t,e,n,u,l,s){var i=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["g"])("div",c,[Object(r["g"])("div",o,[a,Object(r["i"])(b)])])],64)}var l=function(t){return Object(r["u"])("data-v-6096a452"),t=t(),Object(r["s"])(),t},s={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},b=Object(r["h"])("Rockwell Reviews"),d=l((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),O={class:"collapse navbar-collapse",id:"navbarNav"},j={class:"navbar-nav ms-auto"},p={class:"nav-item"},g=Object(r["h"])("Products"),f={key:0,class:"nav-item"},m=Object(r["h"])("My Account"),h={key:1,class:"nav-item"},v=l((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),y={key:2,class:"nav-item"},w=l((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"}," Signup ",-1)})),k={key:3,class:"nav-item"};function P(t,e,n,c,o,a){var u=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",s,[Object(r["g"])("div",i,[Object(r["i"])(u,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),d,Object(r["g"])("div",O,[Object(r["g"])("ul",j,[Object(r["g"])("li",p,[Object(r["i"])(u,{class:"nav-link active","aria-current":"page",to:"/products"},{default:Object(r["E"])((function(){return[g]})),_:1})]),a.auth?(Object(r["r"])(),Object(r["f"])("li",f,[Object(r["i"])(u,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(r["E"])((function(){return[m]})),_:1})])):Object(r["e"])("",!0),a.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",h,[Object(r["i"])(u,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[v]})),_:1})])),a.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",y,[Object(r["i"])(u,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[w]})),_:1})])),a.auth?(Object(r["r"])(),Object(r["f"])("li",k,[Object(r["g"])("button",{class:"btn btn-warning",onClick:e[0]||(e[0]=function(){return a.onLogout&&a.onLogout.apply(a,arguments)})},"Logout")])):Object(r["e"])("",!0)])])])])}var A={computed:{auth:function(){return this.$store.state.token}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},E=(n("0da9"),n("6b0d")),x=n.n(E);const S=x()(A,[["render",P],["__scopeId","data-v-6096a452"]]);var I=S,$={name:"App",components:{"my-header":I},created:function(){this.$store.dispatch("getProducts")}};n("4f07");const C=x()($,[["render",u]]);var F=C,U=n("bc3a"),_=n.n(U),D=n("6c02"),N=Object(r["g"])("h1",null,"Home",-1),L=[N];function R(t,e,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,L)}var M={};const q=x()(M,[["render",R]]);var B=q,V=Object(r["g"])("h1",null,"Login",-1),T={key:0,class:"alert alert-susess"},z={class:"mb-3"},G=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),J={class:"mb-3"},H=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),K=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},W={key:1,class:"form-text text-danger"};function X(t,e,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,[V,this.$route.query.signupsucces?(Object(r["r"])(),Object(r["f"])("div",T," Thanks for signing up, please log in now. ")):Object(r["e"])("",!0),Object(r["g"])("form",{onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["g"])("div",z,[G,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.email=t})},null,512),[[r["C"],o.email]])]),Object(r["g"])("div",J,[H,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.password=t})},null,512),[[r["C"],o.password]])]),K,o.credentialsError?(Object(r["r"])(),Object(r["f"])("p",Q," Invalid credentials ")):Object(r["e"])("",!0),o.loginError?(Object(r["r"])(),Object(r["f"])("p",W," Could not log you in, please try again later ")):Object(r["e"])("",!0)],32)])}n("ac1f"),n("5319");var Y={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var t=this,e={email:this.email,password:this.password};_.a.post("/customers/login",e).then((function(e){t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),t.$router.replace("/account")})).catch((function(e){console.log("error in /customers/login",e),401==e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const Z=x()(Y,[["render",X]]);var tt=Z,et={class:"card"},nt={class:"card-body"},rt={class:"text-primary"},ct=Object(r["g"])("br",null,null,-1),ot=Object(r["h"])(" Product Price: "),at=Object(r["g"])("br",null,null,-1),ut=Object(r["h"])(" Product ID: "),lt=Object(r["g"])("br",null,null,-1),st=Object(r["h"])(" Category ID: "),it=Object(r["g"])("br",null,null,-1),bt=Object(r["h"])(" Category Name: "),dt=Object(r["g"])("br",null,null,-1),Ot=Object(r["g"])("br",null,null,-1),jt=Object(r["g"])("button",{class:"btn btn-success"},"Add a Review",-1),pt=Object(r["g"])("button",{class:"btn btn-outline-success"}," Sign In to Add a Review ",-1),gt=Object(r["g"])("br",null,null,-1),ft=Object(r["g"])("br",null,null,-1);function mt(t,e,n,c,o,a){var u=Object(r["y"])("router-link"),l=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",et,[Object(r["g"])("div",nt,[Object(r["g"])("h2",rt,Object(r["A"])(a.product.productName),1),ct,Object(r["g"])("p",null,[ot,at,Object(r["g"])("strong",null,Object(r["A"])(a.formattedPrice),1)]),Object(r["g"])("p",null,[ut,lt,Object(r["g"])("strong",null,Object(r["A"])(a.product.ProductID),1)]),Object(r["g"])("p",null,[st,it,Object(r["g"])("strong",null,Object(r["A"])(a.product.CategoryID),1)]),Object(r["g"])("p",null,[bt,dt,Object(r["g"])("strong",null,Object(r["A"])(a.product.CategoryName),1)])])]),Ot,a.auth?(Object(r["r"])(),Object(r["d"])(u,{key:0,to:"/products/".concat(this.$route.params.pk,"/review")},{default:Object(r["E"])((function(){return[jt]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(u,{key:1,to:"/login"},{default:Object(r["E"])((function(){return[pt]})),_:1})),gt,ft,Object(r["i"])(l)])}n("7db0"),n("d3b7");var ht={computed:{product:function(){var t=this,e=this.$store.state.products,n=e.find((function(e){return e.ProductID==t.$route.params.pk}));return n},formattedPrice:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(this.product.productPrice)},auth:function(){return this.$store.state.token}}};const vt=x()(ht,[["render",mt]]);var yt=vt,wt=Object(r["g"])("h1",null,"Products",-1),kt=Object(r["g"])("hr",null,null,-1),Pt={class:"table"},At=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Product Name"),Object(r["g"])("th",null,"Product Price"),Object(r["g"])("th",null,"Category Name"),Object(r["g"])("th")])],-1),Et=Object(r["g"])("button",{class:"btn btn-primary"},"Details",-1),xt=Object(r["g"])("tbody",null,null,-1);function St(t,e,n,c,o,a){var u=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[wt,kt,Object(r["g"])("table",Pt,[At,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.theProducts,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.ProductID},[Object(r["g"])("th",null,Object(r["A"])(t.productName),1),Object(r["g"])("th",null,Object(r["A"])(t.productPrice),1),Object(r["g"])("th",null,Object(r["A"])(t.CategoryName),1),Object(r["g"])("th",null,[Object(r["i"])(u,{to:"/products/".concat(t.ProductID)},{default:Object(r["E"])((function(){return[Et]})),_:2},1032,["to"])])])})),128))]),xt])])}var It={computed:{theProducts:function(){return this.$store.state.products}}};const $t=x()(It,[["render",St]]);var Ct=$t,Ft=Object(r["g"])("h1",null,"Not Found",-1),Ut=Object(r["g"])("h4",null,"Sorry, this page can't be found.",-1),_t=[Ft,Ut];function Dt(t,e,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,_t)}var Nt={};const Lt=x()(Nt,[["render",Dt]]);var Rt=Lt,Mt={class:"row justify-content-center"},qt={class:"col-lg-10"},Bt={class:"card"},Vt={class:"card-body"},Tt=Object(r["g"])("h4",null,"Place an Order",-1),zt={class:"mb-3"},Gt=Object(r["g"])("label",{for:"summary-input",class:"form-label"},"Review",-1),Jt=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"}," Submit Review",-1),Ht={key:0,class:"form-text text-danger"};function Kt(t,e,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",Mt,[Object(r["g"])("div",qt,[Object(r["g"])("div",Bt,[Object(r["g"])("div",Vt,[Tt,Object(r["g"])("form",{id:"review-form",onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return a.submitReview&&a.submitReview.apply(a,arguments)}),["prevent"]))},[Object(r["g"])("div",zt,[Gt,Object(r["F"])(Object(r["g"])("input",{type:"text",row:"3",class:"form-control",id:"summary-input",required:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.payment=t})},null,512),[[r["C"],o.payment]])]),Jt,Object(r["g"])("button",{onClick:e[1]||(e[1]=function(){return a.cancelReview&&a.cancelReview.apply(a,arguments)}),type:"clear",class:"btn btn-outline-danger"}," Cancel "),o.errorMessage?(Object(r["r"])(),Object(r["f"])("p",Ht,Object(r["A"])(o.errorMessage),1)):Object(r["e"])("",!0)],32)])])])])])}var Qt={data:function(){return{payment:"",errorMessage:null}},methods:{submitReview:function(){var t=this,e={payment:this.payment,productID:this.$route.params.pk};_.a.post("/orders",e,{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(){t.$router.replace("/account")})).catch((function(){t.errorMessage="Unable to create a review, please try again later"}))},cancelReview:function(){this.$router.go(-1)}}};n("32b0");const Wt=x()(Qt,[["render",Kt]]);var Xt=Wt,Yt=Object(r["g"])("h1",null,"Signup",-1),Zt={class:"mb-3"},te=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),ee={class:"mb-3"},ne=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),re={class:"mb-3"},ce=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),oe={key:0,class:"text-danger"},ae={class:"mb-3"},ue=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),le=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),se={id:"error-signup",class:"text-danger"};function ie(t,e,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,[Yt,Object(r["g"])("form",{onSubmit:e[4]||(e[4]=Object(r["G"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["g"])("div",Zt,[te,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.nameFirst=t})},null,512),[[r["C"],o.nameFirst]])]),Object(r["g"])("div",ee,[ne,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.nameLast=t})},null,512),[[r["C"],o.nameLast]])]),Object(r["g"])("div",re,[ce,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.email=t})},null,512),[[r["C"],o.email]]),o.dupEmail?(Object(r["r"])(),Object(r["f"])("small",oe,"Please choose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",ae,[ue,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.password=t})},null,512),[[r["C"],o.password]])]),le,Object(r["g"])("p",se,Object(r["A"])(o.errorMessage),1)],32)])}var be={data:function(){return{nameFirst:"",nameLast:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={nameFirst:this.nameFirst,nameLast:this.nameLast,email:this.email,password:this.password};_.a.post("/customers",e).then((function(e){console.log("the response",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="Cannot sign you up, please try again later"}))}}};const de=x()(be,[["render",ie]]);var Oe=de,je=Object(r["g"])("h1",null,"Account",-1),pe=Object(r["g"])("hr",null,null,-1),ge={key:0,class:"text-danger"},fe={key:1,class:"table"},me=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Product"),Object(r["g"])("th",null,"Payment"),Object(r["g"])("th",null,"ID")],-1);function he(t,e,n,c,o,a){var u=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[je,pe,Object(r["g"])("h3",null,Object(r["A"])(a.firstName)+"'s Reviews",1),o.accountError?(Object(r["r"])(),Object(r["f"])("p",ge," Cannot get your account information, please try again later. ")):Object(r["e"])("",!0),o.reviewsByUser?(Object(r["r"])(),Object(r["f"])("table",fe,[me,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.reviewsByUser,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.OrderID},[Object(r["g"])("th",null,[Object(r["i"])(u,{to:"/orders/".concat(t.ProductID)},{default:Object(r["E"])((function(){return[Object(r["h"])(Object(r["A"])(t.productName),1)]})),_:2},1032,["to"])]),Object(r["g"])("th",null,Object(r["A"])(t.Payment),1),Object(r["g"])("th",null,Object(r["A"])(t.ProductID),1)])})),128))])])):Object(r["e"])("",!0)])}var ve={data:function(){return{reviewsByUser:null,accountError:!1}},computed:{firstName:function(){return console.log("here is the store so far",this.$store.state),this.$store.state.user.NameFirst}},created:function(){var t=this;_.a.get("/orders/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){console.log("here is the response",e),t.reviewsByUser=e.data})).catch((function(){t.accountError=!0}))}};const ye=x()(ve,[["render",he]]);var we=ye,ke=n("5502"),Pe=Object(ke["a"])({state:{token:null,user:null,products:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storeProducts:function(t,e){t.products=e},clearAuthData:function(t){t.token=null,t.user=null}},actions:{getProducts:function(t){var e=t.commit;_.a.get("/products").then((function(t){console.log("response in /orders",t),e("storeProducts",t.data)}))},logout:function(t){var e=t.commit,n=t.state;_.a.post("/customers/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){e("clearAuthData"),Ee.replace("/")})).catch((function(){console.log("error in logging out")}))}}}),Ae=Object(D["a"])({history:Object(D["b"])(),routes:[{path:"/",component:B},{path:"/account",component:we,beforeEnter:function(t,e,n){Pe.state.token?n():n("/login")}},{path:"/login",component:tt},{path:"/products",component:Ct},{path:"/products/:pk",component:yt,children:[{path:"review",component:Xt}]},{path:"/signup",component:Oe},{path:"/:invalidroute(.*)",component:Rt}]}),Ee=Ae;_.a.defaults.baseURL="https://cis410-store-api.azurewebsites.net";var xe=Object(r["c"])(F);xe.use(Ee),xe.use(Pe),xe.mount("#app")},7231:function(t,e,n){},bfd4:function(t,e,n){}});
//# sourceMappingURL=app.9ef9e30a.js.map