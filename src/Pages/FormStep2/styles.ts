import styled from "styled-components";

export const Container = styled.div`
  p{
    font-size: var(--size-small);
    color: var(--color-p);
    margin-bottom: 7px;
  }

  h1{
    font-size: var(--size-large);
    font-weight: bold;
    margin-bottom: 7px;
    color: #fff;
  }

  hr{
    height: 1px;
    border: none;
    background-color: var(--background-hr);
    margin: 20px 0;
  }

  label{
    display: block;
    font-size: var(--size-small);
    color: #fff;
    margin-bottom: 15px;
  }

  button{
    font-size: var(--size-medium);
    color:#fff;
    background-color: var(--background-sidebar-bt);
    font-weight: bold;
    padding: 20px 40px;
    border: none;
    border-radius: 40px;
    margin: 10px 0;
    transition: 0.3s linear;
    cursor: pointer;
  
    &:hover{
      background-color: var(--background-emoji-bthover);
    }
  
  }

  .backButton{
    color: var(--color-p);
    padding: 20px 40px;
  }
`;