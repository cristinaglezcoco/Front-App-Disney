import { useContext, useState} from "react";
import { CharactersContext } from "./context/charactersContext";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/_detailChar.scss'
import Icon from "../images/villiansandgood.png"
import BackButton from "./BackButton";

function DetailCharacterNew () {

    const {characters} = useContext(CharactersContext);

    // console.log(characters);

    const [showAllies, setShowAllies] = useState(false);
    const [showVillians, setShowVillians] = useState(false);


    const {nombre} = useParams();
    const navigate = useNavigate();
    const findCharacters = characters.find((character) => character.nombre === nombre)


    // useEffect(() => {
    //     if (!findCharacters) {
    //         navigate(-1);
    //     }
    // }, [findCharacters, navigate]);

    const revealAllies = (event) =>  {
        event.preventDefault();
        setShowAllies(!showAllies);
        setShowVillians(false);
    }

    const revealVillians = (event) =>  {
        event.preventDefault();
        setShowVillians(!showVillians);
        setShowAllies(false);
    }
    

        if(findCharacters) {
        return (
        <section className="container-detailchar">

                <BackButton/>

            <div className="detailchar-complete">
                <div className="detailchar-img">
                <img src={findCharacters.picture} alt={findCharacters.nombre} />
                </div>

                <div className="detailchar-info">

                    <div className="detailchar-info__content">
                        <div className={`container_defaultinfo ${showAllies || showVillians ? 'hidden' : ''}`}>

                            <h2>{findCharacters.nombre}</h2>
                            {findCharacters.actor && <h3>Actor: {findCharacters.actor}</h3>}
                            {findCharacters.actriz && <h3>Actriz: {findCharacters.actriz}</h3>}
                            <h3>Rol: {findCharacters.rol}</h3>
                            <ul>
                                <p>Descripción:</p>

                                    {findCharacters.descripcion.map((desc, index) => ( //desc = descripcion (cada una) y el index para la posicion, por eso se usa como key.
                                    <li key={index}>{desc}</li>
                                    ))}
                            </ul>
                        </div>

                        <div className={`container-villians ${showVillians ? 'visible' : ''}`}>
                            <ul className="villians-list">
                                {findCharacters.enemigos.length ? findCharacters.enemigos.map((item, index) => (
                                    <li className="villians-item" key={index}>{item}</li>
                                )) : <p>{findCharacters.nombre} no tiene enemigos</p>}
                            </ul>
                        </div>

                        <div className={`container-allies ${showAllies ? 'visible' : ''}`}>
                            <ul className="allies-list">
                                {findCharacters.aliados.length ? findCharacters.aliados.map((item, index) => (
                                    <li className="allies-item" key={index}>{item}</li>
                                )) : <p>{findCharacters.nombre} no tiene aliados</p>}
                            </ul>
                        </div>
                    </div>


                    <div className="good-villians">
                        <button className="good-villians__button" onClick={revealAllies}>Aliados</button>
                        <img src={Icon} alt="icon" />
                        <button className="good-villians__button" onClick={revealVillians}>Enemigos</button>
                    </div>
                </div>

            </div>

        </section>

        )} else {
            navigate(-1);
            return null;
        }
    
}


export default DetailCharacterNew;