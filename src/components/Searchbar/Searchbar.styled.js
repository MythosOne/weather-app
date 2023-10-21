import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchBarForm = styled.form`
  /* position: relative; */

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
;

  background-color: #c9dfed;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
`;

export const Input = styled.input`
  background-color: #c9dfed;
  border: none;
  outline: none;

  height: 20px;
  width: 80%;

  padding: 5px;
  font-size: 18px;
  color: #888;
`;

export const ButtonSearch = styled.button`
  /* position: absolute; */

  background-color: #c9dfed;
  color: gray;
  border: none;
`;

export const ButtonAdd = styled.button`
  /* position: absolute; */

  background-color: #c9dfed;
  color: green;
  border: none;
`;
