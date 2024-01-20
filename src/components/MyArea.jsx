import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "./context/moviesContext";
import "../styles/_myarea.scss";
import Favourite from '../images/favourite.png'

function MyArea() {
  const { movies } = useContext(MoviesContext);
  const userId = localStorage.getItem('user_id');
  const [modifyMovies, setModifyMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState(
    JSON.parse(localStorage.getItem(`${userId}_favouriteMovies`)) || []
  );

  useEffect(() => {
    // Combina las películas originales con las favoritas y elimina duplicados
    const combinedMovies = [...movies, ...favouriteMovies];
    const uniqueMovies = Array.from(new Set(combinedMovies.map(movie => movie._id)))
      .map(movieId => combinedMovies.find(movie => movie._id === movieId));

    setModifyMovies(uniqueMovies);
  }, [movies, favouriteMovies]);

  const deleteMovies = (movieId) => {
    const filteredMovies = modifyMovies.filter((movie) => movie._id !== movieId);

    const deletedMovie = modifyMovies.find((movie) => movie._id === movieId);
    const updatedMovies = [...favouriteMovies, deletedMovie];
    localStorage.setItem(`${userId}_favouriteMovies`, JSON.stringify(updatedMovies));

    setModifyMovies(filteredMovies);
    setFavouriteMovies(updatedMovies);
  };

  const navigate = useNavigate();

  const logOutUser = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="container-myarea">
      
        <div className="movies-pictures-container">
          <h2>Películas</h2>
          <div className="movies-pictures">
            {modifyMovies.map((movie) => (
              <div key={movie._id} onClick={() => deleteMovies(movie._id)}>
                <img src={movie.picture} alt="Cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="favorite-movies-container">
        
          <div className="favourites-title">
            <img src={Favourite} />
            <h2>Favoritas</h2>
          </div>
          
          <div className="favorite-movies">
            {favouriteMovies.map((movie) => (
              <div key={movie._id}>
                <img src={movie.picture} alt="Cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <input type="button" value="Cerrar Sesión" onClick={logOutUser} />
    </>
  );
}

export default MyArea;
