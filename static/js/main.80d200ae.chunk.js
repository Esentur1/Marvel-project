(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),s=a.n(c),i=a(2),o=a(3),l=a(5),d=a(4),u=(a(15),a(0)),h=function(){return Object(u.jsxs)("header",{className:"app__header",children:[Object(u.jsx)("h1",{className:"app__title",children:Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(u.jsx)("nav",{className:"app__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Comics"})})]})})]})},m=(a(17),a.p+"static/media/mjolnir.61f31e18.png"),j=a(6),b=a.n(j),f=a(7),O=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=9fa8a4e7dd4fa0ac1bd263c9c97fcd0f",this._baseOffset=210,this.getResource=function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(f.a)(b.a.mark((function e(){var a,n,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return t._transformCharacter(e)})));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(f.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return""===e.description?{id:e.id,name:e.name,description:"No character description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}:e.description.length>225?{id:e.id,name:e.name,description:e.description.slice(0,225)+"...",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}:{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},p=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"50px",height:"50px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(u.jsx)("g",{transform:"translate(80,50)",children:Object(u.jsx)("g",{transform:"rotate(0)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(45)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(u.jsx)("g",{transform:"translate(50,80)",children:Object(u.jsx)("g",{transform:"rotate(90)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(135)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(u.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(u.jsx)("g",{transform:"rotate(180)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(u.jsx)("g",{transform:"rotate(225)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(u.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(u.jsx)("g",{transform:"rotate(270)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(u.jsx)("g",{transform:"rotate(315)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},x=a.p+"static/media/error.42292aa1.gif",v=function(){return Object(u.jsx)("img",{src:x,alt:"Error"})},g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={char:{},loading:!0,error:!1},n.marvelService=new O,n.onCharLoaded=function(e){n.setState({char:e,loading:!1})},n.onCharLoading=function(){n.setState({loading:!0})},n.updateChar=function(){var e=Math.floor(400*Math.random()+1011e3);n.onCharLoading(),n.marvelService.getCharacter(e).then(n.onCharLoaded).catch(n.onError)},n.onError=function(){n.setState({loading:!1,error:!0})},console.log("constructor"),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.char,a=e.loading,n=e.error,r=n?Object(u.jsx)(v,{}):null,c=a?Object(u.jsx)(p,{}):null,s=a||n?null:Object(u.jsx)(_,{char:t});return Object(u.jsxs)("div",{className:"randomchar",children:[r,c,s,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:m,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component),_=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i="";return i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?Object(u.jsx)("img",{style:{objectFit:"contain"},src:r,alt:"Random character",className:"randomchar__img"}):Object(u.jsx)("img",{style:{objectFit:"cover"},src:r,alt:"Random character",className:"randomchar__img"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[i,Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:a}),Object(u.jsx)("p",{className:"randomchar__descr",children:n}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=g,C=a(9),N=(a(19),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={chars:[],loading:!0,newItemLoading:!1,offset:210,charEnded:!1},n.itemsRef=[],n.setRef=function(e){n.itemsRef.push(e),console.log(n.itemsRef)},n.focusCharSelected=function(e){n.itemsRef.forEach((function(e){e.classList.remove("char__item_selected")})),n.itemsRef[e].classList.add("char__item_selected"),n.itemsRef[e].focus()},n.marvelService=new O,n.onCharList=function(){n.onRequest()},n.onCharListLoaded=function(e){var t=!1;e.length<9&&(t=!0),n.setState((function(a){var n=a.chars,r=a.offset;return{chars:[].concat(Object(C.a)(n),Object(C.a)(e)),loading:!1,newItemLoading:!1,offset:r+9,charEnded:t}}))},n.onCharListLoading=function(){n.setState({newItemLoading:!0})},n.onRequest=function(e){n.onCharListLoading(),n.marvelService.getAllCharacters(e).then(n.onCharListLoaded)},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onCharList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.chars,n=t.loading,r=t.newItemLoading,c=t.offset,s=t.charEnded,i=this.props.onCharSelected,o=a.map((function(t,a){var n="";return n="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail?Object(u.jsx)("img",{style:{objectFit:"contain"},src:t.thumbnail,alt:"No character description"}):Object(u.jsx)("img",{style:{objectFit:"cover"},src:t.thumbnail,alt:"No character description"}),Object(u.jsx)(k,{ref:e.setRef,name:t.name,imgStyle:n,onCharSelected:function(){return i(t.id)},focusCharSelected:function(){return e.focusCharSelected(a)}},t.id)})),l=n?Object(u.jsx)(p,{}):Object(u.jsx)("ul",{className:"char__grid",children:o});return Object(u.jsxs)("div",{className:"char__list",children:[l,Object(u.jsx)("button",{className:"button button__main button__long",disabled:r,onClick:function(){return e.onRequest(c)},style:{display:s?"none":"block"},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(n.Component)),k=r.a.forwardRef((function(e,t){var a=e.name,n=e.imgStyle,r=e.onCharSelected,c=e.focusCharSelected;return Object(u.jsxs)("li",{className:"char__item",onClick:function(){r(),c()},ref:t,children:[n,Object(u.jsx)("div",{className:"char__name",children:a})]})})),w=N,S=(a(20),a(21),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={char:null,loading:!1,error:!1},n.marvelService=new O,n.updateChar=function(){var e=n.props.charId;e&&(n.onCharLoading(),n.marvelService.getCharacter(e).then(n.onCharLoaded).catch(n.onError))},n.onCharLoaded=function(e){n.setState({char:e,loading:!1})},n.onCharLoading=function(){n.setState({loading:!0})},n.onError=function(){n.setState({loading:!1,error:!0})},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e,t){this.props.charId!==e.charId&&this.updateChar()}},{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=t||n||a?null:Object(u.jsx)(S,{}),c=n?Object(u.jsx)(v,{}):null,s=a?Object(u.jsx)(p,{}):null,i=a||n||!t?null:Object(u.jsx)(L,{char:t});return Object(u.jsxs)("div",{className:"char__info",children:[r,c,s,i]})}}]),a}(n.Component),L=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics,o="";return o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?Object(u.jsx)("img",{style:{objectFit:"contain"},src:r,alt:a}):Object(u.jsx)("img",{style:{objectFit:"cover"},src:r,alt:a}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[o,Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:a}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:n}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsx)("ul",{className:"char__comics-list",children:0===i.length?Object(u.jsx)("li",{className:"char__comics-item",children:"This character does not have a comic book list"}):i.length>10?i.slice(0,10).map((function(e,t){return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)})):i.map((function(e,t){return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))})]})},R=T,E=a.p+"static/media/vision.067d4ae1.png",I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(v,{}):this.props.children}}]),a}(n.Component),M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={selectedChar:null},n.onCharSelected=function(e){n.setState({selectedChar:e})},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(h,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)(I,{children:Object(u.jsx)(y,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(I,{children:Object(u.jsx)(w,{onCharSelected:this.onCharSelected})}),Object(u.jsx)(I,{children:Object(u.jsx)(R,{charId:this.state.selectedChar})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})]})}}]),a}(n.Component);a(22);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.80d200ae.chunk.js.map