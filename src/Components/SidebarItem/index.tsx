import { Link } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../../Svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../Svgs/book.svg";
import { ReactComponent as MailIcon } from "../../Svgs/mail.svg";
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
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === 'profile' && 
            <ProfileIcon fill="white" width={24} height={24} />
          }
          {icon === 'book' && 
            <BookIcon fill="white" width={24} height={24} />
          }
          {icon === 'mail' && 
            <MailIcon fill="white" width={24} height={24} />
          }
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  )
}