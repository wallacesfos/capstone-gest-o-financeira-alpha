import React from 'react'
import { createContext, useState } from "react";
import axios from "axios";

export const FinanceContext = createContext({});



export const FinanceProvider = ({ children }) => {
    
    const [finances, setFinances] = useState([]);
    
    const exits = finances.filter((item) => item.type === 'saida')
    const enters = finances.filter((item) => item.type === 'entrada')

    const handleFinance = async() => {
        const storage = localStorage.getItem('@id_alpha')
        await axios.get(`https://alpha-api-capstone.herokuapp.com/finances?userId=${storage}`)
        .then(response => {
            setFinances(response.data)
        })

    }

    return (
        <FinanceContext.Provider value={{ handleFinance, finances, exits, enters }}>
          {children}
        </FinanceContext.Provider>
    );
}
