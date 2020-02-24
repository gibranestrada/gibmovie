(this.webpackJsonpgibmovie=this.webpackJsonpgibmovie||[]).push([[0],{51:function(e,t,a){e.exports=a(82)},56:function(e,t,a){},58:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(56),a(10)),i=a(22),s=(a(57),a(58),function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",{onClick:function(){window.location.reload()}},e.text))}),m=a(91),d=a(88),u=a(84),E=a(45),v=a(90),p=a(85),g=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),o=a[0],l=a[1];return e.mov.length?(console.log(e.mov),r.a.createElement(d.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-movie m-100",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280/".concat(e.mov[0].backdrop_path,")"),backgroundSize:"cover",backgroundPosition:"center"}}),r.a.createElement(d.a.Header,{closeButton:!0,style:{backgroundColor:"black",color:"white"}},r.a.createElement(d.a.Title,{className:"text-center  w-100",id:"contained-modal-title-vcenter"},e.mov[0].title," - ",e.mov[0].release_date.slice(0,4))),r.a.createElement(d.a.Body,{className:"text-white text-center",style:{backgroundColor:"black",color:"white"}},r.a.createElement(u.a,{src:"https://image.tmdb.org/t/p/w185/".concat(e.mov[0].poster_path),fluid:!0}),r.a.createElement("p",null,e.mov[0].tagline),r.a.createElement("p",null,e.mov[0].overview)),r.a.createElement(d.a.Footer,{className:"text-center",style:{backgroundColor:"black",color:"white"}},r.a.createElement(E.a,{className:"modal-button"},r.a.createElement(v.a,{size:"lg",onClick:function(){e.onHide()}},"Close"),r.a.createElement(v.a,{size:"lg",onClick:function(){l(!0),window.location.href="https://www.imdb.com/title/".concat(e.mov[0].imdb_id)}},o?r.a.createElement(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"","More Info"))))):r.a.createElement(r.a.Fragment,null)},b=function(e){var t=e.currentMovie,a=e.movie,o=e.selectedMovie,l=e.dispatch,i=r.a.useState(!1),s=Object(c.a)(i,2),d=s[0],u=s[1];Object(n.useEffect)((function(){d||l({type:"RESET_CURRENT_MOVIE"})}),[d]);var E=a.poster_path?"https://image.tmdb.org/t/p/w342/".concat(a.poster_path):"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mov",onClick:function(){u(!0),o(a.id)},style:{width:"20rem",margin:"2rem",backgroundColor:"black",cursor:"pointer"}},r.a.createElement(m.a.Img,{variant:"top",src:E,alt:"The movie titled: ".concat(a.title)})),r.a.createElement(g,{show:d,mov:t,onHide:function(){return u(!1)}}))},h=a(32),S=a(49),f=a(89),_=a(86),y=a(87),M=h.a({movieTitle:h.b().trim().required("Please enter a movie title").min(1,"Too short - please enter at least 1 character.")}),C=function(e){var t,a,o,l,i=Object(n.useState)(""),s=Object(c.a)(i,2),m=s[0],d=s[1],u=Object(S.a)({validationSchema:M}),p=u.register,g=u.handleSubmit,b=u.watch,h=u.errors,C=(0,u.getValues)();console.log(b("movieTitle"));return r.a.createElement(f.a,{className:"search",onSubmit:g((function(){m.trim().length&&(e.search(m),d(""))}))},r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(E.a,{md:4},r.a.createElement(f.a.Group,{controlId:"formSearchValue"},r.a.createElement(y.a,null,r.a.createElement(f.a.Control,{onChange:function(e){d(e.target.value)},type:"text","aria-describedby":"movieTitleError",placeholder:"Search movie title",name:"movieTitle",ref:p,isValid:!(null===(t=h.movieTitle)||void 0===t?void 0:t.message)&&(null===(a=C.movieTitle)||void 0===a?void 0:a.length)>0,isInvalid:null===(o=h.movieTitle)||void 0===o?void 0:o.message}),r.a.createElement(y.a.Append,null,r.a.createElement(v.a,{type:"submit"},"Submit")),r.a.createElement(f.a.Control.Feedback,{type:"invalid",className:"errorMessage"},null===(l=h.movieTitle)||void 0===l?void 0:l.message))))))},O=a(27),w=a.n(O),T={loading:!0,movies:[],currentMovie:[],errorMessage:null},I=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(i.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(i.a)({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(i.a)({},e,{loading:!1,errorMessage:t.error});case"SELECTED_MOVIE_REQUEST":return Object(i.a)({},e,{currentMovie:t.payload});case"RESET_CURRENT_MOVIE":return Object(i.a)({},e,{currentMovie:""});default:return e}},k=function(){var e=Object(n.useReducer)(I,T),t=Object(c.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){w()("https://api.themoviedb.org/3/discover/movie?\napi_key=f15a4271a88c1dbd396b3452d871d926&language=en-US&sort_by=popularity.desc&include_adult=false&page=1").then((function(e){o({type:"SEARCH_MOVIES_SUCCESS",payload:[e.data.results]})}))}),[]);var l=function(e){w()("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=f15a4271a88c1dbd396b3452d871d926&language=en-US")).then((function(e){var t,a;(null===(t=e.data)||void 0===t?void 0:t.results)?o({type:"SELECTED_MOVIE_REQUEST",payload:[e.data.results]}):(null===(a=e.data)||void 0===a?void 0:a.results)?o({type:"SEARCH_MOVIES_FAILURE",error:e.Error}):o({type:"SELECTED_MOVIE_REQUEST",payload:[e.data]})}))},i=a.movies,m=a.errorMessage,d=a.loading,u=a.currentMovie;return console.log(i),r.a.createElement("div",{className:"App"},r.a.createElement(s,{text:"GIBMOVIE"}),r.a.createElement(C,{search:function(e){o({type:"SEARCH_MOVIES_REQUEST"}),w()("https://api.themoviedb.org/3/search/movie?api_key=f15a4271a88c1dbd396b3452d871d926&query=".concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){var t,a;(null===(t=e.data)||void 0===t?void 0:t.results)?o({type:"SEARCH_MOVIES_SUCCESS",payload:[e.data.results]}):(null===(a=e.data)||void 0===a?void 0:a.results)?o({type:"SEARCH_MOVIES_FAILURE",error:e.Error}):o({type:"SEARCH_MOVIES_SUCCESS",payload:[e.data]})}))}}),r.a.createElement("p",{className:"App-intro text-white"},"Sharing a few of our favourite movies"),r.a.createElement("div",{className:"movies"},d&&!m?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{animation:"border",variant:"light"}),r.a.createElement("span",{className:"text-white",style:{fontSize:"2rem"}}," Loading... ")):m?r.a.createElement("div",{className:"errorMessage"},m):i[0][0]?i[0].map((function(e,t){return r.a.createElement(b,{key:"".concat(t,"-").concat(e.title),dispatch:o,currentMovie:u,selectedMovie:l,movie:e})})):i.map((function(e,t){return r.a.createElement(b,{key:"".concat(t,"-").concat(e.title),dispatch:o,currentMovie:u,selectedMOvie:l,movie:e})}))))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c9ba31a4.chunk.js.map