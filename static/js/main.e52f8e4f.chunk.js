(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,function(e,t,a){e.exports={recipe:"recipe_recipe__1NdOV",name:"recipe_name__3igox",image:"recipe_image__3Z7BI"}},,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=(a(12),a(3)),o=a.n(s),l=a(6),m=a(2),u=(a(14),a(1)),p=a.n(u),f=function(e){var t=e.title,a=e.cal,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",{className:p.a.name},t),c.a.createElement("ul",null,r.map((function(e){return c.a.createElement("li",null,e.text,".")}))),c.a.createElement("p",null,"Calories: ",a),c.a.createElement("img",{src:n,alt:"",className:p.a.image}))},h=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),s=Object(m.a)(i,2),u=s[0],p=s[1],h=Object(n.useState)("chicken"),d=Object(m.a)(h,2),E=d[0],g=d[1];Object(n.useEffect)((function(){b()}),[E]);var b=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("0be11483","&app_key=").concat("04b91d4b0555207fa8226beec7a22d49"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,p(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"headline"},"FIND YOUR RECIPE"),c.a.createElement("form",{className:"searchForm",onSubmit:function(e){e.preventDefault(),g(a),r("")}},c.a.createElement("input",{className:"searchBar",type:"text",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{className:"searchBtn",type:"submit"},"SEARCH")),c.a.createElement("div",{className:"recipes"},u.map((function(e){return c.a.createElement(f,{key:e.recipe.calories,title:e.recipe.label,cal:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.e52f8e4f.chunk.js.map