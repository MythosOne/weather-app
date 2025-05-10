import styled from '@emotion/styled';

export const Section = styled.section`
  grid-area: weatherSection;

  padding: 0 10px;
  margin: 70px auto 20px;

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
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
