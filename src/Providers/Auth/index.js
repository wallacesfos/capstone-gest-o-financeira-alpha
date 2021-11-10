import { createContext, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
    
    const history = useHistory()

    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem("@token_alpha") || ""
    );

    //Login
    const signIn = (userData) => {
        axios
          .post("https://alpha-api-capstone.herokuapp.com/login", userData)
          .then((response) => {
            //Token Putting without local storage
            localStorage.setItem("@token_alpha", response.data.accessToken);

            //Redirecting
            history.push('/dashboard')

            //Setting token in AuthToken
            setAuthToken(response.data.token);

          })
          .catch(() => {
                //mensage error
                toast.error("Conta não existe")
            });
    };


    //create account
    const signUp = (userData) => {
        axios.post('https://alpha-api-capstone.herokuapp.com/register', userData)
        .then((response) => {
            //redirecting
            //mensage success
            toast.success("Conta criada com sucesso!")
        })
        .catch((response) => {
            console.log(response)
            //mensage error
            toast.error("Conta já existe")
        })
    }


      // Application logout function
    const Logout = () => {
        //cleaning the localStorage
        localStorage.clear();

        // Clear state
        setAuthToken("");

        // Redirecting for login
        history.push("/");
    };

    return (
        <AuthContext.Provider value={{ authToken, Logout, signIn, signUp }}>
          {children}
        </AuthContext.Provider>
    );
}
