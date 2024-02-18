import styled from '@emotion/styled';

export const Section = styled.footer`
  max-width: 460px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  padding: 0 20px 0;

  border-top: 2px solid transparent;
  border-image: radial-gradient( circle, #a3d4ff, transparent ) 1 0%;
  
  /* padding: 36px 20px 10px; */

  /* bottom: 0;
  left: 0;
  position: sticky;
  z-index: 1100; */

  backdrop-filter: blur(50px);
`;

export const Contact = styled.span`
  width: 100px;

  /* font-family: 'Fira Sans'; */
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.15;

  color: #f0f3f4;

  margin: 0;
`;
