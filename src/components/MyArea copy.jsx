import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "./context/moviesContext";
import "../styles/_myarea.scss";

function MyArea() {
  const { movies } = useContext(MoviesContext);
  // //console.log(movies);

  const [modifyMovies, setModifyMovies] = useState(movies);
  // //console.log(modifyMovies);

  const [favouriteMovies, setFavouriteMovies] = useState([]);


  useEffect(() => {
    // Actualiza el estado de modifyMovies cuando movies cambia
    setModifyMovies(movies);
  }, [movies]);

  const deleteMovies = (movieId) => {
    const filteredMovies = () => {
      return modifyMovies.filter((movie) => movie._id !== movieId);
    };
  
    const addFavourites = () => {
      const deletedMovie = modifyMovies.find((movie) => movie._id === movieId);
      return [...favouriteMovies, deletedMovie];
    };
  
    // Llama a las funciones y actualiza los estados
    setModifyMovies(filteredMovies());
    setFavouriteMovies(addFavourites());
  };
  

  const navigate = useNavigate();

  const logOutUser = () => {
    //console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="container-myarea">
        <div className="movies-pictures">
          {modifyMovies.map((movie) => (
            <img
              src={movie.picture}
              alt="Cover"
              key={movie._id}
              onClick={() => deleteMovies(movie._id)}
            />
          ))}
        </div>
        <div className="favorite-movies">
          {favouriteMovies.map((movie) => (
            <img src={movie.picture} alt="Cover" key={movie._id} />
          ))}
        </div>
      </div>

      <input type="button" value="Cerrar Sesión" onClick={logOutUser} />
    </>
  );
}

export default MyArea;
