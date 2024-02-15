import styled from '@emotion/styled';

export const Section = styled.footer`
  max-width: 440px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  /* padding: 36px 20px 10px; */

  bottom: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  backdrop-filter: blur(50px);
`;

export const Contact = styled.p`
  font-size: 16px;
  color: #fff;

  margin: 0;
`;
