import { createContext, useEffect, useState } from "react";

export const CharactersContext = createContext();

export const CharactersProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://api-disney-six.vercel.app/characters')
        .then((response) => response.json())
        .then((result) => {
            setCharacters(result);       
            //console.log(result);
        })
    }, [])



    return(
        <CharactersContext.Provider value={{characters}}>
            {children}
        </CharactersContext.Provider>
    )
}