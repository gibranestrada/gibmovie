(this.webpackJsonpgibmovie=this.webpackJsonpgibmovie||[]).push([[0],{35:function(e,t,a){e.exports=a(62)},40:function(e,t,a){},42:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(40),a(12)),i=a(15),s=(a(41),a(42),function(e){return r.a.createElement("header",{className:"App-header",onClick:function(){window.location.reload()}},r.a.createElement("h2",null,e.text))}),m=a(69),u=a(67),d=a(64),E=a(65),p=a(68),v=a(66),g=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];return e.mov.length?(console.log(e.mov),r.a.createElement(u.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-movie m-100",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280/".concat(e.mov[0].backdrop_path,")"),backgroundSize:"cover",backgroundPosition:"center"}}),r.a.createElement(u.a.Header,{closeButton:!0,style:{backgroundColor:"black",color:"white"}},r.a.createElement(u.a.Title,{className:"text-center  w-100",id:"contained-modal-title-vcenter"},e.mov[0].title," - ",e.mov[0].release_date.slice(0,4))),r.a.createElement(u.a.Body,{className:"text-white text-center",style:{backgroundColor:"black",color:"white"}},r.a.createElement(d.a,{src:"https://image.tmdb.org/t/p/w185/".concat(e.mov[0].poster_path),fluid:!0}),r.a.createElement("p",null,e.mov[0].tagline),r.a.createElement("p",null,e.mov[0].overview)),r.a.createElement(u.a.Footer,{className:"text-center",style:{backgroundColor:"black",color:"white"}},r.a.createElement(E.a,{className:"modal-button"},r.a.createElement(p.a,{size:"lg",onClick:function(){e.onHide()}},"Close"),r.a.createElement(p.a,{size:"lg",onClick:function(){c(!0),window.location.href="https://www.imdb.com/title/".concat(e.mov[0].imdb_id)}},o?r.a.createElement(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"","More Info"))))):r.a.createElement(r.a.Fragment,null)},b=function(e){var t=e.currentMovie,a=e.movie,o=e.selectedMovie,c=e.dispatch,i=r.a.useState(!1),s=Object(l.a)(i,2),u=s[0],d=s[1];Object(n.useEffect)((function(){u||c({type:"RESET_CURRENT_MOVIE"})}),[u]);var E=a.poster_path?"https://image.tmdb.org/t/p/w342/".concat(a.poster_path):"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mov",onClick:function(){d(!0),o(a.id)},style:{width:"20rem",margin:"2rem",backgroundColor:"black",cursor:"pointer"}},r.a.createElement(m.a.Img,{variant:"top",src:E,alt:"The movie titled: ".concat(a.title)})),r.a.createElement(g,{show:u,mov:t,onHide:function(){return d(!1)}}))},S=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1];return r.a.createElement("form",{className:"search"},r.a.createElement("input",{value:o,onChange:function(e){c(e.target.value)},type:"text"}),r.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(o),c("")},type:"submit",value:"SEARCH"}))},h=a(19),f=a.n(h),_={loading:!0,movies:[],currentMovie:[],errorMessage:null},M=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(i.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(i.a)({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(i.a)({},e,{loading:!1,errorMessage:t.error});case"SELECTED_MOVIE_REQUEST":return Object(i.a)({},e,{currentMovie:t.payload});case"RESET_CURRENT_MOVIE":return Object(i.a)({},e,{currentMovie:""});default:return e}},y=function(){var e=Object(n.useReducer)(M,_),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){f()("https://api.themoviedb.org/3/discover/movie?\napi_key=f15a4271a88c1dbd396b3452d871d926&language=en-US&sort_by=popularity.desc&include_adult=false&page=1").then((function(e){o({type:"SEARCH_MOVIES_SUCCESS",payload:[e.data.results]})}))}),[]);var c=function(e){f()("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=f15a4271a88c1dbd396b3452d871d926&language=en-US")).then((function(e){var t,a;(null===(t=e.data)||void 0===t?void 0:t.results)?o({type:"SELECTED_MOVIE_REQUEST",payload:[e.data.results]}):(null===(a=e.data)||void 0===a?void 0:a.results)?o({type:"SEARCH_MOVIES_FAILURE",error:e.Error}):o({type:"SELECTED_MOVIE_REQUEST",payload:[e.data]})}))},i=a.movies,m=a.errorMessage,u=a.loading,d=a.currentMovie;return console.log(i),r.a.createElement("div",{className:"App"},r.a.createElement(s,{text:"GIBMOVIE"}),r.a.createElement(S,{search:function(e){o({type:"SEARCH_MOVIES_REQUEST"}),f()("https://api.themoviedb.org/3/search/movie?api_key=f15a4271a88c1dbd396b3452d871d926&query=".concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){var t,a;(null===(t=e.data)||void 0===t?void 0:t.results)?o({type:"SEARCH_MOVIES_SUCCESS",payload:[e.data.results]}):(null===(a=e.data)||void 0===a?void 0:a.results)?o({type:"SEARCH_MOVIES_FAILURE",error:e.Error}):o({type:"SEARCH_MOVIES_SUCCESS",payload:[e.data]})}))}}),r.a.createElement("p",{className:"App-intro text-white"},"Sharing a few of our favourite movies"),r.a.createElement("div",{className:"movies"},u&&!m?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{animation:"border",variant:"light"}),r.a.createElement("span",{className:"text-white",style:{fontSize:"2rem"}}," Loading... ")):m?r.a.createElement("div",{className:"errorMessage"},m):i[0][0]?i[0].map((function(e,t){return r.a.createElement(b,{key:"".concat(t,"-").concat(e.title),dispatch:o,currentMovie:d,selectedMovie:c,movie:e})})):i.map((function(e,t){return r.a.createElement(b,{key:"".concat(t,"-").concat(e.title),dispatch:o,currentMovie:d,selectedMOvie:c,movie:e})}))))};c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.76652fdb.chunk.js.map