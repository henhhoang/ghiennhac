(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],Array(24).concat([function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(14),i=n.n(c),r=(n(24),n(4)),j=n(1),l=Object(s.createContext)(),o=function(e){var t=e.children,n=Object(s.useState)(!1),a=Object(r.a)(n,2),c=a[0],i=a[1],o={isAuthenticated:c,toggleAuth:function(){i(!c)}};return Object(j.jsx)(l.Provider,{value:o,children:t})},m=(n(26),n(3)),g=(n(27),n(11)),d=n(5);n(28);function h(e){var t=e.toggle;return Object(j.jsxs)("div",{className:t?"notification-form show":"notification-form",children:[Object(j.jsxs)("h4",{children:["You have ",Object(j.jsx)("strong",{children:"3"})," notifications"]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsxs)("a",{href:"/",className:"group",children:[Object(j.jsx)("span",{className:"img avatar",children:Object(j.jsx)(g.a,{})}),Object(j.jsxs)("span",{className:"content",children:[Object(j.jsx)("span",{children:"Sophi sent you a email"}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{children:"1 minutes ago"})]})]}),Object(j.jsxs)("a",{href:"/",className:"group",children:[Object(j.jsx)("span",{className:"img avatar",children:Object(j.jsx)(g.a,{})}),Object(j.jsxs)("span",{className:"content",children:[Object(j.jsx)("span",{children:"Sophi sent you a email"}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{children:"1 minutes ago"})]})]}),Object(j.jsxs)("a",{href:"/",className:"group",children:[Object(j.jsx)("span",{className:"img avatar",children:Object(j.jsx)(g.a,{})}),Object(j.jsxs)("span",{className:"content",children:[Object(j.jsx)("span",{children:"Sophi sent you a email"}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{children:"1 minutes ago"})]})]})]}),Object(j.jsxs)("div",{className:"setting",children:[Object(j.jsx)("span",{children:"See all the notifications"}),Object(j.jsx)("button",{className:"cog",children:Object(j.jsx)(d.b,{})})]})]})}var b=a.a.memo(h);var u=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)("div",{className:"notification",children:[Object(j.jsxs)("button",{className:"button",onClick:function(e){e.preventDefault(),c(!a)},children:[Object(j.jsx)("span",{className:"bell",children:Object(j.jsx)(m.g,{})}),Object(j.jsx)("span",{className:"bell-number",children:"3"})]}),Object(j.jsx)(b,{toggle:a})]})};n(29);var x=function(e){var t=e.toggle;return Object(j.jsx)("div",{className:t?"box show":"box",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Setting"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",children:["Notification ",Object(j.jsx)("span",{className:"number",children:"3"})]})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Help"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Logout"})})]})})};var O=function(e){var t=e.location,n=Object(s.useState)(!1),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(j.jsxs)("div",{className:"profile ".concat(t),onClick:function(e){e.preventDefault(),i(!c)},children:[Object(j.jsxs)("div",{className:"profile-container",children:[Object(j.jsxs)("button",{className:"name",children:["H\xeanh \u0110\u1eb9p Trai ",Object(j.jsx)(m.a,{})]}),Object(j.jsx)("span",{className:"avatar",children:Object(j.jsx)("img",{src:"/ghiennhac/images/avatar/cry.png",alt:""})})]}),Object(j.jsx)(x,{toggle:c})]})};var p=function(e){var t=Object(s.useContext)(l),n=t.isAuthenticated,a=t.toggleAuth;return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("button",{className:n?"home open":"home",children:[Object(j.jsx)("img",{src:"/ghiennhac/images/avatar/haha.png",alt:""}),Object(j.jsx)("span",{children:"MP5 Zing"})]}),Object(j.jsx)("button",{className:"toggle-header",onClick:a,children:n?Object(j.jsx)(m.k,{}):Object(j.jsx)(m.l,{})}),Object(j.jsxs)("form",{className:"search",children:[Object(j.jsx)("button",{className:"button",children:Object(j.jsx)(m.n,{})}),Object(j.jsx)("input",{className:"input-search",type:"input",placeholder:"T\xecm Ki\u1ebfm nh\u1ea1c, ablum"})]}),Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)(u,{}),Object(j.jsx)(O,{location:"top"})]})]})})},f=n(15),v=n(8);n(30);var N=function(e){var t=Object(s.useContext)(l).isAuthenticated;return Object(j.jsxs)("div",{className:"nav-container ".concat(t&&"open"),children:[Object(j.jsxs)("nav",{className:"nav-Left",children:[Object(j.jsx)("span",{className:"discover",children:"Kh\xe1m ph\xe1"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#1ab667"},children:Object(j.jsx)(f.a,{})}),Object(j.jsx)("span",{className:"text",children:"What's New"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#4cb6cb"},children:Object(j.jsx)(d.g,{})}),Object(j.jsx)("span",{className:"text",children:"Genres"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#e8eff0"},children:Object(j.jsx)(d.a,{})}),Object(j.jsx)("span",{className:"text",children:"Events"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#788188"},children:Object(j.jsx)(d.e,{})}),Object(j.jsx)("span",{className:"text",children:"Listen"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#f05050"},children:Object(j.jsx)(v.c,{})}),Object(j.jsx)("span",{className:"text",children:"Youtube"})]})})]})]}),Object(j.jsx)(O,{location:"bottom"})]})},y=n(13),T=n(18),S=(n(31),n(10));var k=function(e){var t=e.value,n=e.currentSongIndex,s=e.setCurrentSongIndex,a=e.isPlaying,c=e.setIsPlaying,i=e.myList,r=e.setMyList;function l(e){a&&e.id===n?c(!1):(c(!0),s(e.id))}return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"playerSong",children:[Object(j.jsx)("span",{className:"btnMyPlay",onClick:function(){return l(t)},children:t.id===n&&a?Object(j.jsx)("span",{className:"play",children:Object(j.jsx)(m.d,{})}):Object(j.jsx)("span",{className:"pause",children:Object(j.jsx)(d.i,{})})}),Object(j.jsxs)("span",{className:"song-name",onClick:function(){return l(t)},children:[Object(j.jsx)("strong",{children:t.name})," by ",t.singer]}),Object(j.jsx)("span",{className:"remove",onClick:function(){return function(e){var t=i.filter((function(t){return t.id!==e}));localStorage.setItem("MYLIST",JSON.stringify(t)),r(t)}(t.id)},children:Object(j.jsx)("span",{children:Object(j.jsx)(S.a,{})})})]})})};var C=function(e){var t=Object(s.useState)({x:0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!0),l=Object(r.a)(i,2),o=l[0],m=l[1],g=Object(s.useState)("00:00"),h=Object(r.a)(g,2),b=h[0],u=h[1],x=Object(s.useState)(!1),O=Object(r.a)(x,2),p=O[0],f=O[1],v=Object(s.useRef)(null),N=Object(s.useRef)(null),y=Object(s.useRef)(null),C=Object(s.useRef)(null),L=Object(s.useRef)(null),M=e.playList,w=e.currentSongIndex,I=e.setCurrentSongIndex,P=e.isPlaying,_=e.setIsPlaying,A=e.openMyList,F=e.myList,E=e.setMyList,D=e.setOpenMyList,H=M[w];Object(s.useEffect)((function(){P?v.current.play():v.current.pause()}));var V=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];setTimeout((function(){I(e?function(){var e=w;return++e>M.length-1&&(e=0),e}:function(){var e=w;return--e<0&&(e=M.length-1),e}),P?v.current.play():_(!P)}),100)};function W(e){var t=(e/1e3).toFixed(0),n=Math.floor(t/60),s="";return n>59&&(n=(n-=60*(s=(s=Math.floor(n/60))>=10?s:"0"+s))>=10?n:"0"+n),t=(t=Math.floor(t%60))>=10?t:"0"+t,""!==s?s+":"+n+":"+t:"0"+n+":"+t}return Object(j.jsxs)("div",{className:"control absolute-md",children:[Object(j.jsxs)("div",{className:"control-container flex",children:[Object(j.jsx)("div",{className:"item btn-prev",onClick:function(){return V(!1)},children:Object(j.jsx)("button",{className:"control-button",children:Object(j.jsx)(d.c,{})})}),Object(j.jsx)("div",{className:"item btn-play",onClick:function(){_(!P),L.current.textContent=W(1e3*v.current.duration)},children:Object(j.jsx)("button",{className:"control-button",children:P?Object(j.jsx)(d.h,{}):Object(j.jsx)(d.i,{})})}),Object(j.jsx)("div",{className:"item btn-next",onClick:function(){return V()},children:Object(j.jsx)("button",{className:"control-button",ref:N,children:Object(j.jsx)(d.d,{})})}),Object(j.jsx)("div",{className:"item listBtn",children:Object(j.jsx)("button",{className:"control-button btnList",onClick:function(){D(!A)},children:Object(j.jsx)(d.f,{})})}),Object(j.jsxs)("form",{className:"item btn-range","data-value":a.x,ref:y,children:[Object(j.jsx)("span",{className:"name-singer",children:"".concat(H.name," - ").concat(H.singer)}),Object(j.jsx)(T.a,{styles:{track:{width:"100%",marginBottom:"20px",height:"5px",cursor:"pointer"},active:{backgroundColor:"#657c93"},thumb:{width:10,height:10}},axis:"x",x:a.x,onDragStart:function(){m(!1)},onChange:function(e){var t=e.x;c({x:t}),function(e){var t=1e3*Math.floor(v.current.duration*(e/100));C.current.textContent=W(t)}(t)},onDragEnd:function(){return function(){var e=Number(y.current.dataset.value),t=v.current.duration*(e/100);v.current.currentTime=t,m(!0)}()}})]}),Object(j.jsx)("div",{className:"item time",ref:C,children:"00:00"}),Object(j.jsx)("div",{className:"item time",ref:L,children:b}),Object(j.jsx)("div",{className:"item btn-mute",onClick:function(){return function(){var e=!p;v.current.muted=!!e,f(e)}()},children:Object(j.jsx)("button",{className:"control-button",children:p?Object(j.jsx)(d.k,{}):Object(j.jsx)(d.l,{})})}),Object(j.jsx)("div",{className:"item btn-random",children:Object(j.jsx)("button",{className:"control-button",children:Object(j.jsx)(d.j,{})})}),Object(j.jsx)("div",{className:"item btn-repeat",children:Object(j.jsx)("button",{className:"control-button",children:Object(j.jsx)(S.b,{})})}),Object(j.jsx)("div",{className:"playerList ".concat(A&&"active"),children:Object(j.jsxs)("ul",{className:"list",children:[F.map((function(e){return Object(j.jsx)(k,{value:e,currentSongIndex:w,setCurrentSongIndex:I,isPlaying:P,setIsPlaying:_,myList:F,setMyList:E},e.id)})),F.length<=0&&Object(j.jsx)("li",{children:Object(j.jsx)("span",{className:"notting",children:"Kh\xf4ng c\xf3 b\xe0i h\xe1t n\xe0o \u0111\u01b0\u1ee3c th\xeam"})})]})})]}),Object(j.jsx)("audio",{ref:v,src:"/ghiennhac"+H.path,onLoadedMetadata:function(){return function(){var e=W(1e3*v.current.duration);u(e)}()},onEnded:function(){setTimeout((function(){N.current.click()}),100)},onTimeUpdate:function(e){return function(e){if(o){var t=(e.currentTarget.currentTime/e.currentTarget.duration*100).toFixed(1);C.current.textContent=W(1e3*e.currentTarget.currentTime.toFixed()),c({x:t})}}(e)}})]})};n(34);var L=function(e){return Object(j.jsxs)("div",{className:"row footer",children:[Object(j.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12",children:Object(j.jsx)("div",{className:"footer-items login",children:Object(j.jsxs)("a",{href:"/",className:"flex",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(m.o,{})}),Object(j.jsx)("span",{className:"text",children:"Login or Create account"})]}),Object(j.jsx)("p",{children:"Save and share your playlist with your friends when you log in or create an account."})]})})}),Object(j.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12",children:Object(j.jsx)("div",{className:"footer-items download",children:Object(j.jsxs)("a",{href:"/",className:"flex",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(m.h,{})}),Object(j.jsx)("span",{className:"text",children:"Login or Create account"})]}),Object(j.jsx)("p",{children:"Save and share your playlist with your friends when you log in or create an account."})]})})})]})},M=n(19),w=n(17);n(35);function I(e,t){var n=t.some((function(t){return t.id===e}));if(n)return n}var P=function(e){var t=e.value,n=e.playLists,s=e.currentSongIndex,a=e.setCurrentSongIndex,c=e.isPlaying,i=e.setIsPlaying,r=e.myList,l=e.setMyList,o=e.setOpenMyList,g={star:!0,padder:!0,playsFill:!1,col:""};switch(t){case"song":g.star=!0,g.padder=!0,g.playsFill=!1,g.col="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 items-song";break;case"new":g.star=!1,g.padder=!1,g.playsFill=!0,g.col="col-xl-3 col-lg-4 col-6 items-new"}return Object(j.jsx)("div",{className:"items px-lg-3 px-md-2 px-sm-2 px-3 ".concat(g.col),children:Object(j.jsxs)("div",{className:"song ".concat(n.id===s&&"open"),"data-song":n.id,children:[Object(j.jsxs)("div",{className:"top",children:["item"===t&&Object(j.jsx)("span",{className:"time",children:"03:20"}),Object(j.jsxs)("div",{className:"play-container",children:[g.star&&Object(j.jsxs)("div",{className:"star",children:[Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{})]}),Object(j.jsx)("div",{className:"play","data-song":n.id,onClick:function(e){return function(e){var t=Number(e.currentTarget.dataset.song);c&&t===s&&i(!1),a(t),c||i(!c)}(e,n.id)},children:g.playsFill?Object(j.jsx)("button",{children:c&&s===n.id?Object(j.jsx)(m.d,{}):Object(j.jsx)(m.c,{})}):Object(j.jsx)("button",{children:c&&s===n.id?Object(j.jsx)(v.a,{}):Object(j.jsx)(v.b,{})})}),g.padder&&Object(j.jsxs)("div",{className:"padder flex",children:[Object(j.jsx)("button",{className:"add ".concat(I(n.id,r)&&"active"),onClick:function(){return function(e){var t=Object(M.a)(r),n=t.every((function(t){return t.id!==e.id}));o(!0),n&&(t.push(e),localStorage.setItem("MYLIST",JSON.stringify(t)),l(t))}(n)},children:I(n.id,r)?Object(j.jsx)(m.b,{}):Object(j.jsx)(w.a,{})}),Object(j.jsx)("button",{className:"heart",children:Object(j.jsx)(m.i,{})})]})]}),Object(j.jsx)("div",{className:"img",children:Object(j.jsx)("img",{src:"/ghiennhac"+n.image,alt:""})})]}),Object(j.jsxs)("div",{className:"bottom",children:[Object(j.jsx)("a",{href:"/",className:"name",title:n.name,children:n.name}),Object(j.jsx)("a",{href:"/",className:"singer",children:n.singer})]})]})})};n(36);var _=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",children:[Object(j.jsx)("span",{className:"avatar",children:Object(j.jsx)("img",{src:"/ghiennhac"+e.user,alt:""})}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("span",{className:"name-song",children:"Liitle Town"}),Object(j.jsx)("span",{className:"singer",children:"by Chris Fox"})]}),Object(j.jsx)("span",{className:"top-number",children:e.top})]})})};n(37);var A=function(e){var t=Object(s.useContext)(l).isAuthenticated,n=Object(s.useState)([{id:0,name:"\u0110au \u0111\u1ec3 tr\u01b0\u1edfng th\xe0nh",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Daudetruongthanh.mp3",image:"/images/item1.jpg"},{id:1,name:"Dj China V80",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/DjChiNa.mp3",image:"/images/item2.jpg"},{id:2,name:"\u0110\u1eebng y\xeau n\u1eeda em m\u1ec7t r\u1ed3i",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Dungyeunuaemmetroi.mp3",image:"/images/item3.jpg"},{id:3,name:"H\xf3a ra em l\xe0 ng\u01b0\u1eddi th\u1ee9 3",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Hoaraemlanguoithuba.mp3",image:"/images/item4.jpg"},{id:4,name:"H\u1ed3ng nhan x\u01b0a",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/hongnhanxua.mp3",image:"/images/item5.jpg"},{id:5,name:"M\u1ed9t ng\u01b0\u1eddi r\u1ea5t t\u1ed1t",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Motnguoirattot.mp3",image:"/images/item6.jpg"},{id:6,name:"Somg thing just like this",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Somethingjustlikethis.mp3",image:"/images/item7.jpg"},{id:7,name:"T\xecnh b\u1ea1n di\u1ec7u k\u1ef3",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/tinhbandieuky.mp3",image:"/images/item8.jpg"},{id:8,name:"Vong xuy\xean b\u1ec9 ng\u1ea1n",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Vongxuyenbingan.mp3",image:"/images/item9.jpg"},{id:9,name:"Xu\u1ea5t s\u01a1n",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/xuatson.mp3",image:"/images/item10.jpg"},{id:10,name:"M\u1ed9t tri\u1ec7u kh\u1ea3 n\u0103ng",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/1trieukhanang.mp3",image:"/images/item11.jpg"},{id:11,name:"I Love You 3000",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/3000.mp3",image:"/images/item2.jpg"},{id:12,name:"EDM S\xe1o Tr\xfac",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/edmsao.mp3",image:"/images/item1.jpg"},{id:13,name:"Em b\u1eb1ng l\xf2ng l\xe0m m\u1ed9t ng\u01b0\u1eddi b\xecnh th\u01b0\u1eddng b\xean anh",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/embanglong.mp3",image:"/images/item7.jpg"},{id:14,name:"Futari",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/futari.mp3",image:"/images/item6.jpg"},{id:15,name:"Giang h\u1ea3i kh\xf4ng \u0111\u1ed9 n\xe0ng",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/gianghai.mp3",image:"/images/item5.jpg"},{id:16,name:"Tam th\u1ed1n nh\xe2n gian",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/tamthon.mp3",image:"/images/item4.jpg"},{id:17,name:"Thay t\xf4i y\xeau c\xf4 \u1ea5y",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/thaytoi.mp3",image:"/images/item7.jpg"},{id:18,name:"B\u01b0\u1edbc vu quy",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/buocvuquy.mp3",image:"/images/item4.jpg"},{id:19,name:"Ch\xe2n \xe1i phai mau",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/chanaiphaimau.mp3",image:"/images/item10.jpg"},{id:20,name:"Ch\u1ec9 l\xe0 kh\xf4ng gi\u1ed1ng nhau",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/chilakhongcungnhau.mp3",image:"/images/item11.jpg"},{id:21,name:"C\xf4 ph\u01b0\u01a1ng t\u1ef1 h\u01b0\u1edfng",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/cophuongtuhuong.mp3",image:"/images/item6.jpg"},{id:22,name:"K\u1ebft duy\xean",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/kd.mp3",image:"/images/item8.jpg"},{id:23,name:"Thi\u1ec7p h\xf4ng ng\u01b0\u1eddi d\u01b0ng",singer:"Ph\xe1t h\u1ed3 x Jokes",path:"/songs/thnd.mp3",image:"/images/item9.jpg"},{id:24,name:"Ch\u1ec9 v\xec qu\xe1 y\xeau",singer:"Huy V\u1ea1c",path:"/songs/chiviquayeu.mp3",image:"/images/item17.jpg"},{id:25,name:"Ki\u1ebfp duy\xean kh\xf4ng th\xe0nh",singer:"DIMZ",path:"/songs/kdkt.mp3",image:"/images/item16.jpg"},{id:26,name:"B\u1ed3 \u0111\u1ec1 k\u1ebft",singer:"Reii",path:"/songs/bodeket.mp3",image:"/images/item15.jpg"},{id:27,name:"Waiting For Love",singer:"Avicii",path:"/songs/WaitingForLove.mp3",image:"/images/item14.jpg"},{id:28,name:"Teeth",singer:"5SOS",path:"/songs/Teeth.mp3",image:"/images/item13.jpg"},{id:29,name:"Vi\u1ec7t nam l\xe0 nh\u1eefng chuy\u1ebfn \u0111i",singer:"VICKY Nhung",path:"/songs/VNLNCD.mp3",image:"/images/item12.jpg"}]),a=Object(r.a)(n,1)[0],c=Object(s.useState)((function(){var e=localStorage.getItem("MYLIST");return e?JSON.parse(e):[]})),i=Object(r.a)(c,2),o=i[0],g=i[1],d=Object(s.useState)([]),h=Object(r.a)(d,2),b=h[0],u=h[1],x=Object(s.useState)({_limit:12,_page:1}),O=Object(r.a)(x,2),p=O[0],f=O[1],v=Object(s.useState)(0),N=Object(r.a)(v,2),T=N[0],S=N[1],k=Object(s.useState)(!1),M=Object(r.a)(k,2),w=M[0],I=M[1],A=Object(s.useState)(!1),F=Object(r.a)(A,2),E=F[0],D=F[1],H=Object(s.useRef)(null);function V(e){H.current.classList.add("waitting"),H.current.scrollTop=0,window.scrollTo(0,0),setTimeout((function(){f(Object(y.a)(Object(y.a)({},p),{},{_page:e})),H.current.classList.remove("waitting")}),1e3)}return Object(s.useEffect)((function(){var e=a.length-p._limit*p._page;if(e>0){var t=a.slice(p._limit*(p._page-1),p._page*p._limit);u(t)}if(e<0){var n=a.slice(p._limit*(p._page-1),a.length);u(n)}}),[p]),Object(j.jsxs)("div",{id:"product",className:"product ".concat(t&&"rightIn"),children:[Object(j.jsxs)("div",{className:"box-product absolute-md",ref:H,children:[Object(j.jsx)("h3",{className:"discover",children:Object(j.jsx)("span",{children:"Kh\xe1m Ph\xe1"})}),Object(j.jsx)("div",{className:"row songs",children:b.map((function(e){return Object(j.jsx)(P,{value:"song",playLists:e,currentSongIndex:T,setCurrentSongIndex:S,isPlaying:w,setIsPlaying:I,myList:o,setMyList:g,openMyList:E,setOpenMyList:D},e.id)}))}),Object(j.jsx)("div",{className:"watting-container",children:Object(j.jsx)("img",{src:"/ghiennhac/images/watting.gif",alt:""})}),Object(j.jsxs)("div",{className:"control-page",children:[Object(j.jsx)("button",{className:"prev",disabled:p._page<=1,onClick:function(){return V(p._page-1)},children:Object(j.jsx)(m.j,{})}),Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("span",{className:"current-page",children:p._page}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)("span",{className:"last-page",children:Math.ceil(a.length/p._limit)})]}),Object(j.jsx)("button",{className:"prev",disabled:p._page>a.length-p._limit*p._page,onClick:function(){return V(p._page+1)},children:Object(j.jsx)(m.m,{})})]}),Object(j.jsxs)("div",{className:"row rattings-songs",children:[Object(j.jsxs)("div",{className:"col-xl-7 col-lg-7",children:[Object(j.jsx)("h3",{className:"discover",children:Object(j.jsx)("span",{children:"Nh\u1ea1c M\u1edbi"})}),Object(j.jsx)("div",{className:"row"})]}),Object(j.jsxs)("div",{className:"col-xl-5 col-lg-5 top-songs",children:[Object(j.jsx)("h3",{className:"discover",children:Object(j.jsx)("span",{children:"Top B\xe0i H\xe1t Hay"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)(_,{top:1,user:"/images/avatar/cry.png"}),Object(j.jsx)(_,{top:2,user:"/images/avatar/hoangmang.png"}),Object(j.jsx)(_,{top:3,user:"/images/avatar/talk.png"}),Object(j.jsx)(_,{top:4,user:"/images/avatar/stupid.png"}),Object(j.jsx)(_,{top:5,user:"/images/avatar/sick.png"})]})]})]}),Object(j.jsx)(L,{})]}),Object(j.jsx)(C,{currentSongIndex:T,setCurrentSongIndex:S,isPlaying:w,setIsPlaying:I,playList:a,myList:o,setMyList:g,openMyList:E,setOpenMyList:D})]})};var F=function(e){var t=e.user;return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"friend",children:[Object(j.jsxs)("div",{className:"img",children:[Object(j.jsx)("img",{src:"/ghiennhac"+t.img,alt:""}),Object(j.jsx)("span",{className:"status ".concat(t.status)})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("a",{href:"/",className:"name",children:t.name}),Object(j.jsx)("span",{className:"from",children:t.from})]})]})})};n(38);var E=function(e){var t=Object(s.useState)([{id:1,name:"C\u01a1 b\xe1 x\u01b0\u01a1ng",from:"New York",img:"/images/avatar/contemptuous.png",status:"Error"},{id:2,name:"T\u1ed1ng ng\u1ecdc h\u1ea7u",from:"TaiWan",img:"/images/avatar/cry.png",status:"Warning"},{id:3,name:"V\xf5 th\xe0nh \u0111ang",from:"Hong Kong",img:"/images/avatar/curious.png",status:"Success"},{id:4,name:"Ti\u1ec3u m\u1ecbnh kh\xea",from:"Porland",img:"/images/avatar/dark.png",status:"Warning"},{id:6,name:"Tr\xecnh tu\u1ea5n v\u0169",from:"Japan",img:"/images/avatar/doubt.png",status:"Error"},{id:7,name:"L\u1ec7nh h\u1ed3 giao",from:"America",img:"/images/avatar/fighten.png",status:"Success"},{id:8,name:"H\xe0n l\u1eadp",from:"New Zeland",img:"/images/avatar/hoangmang.png",status:"Warning"},{id:9,name:"Ph\u01b0\u01a1ng l\xe3o ma",from:"New York",img:"/images/avatar/hohhhhh.png",status:"Error"},{id:10,name:"Th\xe1i b\xe1ch v\xe2n sinh",from:"Viet Nam",img:"/images/avatar/innocence.png",status:"Success"},{id:11,name:"M\u1eb7c dao",from:"Italia",img:"/images/avatar/look.png",status:"Warning"},{id:12,name:"Ph\u01b0\u01a1ng ch\xednh",from:"Spain",img:"/images/avatar/love.png",status:"Error"},{id:13,name:"C\u1ef1 d\u01b0\u01a1ng ti\xean t\xf4n",from:"Arica",img:"/images/avatar/pain.png",status:"Warning"},{id:14,name:"V\xf4 c\u1ef1c \u0111\u1ea1o",from:"Arica",img:"/images/avatar/panda.png",status:"Success"},{id:15,name:"Tr\xe1c h\xe0n",from:"Arica",img:"/images/avatar/screaming.png",status:"Warning"},{id:16,name:"T\xe0n d\u01b0\u01a1ng",from:"Arica",img:"/images/avatar/sick.png",status:"Error"}]),n=Object(r.a)(t,1)[0];return Object(j.jsxs)("div",{className:"friends",children:[Object(j.jsxs)("ul",{className:"absolute-md",children:[Object(j.jsx)("span",{className:"connected",children:"B\u1ea1n b\xe8"}),n.map((function(e){return Object(j.jsx)(F,{user:e},e.id)}))]}),Object(j.jsxs)("form",{className:"search absolute-md",children:[Object(j.jsx)("button",{className:"button",children:Object(j.jsx)(m.n,{})}),Object(j.jsx)("input",{className:"input-search",type:"input",placeholder:"T\xecm b\u1ea1n b\xe8 c\u1ee7a b\u1ea1n"})]})]})};n(39);var D=function(e){return Object(j.jsxs)("div",{className:"wapper",children:[Object(j.jsx)(N,{}),Object(j.jsx)(A,{}),Object(j.jsx)(E,{})]})};n(40),n(41);var H=function(e){var t=Object(s.useContext)(l),n=(t.isAuthenticated,t.toggleAuth);return Object(j.jsxs)("div",{className:"header-mobile flex",children:[Object(j.jsx)("button",{className:"btn-list",onClick:n,children:Object(j.jsx)("span",{children:Object(j.jsx)(d.f,{})})}),Object(j.jsxs)("a",{href:"/",className:"home",children:[Object(j.jsx)("img",{src:"/ghiennhac/images/avatar/cry.png",alt:""}),Object(j.jsx)("span",{children:"MP5 Zing"})]}),Object(j.jsxs)("div",{className:"setting",children:[Object(j.jsx)("label",{className:"btn-setting",htmlFor:"openMenu-setting",children:Object(j.jsx)("span",{children:Object(j.jsx)(m.e,{})})}),Object(j.jsx)("input",{type:"checkbox",id:"openMenu-setting"}),Object(j.jsx)("div",{className:"profile-mobile",children:Object(j.jsx)(O,{})})]})]})};var V=function(){return Object(j.jsx)("div",{className:"App",style:{overflow:"hidden"},children:Object(j.jsxs)(o,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(H,{}),Object(j.jsx)(D,{})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};n(42);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),W()}]),[[43,1,2]]]);
//# sourceMappingURL=main.ac71d552.chunk.js.map