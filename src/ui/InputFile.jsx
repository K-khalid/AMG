import styled from "styled-components";

const InputFile = styled.input.attrs({ type: "file" })`
  padding: 8px 20px;
  background-color: var(--icon-color);
  border: 2px solid var(--color-grey-120);
  border-radius: 10px;
  display: none;
`;

export default InputFile;
