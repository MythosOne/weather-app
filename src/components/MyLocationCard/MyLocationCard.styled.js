import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  margin-top: 10px;
  padding: 5px;
  width: 85%;
  height: 90px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(240, 243, 244, 0.8);
  border-radius: 12px;
  background-color: #154360;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
`;

export const City = styled.h4`
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
  font-size: 42px;
  font-weight: 400;
`;

export const MyLocation = styled.h3`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 24px;
  font-weight: 400;
`;

export const Location = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 12px;
  font-weight: 400;
`;
