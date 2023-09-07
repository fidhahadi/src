import React, {useState} from "react";
import CardList from "./CardList/CardList";
import './Search.css';
import { API_KEY } from "../constants/constants";

export default function Search(){

  // states: input query, movies to display
  const [query, setQuery] = useState(''); // returns state, and
                                          //function to change state
  //create state for movies, and update that state appropriately
  const [movies, setMovies] = useState([])

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("submitting");

    //const query = "Jurassic Park"; // debug
    const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data); debug
      setMovies(data.results);
      //console.log(movies);
    }catch(err){
      console.log(err)
    }
  }
  // target is input, value is the value of the input
  // get around react's parent tag restrictionm with empty tags
  // the filter method only shows movies with poster paths
  return(
    <>
    <form className="form" onSubmit={searchMovies}>
      <input className="query search-button" type="text" name="query"
      placeholder="Search"
      value={query} onChange={(event) => setQuery(event.target.value)}/>
      <button className="search-button" type="submit" >
      </button>
    </form>
    <div className="card-list">
    {movies.filter(movie => movie.poster_path).map(movie => (
        <CardList data={movie}/>
    ))};
    </div>
    </>
  )
}