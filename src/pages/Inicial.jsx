import { useEffect, useState } from "react";
import FilmeInfo from "../components/FilmeInfo";

import "./MoviesGrid.css";

const FilmesURL = import.meta.env.VITE_API;
const ChaveAPI = import.meta.env.VITE_API_KEY;

const Inicial = () => {
  const [MelhoresFilmes, setMelhoresFilmes] = useState([]);

  const getMelhoresNotas = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMelhoresFilmes(data.results);
  };

  useEffect(() => {
    const MelhoresNotas = `${FilmesURL}top_rated?${ChaveAPI}`;
    console.log(MelhoresNotas);
    getMelhoresNotas(MelhoresNotas);
  }, []);

  console.log(MelhoresFilmes);

  return (
    <div className="container">
      <h2 className="title">Filmes aclamados:</h2>
      <div className="movies-container">
        {MelhoresFilmes.length > 0 &&
          MelhoresFilmes.map((movie) => <FilmeInfo key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Inicial;
