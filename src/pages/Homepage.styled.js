import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  position: relative;
  margin: 20px 0;

  @media screen and (min-width: 767px) {
    width: 708px;

    flex-direction: row;
    align-items: flex-start;
    
    margin: 20px auto;

    gap: 10px;
  }

  @media screen and (min-width: 1279px) {
    width: 1040px;

    gap: 30px;
  }
`;

