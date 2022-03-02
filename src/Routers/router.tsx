import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas do nosso formulário

import { FormStep1 } from "../Pages/FormStep1";  
import { FormStep2 } from "../Pages/FormStep2";  
import { FormStep3 } from "../Pages/FormStep3";  
import { FormStep4 } from "../Pages/FormStep4";  
import { NotFound } from "./NotFound";

// Router para nossas páginas do formulário

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormStep1/>} />
        <Route path="/step2" element={<FormStep2/>} />
        <Route path="/step3" element={<FormStep3/>} />
        <Route path="/step4" element={<FormStep4/>} />
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </BrowserRouter>
  )
}