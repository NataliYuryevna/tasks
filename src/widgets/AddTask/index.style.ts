import styled, {css} from 'styled-components'

const Div = styled.div<{$hidden?: boolean;}>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  ${props =>
        props.$hidden &&
        css`
            display: none;
    `};
`;
export { Div } ;