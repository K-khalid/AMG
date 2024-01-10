import styled from "styled-components";

const TextArea = styled.textarea`
  padding: 8px 20px;
  width: 100%;
  background-color: transparent;
  border: 2px solid var(--color-grey-120);
  border-radius: 10px;
  resize: none;
  min-height: 150px;
  height: 150px;
  max-height: 160px;
`;

export default TextArea;
