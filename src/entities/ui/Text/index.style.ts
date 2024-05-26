import styled, {css} from 'styled-components'

const P = styled.p<{$justText?: boolean}>`
  ${props=>props.$justText && css`
    text-align: center;
  `}
  & > span:first-child {
    padding-right: 10px;
  } 
`;
export { P } ;