import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  margin-top: 10px;
  padding: 5px;
  width: 95%;
  height: 850px;
  border-radius: 12px;
  background-color: #154360;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
  opacity: 0.5;
`;

export const City = styled.h2`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 24px;
  font-weight: 400;
`;

export const Temperature = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 42px;
  font-weight: 400;
`;