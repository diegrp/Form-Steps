import { ChangeEvent, useEffect, useState } from "react";
import { Head } from "../../Routers/Head";
import { useNavigate } from "react-router-dom";
import { InputArea } from "../../Components/InputArea";
import { Theme } from "../../Components/Theme";
import { Error } from "../../Components/InputArea/Error";
import { useForm, FormActions } from "../../Contexts/FormContext";
import * as C from "./styles";

// FormStep1: Primeira etapa do formulário (Nome Completo)

export const FormStep1 = () => {
  
  // Hook e router navigate

  const { state, dispatch, error, setError } = useForm();
  const navigate = useNavigate();

  // Validação do nome

  const [ validateName, setValidateName ] = useState<RegExpMatchArray | null>(null);

  // Atualiza o step do formulário

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  },[dispatch, state.name]);

  /* Verfica validação do nome e atualiza estado */

  useEffect( () => {
    let validName: RegExpMatchArray | null = state.name.match(/[A-Z][a-z]* [A-Z][a-z]*/);
    setValidateName(validName);
  },[state.name]);


  /* Atualização do input pela mudança do estado */

  const handleNameChange = ( e: ChangeEvent <HTMLInputElement> ) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });

    /* Mostra erro pela verificação feita na validação do input */

    if(validateName === null){
      setError({ ...error, name:'Nome inválido', empty: '' });
    }else{
      setError({ ...error, name: '' });
    }
  }

  // Vai para o próximo passo no formulário

  /* Avança para a próxima etapa se passar nas verficações de validação caso contrário retorna erro */
  const handleNextStep = () => {
    if(validateName !== null && state.name !== ''){
      navigate('/step2');
    }else if(state.name === ''){
      setError({ ...error, name: '', empty:'Campo vazio' });
    }
  }

  return(
    <Theme>
      <C.Container>

        {/* Atualiza o header e decription da página, de acordo com passo atual */}
        <Head title="Pessoal" description="Queremos te conhecer melhor" />
        
        <p>Step 1/4</p>
        <h1>Vamos começar pelo seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr/>

        <InputArea 
          label="Nome Completo" 
          name="name"
          id="name" 
          type="text"
          value={state.name}
          onChange={handleNameChange}
          onBlur={handleNameChange}
          placeholder="Nome Completo"
          autoFocus
          autoComplete="off"
        />

        {/* Retorna errors de acorda com a verficação */}
        {error.name !== "" && <Error error={error}/>}
        {error.empty !== "" && <Error error={error}/>}

        <button onClick={handleNextStep}>Próximo</button>

      </C.Container>
    </Theme>
  )
}