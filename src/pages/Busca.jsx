import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilmeInfo from "../components/FilmeInfo";

const BuscaURL = import.meta.env.VITE_SEARCH;
const ChaveAPI = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Busca = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${BuscaURL}?${ChaveAPI}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <FilmeInfo key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Busca;
