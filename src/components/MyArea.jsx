import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from "./context/moviesContext";
import Favourite from '../images/favourite.png'; 
import { Link, useNavigate } from 'react-router-dom'; 
import "../styles/_myarea.scss";


function MyArea() {
  const { movies } = useContext(MoviesContext);

  const userId = localStorage.getItem("user_id");

  const [favMovies, setFavMovies] = useState(() => {
    const storedFavMovies = localStorage.getItem(`favMovies_${userId}`);
    return storedFavMovies ? JSON.parse(storedFavMovies) : [];
  });

  const [copiedMovies, setCopiedMovies] = useState(() => {
    const storedCopiedMovies = localStorage.getItem(`copiedMovies_${userId}`);
    return storedCopiedMovies ? JSON.parse(storedCopiedMovies) : movies;
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    const userFavMovies = JSON.parse(localStorage.getItem(`favMovies_${userId}`)) || [];
    setFavMovies(userFavMovies);

    // Actualizar copiedMovies al inicio para eliminar las películas favoritas
    const updatedMovies = movies.filter(movie => !userFavMovies.some(favMovie => favMovie._id === movie._id));
    // console.log(updatedMovies);
    setCopiedMovies(updatedMovies);
  }, [userId, movies]);

  useEffect(() => {
    // Actualizar el almacenamiento local para copiedMovies cuando cambie
    localStorage.setItem(`copiedMovies_${userId}`, JSON.stringify(copiedMovies));
  }, [copiedMovies, userId]);

  const addFavMovie = (movie) => {
    // Añadir la película a la lista de películas favoritas del usuario
    setFavMovies([...favMovies, movie]);

    // Eliminar la película de la lista original de películas del usuario
    const updatedMovies = copiedMovies.filter((m) => m._id !== movie._id);
    setCopiedMovies(updatedMovies);
    
    // Actualizar las películas favoritas del usuario en el almacenamiento local
    localStorage.setItem(`favMovies_${userId}`, JSON.stringify([...favMovies, movie]));
    // Actualizar copiedMovies en el almacenamiento local
    localStorage.setItem(`copiedMovies_${userId}`, JSON.stringify(updatedMovies));
    
  }


  const logOutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");

    navigate("/");
  };

  return (
    <>
      <div className="container-myarea">   
        <div className="movies-pictures-container">
          <h2>Películas</h2>
          <div className="movies-pictures">
            {copiedMovies.map((movie) => (
              <div key={movie._id} onClick={() => addFavMovie(movie)}>
                <img src={movie.picture} alt="Cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="favorite-movies-container">   
          <div className="favourites-title">
            <img src={Favourite} alt="Favourite Icon" />
            <h2>Favoritas</h2>
          </div>      
          <div className="favorite-movies">
            {favMovies.map((movie) => (
              <div key={movie._id}>
                <img src={movie.picture} alt="Cover" />
              </div>
            ))}

          </div>
        </div>
      </div>

      <input type="button" value="Cerrar Sesión" onClick={logOutUser} />
    </>
  )
}

export default MyArea;

