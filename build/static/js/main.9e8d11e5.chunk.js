(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.9a3d2645.svg"},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=(a(25),a(5)),i=a(1),o=function(e){var t=e.image,a=e.name,n=e.id,r=e.info,l=e.glass;return c.a.createElement("article",{className:"cocktail"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t,alt:a})),c.a.createElement("div",{className:"cocktail-footer"},c.a.createElement("h3",null,a),c.a.createElement("h4",null,l),c.a.createElement("p",null,r),c.a.createElement(s.b,{to:"cocktail_app/cocktail/".concat(n),className:"btn btn-primary btn-detail"},"Details")))},m=function(){return c.a.createElement("div",{className:"loader"})},u=a(9),p=a.n(u),E=a(11),d=a(8),f=c.a.createContext(),k=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(d.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)("a"),o=Object(d.a)(i,2),m=o[0],u=o[1],k=Object(n.useState)([]),b=Object(d.a)(k,2),h=b[0],g=b[1],v=Object(n.useCallback)(Object(E.a)(p.a.mark((function e(){var t,a,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,(n=a.drinks)?(c=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),g(c)):g([]),s(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log();case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))),[m]);return Object(n.useEffect)((function(){v()}),[m,v]),c.a.createElement(f.Provider,{value:{loading:l,cocktails:h,setSearchTerm:u}},t)},b=function(){return Object(n.useContext)(f)},h=function(){var e=b(),t=e.cocktails,a=e.loading;return console.log(t),a?c.a.createElement(m,null):t.length<1?c.a.createElement("h2",{className:"section-title"},"no cocktails matched your search criteria"):c.a.createElement("section",{className:"section"},c.a.createElement("h2",{className:"section-title"},"cocktails"),c.a.createElement("div",{className:"cocktails-center"},t.map((function(e){return c.a.createElement(o,Object.assign({key:e.id},e))}))))},g=function(){var e=b().setSearchTerm,t=c.a.useRef("");c.a.useEffect((function(){t.current.focus()}),[]);return c.a.createElement("section",{className:"section search"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"name"},"search your favorite cocktail"),c.a.createElement("input",{type:"text",id:"name",ref:t,onChange:function(){e(t.current.value)}}))))},v=function(){return c.a.createElement("main",null,c.a.createElement(g,null),c.a.createElement(h,null))},N=function(){return c.a.createElement("section",{className:"section about-section"},c.a.createElement("h1",{className:"section-title"},"about us"),c.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam possimus voluptas maiores voluptatibus dicta aut maxime placeat nihil! Earum iusto quae porro assumenda ut fuga, sunt deleniti, nihil explicabo eligendi atque eius. Quo obcaecati labore esse deleniti nihil aliquid saepe?"))},j="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",x=function(){var e=Object(i.f)().id,t=c.a.useState(!1),a=Object(d.a)(t,2),n=a[0],r=a[1],l=c.a.useState(null),o=Object(d.a)(l,2),u=o[0],f=o[1];if(c.a.useEffect((function(){function t(){return(t=Object(E.a)(p.a.mark((function t(){var a,n,c,l,s,i,o,m,u,E,d,k,b,h;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(j).concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:(n=t.sent).drinks?(c=n.drinks[0],l=c.strDrink,s=c.strDrinkThumb,i=c.strAlcoholic,o=c.strCategory,m=c.strGlass,u=c.strInstructions,E=c.strIngredient1,d=c.strIngredient2,k=c.strIngredient3,b=c.strIngredient4,h=c.strIngredient5,f({name:l,image:s,info:i,category:o,glass:m,instructions:u,ingredients:[E,d,k,b,h]})):f(null),r(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),r(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}r(!0),function(){t.apply(this,arguments)}()}),[e]),n)return c.a.createElement(m,null);if(!u)return c.a.createElement("h2",{className:"section-title"},"no cocktail to display");var k=u.name,b=u.image,h=u.category,g=u.info,v=u.glass,N=u.instructions,x=u.ingredients;return c.a.createElement("section",{className:"cocktail-section section"},c.a.createElement(s.b,{to:"/cocktail_app",className:"btn btn-primary"},"back home"),c.a.createElement("h2",{className:"section-title"},k),c.a.createElement("div",{className:"drink"},c.a.createElement("img",{src:b,alt:k}),c.a.createElement("div",{className:"drink-info"},c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"name:"),k),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"category:"),h),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"info:"),g),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"glass:"),v),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"instructions:"),N),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"ingredients:"),x.map((function(e,t){return e?c.a.createElement("span",{key:t},e):null}))))))},y=function(){return c.a.createElement("section",{className:"error-page section"},c.a.createElement("div",{className:"error-container"},c.a.createElement("h1",null,"opps! its a dead end"),c.a.createElement(s.b,{to:"/cocktail_app",className:"btn btn-primary"},"back home")))},O=a(19),w=a.n(O),S=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"nav-center"},c.a.createElement(s.b,{to:"/cocktail_app"},c.a.createElement("img",{src:w.a,alt:"cocktail db logo",className:"logo"})),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/cocktail_app"},"Home"),c.a.createElement(s.b,{to:"/cocktail_app/about"},"About")))))};var _=function(){return c.a.createElement(s.a,null,c.a.createElement(S,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/cocktail_app"},c.a.createElement(v,null)),c.a.createElement(i.a,{path:"/cocktail_app/about"},c.a.createElement(N,null)),c.a.createElement(i.a,{path:"/cocktail_app/cocktail/:id"},c.a.createElement(x,null)),c.a.createElement(i.a,{path:"*"},c.a.createElement(y,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null,c.a.createElement(_,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9e8d11e5.chunk.js.map