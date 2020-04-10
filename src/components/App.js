import React, { useReducer, useEffect } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import Axios from "axios";
import { Spinner } from "react-bootstrap";
// require('dotenv').config()
const API_KEY = '';



const initialState = {
  loading: true,
  movies: [],
  currentMovie: [],
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
    case "SELECTED_MOVIE_REQUEST":
        return{
          ...state,
         // loading: false,
        currentMovie: action.payload
        }
        case "RESET_CURRENT_MOVIE":
          return{
            ...state,
           // loading: false,
          currentMovie: ''
          }
    default:
      return state;
  }
};



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios("../../.netlify/functions/apiRequest", {body: {first: `https://api.themoviedb.org/3/discover/movie?api_key=`, second: `&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`}})
      .then(res => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: [res.data.results]//removed Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    Axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}&language=en-US&page=1&include_adult=false`)
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

  const selectedMovie = mov => {
    // dispatch({
    //   type: "SEARCH_MOVIES_REQUEST"
    // })
    Axios(`https://api.themoviedb.org/3/movie/${mov}?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        if(res.data?.results){
          dispatch({
            type: "SELECTED_MOVIE_REQUEST",
            payload:  [res.data.results]//removed Search
          });
        }else if(!res.data?.results) {
          dispatch({
            type: "SELECTED_MOVIE_REQUEST",
            payload:  [res.data]//removed Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: res.Error
          });
        }
      });


  }

  const { movies, errorMessage, loading, currentMovie } = state;
  console.log(movies)
  return (
    <div className="App">
      <Header text="GIBMOVIE" />
      <Search search={search} />
      <p className="App-intro text-white">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <>
          <Spinner animation="border" variant="light" />
          <span className="text-white" style={{fontSize: '2rem'}}> Loading... </span>
          </>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : !movies[0][0] ? ( 
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.title}`} dispatch={dispatch} currentMovie={currentMovie} selectedMOvie={selectedMovie} movie={movie} />
              )) 
            ) : 
            movies[0].map((movie, index) => (
                <Movie key={`${index}-${movie.title}`} dispatch={dispatch} currentMovie={currentMovie}  selectedMovie={selectedMovie} movie={movie} />
              ))
            }
      </div>
    </div>
  );
};

export default App;
