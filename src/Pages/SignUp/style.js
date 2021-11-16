import styled from 'styled-components'
import AlphaGif from '../../Assets/Alpha.gif'


export const Container = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    display: flex;
`

export const ImageDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${AlphaGif});
    background-size: cover;
    background-position: center;

    
    @media(max-width: 768px){
        display: none;
    }
`

export const Image = styled.img`
    height: 254px;
    margin-bottom: 20px;
`

export const SigninDiv = styled.div`
    width: 500px;
    min-height: 100vh;
    background-color: #222A39;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    align-items: center;    
    @media(max-width: 768px){
        width: 100%;
    }
`

export const RegisterForm = styled.div`
    margin: 50px 0 2px 0;
    display: flex;
    flex-direction: column;
    height: 330px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const Paragrafo = styled.p`
    margin-top: 20px;
    color: #19A19C;
    cursor: pointer;
`