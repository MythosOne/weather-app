import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  margin-top: 10px;
  padding: 5px;
  width: 85%;
  height: 80px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(240, 243, 244, 0);
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 4px 8px rgba(136, 198, 253, 0.5); */

  &:hover {
    border-color: rgba(240, 243, 244, 0.5);
    transition: all 0.2s ease-in-out;
  }
`;

export const Block = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: stretch; */
`;

export const BlockItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const City = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 14px;
  font-weight: 400;
`;

export const Description = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 12px;
  font-weight: 400;
`;

export const Temperature = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 32px;
  font-weight: 400;
`;

export const MyLocation = styled.h2`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 22px;
  font-weight: 400;
`;

export const Location = styled.span`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 12px;
  font-weight: 400;
`;
