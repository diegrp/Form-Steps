import styled from "styled-components";

export const Container = styled.div<{ selected:boolean }>`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #16195c;
  margin-bottom: 15px;
  border: 2px solid ${props => props.selected ? "var(--border-sidebar-input-hover)":"var(--background-sidebar-bt)"};
  cursor: pointer;

  &:hover{
    border: 2px solid var(--border-sidebar-input);
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 15px;
`;

export const Icon = styled.div`
  font-size: 25px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--background-emoji-bthover);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: var(--size-medium);
  font-weight: bold;
  color: #fff;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: var(--size-small);
  color: var(--color-p);
`;