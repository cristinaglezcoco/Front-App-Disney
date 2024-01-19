import { useContext, useEffect, useState } from "react"
import { CharactersContext } from "./context/charactersContext"
import '../styles/_character.scss'
import { Link } from "react-router-dom";

function Character() {

    const {characters} = useContext(CharactersContext);

    const [search, setSearch] = useState("");

    const [filteredChar, setFilteredChar] = useState([]); 

    const handleChar = (event) => {
        setSearch(event.target.value)
    };

    useEffect (() => {
  
        const filter = characters.filter((char) =>
          char.nombre.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredChar(filter);
      }, [search, characters]);


    return (
        <section className="container-characters">

            <div className='search-characters'>
                <input type='text' value={search} placeholder='Búsqueda...' onChange={handleChar} />
            </div>

            <div className="each-char">
                {filteredChar.map((character) => (

                    <Link to={`/detail/character/${character.nombre}`} key={character._id}>
                        <figure>
                            <img src={character.picture} alt={character.nombre} />
                            <figcaption>
                                <span>{character.nombre}</span>
                                <span> Rol: {character.rol}</span>
                            </figcaption>
                        </figure>  
                    </Link>
                ))}
            </div>
        </section>
    );

}

export default Character;