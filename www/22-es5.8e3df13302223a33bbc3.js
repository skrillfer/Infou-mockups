(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{jdzH:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),b=u("Ip0R"),r=u("ZZ/e"),c=function(){function l(){this.slideOpts={initialSlide:0,autoplay:!0},this.options=[{title:"Delivered",isSelected:!0},{title:"Processing",isSelected:!1},{title:"Cancelled",isSelected:!1}],this.orders=[{orderId:"#NPOK8T",date:"15/11/2020",trackingNumber:"AQWNQWEIC",quantity:2,totalPrice:100},{orderId:"#NPORK8T",date:"20/11/2020",trackingNumber:"WNQWEIC",quantity:2,totalPrice:500},{orderId:"#NPOKYY8T",date:"05/11/2020",trackingNumber:"MWNQWEIC",quantity:4,totalPrice:300}]}return l.prototype.ngOnInit=function(){},l.prototype.changeOption=function(l,n){for(var u=0;u<this.options.length;u++)this.options[u].isSelected=!1;this.options[n].isSelected=!0},l}(),s=t.rb({encapsulation:0,styles:[["#orders[_ngcontent-%COMP%]   .ionChip[_ngcontent-%COMP%]{--background:var(--ion-color-color1);--color:var(--ion-color-white)}#orders[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:medium}#orders[_ngcontent-%COMP%]   .col-right[_ngcontent-%COMP%]{text-align:right}"]],data:{}});function a(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,7,"ion-chip",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeOption(l.context.$implicit,l.context.index)&&t),t}),e.Z,e.j)),t.Ib(512,null,b.r,b.s,[t.s,t.t,t.k,t.D]),t.sb(2,278528,null,0,b.h,[b.r],{ngClass:[0,"ngClass"]},null),t.Hb(3,{ionChip:0}),t.sb(4,49152,null,0,r.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,2,"ion-label",[],null,null,null,e.mb,e.w)),t.sb(6,49152,null,0,r.M,[t.h,t.k,t.z],null,null),(l()(),t.Lb(7,0,["",""]))],(function(l,n){var u=l(n,3,0,n.context.$implicit.isSelected);l(n,2,0,u)}),(function(l,n){l(n,7,0,n.context.$implicit.title)}))}function d(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,31,"ion-card",[],null,null,null,e.Y,e.e)),t.sb(1,49152,null,0,r.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,29,"ion-card-header",[],null,null,null,e.V,e.g)),t.sb(3,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,11,"ion-row",[],null,null,null,e.ub,e.E)),t.sb(5,49152,null,0,r.ib,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,4,"ion-col",[],null,null,null,e.ab,e.k)),t.sb(7,49152,null,0,r.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,2,"ion-card-title",[],null,null,null,e.X,e.i)),t.sb(9,49152,null,0,r.p,[t.h,t.k,t.z],null,null),(l()(),t.Lb(10,0,["Order ",""])),(l()(),t.tb(11,0,null,0,4,"ion-col",[["class","col-right"]],null,null,null,e.ab,e.k)),t.sb(12,49152,null,0,r.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(13,0,null,0,2,"ion-text",[],null,null,null,e.Cb,e.M)),t.sb(14,49152,null,0,r.wb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(15,0,["",""])),(l()(),t.tb(16,0,null,0,4,"ion-row",[],null,null,null,e.ub,e.E)),t.sb(17,49152,null,0,r.ib,[t.h,t.k,t.z],null,null),(l()(),t.tb(18,0,null,0,2,"ion-col",[],null,null,null,e.ab,e.k)),t.sb(19,49152,null,0,r.s,[t.h,t.k,t.z],null,null),(l()(),t.Lb(20,0,["Tracking Number: ",""])),(l()(),t.tb(21,0,null,0,7,"ion-row",[],null,null,null,e.ub,e.E)),t.sb(22,49152,null,0,r.ib,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,2,"ion-col",[],null,null,null,e.ab,e.k)),t.sb(24,49152,null,0,r.s,[t.h,t.k,t.z],null,null),(l()(),t.Lb(25,0,["Quantity: ",""])),(l()(),t.tb(26,0,null,0,2,"ion-col",[],null,null,null,e.ab,e.k)),t.sb(27,49152,null,0,r.s,[t.h,t.k,t.z],null,null),(l()(),t.Lb(28,0,["Total Price: $",""])),(l()(),t.tb(29,0,null,0,2,"ion-button",[["color","color1"],["size","small"]],null,null,null,e.S,e.c)),t.sb(30,49152,null,0,r.j,[t.h,t.k,t.z],{color:[0,"color"],size:[1,"size"]},null),(l()(),t.Lb(-1,0,["Details"]))],(function(l,n){l(n,30,0,"color1","small")}),(function(l,n){l(n,10,0,n.context.$implicit.orderId),l(n,15,0,n.context.$implicit.date),l(n,20,0,n.context.$implicit.trackingNumber),l(n,25,0,n.context.$implicit.quantity),l(n,28,0,n.context.$implicit.totalPrice)}))}function p(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,14,"ion-header",[["no-border",""]],null,null,null,e.hb,e.r)),t.sb(1,49152,null,0,r.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,12,"ion-toolbar",[],null,null,null,e.Fb,e.P)),t.sb(3,49152,null,0,r.Bb,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,e.T,e.d)),t.sb(5,49152,null,0,r.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,5,"ion-menu-toggle",[["menu","pages"]],null,null,null,e.ob,e.z)),t.sb(7,49152,null,0,r.R,[t.h,t.k,t.z],{menu:[0,"menu"]},null),(l()(),t.tb(8,0,null,0,3,"ion-button",[["color","color1"]],null,null,null,e.S,e.c)),t.sb(9,49152,null,0,r.j,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(10,0,null,0,1,"ion-icon",[["name","md-list"],["slot","icon-only"]],null,null,null,e.ib,e.s)),t.sb(11,49152,null,0,r.B,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(12,0,null,0,2,"ion-title",[],null,null,null,e.Eb,e.O)),t.sb(13,49152,null,0,r.zb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["My Orders"])),(l()(),t.tb(15,0,null,null,6,"ion-content",[["fullscreen",""],["id","orders"]],null,null,null,e.bb,e.l)),t.sb(16,49152,null,0,r.t,[t.h,t.k,t.z],{fullscreen:[0,"fullscreen"]},null),(l()(),t.tb(17,0,null,0,2,"div",[["class","ion-padding ion-text-center"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,a)),t.sb(19,278528,null,0,b.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ib(16777216,null,0,1,null,d)),t.sb(21,278528,null,0,b.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"pages"),l(n,9,0,"color1"),l(n,11,0,"md-list"),l(n,16,0,""),l(n,19,0,u.options),l(n,21,0,u.orders)}),null)}function h(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-orders",[],null,null,null,p,s)),t.sb(1,114688,null,0,c,[],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.pb("app-orders",c,h,{},{},[]),g=u("gIcY"),m=u("ZYCi");u.d(n,"OrdersModuleNgFactory",(function(){return z}));var z=t.qb(o,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[i.a,k]],[3,t.j],t.x]),t.Cb(4608,b.l,b.k,[t.u,[2,b.u]]),t.Cb(4608,g.q,g.q,[]),t.Cb(4608,r.b,r.b,[t.z,t.g]),t.Cb(4608,r.Hb,r.Hb,[r.b,t.j,t.q]),t.Cb(4608,r.Lb,r.Lb,[r.b,t.j,t.q]),t.Cb(1073742336,b.b,b.b,[]),t.Cb(1073742336,g.p,g.p,[]),t.Cb(1073742336,g.g,g.g,[]),t.Cb(1073742336,r.Db,r.Db,[]),t.Cb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),t.Cb(1073742336,o,o,[]),t.Cb(1024,m.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);