(this.webpackJsonpbakery=this.webpackJsonpbakery||[]).push([[0],{224:function(e,t,c){},242:function(e,t){},244:function(e,t){},253:function(e,t){},255:function(e,t){},280:function(e,t){},281:function(e,t){},286:function(e,t){},288:function(e,t){},295:function(e,t){},314:function(e,t){},353:function(e,t){},453:function(e,t){},455:function(e,t){},470:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(214),r=c.n(s),i=c(37),o=c(28),l=c(7),j=(c(224),c(26)),d=c(17),b=c(218),u=c(86),m=c.n(u),O=c(215),h=c(216),f=c(219),p=c(217),x=function(e){return"".concat("/bakery","/assets/").concat(e)},g=c(475),y=c(473),N=(c(468),c(474)),v=c(472),w=c(0);N.a.use([v.a]);var k=[x("img1.jpg"),x("img2.jpg"),x("img3.jpg"),x("img4.jpg")],z=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("h1",{className:"hero_header",children:[Object(w.jsx)("span",{children:Object(w.jsx)("img",{className:"logo",src:x("icons8-food-as-resources-50.svg"),alt:"logo"})}),"Art of Bread "]}),Object(w.jsx)("div",{className:"container-photo",children:Object(w.jsx)(g.a,{navigation:!0,loop:!0,loopedSlides:1,children:k.map((function(e,t){return Object(w.jsx)(y.a,{children:Object(w.jsx)("img",{src:e,alt:"pic1",className:"photo"},t)},t)}))})})]})},_=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("footer",{children:Object(w.jsxs)("div",{className:"foo-container",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"contact_section",children:[Object(w.jsx)("div",{children:"Contact with us:"}),Object(w.jsx)("span",{children:Object(w.jsx)("img",{className:"mobi_ico",src:x("mobile-solid.svg"),alt:"mobile-ico"})}),Object(w.jsx)("a",{className:"contact_num",href:"tel:+48666666666",children:" 666 666 666"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:Object(w.jsx)("img",{className:"e-mail_ico",src:x("at-solid.svg"),alt:"at-ico"})})," ",Object(w.jsx)("a",{className:"contact_mail",href:"mailto:artofbread@gmail.com?subject=tytu\u0142 listu",children:"artofbread@gmail.com"})]})]}),Object(w.jsx)("p",{children:"\xa92021 Kiry\u0142owicz"})]})})})},S=function(e){var t=e.cart,c=e.children,n=Object(a.useState)(!1),s=Object(d.a)(n,2),r=s[0],o=s[1],j=Object(l.e)();return Object(a.useEffect)((function(){o(!1)}),[j]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("div",{className:"cart_wrapper",children:Object(w.jsxs)(i.b,{to:"/order",children:[Object(w.jsx)("img",{className:"cart_ico",src:x("shopping-basket-solid.svg")}),Object(w.jsxs)("span",{className:"cart_info",children:[t?t.length:0," szt."]})," "]})}),Object(w.jsxs)("button",{className:"hamburger-button ".concat(r?"open":"close"),onClick:function(){return o(!r)},children:[Object(w.jsx)("span",{className:"bar b1"}),Object(w.jsx)("span",{className:"bar b2"}),Object(w.jsx)("span",{className:"bar b3"})]}),Object(w.jsx)("div",{className:"navi_wrapper",children:Object(w.jsx)("nav",{className:"panel ".concat(r?"open":"close"),children:Object(w.jsxs)("ul",{className:"main_navi",children:[Object(w.jsx)("li",{className:"main_navi_item",children:Object(w.jsx)(i.b,{to:"/",children:"Home Page"})}),Object(w.jsx)("li",{className:"main_navi_item",children:Object(w.jsx)(i.b,{to:"/order",children:"Nowe Zam\xf3wienie"})})]})})})]}),Object(w.jsxs)("main",{children:[Object(w.jsx)(z,{}),c]}),Object(w.jsx)(_,{})]})},C=function(e){return function(t){Object(f.a)(a,t);var c=Object(p.a)(a);function a(){return Object(O.a)(this,a),c.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(w.jsx)(S,{cart:this.props.cart,children:Object(w.jsx)(e,Object(o.a)({},this.props))})}}]),a}(n.a.Component)},q=function(e,t){return e.reduce((function(e,c){var a=t.find((function(e){return e.id===c.id}));return a?e+c.qty*a.price:e}),0)},F=C((function(e){var t=e.cart,c=e.subtractFromCart,n=e.addToCart,s=e.clearCart,r=Object(a.useState)([]),i=Object(d.a)(r,2),u=i[0],O=i[1],h=Object(l.f)(),f=Object(b.a)(),p=f.register,x=f.handleSubmit,g=f.formState.errors;Object(a.useEffect)((function(){new m.a({url:"https://katarzyna.kirylowicz.com/local-baker",consumerKey:"ck_7ed733aa32fbfdf8cc8f58eca55df25aae7075ea",consumerSecret:"cs_8373bf87768f96db3130a5e973e6e7b0fbc3df11",wpAPI:!0,version:"wc/v1",axiosConfig:{headers:{}}}).getAsync("products").then((function(e){O(JSON.parse(e.toJSON().body))}))}),[]);var y=Object(a.useCallback)((function(e){var t=u.find((function(t){return t.id===e.id}));return t?Object(o.a)(Object(o.a)({},t),{},{qty:e.qty}):null}),[u]);if(!t||!t.length)return Object(w.jsx)("div",{children:"Tw\xf3j koszyk jest pusty"});var N=Date.now(),v=new Date(N+864e5),k=new Date(N+6048e5);return console.log(g),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"Z\u0142\xf3z zam\xf3wienie na pieczywo i odbierz osobi\u015bcie."}),Object(w.jsx)("div",{className:"OrderFormWrapper",children:Object(w.jsxs)("form",{onSubmit:x((function(e){console.log(e,t),h("/success"),s()})),noValidate:!0,children:[Object(w.jsxs)("div",{className:"form_input".concat(g.user_phone?" has-error":""),children:[Object(w.jsx)("label",{className:"in_data",htmlFor:"user_phone",children:" Podaj numer telefonu:"}),Object(w.jsx)("input",Object(o.a)({type:"tel",id:"user_phone",placeholder:"+48666666666"},p("user_phone",{required:"This is required",pattern:{value:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,message:"Invalid phone number"}}))),g.user_phone&&Object(w.jsx)("div",{className:"form_error",children:g.user_phone.message})]}),Object(w.jsxs)("div",{className:"form_input".concat(g.date?" has-error":""),children:[Object(w.jsx)("label",{className:"in_data",htmlFor:"date",children:"Podaj dat\u0119 odbioru zam\xf3wienia:"}),Object(w.jsx)("input",Object(o.a)({type:"date",id:"date",min:v.toISOString().split("T").shift(),max:k.toISOString().split("T").shift()},p("date",{required:"This is required",valueAsDate:!0,min:{value:N,message:"Select date from tomorrow to next week"},max:{value:k,message:"Select date from tomorrow to next week"},value:v.toISOString().split("T").shift()}))),g.date&&Object(w.jsx)("div",{className:"form_error",children:g.date.message})]}),Object(w.jsx)("div",{className:"in_data",children:" Wybrane pieczywo:"}),Object(w.jsx)("ul",{children:t.sort((function(e,t){return e.id-t.id})).map((function(e,t){var a,s=y(e);return s?Object(w.jsxs)("li",{children:[Object(w.jsxs)("span",{children:[t+1,". ",s.name]}),Object(w.jsx)("label",{className:"in_data"}),Object(w.jsx)("button",(a={type:"button",className:"counter"},Object(j.a)(a,"type","button"),Object(j.a)(a,"onClick",(function(e){if(e.preventDefault(),s.qty<20)n(s.id);else if(20===s.qty)return alert("Zam\xf3wiona ilo\u015b\u0107  produktu z danego rodzaju jest zbyt du\u017ca. Indywidualne zamowienie moe sk\u0142ada\u0107 si\u0119 z maxymalnie 20szt. Danego produktu. Skontaktuj si\u0119 z nami telefonicznie w celu ustalenia szczeg\u0142\xf3w indywidualnego zam\xf3wienia.")})),Object(j.a)(a,"children","+"),a)),Object(w.jsx)("button",{type:"button",className:"counter",onClick:function(e){e.preventDefault(),s.qty>=1&&c(s.id)},children:"-"})," szt.",Object(w.jsx)("input",{className:"in_qnty",readOnly:!0,value:s.qty}),Object(w.jsx)("label",{className:"in_qnty"}),Object(w.jsxs)("label",{className:"product_price",children:[s.price," z\u0142/szt."]}),Object(w.jsx)("label",{className:"productAllPrice",children:"Razem:"}),Object(w.jsx)("input",{className:"productAllPrice",readOnly:!0,value:(s.qty*s.price).toFixed(2)+" z\u0142"})]},s.id):null}))}),Object(w.jsxs)("div",{className:"summary",children:["Suma: ",q(t,u).toFixed(2)," z\u0142"]}),Object(w.jsxs)("div",{className:"form_input".concat(g.inCheck?" has-error":""),children:[Object(w.jsx)("label",{className:"accept_text",htmlFor:"accept"}),Object(w.jsx)("input",Object(o.a)({type:"checkbox",id:"accept",value:"1"},p("inCheck",{required:"This is required"}))),Object(w.jsx)("label",{className:"accept_text",children:"Wyra\u017cam zgod\u0119 na przesy\u0142anie informacji handlowych za pomoc\u0105 \u015brodk\xf3w komunikacji elektronicznej w rozumieniu ustawy z dnia 18 lipca 2002 roku o \u015bwiadczenie us\u0142ug drog\u0105 elektroniczn\u0105 (Dz.U.2017.1219 t.j.) w formie wiadomo\u015bci tekstowej sms na podany numer telefonu."}),g.inCheck&&Object(w.jsx)("div",{className:"form_error",children:g.inCheck.message})]}),Object(w.jsx)("button",{className:"sent",type:"submit",onClick:x,children:"Wy\u015blij Zam\xf3wienie"})]})})]})})})),T=C((function(){return Object(w.jsx)("section",{children:Object(w.jsx)("h1",{className:"success_header",children:"Twoje zam\xf3wienie zosta\u0142o przyj\u0119te. Zostanie zrealizowane w wybranym przez Ciebie dniu."})})})),I=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{className:"about",children:"About us "}),Object(w.jsx)("p",{className:"about",children:"We are a local bakery located in Warsaw. It's time to go back to the bakery. Imagine the smell of freshly baked bread in the air. THE ART OF BREAD is primarily people, who love to create artisanal baked goods."}),Object(w.jsx)("h3",{className:"about",children:"Ingredients matter"}),Object(w.jsx)("p",{className:"about",children:"All of our products are hand made by experienced bakers using only the best, natural ingredients available to us. We use locally-grown, organic, GMO ingredients whenever possible. This includes seasonal produce. "}),Object(w.jsx)("h3",{className:"about",children:"People matter"}),Object(w.jsx)("p",{className:"about",children:"We\u2019re happy to accommodate your special orders. Call ahead to order custom bread and cookies for your."})]})},A=function(e){var t=e.addToCart,c=Object(a.useState)([]),n=Object(d.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){new m.a({url:"https://katarzyna.kirylowicz.com/local-baker",consumerKey:"ck_7ed733aa32fbfdf8cc8f58eca55df25aae7075ea",consumerSecret:"cs_8373bf87768f96db3130a5e973e6e7b0fbc3df11",wpAPI:!0,version:"wc/v1",axiosConfig:{headers:{}}}).getAsync("products").then((function(e){r(JSON.parse(e.toJSON().body))}))}),[]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("section",{children:[Object(w.jsx)("h3",{children:"Order fresh bread with personal pickup. "}),Object(w.jsx)("ul",{className:"products_list",children:s.map((function(e){return console.log(e),Object(w.jsxs)("li",{className:"product_item",children:[Object(w.jsxs)("figure",{children:[Object(w.jsx)("img",{className:"product_photo",src:e.images[0].src,alt:e.name}),Object(w.jsxs)("figcaption",{className:"product_label",children:[e.name," - ",e.price,"z\u0142/szt."]})]}),Object(w.jsx)("button",{className:"add_product_btn",onClick:function(){return t(e.id)},children:"Dodaj do koszyka"})]},e.id)}))}),Object(w.jsx)(i.b,{to:"/order",children:Object(w.jsx)("button",{className:"btn_GoToCart",children:"Przejd\u017a do koszyka"})})]})})},P=C((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(I,{}),Object(w.jsx)(A,{addToCart:e.addToCart})]})})),D=C((function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"pageN_container",children:[Object(w.jsx)("img",{className:"logo logoP",src:x("icons8-food-as-resources-50.svg"),alt:"logo"}),Object(w.jsx)("h2",{className:"pegeN_header",children:"You can't place an new order now. Page not found."})]})})})),E=c(18),J=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("cart");n(JSON.parse(e))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("cart",JSON.stringify(c))}),[c]);return{cart:c,addToCart:function(e){var t=c.find((function(t){return t.id===e})),a=c.filter((function(t){return t.id!==e}));n([].concat(Object(E.a)(a),[{id:e,qty:t?t.qty+1:1}]))},subtractFromCart:function(e){var t=c.find((function(t){return t.id===e}));if(t){var a=c.filter((function(t){return t.id!==e}));t.qty>1?n([].concat(Object(E.a)(a),[{id:e,qty:t.qty-1}])):n(Object(E.a)(a))}},clearCart:function(){n([])}}};var W=function(){var e=J();return Object(w.jsxs)(l.c,{children:[Object(w.jsx)(l.a,{path:"/",element:Object(w.jsx)(P,Object(o.a)({},e))}),Object(w.jsx)(l.a,{path:"/order",element:Object(w.jsx)(F,Object(o.a)({},e))}),Object(w.jsx)(l.a,{path:"/success",element:Object(w.jsx)(T,Object(o.a)({},e))}),Object(w.jsx)(l.a,{path:"*",element:Object(w.jsx)(D,Object(o.a)({},e))})]})};r.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(i.a,{basename:"/bakery",children:Object(w.jsx)(W,{})})}),document.getElementById("root"))}},[[470,1,2]]]);
//# sourceMappingURL=main.57007081.chunk.js.map