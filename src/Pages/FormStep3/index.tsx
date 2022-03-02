import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Head } from "../../Routers/Head";
import { Theme } from "../../Components/Theme";
import { InputArea } from "../../Components/InputArea";
import { useForm, FormActions } from "../../Contexts/FormContext";
import * as C from "./styles";

// FormStep3: Terceira etapa do formulário (E-mail e Github)

export const FormStep3 = () => {

  // Hook e router navigate

  const { state, dispatch, error, setError } = useForm();
  const navigate = useNavigate();
  
  // Validação do e-mail e github

  const [ validateEmail, setValidateEmail ] = useState<RegExpMatchArray | null>(null);
  const [ validateGithub, setValidateGithub ] = useState<RegExpMatchArray | null>(null);

  // Atualiza o step do formulário e verifica nosso nome

  useEffect(() => {
    if(state.name === ''){
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
  },[dispatch, navigate, state.name]);

  /* Verfica validação do email e github, e atualiza estado */

  useEffect( () => {
    let validEmail: RegExpMatchArray | null = state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    setValidateEmail(validEmail);
    let validGit: RegExpMatchArray | null = state.github.match(/^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/);
    setValidateGithub(validGit);
  },[state.email, state.github]);

  /* Atualização do input pela mudança do estado */
    
  const handleEmailChange = ( e: ChangeEvent <HTMLInputElement> ) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });

    /* Mostra erro pela verificação feita na validação do input */

    if(validateEmail === null){
      setError({ ...error, email: 'E-mail inválido', github: '', empty: '' });
    }else{
      setError({ ...error, email: ''});
    }
  }
  
  /* Atualização do input pela mudança do estado */

  const handleGithubChange = ( e: ChangeEvent <HTMLInputElement> ) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });

    /* Mostra erro pela verificação feita na validação do input */

    if(validateGithub === null){
      setError({ ...error, email: '', github:'Github inválido', empty: '' });
    }else{
      setError({ ...error, github: ''});
    }
  }
  
  // Vai para o próximo passo no formulário

  /* Avança para a próxima etapa se passar nas verficações de validação caso contrário retorna erro */

  const handleNextStep = () => {
    if(validateEmail && validateGithub !== null){
      navigate("/step4");
    }else if(state.email === "" && state.github === ""){
      setError({ ...error, email: '', github: '', empty:'Campo vazio' });
    }
  }

  return(
    <Theme>
      <C.Container>

        {/* Atualiza o header e decription da página, de acordo com passo atual */}
        <Head title="Contato" description="Como entrar em contato com você?" />
        
        <p>Step 3/4</p>
        <h1>Então {state.name}, como podemos te achar?</h1>
        <p>Preencha os campos abaixo, para entrarmos em contato com você</p>

        <hr/>

        <InputArea 
          label="Qual o seu e-mail?" 
          name="email"
          id="email" 
          type="email"
          value={state.email}
          onChange={handleEmailChange}
          onBlur={handleEmailChange}
          placeholder="Seu e-mail"
          autoComplete="off"
        />

        <InputArea 
          label="Qual o seu github?" 
          name="github"
          id="github" 
          type="url"
          value={state.github}
          onChange={handleGithubChange}
          onBlur={handleGithubChange}
          placeholder="Seu github"
          autoComplete="off"
        />

        <Link to="/step2" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar</button>

      </C.Container>
    </Theme>
  )
}