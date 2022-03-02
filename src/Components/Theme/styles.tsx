import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-color);
  color: #fff;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  margin: auto;
  max-width: 980px;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid var(--background-sidebar-bt);
`;

export const Page = styled.div`
  flex: 1;
  padding-top: 40px;
  padding-left: 40px;
`;

