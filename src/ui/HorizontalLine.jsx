import styled from "styled-components";

const HorizontalLine = styled.div`
  height: ${(props) => props.height || 1}px;
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.mwidth || 200}px;
  margin-top: ${(props) => props.mt || 40}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  border-radius: 100%;
  background-color: #c0c0c030;
  margin-left: auto;
  margin-right: auto;
  transition: 1s;
`;

export default HorizontalLine;
