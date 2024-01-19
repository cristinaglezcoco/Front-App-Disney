

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MoviesContext } from "./context/moviesContext";
import '../styles/_detailmovie.scss'
import BackButton from "./BackButton";

function DetailMovie() {
    const { movies } = useContext(MoviesContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const findMovie = movies.find((movie) => movie._id === id);

    useEffect(() => {
        // Llamada a navigate() dentro del efecto
        if (!findMovie) {
            navigate(-1);
        }
    }, [findMovie, navigate]);

   
        return (
            <>
                <section className="container-detailmovie">
                    <div className="detail-movie">
                        <div className="backButton">
                            <BackButton />
                        </div>
                        <div className="detail-movie__complete">
                            <div className="detail-movie__img">
                                <img src={findMovie.picture} alt={findMovie.titulo} />
                            </div>
                            <div className="detail-movie__info">
                                <h2>{findMovie.titulo}</h2>
                                <ul>
                                    <li><span>Direccion:</span> <span>{findMovie.director}</span></li>
                                    <li><span>Año:</span> <span>{findMovie.año}</span></li>
                                    <li><span>Género:</span> <span>{findMovie.genero}</span></li>
                                    <li>{`"${findMovie.sinopsis}"`}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="detail-movie__characters">
                        <h2>Personajes principales:</h2>
                        <div className="each-character">
                            {findMovie.personajes.map((character) => (
                                <section key={character._id} className="each-character__info">
                                    <img src={character.picture} alt={character.nombre} />
                                    <h2>{character.nombre}</h2>
                                </section>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
}

export default DetailMovie;
