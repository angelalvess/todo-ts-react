import { styled, StyleFunction } from 'styled-components';

interface ContainerProps {
  done: boolean;
}

export const Container: StyleFunction<ContainerProps> = styled.div(
  ({ done }: ContainerProps) =>
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
    text-decoration: ${done ? 'line-through' : 'initial'};
  }
`
);
