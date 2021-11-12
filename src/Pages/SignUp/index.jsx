import React from 'react'
import {Container, ImageDiv, SigninDiv, Image} from './style.js'
import AlphaImage from '../../Assets/Alpha.png'
import Register from '../../Components/Register'




export default function SignUp(){

    return(
        <Container>
            <ImageDiv>
            </ImageDiv>
            <SigninDiv>
                <Image src={AlphaImage} alt="Icon Alpha" />

                <Register />
            </SigninDiv>
        </Container>
    )
}