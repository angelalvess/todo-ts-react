import styled from 'styled-components';

export const Container = styled.div(
  () =>
    `
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 17px;
    height: 17px;
    margin-right: 7px;
  }

  label {
    color: #ccc;
    
  }
`
);
