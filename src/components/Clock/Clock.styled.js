import styled from '@emotion/styled'

export const CurrentTimeHeader = styled.p`
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

export const CurrentTimeCard = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 12px;
  font-weight: 400;
`
