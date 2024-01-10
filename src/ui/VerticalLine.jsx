import styled from "styled-components";

const VerticalLine = styled.div`
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "1px"};
  margin-left: 0;
  background-color: #c0c0c030;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;
`;

export default VerticalLine;
