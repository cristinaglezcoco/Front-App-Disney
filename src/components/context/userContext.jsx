import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-disney-six.vercel.app/users');
                setUsers(response.data);
            } catch (error) {
                console.error("Error en la solicitud Axios:", error);
                // Manejar el error según sea necesario
            }
        };

        //llamada de la funcion creada para hacer la peticion(axios) de manera asincrona
        fetchData();
    }, []); // El segundo argumento de useEffect es la dependencia, si está vacío se ejecuta una vez al montarse el componente

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    );
};
