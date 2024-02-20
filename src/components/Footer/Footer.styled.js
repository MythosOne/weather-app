import styled from '@emotion/styled';

export const Section = styled.footer`
  max-width: 460px;
  /* height: 50px; */

  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-areas:
    'logo git arrowUp'
    'copyright copyright copyright';
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  margin: 0 auto;

  padding: 10px ;

  border-top: 2px solid transparent;
  border-image: radial-gradient(circle, #a3d4ff, transparent) 1 0%;

  /* padding: 36px 20px 10px; */

  /* bottom: 0;
  left: 0;
  position: sticky;
  z-index: 1100; */

  backdrop-filter: blur(50px);
`;

export const Copyright = styled.span`
  grid-area: copyright;
   text-align: center;

  /* width: 100px; */

  /* font-family: 'Fira Sans'; */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.15;

  color: #f0f3f4;

  margin: 0;
`;

export const ArrowUpBtn = styled.a`
  grid-area: arrowUp;

  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background: #a3d4ff;
  border: 0;

  stroke: #012c77;

  &:hover {
    stroke: #a3d4ff;
    background: #2977bd;

    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 767px) {
  }
`;

export const GitLink = styled.a`
  grid-area: git;
`;
