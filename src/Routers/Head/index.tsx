import { useEffect } from "react";

type Props = {
  title: string
  description: string
}

// FormSteps: Header e Description 

export const Header = ( { title, description }: Props ): null => {
  
  useEffect(() => {
    document.title = `Form Steps | ${title}` || "";
    const desc =  document.querySelector("meta[name='description']");
    desc?.setAttribute("content", description || "");
  },[title, description]);

  return null;
  
}