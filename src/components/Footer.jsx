import LinkedInLogo from '../images/LinkedInLogo.png';
import GitHub from '../images/github.png';
import '../styles/_footer.scss'

function Footer() {
  return (

    <div className='container-media'>

        <div className='media-logos'>
            <a  className='logo' href='https://www.linkedin.com/in/cristina-gonz%C3%A1lez-532ba2197/' target='_blank' rel='noopener noreferrer'>
                <img src={LinkedInLogo} alt='Logo LinkedIn'/>
            </a>
            
            <a   className='logo' href='https://github.com/cristinaglezcoco' target='_blank' rel='noopener noreferrer'>
                <img src={GitHub} alt='Logo GitHub'/>
            </a>
        </div>
    </div>
    
       
  )
}

export default Footer