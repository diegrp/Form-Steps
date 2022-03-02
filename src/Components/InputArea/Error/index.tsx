import { ErrorType } from "../../../Contexts/FormContext";
import * as C from "./styles";

type Props = {
  error: ErrorType
}

// Erro de validação: (name, email, github)

export const Error = ( { error }: Props ) => {
  return(
    <C.Container>
      {error.name && 
        <C.Error>
          <label>
            {error.name}
          </label>
        </C.Error>
      }
      {error.email && 
        <C.Error>
          <label>
            {error.email}
          </label>
        </C.Error>
      }
      {error.github && 
        <C.Error>
          <label>
            {error.github}
          </label>
        </C.Error>
      }

      {error.empty &&
        <C.Error>
          <label>
            {error.empty}
          </label>
        </C.Error>
      }
    </C.Container>
  )
}