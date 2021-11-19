import React from 'react'
import { AuthProvider } from "./Auth"
import { FinanceProvider } from './Finances'


export default function Providers({children}){
    
    return(
        <AuthProvider>
            <FinanceProvider>
            {children}
            </FinanceProvider>
        </AuthProvider>
    )
}