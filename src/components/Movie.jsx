import {MoviesContext} from '../components/context/moviesContext'
import { useContext, useEffect, useState } from "react";
import '../styles/_movie.scss'
import { Link } from 'react-router-dom';

function Movie() {

    const {movies} = useContext(MoviesContext); //las llaves en la const es para que salga directamente el array y se pone movies que es el array y loq ue se quiere destrcturar, no moviesContext

    const [search, setSearch] = useState("");

    const [filteredMovies, setFilteredMovies] = useState([]); //para almacenar las películas filtradas

    const handleMovies = (event) => {
      setSearch(event.target.value)
    };


    useEffect (() => {
      // Filtra las películas cuando cambia el estado de búsqueda
      //Filtra las películas al hacer clic en el botón y almacenar el resultado en el estado []

      const filter = movies.filter((movie) =>
        movie.titulo.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filter);
    }, [search, movies]);



    return (
        <section className="container-movies">

          <div className='search-movie'>
            <input type='text' value={search} placeholder='Busca tu película...' onChange={handleMovies} />
          </div>

          <div className="each-movie">
             {filteredMovies.map((movie) => (
                  <Link to={`/detail/${movie._id}`} key={movie._id}>

                    <figure> 
                      <img src={movie.picture} alt='Carátula de película' />
                      <figcaption>
                        <span className="movie-name">{movie.titulo}</span>
                        <span className="movie-year">{movie.año}</span>
                    </figcaption>
                    </figure> 

                  </Link>

           
              ))}
          </div>
        </section>
      
      );
      
}

export default Movie;