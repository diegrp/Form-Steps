import { Head } from "../../Routers/Head";
import { Theme } from "../../Components/Theme";
import { InputArea } from "../../Components/InputArea";
import * as C from "./styles";

// FormStep3: Terceira etapa do formulário (E-mail e Github)

export const FormStep3 = () => {

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