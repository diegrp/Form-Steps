import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-color);
  color: #fff;
`;

export const InfoArea = styled.div`
  min-height: 100vh;
  margin: auto;
  padding: 0 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1{
    font-size: var(--size-title);
    font-weight: bold;
  }

  p{
    font-size: var(--size-large);
    color: var(--color-p);
  }
`;