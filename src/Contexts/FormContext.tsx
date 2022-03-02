import { useContext, createContext, useReducer, useState, ReactNode } from "react";

// FormContext

const FormContext = createContext<ContextType | undefined>(undefined);

// Types: dataInitial, Errors, Context, Action, FormProvider e FormActions

export type State = {
  currentStep: number
  name: string
  level: number
  email: string
  github: string
}

export type ErrorType = {
  name: string,
  email: string,
  github: string,
  empty: string
}

type ContextType = {
  state: State
  dispatch: ( action: Action ) => void
  error: ErrorType
  setError: ( error: ErrorType ) => void
}

type Action = {
  type: FormActions
  payload: any
}

type FormProviderProps = {
  children: ReactNode
}

export enum FormActions{
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

// Estados inciais: Data e Erros na validação

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0 && 0 | 1,
  email: '',
  github: ''
}

const initialError: ErrorType = {
  name:'',
  email: '',
  github: '',
  empty: ''
}

// formReducer: dispatch (state, action)

const formReducer = ( state: State, action: Action ) => {
  switch(action.type){
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return { ...state };
  }
}

// FormProvider: state, dispatch, error, setError

export const FormProvider = ( { children }: FormProviderProps ) => {

  const [ state, dispatch ] = useReducer(formReducer, initialData);
  const [ error, setError ] = useState(initialError);

  const value = { state, dispatch, error, setError };

  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

// useForm: hook para pega nossos valores e provider

export const useForm = () => {
  const context = useContext(FormContext);
  if(context === undefined){
    throw new Error('useForm precisa estar dentro do FormProvider');
  }
  return context;
}