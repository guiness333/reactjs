(this.webpackJsonpmeusite=this.webpackJsonpmeusite||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(35),a(9)),s=a.n(l),u=a(11),i=a(27),m=a.n(i).a.create({baseURL:"https://cors-anywhere.herokuapp.com/http://magento-portalas-prd.devparceiroambev.com:3000/"});function d(){return(d=Object(u.a)(s.a.mark((function e(t,a){var n,r,c,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,m.get("order?limit=10000&gte=".concat(t,"&lte=").concat(a));case 3:return r=e.sent,c=function(e){return!e.isExported},o=function(e){return e.isExported},l=function(e){return null===e.OrderDeliveryDate},n={length:r.data.body.items.length,errosIntegracao:r.data.body.items.filter(c),integrados:r.data.body.items.filter(o),deliveryDataNull:r.data.body.items.filter(l)},e.abrupt("return",[n.integrados,n.errosIntegracao,n.deliveryDataNull]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(e,t){return d.apply(this,arguments)},f=a(12),h=a(6),p=a(2);a(54);var E=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(p.a)(o,2),s=l[0],u=l[1],i=Object(n.useState)([]),m=Object(p.a)(i,2),d=(m[0],m[1]),h=Object(n.useState)(["2020-02-04"]),E=Object(p.a)(h,2),O=E[0],j=E[1];return Object(n.useEffect)((function(){b(O,O).then((function(e){var t=Object(p.a)(e,3),a=t[0],n=t[1],r=t[2];c(n),u(a),d(r)}))}),[]),Object(n.useEffect)((function(){c([]),b(O,O).then((function(e){var t=Object(p.a)(e,3),a=t[0],n=t[1],r=t[2];console.log("request"),c(n),u(a),d(r)}))}),[O]),r.a.createElement("div",{className:"container"},a.length<=0&&r.a.createElement("img",{className:"imagem",src:"https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif",width:"100px"}),r.a.createElement("h1",null,"Overview Pedidos"),r.a.createElement("form",null,r.a.createElement("label",{for:"data"},"Data:"),r.a.createElement("input",{type:"date",className:"data",name:"data",value:O,onChange:function(e){j(e.target.value)}})),r.a.createElement("section",{className:"geral"},r.a.createElement("h2",{className:"total"},"Total de Pedidos: ",a.length+s.length),r.a.createElement("h2",{className:"erros"},"Total erros de Integra\xe7\xe3o: ",a.length),r.a.createElement("h2",{className:"integrados"},"Total Pedidos integrados: ",s.length)),a.length>0&&r.a.createElement("div",null,r.a.createElement("section",{className:"listErros"},r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(f.b,{className:"link",key:e._id,to:"reactjs/".concat(e._id)},r.a.createElement("li",{key:e._id},r.a.createElement("a",{className:"erro_id"},"ID:",e._id)," ",r.a.createElement("a",{className:"taxvat"},"TAXVAT: ",e.CustomerTaxvat)," ",r.a.createElement("a",{className:"order"},"ORDER: ",e.CustomerOrderNumber)))}))))))};function O(){return(O=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{},e.next=3,m.get("order/".concat(t));case 3:return a=e.sent,function(e){return!e.isExported},function(e){return e.isExported},function(e){return null===e.OrderDeliveryDate},e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){return O.apply(this,arguments)};var v=function(){var e=Object(h.e)().id,t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),s=Object(p.a)(l,2),u=(s[0],s[1]),i=Object(n.useState)([]),m=Object(p.a)(i,2),d=m[0],b=m[1],f=Object(n.useState)([]),E=Object(p.a)(f,2),O=E[0],v=E[1],g=Object(n.useState)([]),y=Object(p.a)(g,2),N=y[0],x=y[1],w=Object(n.useState)([]),S=Object(p.a)(w,2),D=S[0],k=S[1],C=Object(n.useState)([]),T=Object(p.a)(C,2),I=T[0],P=T[1],_=Object(n.useState)([]),R=Object(p.a)(_,2),U=R[0],A=R[1],B=Object(n.useState)([]),F=Object(p.a)(B,2),J=(F[0],F[1]);return Object(n.useEffect)((function(){j(e).then((function(e){console.log(e),o(e.body.exportMessage),u(e.body.isExported),b(e.body.CustomerTaxvat),v(e.body.CustomerName),x(e.body.CustomerOrderNumber),k(e.body.CustomerUF),P(e.body.OrderDate),A(e.body.OrderStatus),J(e.body.Order.Products)}))}),[]),r.a.createElement("div",null,r.a.createElement("section",{className:"container"},r.a.createElement("h1",{className:"titulo"},c),r.a.createElement("div",null,r.a.createElement("h2",null,"taxvat: ",d),r.a.createElement("h2",null,"Rede: ",O),r.a.createElement("h2",null,"Ordem: ",N),r.a.createElement("h2",null,"UF: ",D),r.a.createElement("h2",null,"Data do pedido: ",I),r.a.createElement("h2",null,"Status do Pedido: ",U))))},g=function(){return r.a.createElement(f.a,null,r.a.createElement(h.a,{exact:!0,path:"/reactjs/",component:E}),r.a.createElement(h.a,{path:"/reactjs/:id",component:v}))};var y=function(){return r.a.createElement("div",null,r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.6fe9677b.chunk.js.map