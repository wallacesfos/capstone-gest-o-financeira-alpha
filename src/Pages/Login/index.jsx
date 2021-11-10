import {Container, ImageDiv, SigninDiv, Image, LoginForm, Paragrafo} from './style.js'
import AlphaImage from '../../Assets/Alpha.png'
import Person from '../../Assets/Icons/Person.png'
import Padlock from '../../Assets/Icons/Padlock.png'
import { useContext, useState } from 'react';
import {AuthContext} from '../../Providers/Auth'
import { Toaster } from 'react-hot-toast';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';





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
                    <div className="divTexts">
                        <TextField 
                        required
                        id="outlined-required"
                        variant="standard"
                        size="small"
                        color="primary"
                        margin="normal"
                        label="Email"
                        className="inputs-register"
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Person} alt="person" />
                            </InputAdornment>
                            ),
                        }}

                        />
                    </div>

                    <div className="divTexts">
                        <TextField 
                        required
                        id="outlined-required"
                        variant="standard"
                        size="small"
                        color="primary"
                        margin="normal"
                        label="Senha"
                        type="password"
                        className="inputs-register"
                        onChange={(e) => setSenha(e.target.value)}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Padlock} alt="person" className="padlock"/>
                            </InputAdornment>
                            ),
                        }}
                        />
                    </div>
                </LoginForm>

                <button className="btn-primary" onClick={handleClick}>Entrar</button>
                <Paragrafo>Não é cadastrado? Cadastre-se</Paragrafo>
            </SigninDiv>
        </Container>
    )
}