import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({children}) => {

    const [movies, setMovies] = useState([]);

    const updateMovies = (newMovies) => {
        setMovies(newMovies);
      };


    useEffect(() => {
        fetch('https://api-disney-six.vercel.app/movies')
        .then((response) => response.json())
        .then((result) => {
            setMovies(result);
            //console.log(result);
        })
    }, [])

    return (
        <MoviesContext.Provider value={{movies, updateMovies}}>
            {children}
        </MoviesContext.Provider>
    )
}