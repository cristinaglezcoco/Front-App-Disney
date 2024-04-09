import { useNavigate } from "react-router-dom";
import Campanilla from "../images/campanilla.png"
import { API } from "./axios/api";
import { useContext, useState } from "react";
import '../styles/_login.scss'
import BackButton from "./BackButton";
import Mickey from '../images/mickeybtt.png'
import { MoviesContext } from "./context/moviesContext";



function Login () {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { setFavouriteMovies } = useContext(MoviesContext);


    const handleInput = (event) => {
        const {id, value} = event.target;

        setFormData({
            //se ponen los ... para que se almacenen y no recargue sin guardar. Formadata es email y password, y una vez que se escriban nuevos los anteriores se guarden
            ...formData,
            // el valor se guarda en el [id], por eso se pone en corchetes, correspondiente de (email/password). el id tomar el valor del value
            [id]:value
        })
    }

    const userLogin = async(event) => {
        event.preventDefault();
        try {
          const result = await API.post('users/login', formData);
          localStorage.setItem('user', JSON.stringify('user'), result.data.getUser)
          localStorage.setItem('user_id', JSON.stringify(result.data.getUser._id));
        //   //console.log(result.data.getUser._id);
          localStorage.setItem('token', result.data.token)
          //console.log('Token establecido correctamente:', localStorage.getItem('token'), 'User:', localStorage.getItem('user'));
          const storedFavourites = JSON.parse(localStorage.getItem("favouriteMovies"));
          if (storedFavourites) {
            setFavouriteMovies(storedFavourites);
          }
          navigate('/myarea');
        } catch (error){
          console.error(error);
        }
    }
      

    return (
    <>

        <section className="container-login">

            <BackButton/>

            <div className='container-form'>

                <div className='login-img'>
                    <img src={Campanilla} alt='Campanilla' />
                </div>

                <h2>Login</h2>

                <form className='login-form' onSubmit={userLogin}>
                    <input className="login-info" type="email" placeholder='Email' id='email' onChange={handleInput}/>
                    <input className="login-info" type="password" placeholder='Password' id='password' onChange={handleInput}/>
                    <input type="submit" value="Inicia sesión" className='login-button' /> 
                </form>

            </div>

            <div className='back-content'>
                <img src={Mickey} alt='Mickey icon' />
            </div>
            
        </section>  
        </>
    )
}

export default Login;