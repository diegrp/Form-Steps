import styled from "styled-components";

export const InputWrapper = styled.div`
 label{
    display: block;
    font-size: var(--size-small);
    color: #fff;
    margin-bottom: 15px;

    input{
      display: block;
      width: 100%;
      font-size: var(--size-small);
      padding: 20px 10px;
      margin-top: 7px;
      border: 2px solid var(--border-sidebar-input);
      border-radius: 10px;
      color: #fff;
      transition: 0.3s;
      background-color: transparent;
      outline: none;

      &:focus{
        border: 2px solid var(--border-sidebar-input-hover);
      }
    }
  }
`;