import styled from '@emotion/styled';

export const Section = styled.header`
  max-width: 460px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  padding: 0 20px 0;

  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;

  backdrop-filter: blur(50px);

  border-bottom: 2px solid transparent;
  border-image: radial-gradient( circle, #a3d4ff, transparent ) 1 0%;
`;

export const MenuBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: 0;

  cursor: pointer;
`;

