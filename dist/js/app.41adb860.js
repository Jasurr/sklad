(function(e){function t(t){for(var o,a,s=t[0],l=t[1],u=t[2],m=0,f=[];m<s.length;m++)a=s[m],n[a]&&f.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={app:0},i=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02c5":function(e,t,r){"use strict";var o=r("0c52"),n=r.n(o);n.a},"0c52":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-container",[r("el-header",[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"}},[e._l(e.links,function(t){return r("el-menu-item",{key:t.title,attrs:{index:t.title}},[r("router-link",{attrs:{to:t.url,tag:"span"}},[e._v(e._s(t.title)+"\n          ")])],1)}),e.isUserLogined?r("el-menu-item",{attrs:{index:"2"},on:{click:e.logout}},[e._v("\n          Logout\n        ")]):e._e()],2)],1),e.error?r("el-alert",{staticClass:"el-col-9 el-col-offset-8",attrs:{title:e.error,type:"error","show-icon":""}}):e._e()],1),r("router-view")],1)},i=[],a={data:function(){return{activeIndex:"1"}},computed:{links:function(){return this.isUserLogined?[{title:"List of goods",url:"/"}]:[{title:"Login",url:"/login"},{title:"Registration",url:"/registration"}]},isUserLogined:function(){return this.$store.getters.isUserLogined},error:function(){return this.$store.getters.error}},methods:{logout:function(){var e=this;this.$confirm("Are you sure you want to exit. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(function(){e.$store.dispatch("logout"),e.$router.push("/login"),e.$message({type:"success",message:"Exited"})}).catch(function(){e.$message({type:"info",message:"You are here"})})}},created:function(){this.$store.dispatch("clearError")}},s=a,l=r("2877"),u=Object(l["a"])(s,n,i,!1,null,null,null),c=u.exports,m=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-main",[r("el-dialog",{attrs:{width:"40%",title:e.title+" good",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},["Edit"===e.title?r("div",[r("set-goods",{attrs:{form:e.formData},on:{visible:function(t){e.visible=!1}}})],1):r("div",[r("create-good",{on:{visible:function(t){e.visible=!1}}})],1)]),r("el-card",{staticClass:"el-col-sm-offset-2 el-col-20"},[r("el-table",{attrs:{"max-height":"500",data:e.getData}},[r("el-table-column",{attrs:{label:"Date",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("i",{staticClass:"el-icon-time"}),r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$moment(t.row.date).format("DD.MM.YYYY")))])]}}])}),r("el-table-column",{attrs:{label:"Name",prop:"name"}}),r("el-table-column",{attrs:{label:"Price",prop:"price"}}),r("el-table-column",{attrs:{label:"Quantity",prop:"quantity"}}),r("el-table-column",{attrs:{label:"Amount",prop:"amount"}}),r("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",icon:"el-icon-edit",circle:"",type:"primary"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}}),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}})]}}])},[r("template",{slot:"header"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini",circle:""},on:{click:function(t){return e.createGood()}}})],1)],2)],1)],1)],1)],1)},d=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-main",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",rules:e.rules}},[r("el-form-item",{attrs:{label:"Name of good:",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"Price:",prop:"price"}},[r("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"Quantity:",prop:"quantity"}},[r("el-input-number",{attrs:{min:1,max:100},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1),r("el-form-item",{attrs:{label:"Shelf life"}},[r("el-date-picker",{attrs:{align:"right",placeholder:"Pick a day"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),r("el-form-item",{attrs:{label:"Amount:",prop:"amount"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),r("el-form-item",[r("el-button",{staticClass:"el-col-lg-push-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("Save\n        ")])],1)],1)],1)],1)},g=[],h={props:["form"],data:function(){return{rules:{name:[{required:!0,message:"Name is required"}],price:[{required:!0,message:"Price is required"}],quantity:[{required:!0,message:"Quantity is required"},{type:"number",message:"Quantity must be a number"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("Oops, Fill all required fields."),!1;t.$store.dispatch("update",t.form),t.$emit("visible")})}},updated:function(){this.$nextTick(function(){this.form.amount=this.form.quantity*this.form.price})}},b=h,v=Object(l["a"])(b,p,g,!1,null,"69e653b6",null),y=v.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-main",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",rules:e.rules}},[r("el-form-item",{attrs:{label:"Name of good:",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"Price:",prop:"price"}},[r("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"Quantity:",prop:"quantity"}},[r("el-input-number",{attrs:{min:1,max:100},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1),r("el-form-item",{attrs:{label:"Date"}},[r("el-date-picker",{attrs:{align:"right",placeholder:"Pick a day"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),r("el-form-item",{attrs:{label:"Amount:",prop:"amount"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),r("el-form-item",[r("el-button",{staticClass:"el-col-lg-push-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("Save\n        ")])],1)],1)],1)],1)},w=[],x={props:["formData"],data:function(){return{form:{name:"",price:0,quantity:0,date:"",amount:0},valid:!1,rules:{name:[{required:!0,message:"Name is required"}],price:[{required:!0,message:"Price is required"}],quantity:[{required:!0,message:"Quantity is required"},{type:"number",message:"Quantity must be a number"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(r){if(!r)return t.$message.error("Oops, Fill all required fields."),!1;t.$store.dispatch("insGood",t.form),t.$emit("visible"),t.$refs[e].resetFields()})}},updated:function(){this.$nextTick(function(){this.form.amount=this.form.quantity*this.form.price})}},k=x,E=Object(l["a"])(k,$,w,!1,null,"3abca1fd",null),_=E.exports,q={components:{SetGoods:y,CreateGood:_},data:function(){return{search:"",title:"Create",visible:!1,formData:{}}},computed:{getData:function(){return this.$store.getters.getData}},methods:{createGood:function(){this.formData="",this.title="Create",this.visible=!0},handleEdit:function(e,t){this.title="Edit",this.visible=!0,this.formData=t},handleDelete:function(e,t){var r=this;this.$confirm("This will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(function(){r.$store.dispatch("removeGood",t),r.$message({type:"success",message:"Delete completed"})}).catch(function(){r.$message({type:"info",message:"Delete canceled"})})}}},P=q,C=(r("c01d"),Object(l["a"])(P,f,d,!1,null,"58d117ca",null)),O=C.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-main",{staticClass:"el-col-offset-8 el-col-8"},[r("el-card",{staticClass:"el-col-12",attrs:{justify:"center"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("Login page")])]),r("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:e.form,"label-width":"120px",rules:e.formRules}},[r("el-form-item",{attrs:{prop:"email",label:"Email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",[r("el-button",{staticClass:"el-col-lg-push-16",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dynamicValidateForm")}}},[e._v("Submit\n          ")])],1)],1)],1)],1)],1)},j=[],D={name:"Login",data:function(){return{form:{email:"",password:""},formRules:{email:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],password:[{required:!0,message:"Enter password"}]}}},computed:{error:function(){return this.$store.getters.error}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("Error, Fill all field"),!1;t.$store.dispatch("login",t.form).then(function(){t.$router.push("/"),t.$store.dispatch("clearError")}).catch(function(e){return t.$message.error("Error, "+e)})})}},created:function(){this.$route.query["loginError"]&&this.$message.error("Please log in to access this page.")}},F=D,U=(r("02c5"),Object(l["a"])(F,L,j,!1,null,"40041246",null)),S=U.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-main",{staticClass:"el-col-offset-8 el-col-8"},[r("el-card",{staticClass:"el-col-12",attrs:{justify:"center"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("Login page")])]),r("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:e.form,"label-width":"120px",rules:e.formRules}},[r("el-form-item",{attrs:{prop:"email",label:"Email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{label:"Confirm",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.checkPass,callback:function(t){e.$set(e.form,"checkPass",t)},expression:"form.checkPass"}})],1),r("el-form-item",[r("el-button",{staticClass:"el-col-lg-push-16",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dynamicValidateForm")}}},[e._v("Submit")])],1)],1)],1)],1)],1)},T=[],M={name:"Login",data:function(){var e=this,t=function(t,r,o){""===r?o(new Error("Please input the password again")):r!==e.form.password?o(new Error("Two inputs don't match!")):o()};return{form:{email:"",password:"",checkPass:""},formRules:{email:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],password:[{required:!0,message:"Enter password"}],checkPass:[{validator:t,trigger:"blur"}]}}},computed:{error:function(){return this.$store.getters.error?this.$message.error(this.$store.getters.error):null}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("Error, Fill all field"),!1;t.$store.dispatch("registration",t.form).then(function(){t.$router.push("/"),t.$store.dispatch("clearError")}).catch(function(e){return t.$message.error("Error, "+e)})})}}},Q=M,N=(r("9a76"),Object(l["a"])(Q,G,T,!1,null,"1a064b00",null)),R=N.exports,Y=r("2f62"),z=r("cebc"),A=r("75fc"),B={state:{goods:[]},mutations:{update:function(e,t){e.goods=[].concat(Object(A["a"])(e.goods.filter(function(e){return e.id!==t.id})),[t])},insGood:function(e,t){e.goods.push(t)},removeGood:function(e,t){var r=e.goods.filter(function(e){return e.id!==t.id});e.goods=r}},actions:{insGood:function(e,t){var r=e.commit,o=e.getters,n=o.currentUser,i=Math.random();r("insGood",Object(z["a"])({},t,{id:i,employee:n}))},update:function(e,t){var r=e.commit;r("update",t)},removeGood:function(e,t){var r=e.commit;r("removeGood",t)}},getters:{getData:function(e,t){return e.goods.filter(function(e){return e.employee===t.currentUser})},visible:function(e){return e.visible},loading:function(e){return e.loading}}},V=r("bfa9"),W=(r("ac6a"),{state:{user:[{username:"ad@mail.ru",password:"password"}],currentUser:"",message:"",isUser:!1},mutations:{error:function(e,t){e.error=t},login:function(e,t){e.user=t},registration:function(e,t){e.user.push(t)},clearError:function(e){e.error=null},userLogined:function(e,t){e.isUser=t},currentUser:function(e,t){e.currentUser=t}},actions:{login:function(e,t){var r=e.commit,o=e.getters;r("clearError"),o.userLogin.forEach(function(e){e.username===t.username&&e.password===t.password?(r("userLogined",!0),r("currentUser",t.username)):r("error","Wrong email or password")})},logout:function(e){var t=e.commit;t("userLogined",!1)},clearError:function(e){var t=e.commit;t("clearError")},registration:function(e,t){var r=e.commit,o=e.getters;r("clearError"),o.userLogin.forEach(function(e){e.username!==t.username?(r("registration",t),r("userLogined",!0)):r("error","This email exists, Please enter other email")})}},getters:{userLogin:function(e){return e.user},error:function(e){return e.error},isUserLogined:function(e){return e.isUser},currentUser:function(e){return e.currentUser}}});o["default"].use(Y["a"]);var I=new Y["a"].Store({modules:[B,W],plugins:[(new V["a"]).plugin]}),J=function(e,t,r){I.getters.isUserLogined?r():r("/login?loginError=true")};o["default"].use(m["a"]);var K=new m["a"]({routes:[{path:"/",name:"",component:O,beforeEnter:J},{path:"/login",name:"login",component:S},{path:"/registration",name:"registration",component:R}],mode:"history"}),H=r("5c96"),X=r.n(H),Z=(r("0fae"),r("b2d6")),ee=r.n(Z);o["default"].config.productionTip=!1,o["default"].use(r("2ead")),o["default"].use(X.a,{locale:ee.a}),new o["default"]({router:K,store:I,render:function(e){return e(c)}}).$mount("#app")},"6f2a":function(e,t,r){},8626:function(e,t,r){},"9a76":function(e,t,r){"use strict";var o=r("8626"),n=r.n(o);n.a},c01d:function(e,t,r){"use strict";var o=r("6f2a"),n=r.n(o);n.a}});
//# sourceMappingURL=app.41adb860.js.map