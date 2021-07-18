import styled from 'styled-components';

const Button = styled.button`
  transition: ${({ theme }) => theme.transition};
  height: 20px;
  background-color: #2b2691;
  color: #ffffff;
  border-radius: 12px;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0px 18px;
  opacity: 1;
  font-size: 12px;
  font-weight: bold;
  margin-left: 18px;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
