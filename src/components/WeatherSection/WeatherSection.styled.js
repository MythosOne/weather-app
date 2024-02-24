import styled from '@emotion/styled';

export const Section = styled.section`
  grid-area: weatherSection;

  max-width: 460px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  margin: 10px auto 40px;

  width: 90%;
  font-size: 16px;
  color: white;

  gap: 20px;

  @media screen and (min-width: 767px) {
    margin: 0;
  }
`;
