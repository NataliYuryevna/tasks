import styled, { css } from 'styled-components';

const Input = styled.input<{$form?:boolean}>`
  border-radius: 4px;
  border: 1px solid #000000;
  &:focus {
    outline-color: #cea6f3;
  }
  ${props=>props.$form && css`
    border-radius: 8px;
    padding: 8px 4px;
  `}
`;

export {Input}