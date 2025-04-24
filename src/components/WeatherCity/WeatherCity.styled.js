import styled from '@emotion/styled';

export const WeatherBar = styled.section`
  grid-area: weatherBar;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;

  width: 250px;
  height: 100%;
  background-color: rgb(21, 72, 149, .6);
  backdrop-filter: blur(10px);
  transform: translateX(${props => props.dataOffset}%);
  transition: 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 10px 0px;

  @media screen and (min-width: 767px) {
    transform: none;
    z-index: 101;

    position: sticky;
    /* top: 70px; */

    margin: 20px auto;

    max-width: 260px;
    height: inherit;

    border-radius: 12px;

    /* background-color: rgb(21, 72, 149, 0.9); */
  }

  @media screen and (min-width: 1279px) {
    width: 280px;
    align-self: stretch;

    /* margin: 0 auto; */
  }
`;

export const BlockBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;

  margin-left: 10px;
  margin-bottom: 5px;

  text-align: left;
  color: rgba(240, 243, 244, 0.9);
`;

export const ListBtn = styled.button`
  padding: 0;
  background-color: inherit;
  border: 0;

  cursor: pointer;

  fill: #a3d4ff;

  &:hover {
    fill: #2977bd;
    transition: all 0.2s ease-in-out;
  }
`;

export const CloseBtn = styled.button`
  padding: 0;
  background-color: inherit;
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

export const CardList = styled.div`
  list-style: none;

  overflow: hidden;
  
  height: 88%;

  @media screen and (min-width: 768px) {
    height: 715px;
  };

  @media screen and (min-width: 1279px) {
    height: 600px;
  };
`;

export const ScrollableList = styled.ul`
  max-height: 98%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    background: rgba(240, 243, 244, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(240, 243, 244, 0.3);
    border-radius: 10px;
  }

`;
