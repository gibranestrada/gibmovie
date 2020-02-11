import React, { useReducer, useEffect } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import Axios from "axios";


const MOVIE_API_URL = "https://api.themoviedb.org/3/movie/550?api_key=f15a4271a88c1dbd396b3452d871d926";


const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios(MOVIE_API_URL)
      .then(res => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: [res.data]//removed Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    Axios(`https://api.themoviedb.org/3/search/movie?api_key=f15a4271a88c1dbd396b3452d871d926&query=${searchValue}&language=en-US&page=1&include_adult=false`)
      .then(res => {
        if(res.data?.results){
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload:  [res.data.results]//removed Search
          });
        }else if(!res.data?.results) {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload:  [res.data]//removed Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: res.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
  console.log(movies)
  return (
    <div className="App">
      <Header text="GIBMOVIE" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : !movies[0][0] ? ( 
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.title}`} movie={movie} />
              )) 
            ) : 
            movies[0].map((movie, index) => (
                <Movie key={`${index}-${movie.title}`} movie={movie} />
              ))
            }
      </div>
    </div>
  );
};

export default App;
