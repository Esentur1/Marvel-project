(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{25:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",n=c(0);t.a=function(){return Object(n.jsx)("img",{src:a,alt:"Error"})}},29:function(e,t,c){"use strict";var a=c(26),n=c.n(a),r=c(27),s=c(4),i=c(1),o=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1],h=Object(i.useState)("waiting"),d=Object(s.a)(h,2),m=d[0],b=d[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var c,r,s,i,o,l=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),b("loading"),e.prev=5,e.next=8,fetch(t,{method:c,body:r,headers:s});case 8:if((i=e.sent).ok){e.next=11;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 11:return e.next=13,i.json();case 13:return o=e.sent,a(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(5),a(!1),j(e.t0.message),b("error"),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){j(null),b("loading")}),[]),process:m,setProcess:b}};t.a=function(){var e=o(),t=e.loading,c=e.request,a=e.error,s=e.clearError,i=e.process,l=e.setProcess,u="https://gateway.marvel.com:443/v1/public/",j="apikey=9fa8a4e7dd4fa0ac1bd263c9c97fcd0f",h=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(u,"characters?limit=9&offset=").concat(t,"&").concat(j));case 3:return a=e.sent,e.abrupt("return",a.data.results.map((function(e){return O(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(u,"characters/").concat(t,"?").concat(j));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(u,"comics?limit=8&offset=").concat(t,"&").concat(j));case 3:return a=e.sent,e.abrupt("return",a.data.results.map((function(e){return p(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(u,"comics/").concat(t,"?").concat(j));case 2:return a=e.sent,e.abrupt("return",p(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(u,"characters?name=").concat(t,"&").concat(j));case 2:if(0!==(a=e.sent).data.results.length){e.next=5;break}return e.abrupt("return",{name:"not found"});case 5:return e.abrupt("return",O(a.data.results[0]));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return""===e.description?{id:e.id,name:e.name,description:"No character description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}:e.description.length>225?{id:e.id,name:e.name,description:e.description.slice(0,225)+"...",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}:{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(e){return{id:e.id,title:e.title,description:e.description?e.description.length>255?e.description.slice(0,255)+"...":e.description:"No character description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price,page:e.pageCount}};return{loading:t,error:a,process:i,setProcess:l,getAllCharacters:h,getCharacter:d,clearError:s,getAllComics:m,getComic:b,findNameCharacter:f}}},31:function(e,t,c){"use strict";c(32);var a=c(0);t.a=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})}},32:function(e,t,c){},35:function(e,t,c){"use strict";var a=c(36),n=c(37),r=c(38),s=c(40),i=c(1),o=c(25),l=c(0),u=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(n.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(i.Component);t.a=u},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c(1),r=c.n(n),s=(c(55),c.p+"static/media/mjolnir.61f31e18.png"),i=c(29),o=c(9),l=c(25),u=c(0),j=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i="";return i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?Object(u.jsx)("img",{style:{objectFit:"contain"},src:n,alt:"Random character",className:"randomchar__img"}):Object(u.jsx)("img",{style:{objectFit:"cover"},src:n,alt:"Random character",className:"randomchar__img"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[i,Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:a}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(e){var t=Object(n.useState)({}),c=Object(a.a)(t,2),r=c[0],h=c[1],d=Object(i.a)(),m=d.loading,b=d.error,f=d.getCharacter,O=d.clearError;Object(n.useEffect)((function(){x()}),[]);var p=function(e){h(e)},x=function(){O();var e=Math.floor(400*Math.random()+1011e3);f(e).then(p)},_=b?Object(u.jsx)(l.a,{}):null,v=m?Object(u.jsx)(o.a,{}):null,g=m||b?null:Object(u.jsx)(j,{char:r});return Object(u.jsxs)("div",{className:"randomchar",children:[_,v,g,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:x,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:s,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=c(44),m=(c(56),c(78)),b=c(77),f=c(31),O=function(e,t,c){switch(e){case"waiting":return Object(u.jsx)(f.a,{});case"loading":return Object(u.jsx)(o.a,{});case"confirmed":return Object(u.jsx)(t,{data:c});case"error":return Object(u.jsx)(l.a,{});default:throw new Error("Unexpected process state")}},p=r.a.forwardRef((function(e,t){var c=e.name,a=e.imgStyle,n=e.onCharSelected,r=e.focusCharSelected;return Object(u.jsxs)("li",{className:"char__item",onClick:function(){n(),r()},ref:t,children:[a,Object(u.jsx)("div",{className:"char__name",children:c})]})})),x=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),r=c[0],s=c[1],j=Object(n.useState)(!1),h=Object(a.a)(j,2),f=h[0],O=h[1],x=Object(n.useState)(210),_=Object(a.a)(x,2),v=_[0],g=_[1],N=Object(n.useState)(!1),k=Object(a.a)(N,2),y=k[0],w=k[1],C=Object(n.useState)(!1),S=Object(a.a)(C,2),E=(S[0],S[1],Object(i.a)()),F=E.loading,P=E.error,T=E.getAllCharacters,A=(E.process,E.setProcess);Object(n.useEffect)((function(){I()}),[]);var R=Object(n.useRef)([]),q=function(e){e&&R.current.push(e)},I=function(){L(v,!0)},D=function(e){var t=!1;e.length<9&&(t=!0),s((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))})),O((function(e){return!1})),g((function(e){return e+9})),w((function(e){return t}))},L=function(e,t){O(!t),T(e).then(D).then((function(){return A("confirmed")}))},G=e.onCharSelected,J=Object(u.jsx)(m.a,{component:null,children:r.map((function(e,t){var c="";return c="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail?Object(u.jsx)("img",{style:{objectFit:"contain"},src:e.thumbnail,alt:"No character description"}):Object(u.jsx)("img",{style:{objectFit:"cover"},src:e.thumbnail,alt:"No character description"}),Object(u.jsx)(b.a,{timeout:2e3,classNames:"fade",children:Object(u.jsx)(p,{ref:q,name:e.name,imgStyle:c,onCharSelected:function(){return G(e.id)},focusCharSelected:function(){return e=t,R.current.forEach((function(e){e.classList.remove("char__item_selected")})),R.current[e].classList.add("char__item_selected"),void R.current[e].focus();var e}},e.id)},e.id)}))}),M=P?Object(u.jsx)(l.a,{}):null,V=F&&!f?Object(u.jsx)(o.a,{}):Object(u.jsx)("ul",{className:"char__grid",children:J});return console.log("CharList!"),Object(u.jsxs)("div",{className:"char__list",children:[M,V,Object(u.jsx)("button",{className:"button button__main button__long",disabled:f,onClick:function(){return L(v)},style:{display:y?"none":"block"},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})},_=(c(57),function(e){var t=e.data,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o="";return o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?Object(u.jsx)("img",{style:{objectFit:"contain"},src:n,alt:c}):Object(u.jsx)("img",{style:{objectFit:"cover"},src:n,alt:c}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[o,Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:a}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsx)("ul",{className:"char__comics-list",children:0===i.length?Object(u.jsx)("li",{className:"char__comics-item",children:"This character does not have a comic book list"}):i.length>10?i.slice(0,10).map((function(e,t){return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)})):i.map((function(e,t){return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))})]})}),v=function(e){var t=Object(n.useState)(null),c=Object(a.a)(t,2),r=c[0],s=c[1],o=Object(i.a)(),l=o.getCharacter,j=o.clearError,h=o.process,d=o.setProcess;Object(n.useEffect)((function(){m()}),[]),Object(n.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(j(),l(t).then(b).then((function(){return d("confirmed")})))},b=function(e){s(e)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"char__info",children:O(h,_,r)})})},g=c(35),N=c.p+"static/media/vision.067d4ae1.png",k=(c(58),c(71)),y=c(6),w=c(72),C=function(e){var t=Object(n.useState)({}),c=Object(a.a)(t,2),r=c[0],s=c[1],o=Object(n.useState)(!1),l=Object(a.a)(o,2),j=l[0],h=l[1],d=Object(n.useState)(!1),m=Object(a.a)(d,2),b=(m[0],m[1],Object(i.a)()),f=(b.loading,b.error,b.findNameCharacter),O=function(e){s(e),console.log(e.name),"not found"===e.name?h(!0):h(!1)},p=function(e,t){return t?Object(u.jsx)("div",{className:"searchcharpanel__validate-error",children:"The character was not found. Check the name and try again"}):0===Object.keys(e).length?null:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"searchcharpanel__positive",children:["There is! Visit ",e.name," page?"]}),Object(u.jsx)(y.b,{className:"button button__secondary searchcharpanel__link",to:"/".concat(e.id),children:Object(u.jsx)("div",{className:"inner",children:"TO PAGE"})})]})};return Object(u.jsx)(k.d,{initialValues:{name:""},validationSchema:w.a({name:w.b().required("This field is required")}),onSubmit:function(e){return t=e.name,void f(t).then(O);var t},children:Object(u.jsxs)(k.c,{className:"searchcharpanel",children:[Object(u.jsx)("label",{className:"searchcharpanel__label",htmlFor:"search",children:"Or find a character by name:"}),Object(u.jsx)(k.b,{className:"searchcharpanel__input",type:"text",placeholder:"Enter name",id:"name",name:"name"}),Object(u.jsx)("button",{className:"button button__main searchcharpanel__button",type:"submit",children:Object(u.jsx)("div",{className:"inner",children:"FIND"})}),p(r,j)?p(r,j):Object(u.jsx)(k.a,{className:"searchcharpanel__validate-error",name:"name",component:"div"})]})})};t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g.a,{children:Object(u.jsx)(h,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(g.a,{children:Object(u.jsx)(x,{onCharSelected:function(e){r(e)}})}),Object(u.jsxs)("div",{className:"char__details",children:[Object(u.jsx)(g.a,{children:Object(u.jsx)(v,{charId:c})}),Object(u.jsx)(C,{})]})]}),Object(u.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.ca22c254.chunk.js.map