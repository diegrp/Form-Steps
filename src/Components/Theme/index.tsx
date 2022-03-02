import { ReactNode } from "react";
import { useForm } from "../../Contexts/FormContext";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import * as C from "./styles";

type Props = {
  children: ReactNode
}

// Thema para nosso header, sidebar e page com etapas do nosso formulário

export const Theme = ( { children }: Props ) => {

  const { state } = useForm();

  return(
    <C.Container>
      <C.Wrapper>
        <C.Steps>
          <C.Sidebar>
            
            <Header/>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1 || state.currentStep === 4}
            />

            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2 || state.currentStep === 4}
            />

            <SidebarItem
              title="Contato"
              description="Como te achamos"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3 || state.currentStep === 4}
            />

          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Wrapper>
    </C.Container>
  )
}