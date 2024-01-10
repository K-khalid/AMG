import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  gap: ${(props) => props.gap || 0}px;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.ai || ""};
  justify-content: ${(props) => props.jc || ""};
  padding-top: ${(props) => props.pt || 0}px;
  padding-bottom: ${(props) => props.pb || 0}px;
  flex-basis: ${(props) => props.fb || ""};
  transition: 1s;
  position: relative;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 25px;

    .line {
      display: none;
    }
  }
`;

export default FlexContainer;
