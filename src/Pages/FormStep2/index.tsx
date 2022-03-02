import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Head } from "../../Routers/Head";
import { Theme } from "../../Components/Theme";
import { useForm, FormActions } from "../../Contexts/FormContext";
import { SelectOption } from "../../Components/SelectOption";
import * as C from "./styles";

// FormStep2: Segunda etapa do formulário (Nível Profissional - Iniciante e Avançado)

export const FormStep2 = () => {

  // Hook e router navigate

  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  // Atualiza o step do formulário e verifica nosso nome

  useEffect(() => {
    if(state.name === ''){
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  },[dispatch, navigate, state.name]);

  // Level Profissional 

  /* Atualiza nosso level ao clicar na opção */

  const setLevel = ( level: number ) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

  const handleNextStep = () => {
    navigate('/step3');
  }

  return(
    <Theme>
      <C.Container>
        
        {/* Atualiza o header e decription da página, de acordo com passo atual */}
        <Head title="Profissional" description="Qual Seu nível profissional?" />
        
        <p>Step 2/4</p>
        <h1>Olá {state.name}, como você melhor se define?</h1>
        <p>Selecione o nível de acordo com seu estado atual, profissionalmente</p>

        <hr/>

        <SelectOption
          title="Iniciante"
          description="Comecei programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Programador"
          description="Já estou programando há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>

      </C.Container>
    </Theme>
  )
}