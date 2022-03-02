import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  cursor: pointer;
  
  a{
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 15px;
`;

export const Title = styled.div`
  font-size: var(--size-medium);
  font-weight: bold;
  text-align: right;
  margin-bottom: 5px;
  color: #fff;
`;

export const Description = styled.div`
  font-size: var(--size-small);
  color: var(--color-p);
  text-align: right;
`;

export const IconArea = styled.div<{ active:boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.active ? "var(--border-sidebar-input-hover)":"var(--background-sidebar-bt)"};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Point = styled.div<{ active:boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? "var(--border-sidebar-input-hover)":"var(--background-sidebar-bt)"};
  border: 3px solid var(--border-sidebar-input);
  border-radius: 50%;
  margin-left: 20px;
  margin-right: -6px;
`;