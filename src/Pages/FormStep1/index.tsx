import { Header } from "../../Routers/Header";
import { InputArea } from "../../Components/InputArea";
import { Theme } from "../../Components/Theme";
import * as C from "./styles";

// FormStep1: Primeira etapa do formulário (Nome Completo)

export const FormStep1 = () => {

  return(
    <Theme>
      <C.Container>

        {/* Atualiza o header e decription da página, de acordo com passo atual */}
        <Header title="Pessoal" description="Queremos te conhecer melhor" />
        
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

        <button onClick={handleNextStep}>Próximo</button>

      </C.Container>
    </Theme>
  )
}