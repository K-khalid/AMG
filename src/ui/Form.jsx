import styled from "styled-components";

const Form = styled.form`
  display: flex;
  border-radius: 20px;
  gap: ${(props) => props.gap || 40}px;
  width: ${(props) => props.width || "fit-content"};
  margin: 0 auto;
  flex-direction: column;
  margin-top: ${(props) => props.mt || 10}px;
  background-color: ${(props) => props.bg || "var(--color-grey-100)"};
  padding: ${(props) => (props.p ? props.p : "30px 0 0 0")};
  position: relative;
  max-width: 100%;
  max-height: 100%;

  @media (max-width: 778px) {
    margin: 0;
    width: 100%;
    border-radius: 0;
    /* padding: 0; */
    gap: 15px;

    justify-content: flex-end;

    & > button {
      border-radius: 0;
    }
  }
`;

export default Form;
