import styled from '@emotion/styled';

export const Section = styled.header`
  max-width: 460px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  padding: 0 10px 0;

  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  backdrop-filter: blur(50px);
`;

export const MenuBtn = styled.button`
  background-color: transparent;
  border: 0;

  cursor: pointer;
`;

