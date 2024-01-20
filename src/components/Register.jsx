import '../styles/_register.scss'
import Campanilla from "../images/campanilla.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './axios/api';
import BackButton from './BackButton';
import Mickey from '../images/mickeybtt.png'


function Register () {


    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInput = (event) => {
        const {id, value} = event.target;

        setFormData({
            //se ponen los ... para que se almacenen y no recargue sin guardar. Formadata es email y password, y una vez que se escriban nuevos los anteriores se guarden
            ...formData,
            // el valor se guarda en el [id], por eso se pone en corchetes, correspondiente de (email/password). el id tomar el valor del value
            [id]:value
        })
    }

    const compareUsers = async(event) => {
        event.preventDefault();
        try {
          const result = await API.post('users/register', formData);
          //console.log(result);
          navigate('/login');
        } catch (error){
          console.error(error);
        }
    
    }

   


    return (
        <>

        <section className="container-register">

            <BackButton/>

            {/* <div className='back-content'>
                <img src={Mickey} alt='Mickey icon' />
            </div> */}

            <div className='container-form'>

                <div className='register-img'>
                    <img src={Campanilla} alt='Campanilla' />
                </div>

                <h2>Registro</h2>

                <form className='register-form' onSubmit={compareUsers}>
                    <input className="register-info" type="email" placeholder='Email' id='email' onChange={handleInput}/>
                    <input className="register-info" type="password" placeholder='Password' id='password' onChange={handleInput}/>
                    <input type="submit" value="Registrarse" className='register-button'/> 
                </form>
            </div>

            <div className='back-content'>
                <img src={Mickey} alt='Mickey icon' />
            </div>
            
        </section>  
        </>
        
    )
}

export default Register;