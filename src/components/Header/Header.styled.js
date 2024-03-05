import styled from '@emotion/styled';

export const Section = styled.header`
  width: 90%;
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
  border-image: radial-gradient(circle, #a3d4ff, transparent) 1 0%;

  @media screen and (min-width: 767px) {
    max-width: none;

    width: 708px;
    /* margin: 0 auto; */
    backdrop-filter: none;
    z-index: 1100;

    backdrop-filter: blur(10px);
  }

  @media screen and (min-width: 1279px) {
    width: 1040px;

  }
`;

export const MenuBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: 0;

  cursor: pointer;

  fill: #a3d4ff;

  &:hover {
    fill: #2977bd;

    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const BlockClock= styled.div`
display: flex;
flex-direction: column;
`

export const CurrentTime = styled.p`
  display: none;

  @media screen and (min-width: 767px) {
    display: block;

    font-family: 'Nanum Gothic', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.15px;

    color: #a3d4ff;
  }
`;

export const CurrentDate = styled.span`
  display: none;

  @media screen and (min-width: 767px) {
    display: block;

    font-family: 'Nanum Gothic', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.15px;

    color: #fff300;
  }
`;
