import { ChangeEvent } from "react";
import * as C from "./styles";

type Props = {
  label: string
  id: string
  name: string
  type: string
  value: number | string
  onChange: ( e: ChangeEvent <HTMLInputElement> ) => void
  onBlur: ( e: ChangeEvent <HTMLInputElement> ) => void
  placeholder: string
  [x:string]: any
}

// Input element do formulário

export const InputArea = ( { label, id, name, type, value, onChange, onBlur, placeholder, ...rest }: Props ) => {
  
  return(
    <C.InputWrapper>
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onChange}
          placeholder={placeholder}
          {...rest}
        />
      </label>
    </C.InputWrapper>
  )
}