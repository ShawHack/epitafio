(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{xz6d:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),a=u("gIcY"),s=u("Ip0R"),b=u("mrSG"),c=u("7dP1"),g=u("mtDR"),d=u("mK0T"),h=function(){function l(l,n,u,t,e){this.authService=l,this.fb=n,this.overlayService=u,this.navCrtl=t,this.route=e,this.authProviders=g.a,this.configs={isSignIn:!0,action:"login",actionChange:"Criar conta"},this.nameControl=new a.c("",[a.k.required,a.k.minLength(3)])}return l.prototype.ngOnInit=function(){this.createForm()},l.prototype.createForm=function(){this.authForm=this.fb.group({email:["",[a.k.required,a.k.email]],password:["",[a.k.required,a.k.minLength(6)]]})},Object.defineProperty(l.prototype,"email",{get:function(){return this.authForm.get("email")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"password",{get:function(){return this.authForm.get("password")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"name",{get:function(){return this.authForm.get("name")},enumerable:!0,configurable:!0}),l.prototype.changeAuthAction=function(){this.configs.isSignIn=!this.configs.isSignIn;var l=this.configs.isSignIn;this.configs.action=l?"Login":"Criar conta",this.configs.actionChange=l?"Criar conta":"ja possuo uma conta",l?this.authForm.removeControl("name"):this.authForm.addControl("name",this.nameControl)},l.prototype.onSubmit=function(l){return b.b(this,void 0,void 0,(function(){var n,u;return b.e(this,(function(t){switch(t.label){case 0:return[4,this.overlayService.loading()];case 1:n=t.sent(),t.label=2;case 2:return t.trys.push([2,4,6,7]),[4,this.authService.authenticate({isSignIn:this.configs.isSignIn,user:this.authForm.value,provider:l})];case 3:return t.sent(),this.navCrtl.navigateForward(this.route.snapshot.queryParamMap.get("redirect")||"/tasks"),[3,7];case 4:return u=t.sent(),console.log("Auth error ",u),[4,this.overlayService.toast({message:u.message})];case 5:return t.sent(),[3,7];case 6:return n.dismiss(),[7];case 7:return[2]}}))}))},l}(),m=u("ZYCi"),p=t.rb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,i.U,i.u)),t.sb(1,49152,null,0,r.Z,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Jb(-1,0,["Campo obrigat\xf3rio"]))],(function(l,n){l(n,1,0,"danger")}),null)}function C(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,i.U,i.u)),t.sb(1,49152,null,0,r.Z,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Jb(-1,0,["Min 3 caracteres"]))],(function(l,n){l(n,1,0,"danger")}),null)}function k(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,15,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,14,"ion-item",[],null,null,null,i.O,i.l)),t.sb(2,49152,null,0,r.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(3,0,null,0,1,"ion-icon",[["color","primary"],["name","person"],["slot","start"]],null,null,null,i.J,i.j)),t.sb(4,49152,null,0,r.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(5,0,null,0,6,"ion-input",[["formControlName","name"],["placeholder","Nome"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Eb(l,7)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Eb(l,7)._handleInputEvent(u.target)&&e),e}),i.K,i.k)),t.sb(6,49152,null,0,r.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.sb(7,16384,null,0,r.Ob,[t.k],null,null),t.Gb(1024,null,a.f,(function(l){return[l]}),[r.Ob]),t.sb(9,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.n]],{name:[0,"name"]},null),t.Gb(2048,null,a.g,null,[a.d]),t.sb(11,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),t.ib(16777216,null,0,1,null,f)),t.sb(13,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,C)),t.sb(15,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary","person"),l(n,6,0,"Nome","text"),l(n,9,0,"name"),l(n,13,0,u.name.dirty&&u.name.hasError("required")),l(n,15,0,u.name.dirty&&u.name.hasError("minlength"))}),(function(l,n){l(n,5,0,t.Eb(n,11).ngClassUntouched,t.Eb(n,11).ngClassTouched,t.Eb(n,11).ngClassPristine,t.Eb(n,11).ngClassDirty,t.Eb(n,11).ngClassValid,t.Eb(n,11).ngClassInvalid,t.Eb(n,11).ngClassPending)}))}function v(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,i.U,i.u)),t.sb(1,49152,null,0,r.Z,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Jb(-1,0,["Campo obrigat\xf3rio"]))],(function(l,n){l(n,1,0,"danger")}),null)}function E(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,i.U,i.u)),t.sb(1,49152,null,0,r.Z,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Jb(-1,0,["Email inv\xe1lido"]))],(function(l,n){l(n,1,0,"danger")}),null)}function y(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,i.U,i.u)),t.sb(1,49152,null,0,r.Z,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Jb(-1,0,["Campo obrigat\xf3rio"]))],(function(l,n){l(n,1,0,"danger")}),null)}function I(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,i.U,i.u)),t.sb(1,49152,null,0,r.Z,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Jb(-1,0,["Min 6 caracteres"]))],(function(l,n){l(n,1,0,"danger")}),null)}function z(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,60,"ion-content",[["padding",""]],null,null,null,i.E,i.e)),t.sb(1,49152,null,0,r.v,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(3,0,null,0,57,"ion-grid",[],null,null,null,i.H,i.h)),t.sb(4,49152,null,0,r.B,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,55,"ion-row",[["justify-content-center",""]],null,null,null,i.V,i.v)),t.sb(6,49152,null,0,r.kb,[t.h,t.k,t.z],null,null),t.sb(7,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(8,0,null,0,52,"ion-col",[["size-lg","3"],["size-md","4"],["size-sm","8"],["size-xl","3"]],null,null,null,i.D,i.d)),t.sb(9,49152,null,0,r.u,[t.h,t.k,t.z],null,null),(l()(),t.tb(10,0,null,0,2,"h1",[["text-center",""]],null,null,null,null,null)),t.sb(11,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(12,0,null,null,0,"img",[["class","icon-7em"],["src","/assets/icon/morte.png"]],null,null,null,null,null)),(l()(),t.tb(13,0,null,0,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t.Eb(l,15).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Eb(l,15).onReset()&&e),"submit"===n&&(e=!1!==o.onSubmit(o.authProviders.Email)&&e),e}),null,null)),t.sb(14,16384,null,0,a.o,[],null,null),t.sb(15,540672,null,0,a.e,[[8,null],[8,null]],{form:[0,"form"]},null),t.Gb(2048,null,a.a,null,[a.e]),t.sb(17,16384,null,0,a.i,[[4,a.a]],null,null),(l()(),t.ib(16777216,null,null,1,null,k)),t.sb(19,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(20,0,null,null,14,"ion-item",[],null,null,null,i.O,i.l)),t.sb(21,49152,null,0,r.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(22,0,null,0,1,"ion-icon",[["color","primary"],["name","mail"],["slot","start"]],null,null,null,i.J,i.j)),t.sb(23,49152,null,0,r.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(24,0,null,0,6,"ion-input",[["autofocus","true"],["formControlName","email"],["inputmode","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Eb(l,26)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Eb(l,26)._handleInputEvent(u.target)&&e),e}),i.K,i.k)),t.sb(25,49152,null,0,r.H,[t.h,t.k,t.z],{autofocus:[0,"autofocus"],inputmode:[1,"inputmode"],placeholder:[2,"placeholder"],type:[3,"type"]},null),t.sb(26,16384,null,0,r.Ob,[t.k],null,null),t.Gb(1024,null,a.f,(function(l){return[l]}),[r.Ob]),t.sb(28,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.n]],{name:[0,"name"]},null),t.Gb(2048,null,a.g,null,[a.d]),t.sb(30,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),t.ib(16777216,null,0,1,null,v)),t.sb(32,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,E)),t.sb(34,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(35,0,null,null,14,"ion-item",[],null,null,null,i.O,i.l)),t.sb(36,49152,null,0,r.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(37,0,null,0,1,"ion-icon",[["color","primary"],["name","lock"],["slot","start"]],null,null,null,i.J,i.j)),t.sb(38,49152,null,0,r.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(39,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Senha"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Eb(l,41)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Eb(l,41)._handleInputEvent(u.target)&&e),e}),i.K,i.k)),t.sb(40,49152,null,0,r.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.sb(41,16384,null,0,r.Ob,[t.k],null,null),t.Gb(1024,null,a.f,(function(l){return[l]}),[r.Ob]),t.sb(43,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.n]],{name:[0,"name"]},null),t.Gb(2048,null,a.g,null,[a.d]),t.sb(45,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),t.ib(16777216,null,0,1,null,y)),t.sb(47,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,I)),t.sb(49,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(50,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,null,null,i.B,i.b)),t.sb(51,49152,null,0,r.l,[t.h,t.k,t.z],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),t.Jb(52,0,[" "," "])),(l()(),t.tb(53,0,null,0,2,"ion-button",[["expand","block"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeAuthAction()&&t),t}),i.B,i.b)),t.sb(54,49152,null,0,r.l,[t.h,t.k,t.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),t.Jb(55,0,[" "," "])),(l()(),t.tb(56,0,null,0,4,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.onSubmit(e.authProviders.Facebook)&&t),t}),i.B,i.b)),t.sb(57,49152,null,0,r.l,[t.h,t.k,t.z],{expand:[0,"expand"]},null),(l()(),t.tb(58,0,null,0,1,"ion-icon",[["name","logo-facebook"],["slot","start"]],null,null,null,i.J,i.j)),t.sb(59,49152,null,0,r.D,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Jb(-1,0,[" Login com facebook "]))],(function(l,n){var u=n.component;l(n,15,0,u.authForm),l(n,19,0,!u.configs.isSignIn),l(n,23,0,"primary","mail"),l(n,25,0,"true","email","Email","email"),l(n,28,0,"email"),l(n,32,0,u.email.dirty&&u.email.hasError("required")),l(n,34,0,u.email.dirty&&u.email.hasError("email")),l(n,38,0,"primary","lock"),l(n,40,0,"Senha","password"),l(n,43,0,"password"),l(n,47,0,u.password.dirty&&u.password.hasError("required")),l(n,49,0,u.password.dirty&&u.password.hasError("minlength")),l(n,51,0,u.authForm.invalid,"block","submit"),l(n,54,0,"block","clear"),l(n,57,0,"block"),l(n,59,0,"logo-facebook")}),(function(l,n){var u=n.component;l(n,13,0,t.Eb(n,17).ngClassUntouched,t.Eb(n,17).ngClassTouched,t.Eb(n,17).ngClassPristine,t.Eb(n,17).ngClassDirty,t.Eb(n,17).ngClassValid,t.Eb(n,17).ngClassInvalid,t.Eb(n,17).ngClassPending),l(n,24,0,t.Eb(n,30).ngClassUntouched,t.Eb(n,30).ngClassTouched,t.Eb(n,30).ngClassPristine,t.Eb(n,30).ngClassDirty,t.Eb(n,30).ngClassValid,t.Eb(n,30).ngClassInvalid,t.Eb(n,30).ngClassPending),l(n,39,0,t.Eb(n,45).ngClassUntouched,t.Eb(n,45).ngClassTouched,t.Eb(n,45).ngClassPristine,t.Eb(n,45).ngClassDirty,t.Eb(n,45).ngClassValid,t.Eb(n,45).ngClassInvalid,t.Eb(n,45).ngClassPending),l(n,52,0,u.configs.action),l(n,55,0,u.configs.actionChange)}))}function j(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"app-login",[],null,null,null,z,p)),t.sb(1,114688,null,0,h,[c.a,a.b,d.a,r.Kb,m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.pb("app-login",h,j,{},{},[]),L=u("PCNd"),O=function(){return function(){}}();u.d(n,"LoginPageModuleNgFactory",(function(){return S}));var S=t.qb(e,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[o.a,w]],[3,t.j],t.x]),t.Cb(4608,s.l,s.k,[t.u,[2,s.r]]),t.Cb(4608,r.b,r.b,[t.z,t.g]),t.Cb(4608,r.Jb,r.Jb,[r.b,t.j,t.q]),t.Cb(4608,r.Mb,r.Mb,[r.b,t.j,t.q]),t.Cb(4608,a.b,a.b,[]),t.Cb(4608,a.m,a.m,[]),t.Cb(1073742336,s.c,s.c,[]),t.Cb(1073742336,r.Fb,r.Fb,[]),t.Cb(1073742336,a.l,a.l,[]),t.Cb(1073742336,a.j,a.j,[]),t.Cb(1073742336,L.a,L.a,[]),t.Cb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),t.Cb(1073742336,O,O,[]),t.Cb(1073742336,e,e,[]),t.Cb(1024,m.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);