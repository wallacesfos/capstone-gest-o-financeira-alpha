import React, {useEffect} from 'react'
import { createContext, useState } from "react";
import axios from "axios";

export const FinanceContext = createContext({});



export const FinanceProvider = ({ children }) => {
    
    const [finances, setFinances] = useState([]);

    const [exits, setExits] = useState(finances.filter((item) => item.type.toLowerCase() === 'saida'))
    const [enters, setEnters] = useState(finances.filter((item) => item.type.toLowerCase() === 'entrada'))
    
    useEffect(() => {
        setExits(finances.filter((item) => item.type.toLowerCase() === 'saida'))
        setEnters(finances.filter((item) => item.type.toLowerCase() === 'entrada'))
    }, [finances])

    const storage = localStorage.getItem('@id_alpha')

    const handleFinance = async() => {
        await axios.get(`https://alpha-api-capstone.herokuapp.com/finances?userId=${storage}`)
        .then(response => {
            setFinances(response.data)
        })
    }

    const token = localStorage.getItem("@token_alpha")


    //Add finance
    const MonthlyData = async(data) => {
        await axios.post(`https://alpha-api-capstone.herokuapp.com/finances`, data,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
        .then(() => {
            handleFinance()
        })
        .catch(error => console.log(error))
    }


    //Remove Finance
    const RemoveMonthly = async(id) =>{
        axios.delete(`https://alpha-api-capstone.herokuapp.com/finances/${id}`, {
            userId: storage,
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
        .then(() =>{
            handleFinance()
        })
    }

    return (
        <FinanceContext.Provider value={{ handleFinance, finances, exits, enters, MonthlyData, RemoveMonthly }}>
          {children}
        </FinanceContext.Provider>
    );
}
