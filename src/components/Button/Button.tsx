import styled from 'styled-components';

const Button = styled.button`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: 600;
  border: none;
  border-radius: 14px;
  background: #3367EC;
  color: white;
  padding: 10px;
  line-height: 20px;
  letter-spacing: 7.5%;
`

export { Button };