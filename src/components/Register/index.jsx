import { useForm } from 'react-hook-form';
import {yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { TextField } from "@material-ui/core"
import { useContext } from 'react';
import {AuthContext} from '../../Providers/Auth'
import { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';


export default function Register(){
    const {signUp} = useContext(AuthContext)
    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        name: yup.string().required("Campo obrigatório"),
        password: yup.string().min(8, "Mínimo de 8 dígitos").matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!").required("Campo obrigatório"),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')    
    });

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)}) 

    function handleForm(data){
        const formData = {
            email: data.email,
            password: data.password,
            name: data.name,
        }
        signUp(formData)
    }

    return(
        <form className="form" onSubmit={handleSubmit(handleForm)}>
            <Toaster />
            <div className="divTexts">
                
                <TextField 
                id="outlined-required"
                variant="standard"
                size="small"
                color="primary"
                margin="normal"
                label="Nome"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                className="inputs-register"

                />
            </div>
          
            <div className="divTexts">
                <TextField 
                id="outlined-required"
                variant="standard"
                size="small"
                color="primary"
                margin="normal"
                label="Email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                className="inputs-register"

                />
            </div>

            <div className="divTexts">
                <TextField 
                id="outlined-required"
                variant="standard"
                size="small"
                color="primary"
                margin="normal"
                label="Senha"
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                className="inputs-register"

                />
            </div>
            <div className="divTexts">
                <TextField 
                id="outlined-required"
                variant="standard"
                size="small"
                color="primary"
                margin="normal"
                label="Confirme senha"
                type="password"
                {...register("passwordConfirmation")}
                error={!!errors.passwordConfirmation}
                helperText={errors.passwordConfirmation?.message}
                className="inputs-register"
                />
            </div>

            <button className="btn-primary" type="submit">Registrar</button>
            <p className="text-primary" onClick={() => history.push('/')}>Já é cadastrado? Faça Login</p>
        </form>
    )
}