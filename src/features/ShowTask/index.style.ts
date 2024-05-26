import styled from "styled-components";

const DivShow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #000;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`

export {DivShow, Buttons}