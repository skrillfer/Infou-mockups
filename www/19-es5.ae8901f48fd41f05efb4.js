(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{kYtE:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),r=u("ZZ/e"),c=u("ZYCi"),s=u("Ip0R"),b=u("mrSG"),a=function(){function l(){}return l.prototype.categoryList=function(){return this.categories=[{id:1,name:"Women",image:"assets/images/category/women-fashion.jpg"},{id:2,name:"Men",image:"assets/images/category/men-fashion.jpg"},{id:3,name:"Bags",image:"assets/images/category/luggage.jpg"},{id:4,name:"Watches",image:"assets/images/category/watches.jpg"},{id:5,name:"Jewelry",image:"assets/images/category/jewelry.jpg"},{id:6,name:"Shoes",image:"assets/images/category/shoes.jpg"},{id:7,name:"Computer",image:"assets/images/category/computer.jpg"},{id:8,name:"Electronics",image:"assets/images/category/electronics.jpg"},{id:9,name:"Home",image:"assets/images/category/home.jpg"},{id:10,name:"Baby Store",image:"assets/images/category/baby.jpg"}],this.categories},l.ngInjectableDef=t.Qb({factory:function(){return new l},token:l,providedIn:"root"}),l}(),g=u("sHrM"),m=function(){function l(l,n){this.modalController=l,this.categoryService=n,this.grid=!0,this.oneColumn=!1,this.list=!1}return l.prototype.ngOnInit=function(){this.getCategories()},l.prototype.getCategories=function(){this.categories=this.categoryService.categoryList()},l.prototype.showOneColumn=function(){this.oneColumn=!0,this.grid=!1,this.list=!1},l.prototype.showGrid=function(){this.grid=!0,this.oneColumn=!1,this.list=!1},l.prototype.showList=function(){this.list=!0,this.grid=!1,this.oneColumn=!1},l.prototype.gotoCartPage=function(){return b.b(this,void 0,void 0,(function(){return b.e(this,(function(l){switch(l.label){case 0:return[4,this.modalController.create({component:g.a})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}}))}))},l}(),h=t.rb({encapsulation:0,styles:[["#category[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{margin-bottom:0!important}#category[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{width:140px;height:90px}#category[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px;height:90px;border-radius:5px}#category[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}"]],data:{}});function d(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,11,"ion-col",[["size","6"]],null,null,null,e.ab,e.k)),t.sb(1,49152,null,0,r.s,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(2,0,null,0,9,"ion-card",[["class","ion-no-padding ion-no-margin"],["routerDirection","root"],["routerLink","/tabs/products"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Eb(l,4).onClick()&&o),"click"===n&&(o=!1!==t.Eb(l,5).onClick(u)&&o),o}),e.Y,e.e)),t.sb(3,49152,null,0,r.l,[t.h,t.k,t.z],{routerDirection:[0,"routerDirection"]},null),t.sb(4,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(5,737280,null,0,r.Nb,[s.g,r.Ib,t.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.tb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(7,0,null,0,4,"ion-card-header",[],null,null,null,e.V,e.g)),t.sb(8,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,2,"ion-card-subtitle",[],null,null,null,e.W,e.h)),t.sb(10,49152,null,0,r.o,[t.h,t.k,t.z],null,null),(l()(),t.Lb(11,0,["",""]))],(function(l,n){l(n,1,0,"6"),l(n,3,0,"root"),l(n,4,0,"/tabs/products"),l(n,5,0,"root")}),(function(l,n){l(n,6,0,n.context.$implicit.image),l(n,11,0,n.context.$implicit.name)}))}function p(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"ion-row",[],null,null,null,e.ub,e.E)),t.sb(1,49152,null,0,r.ib,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,d)),t.sb(3,278528,null,0,s.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.categories)}),null)}function k(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,11,"ion-col",[["size","12"]],null,null,null,e.ab,e.k)),t.sb(1,49152,null,0,r.s,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(2,0,null,0,9,"ion-card",[["class","ion-no-padding ion-no-margin"],["routerDirection","root"],["routerLink","/tabs/products"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Eb(l,4).onClick()&&o),"click"===n&&(o=!1!==t.Eb(l,5).onClick(u)&&o),o}),e.Y,e.e)),t.sb(3,49152,null,0,r.l,[t.h,t.k,t.z],{routerDirection:[0,"routerDirection"]},null),t.sb(4,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(5,737280,null,0,r.Nb,[s.g,r.Ib,t.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.tb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(7,0,null,0,4,"ion-card-header",[],null,null,null,e.V,e.g)),t.sb(8,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,2,"ion-card-subtitle",[],null,null,null,e.W,e.h)),t.sb(10,49152,null,0,r.o,[t.h,t.k,t.z],null,null),(l()(),t.Lb(11,0,["",""]))],(function(l,n){l(n,1,0,"12"),l(n,3,0,"root"),l(n,4,0,"/tabs/products"),l(n,5,0,"root")}),(function(l,n){l(n,6,0,n.context.$implicit.image),l(n,11,0,n.context.$implicit.name)}))}function f(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"ion-row",[],null,null,null,e.ub,e.E)),t.sb(1,49152,null,0,r.ib,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(3,278528,null,0,s.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.categories)}),null)}function C(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,10,"ion-item",[["class","ion-padding-bottom"],["routerDirection","root"],["routerLink","/tabs/products"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Eb(l,2).onClick()&&o),"click"===n&&(o=!1!==t.Eb(l,3).onClick(u)&&o),o}),e.lb,e.u)),t.sb(1,49152,null,0,r.G,[t.h,t.k,t.z],{routerDirection:[0,"routerDirection"]},null),t.sb(2,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(3,737280,null,0,r.Nb,[s.g,r.Ib,t.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.tb(4,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,e.Db,e.N)),t.sb(5,49152,null,0,r.yb,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,0,"img",[["style","vertical-align: middle;"]],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(7,0,null,0,3,"ion-label",[],null,null,null,e.mb,e.w)),t.sb(8,49152,null,0,r.M,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Lb(10,null,[" ",""]))],(function(l,n){l(n,1,0,"root"),l(n,2,0,"/tabs/products"),l(n,3,0,"root")}),(function(l,n){l(n,6,0,n.context.$implicit.image),l(n,10,0,n.context.$implicit.name)}))}function z(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"ion-list",[["lines","none"]],null,null,null,e.nb,e.x)),t.sb(1,49152,null,0,r.N,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.ib(16777216,null,0,1,null,C)),t.sb(3,278528,null,0,s.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"none"),l(n,3,0,u.categories)}),null)}function y(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,20,"ion-header",[["no-border",""]],null,null,null,e.hb,e.r)),t.sb(1,49152,null,0,r.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,18,"ion-toolbar",[["color","color1"]],null,null,null,e.Fb,e.P)),t.sb(3,49152,null,0,r.Bb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,e.T,e.d)),t.sb(5,49152,null,0,r.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,5,"ion-menu-toggle",[["menu","pages"]],null,null,null,e.ob,e.z)),t.sb(7,49152,null,0,r.R,[t.h,t.k,t.z],{menu:[0,"menu"]},null),(l()(),t.tb(8,0,null,0,3,"ion-button",[["color","white"]],null,null,null,e.S,e.c)),t.sb(9,49152,null,0,r.j,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(10,0,null,0,1,"ion-icon",[["name","md-list"],["slot","icon-only"]],null,null,null,e.ib,e.s)),t.sb(11,49152,null,0,r.B,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(12,0,null,0,2,"ion-title",[],null,null,null,e.Eb,e.O)),t.sb(13,49152,null,0,r.zb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Categories"])),(l()(),t.tb(15,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,e.T,e.d)),t.sb(16,49152,null,0,r.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(17,0,null,0,3,"ion-button",[["color","white"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoCartPage()&&t),t}),e.S,e.c)),t.sb(18,49152,null,0,r.j,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(19,0,null,0,1,"ion-icon",[["name","cart"]],null,null,null,e.ib,e.s)),t.sb(20,49152,null,0,r.B,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(21,0,null,null,22,"ion-content",[["class","ion-padding"],["id","category"]],null,null,null,e.bb,e.l)),t.sb(22,49152,null,0,r.t,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,12,"div",[["class","ion-text-end"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,3,"ion-button",[["class","ion-no-padding"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showOneColumn()&&t),t}),e.S,e.c)),t.sb(25,49152,null,0,r.j,[t.h,t.k,t.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),t.tb(26,0,null,0,1,"ion-icon",[["name","md-square"],["slot","icon-only"]],null,null,null,e.ib,e.s)),t.sb(27,49152,null,0,r.B,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(28,0,null,null,3,"ion-button",[["class","ion-no-padding"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showGrid()&&t),t}),e.S,e.c)),t.sb(29,49152,null,0,r.j,[t.h,t.k,t.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),t.tb(30,0,null,0,1,"ion-icon",[["name","md-grid"],["slot","icon-only"]],null,null,null,e.ib,e.s)),t.sb(31,49152,null,0,r.B,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(32,0,null,null,3,"ion-button",[["class","ion-no-padding"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showList()&&t),t}),e.S,e.c)),t.sb(33,49152,null,0,r.j,[t.h,t.k,t.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),t.tb(34,0,null,0,1,"ion-icon",[["name","list"],["slot","icon-only"]],null,null,null,e.ib,e.s)),t.sb(35,49152,null,0,r.B,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(36,0,null,0,5,"ion-grid",[["class","ion-no-padding"]],null,null,null,e.gb,e.q)),t.sb(37,49152,null,0,r.z,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,p)),t.sb(39,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,f)),t.sb(41,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(43,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"color1"),l(n,7,0,"pages"),l(n,9,0,"white"),l(n,11,0,"md-list"),l(n,18,0,"white"),l(n,20,0,"cart"),l(n,25,0,u.oneColumn?"color1":"color2","clear"),l(n,27,0,"md-square"),l(n,29,0,u.grid?"color1":"color2","clear"),l(n,31,0,"md-grid"),l(n,33,0,u.list?"color1":"color2","clear"),l(n,35,0,"list"),l(n,39,0,u.grid),l(n,41,0,u.oneColumn),l(n,43,0,u.list)}),null)}function O(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-category",[],null,null,null,y,h)),t.sb(1,114688,null,0,m,[r.Hb,a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.pb("app-category",m,O,{},{},[]),L=u("gIcY");u.d(n,"CategoryModuleNgFactory",(function(){return j}));var j=t.qb(o,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[i.a,w]],[3,t.j],t.x]),t.Cb(4608,s.l,s.k,[t.u,[2,s.u]]),t.Cb(4608,L.q,L.q,[]),t.Cb(4608,r.b,r.b,[t.z,t.g]),t.Cb(4608,r.Hb,r.Hb,[r.b,t.j,t.q]),t.Cb(4608,r.Lb,r.Lb,[r.b,t.j,t.q]),t.Cb(1073742336,s.b,s.b,[]),t.Cb(1073742336,L.p,L.p,[]),t.Cb(1073742336,L.g,L.g,[]),t.Cb(1073742336,r.Db,r.Db,[]),t.Cb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Cb(1073742336,o,o,[]),t.Cb(1024,c.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);