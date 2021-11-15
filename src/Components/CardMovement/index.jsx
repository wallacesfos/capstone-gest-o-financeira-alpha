import React from 'react'
import {Container, Separator} from './style.js'

export default function CardMovement({image, title, values, type}){
    
    return(
        <Container>
            <Separator>   
                <img src={image} alt="movemetion-icon" />
                <p>{title}</p>
            </Separator>
            <p className={type}>{values.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </Container>
    )
}