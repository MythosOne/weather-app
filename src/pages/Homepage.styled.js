import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  position: relative;
  /* margin: 70px 0 20px; */
  /* margin: 20px 0; */

  @media screen and (min-width: 767px) {
    width: 708px;

    flex-direction: row;
    align-items: stretch;
    
    /* margin: 70px auto 20px; */

    gap: 10px;
  }

  @media screen and (min-width: 1279px) {
    width: 1040px;
    /* align-items: stretch; */

    margin: 20px auto;

    gap: 30px;
  }
`;

