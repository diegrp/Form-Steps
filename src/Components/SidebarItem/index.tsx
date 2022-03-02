import * as C from "./styles";

type Props = {
  title: string
  description: string
  icon: string
  path: string
  active: boolean
}

// Seleção da etapa do formulário pela sidebar

export const SidebarItem = ( { title, description, icon, path, active }: Props ) => {
  return(
    <div>
      ...
    </div>
  )
}