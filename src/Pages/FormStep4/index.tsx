import { Head } from "../../Routers/Head";
import { Theme } from "../../Components/Theme";
import * as C from "./styles";

// FormStep3: Quarta etapa do formulário (finalização do cadastro)

export const FormStep4 = () => {
  
  return(
    <Theme>
      <C.Container>
        
        {/* Atualiza o header e decription da página, de acordo com passo atual */}
        <Head title="Finalização" description="Relatório completo de seus dados" />

        <p>Step 4/4</p>
        <h1>Finalização do Cadastro</h1>
        <p>Parabéns {state.name}, segue abaixo seus dados cadastrais</p>
        
        <hr/>

        <C.Dados>
          <C.Icon>{state.level !== 0 ? "😎":"🥳"}</C.Icon>
          <C.List>
            <li>Nome: <span>{state.name}</span></li>
            <li>Nível Profissional: 
              <span style={{color: state.level !== 0 ? "green":"yellow"}}>
                {state.level !== 0 ? " Avançado":" Iniciante"}
              </span>
            </li>
            <li>E-mail: <span>{state.email}</span></li>
            <li>Github: <span>{state.github}</span></li>
          </C.List>
        </C.Dados>
        
        <hr/>

        <C.Button to="/">Revisar Cadastro</C.Button>
        
      </C.Container>
    </Theme>
  )
}