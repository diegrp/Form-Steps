import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
  animation: animeInput 0.3s;

  @keyframes animeInput{
    to{
      opacity: 1;
      transform: initial;
    }
    from{
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;

export const Error = styled.div`
  label{
    display: block;
    font-size: var(--size-small);
    padding: 10px;
    color: red !important;
    border-radius: 20px;
    border: 1px solid red;
  } 
`;

