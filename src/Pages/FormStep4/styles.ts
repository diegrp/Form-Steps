import { Link } from "react-router-dom";
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
`;

export const Dados = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 30px;
  width: 60px;
  height: 60px;
  background-color: var(--background-emoji-bthover);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  flex: 1;
  margin-left: 15px;
  list-style-type: none;
  list-style-position: inside;
  font-size: var(--size-small);
  font-weight: bold;

  span{
    color: var(--color-p);
    font-weight: normal;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  font-size: var(--size-medium);
  color: #fff;
  background-color: var(--background-sidebar-bt);
  font-weight: bold;
  transition: 0.3s linear;
  border: none;
  text-decoration: none;
  padding: 20px 40px;
  border-radius: 40px;
  cursor: pointer;

  &:hover{
    background-color: var(--background-emoji-bthover);
  }

`;