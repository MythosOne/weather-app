import styled from '@emotion/styled';

export const Section = styled.section`
  grid-area: weatherSection;

  /* max-width: 460px */

  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-start;
  align-items: stretch; */
  /* gap: 20px; */
  padding: 0 10px;
  margin: 70px auto 20px;

  /* width: 75%; */

  font-size: 16px;
  color: white;

  @media screen and (min-width: 767px) {
    padding: 0;
    margin: 0;

    min-width: 460px;

    margin: 20px auto;
  }

  @media screen and (min-width: 1279px) {
    padding: 0;
    max-width: none;

    width: 740px;

    /* margin:0 auto ; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
