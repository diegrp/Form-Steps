import { FormProvider } from "./Contexts/FormContext";
import { Router } from "./Routers/router";

// FormSteps: app render final

const App = () => {
  return(
    <FormProvider>
      <Router/>
    </FormProvider>
  )
}

export default App;