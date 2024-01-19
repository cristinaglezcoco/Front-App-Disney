import Dvideo from '../video/disneypic.mp4'
import '../styles/_home.scss'

const Home = () => {
        return (
          <main className="container-video">
            <div>
              <video autoPlay loop muted controls>
                <source src={Dvideo} type="video/mp4"  />
              </video>
            </div>
          </main>
        );
}

export default Home;