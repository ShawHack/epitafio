(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/8X/":function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return c}));var r=e("CcnG"),i=e("oBZk"),o=e("ZZ/e"),u=(e("vsub"),e("7dP1"),e("mK0T"),r.rb({encapsulation:2,styles:[],data:{}}));function c(n){return r.Lb(0,[(n()(),r.tb(0,0,null,null,5,"ion-buttons",[],null,null,null,i.C,i.c)),r.sb(1,49152,null,0,o.m,[r.h,r.k,r.z],null,null),(n()(),r.tb(2,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.logout()&&r),r}),i.B,i.b)),r.sb(3,49152,null,0,o.l,[r.h,r.k,r.z],null,null),(n()(),r.tb(4,0,null,0,1,"ion-icon",[["name","exit"],["slot","icon-only"]],null,null,null,i.J,i.j)),r.sb(5,49152,null,0,o.D,[r.h,r.k,r.z],{name:[0,"name"]},null)],(function(n,t){n(t,5,0,"exit")}),null)}},"2tJE":function(n,t,e){"use strict";var r=e("mrSG"),i=function(){function n(n){this.db=n}return n.prototype.setCollection=function(n,t){this.collection=n?this.db.collection(n,t):null},n.prototype.setItem=function(n,t){return this.collection.doc(n.id)[t](n).then((function(){return n}))},n.prototype.getAll=function(){return this.collection.valueChanges()},n.prototype.get=function(n){return this.collection.doc(n).valueChanges()},n.prototype.create=function(n){return n.id=this.db.createId(),this.setItem(n,"set")},n.prototype.update=function(n){return this.setItem(n,"update")},n.prototype.delete=function(n){return this.collection.doc(n.id).delete()},n}(),o=e("tct4"),u=e("7dP1"),c=e("CcnG");e.d(t,"a",(function(){return a}));var a=function(n){function t(t,e){var r=n.call(this,e)||this;return r.authService=t,r.init(),r}return r.d(t,n),t.prototype.init=function(){var n=this;this.authService.authState$.subscribe((function(t){t?n.setCollection("/users/"+t.uid+"/tasks",(function(n){return n.orderBy("done","asc").orderBy("title","asc")})):n.setCollection(null)}))},t.ngInjectableDef=c.Ob({factory:function(){return new t(c.Pb(u.a),c.Pb(o.a))},token:t,providedIn:"root"}),t}(i)},"DK3/":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return r}));var r=function(){var n=window.TapticEngine;n&&n.selection()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},Jky2:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return a}));var r=e("mrSG"),i=function(n,t){return null!==t.closest(n)},o=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},u=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,a=function(n,t,e){return Object(r.b)(void 0,void 0,void 0,(function(){var i;return Object(r.e)(this,(function(r){return null!=n&&"#"!==n[0]&&!c.test(n)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(n,e)]):[2,!1]}))}))}},NTBD:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return r}));var r=function(n,t,e){var r=new MutationObserver((function(n){e(i(n,t))}));return r.observe(n,{childList:!0,subtree:!0}),r},i=function(n,t){var e;return n.forEach((function(n){for(var r=0;r<n.addedNodes.length;r++)e=o(n.addedNodes[r],t)||e})),e},o=function(n,t){if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find((function(n){return!0===n.checked}))}},YNVt:function(n,t,e){"use strict";e.d(t,"a",(function(){return y})),e.d(t,"b",(function(){return M})),e.d(t,"c",(function(){return g})),e.d(t,"d",(function(){return E})),e.d(t,"e",(function(){return u}));var r=e("mrSG"),i=e("Twl7"),o=e("ocqh"),u=function(n){return new Promise((function(t,e){Object(i.m)((function(){c(n),a(n).then((function(e){e.animation&&e.animation.destroy(),s(n),t(e)}),(function(t){s(n),e(t)}))}))}))},c=function(n){var t=n.enteringEl,e=n.leavingEl;C(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),e&&E(e,!1)},a=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.e)(this,(function(e){switch(e.label){case 0:return[4,l(n)];case 1:return[2,(t=e.sent())?d(t,n):f(n)]}}))}))},s=function(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},l=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.e)(this,(function(r){switch(r.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,e.e(98).then(e.bind(null,"xxD1"))]:[2,void 0];case 1:return t=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(99).then(e.bind(null,"v1ax"))];case 3:t=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,t]}}))}))},d=function(n,t){return Object(r.b)(void 0,void 0,void 0,(function(){var i,o;return Object(r.e)(this,(function(r){switch(r.label){case 0:return[4,v(t,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,e.e(7).then(e.bind(null,"5QBn"))];case 3:return[4,r.sent().create(n,t.baseEl,t)];case 4:return i=r.sent(),[3,6];case 5:return r.sent(),i=n(t.baseEl,t),[3,6];case 6:return p(t.enteringEl,t.leavingEl),[4,b(i,t)];case 7:return o=r.sent(),t.progressCallback&&t.progressCallback(void 0),o&&m(t.enteringEl,t.leavingEl),[2,{hasCompleted:o,animation:i}]}}))}))},f=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t,e;return Object(r.e)(this,(function(r){switch(r.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,v(n,!1)];case 1:return r.sent(),p(t,e),m(t,e),[2,{hasCompleted:!0}]}}))}))},v=function(n,t){return Object(r.b)(void 0,void 0,void 0,(function(){var e;return Object(r.e)(this,(function(r){switch(r.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[w(n.enteringEl),w(n.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}}))}))},h=function(n,t){return Object(r.b)(void 0,void 0,void 0,(function(){return Object(r.e)(this,(function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},b=function(n,t){var e=t.progressCallback,r=new Promise((function(t){n.onFinish((function(e){"number"==typeof e?t(1===e):void 0!==n.hasCompleted&&t(n.hasCompleted)}))}));return e?(n.progressStart(!0),e(n)):n.play(),r},p=function(n,t){g(t,o.c),g(n,o.a)},m=function(n,t){g(n,o.b),g(t,o.d)},g=function(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},w=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.e)(this,(function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},E=function(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},C=function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")},M=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}},uYVq:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}));var r=function(){return function(n,t){this.x=n,this.y=t}}(),i=function(n,t,e,r,i){var c=u(n.y,t.y,e.y,r.y,i);return o(n.x,t.x,e.x,r.x,c[0])},o=function(n,t,e,r,i){return i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+r*i))-n*Math.pow(i-1,3)},u=function(n,t,e,r,i){return c((r-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter((function(n){return n>=0&&n<=1}))},c=function(n,t,e,r){if(0===n)return function(n,t,e){var r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]}(t,e,r);var i=(3*(e/=n)-(t/=n)*t)/3,o=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var u=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===u)return[Math.pow(o/2,.5)-t/3];if(u>0)return[Math.pow(-o/2+Math.sqrt(u),1/3)-Math.pow(o/2+Math.sqrt(u),1/3)-t/3];var c=Math.sqrt(Math.pow(-i/3,3)),a=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(c,1/3);return[s*Math.cos(a/3)-t/3,s*Math.cos((a+2*Math.PI)/3)-t/3,s*Math.cos((a+4*Math.PI)/3)-t/3]}},"v7+D":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var r=e("mrSG"),i=function(n,t,e,i,o){return Object(r.b)(void 0,void 0,void 0,(function(){var u;return Object(r.e)(this,(function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,i&&i.forEach((function(n){return u.classList.add(n)})),o&&Object.assign(u,o),t.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}}))}))},o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},vsub:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("mrSG"),i=(e("7dP1"),e("ZZ/e"),e("mK0T"),function(){function n(n,t,e,r){this.authService=n,this.navCtrl=t,this.overlayservice=e,this.menuCtrl=r}return n.prototype.ngOnInit=function(){return r.b(this,void 0,void 0,(function(){return r.e(this,(function(n){switch(n.label){case 0:return[4,this.menuCtrl.isEnabled(this.menu)];case 1:return n.sent()||this.menuCtrl.enable(!0,this.menu),[2]}}))}))},n.prototype.logout=function(){return r.b(this,void 0,void 0,(function(){var n=this;return r.e(this,(function(t){switch(t.label){case 0:return[4,this.overlayservice.alert({message:"Deseja realmente sair da aplica\xe7\xe3o?",buttons:[{text:"Sim",handler:function(){return r.b(n,void 0,void 0,(function(){return r.e(this,(function(n){switch(n.label){case 0:return[4,this.authService.logout()];case 1:return n.sent(),[4,this.menuCtrl.enable(!1,this.menu)];case 2:return n.sent(),this.navCtrl.navigateRoot("/login"),[2]}}))}))}},"N\xe3o"]})];case 1:return t.sent(),[2]}}))}))},n}())},zwjO:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){try{if("string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,c.forEach((function(n){for(var e=t.querySelectorAll(n),r=e.length-1;r>=0;r--){var u=e[r];u.parentNode?u.parentNode.removeChild(u):t.removeChild(u);for(var c=o(u),a=0;a<c.length;a++)i(c[a])}}));for(var r=o(t),u=0;u<r.length;u++)i(r[u]);var a=document.createElement("div");a.appendChild(t);var s=a.querySelector("div");return null!==s?s.innerHTML:a.innerHTML}catch(l){return console.error(l),""}},i=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),r=e.name;if(u.includes(r.toLowerCase())){var c=e.value;null!=c&&c.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}var a=o(n);for(t=0;t<a.length;t++)i(a[t])}},o=function(n){return null!=n.children?n.children:n.childNodes},u=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]}}]);