import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import { MoviesProvider } from "./context/moviesContext";
import Movie from "./Movie";
import Home from "./Home";
import Footer from "./Footer";
import { CharactersProvider } from "./context/charactersContext";
import Character from "./Character";
import DetailMovie from "./DetailMovie";
import Register from "./Register";
import { UserProvider } from "./context/userContext";
import Login from "./Login";
import '../styles/_app.scss';
import AuthRoute from "./AuthRoute";
import MyArea from "./MyArea";
import DetailCharacterNew from "./DetailCharacterNew";



function App() {
   

    return (

        <MoviesProvider>
        <CharactersProvider>
        <UserProvider>
            <div className="container-app">
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movie/>}/>
                <Route path="/characters" element={<Character/>}/>
                <Route path="/detail/:id" element={<DetailMovie/>} />
                <Route path="/detail/character/:nombre" element={<DetailCharacterNew/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/myarea" element={<AuthRoute element={<MyArea/>}/>}></Route>
            </Routes>

            <Footer/>
        </div>
        </UserProvider>
        </CharactersProvider>
        </MoviesProvider>
     
    )
}

export default App;
