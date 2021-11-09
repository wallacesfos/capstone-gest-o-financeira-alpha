import {Container, ImageDiv, SigninDiv, Image, LoginForm, Paragrafo} from './style.js'
import AlphaImage from '../../Assets/Alpha.png'
import Person from '../../Assets/Icons/Person.png'
import Padlock from '../../Assets/Icons/Padlock.png'
import { useContext, useState } from 'react';
import {AuthContext} from '../../Providers/Auth'
import { Toaster } from 'react-hot-toast';




export default function Login(){

    const {signIn} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClick = () =>{
        const formData = {
            email: email,
            password: senha
        }
        console.log(formData)


        signIn(formData)
    }

    return(
        <Container>
            <Toaster />
            <ImageDiv>
            </ImageDiv>
            <SigninDiv>
                <Image src={AlphaImage} alt="Icon Alpha" />

                <LoginForm>
                    <div className="input-primary-div">
                        <img src={Person} alt="person" className="input-primary-image"/>
                        <input required className="input-primary" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="input-primary-div">
                        <img src={Padlock} alt="person" className="input-primary-image"/>
                        <input required className="input-primary" placeholder="Senha" onChange={e => setSenha(e.target.value)}/>
                    </div>
                </LoginForm>

                <button className="btn-primary" onClick={handleClick}>Entrar</button>
                <Paragrafo>Não é cadastrado? Cadastre-se</Paragrafo>
            </SigninDiv>
        </Container>
    )
}