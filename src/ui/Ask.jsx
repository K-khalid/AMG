import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAsk = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 75%;
  margin: 0 auto;

  a {
    color: var(--icon-color);
    font-size: 13px;
    text-decoration: underline;
  }
`;

function Ask({ question, link, to }) {
  return (
    <StyledAsk>
      <span>{question}</span>
      <Link to={to}>{link}</Link>
    </StyledAsk>
  );
}

export default Ask;
