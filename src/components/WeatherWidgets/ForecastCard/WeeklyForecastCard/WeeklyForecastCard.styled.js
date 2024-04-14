import styled from '@emotion/styled';

export const Container = styled.li``;

export const Block = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid transparent;
  border-color: #6382af;

  padding: 10px 0;
  /* height: 100%; */

  @media screen and (min-width: 1279px) {
    flex-direction: column;
    border: none;
    padding: 0;
  }
`;

export const BlockItem = styled.li``;

export const BlockTemp = styled.li``;

export const ImgDate = styled.img``;

export const MaxTemp = styled.div``;

export const MinTemp = styled.div`
  margin-top: 8px;

  @media screen and (min-width: 1279px) {
    margin: 0;
  }
`;
