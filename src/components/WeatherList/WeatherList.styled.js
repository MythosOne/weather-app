import styled from '@emotion/styled';

export const Container = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;

  overflow: hidden;
  height: 480px;
`;

export const ScrollableList = styled.ul`
  /* max-height: 98%; */
  overflow-y: auto;

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(240, 243, 244, 0.5);
  }
  &::-webkit-scrollbar {
    width: 8px;
    background: rgba(240, 243, 244, 0.1);
    border-radius: 10px;
  }
  /* &::-webkit-scrollbar-track {
    background: rgba(240, 243, 244, 0.1);
    border-radius: 10px;
  } */

`;
