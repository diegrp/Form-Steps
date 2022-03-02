import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--background-hr);

  h1{
    font-size: var(--size-title);
    font-weight: bold;
    margin-bottom: 7px;
  }

  p{
    font-size: var(--size-small);
    color: var(--color-p);
  }
`;
