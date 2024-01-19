import { useNavigate } from 'react-router-dom'
import Mickey from '../images/mickeybtt.png'
import '../styles/_backButton.scss'

function BackButton() {

    const navigate = useNavigate();

    const goback = () => {
        navigate(-1);
    }

  return (
    <div className='backButton'>
       <button onClick={goback}  className="container-back">
        <img src={Mickey} alt="hadas" className="buttonImg"></img> 
        <span>Atrás</span>
        </button> 
    </div>
    
  )
}

export default BackButton