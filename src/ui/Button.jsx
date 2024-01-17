import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.bg || "var(--icon-color)"};
  border: none;
  border-radius: ${(props) => props.r || "20"}px;
  color: white;
  padding: 8px 20px;
  transition: 0.5s;
  font-weight: 600;
  position: relative;
  width: ${(props) => props.width || "100%"};
  font-size: ${(props) => props.fs || ""}px;
  &:hover {
    background-color: ${(props) => props.bgh || "#00884d"};
  }

  &:disabled {
    background-color: silver;
    color: black;
  }
  margin: ${(props) => props.m || "0"};
`;

const StyledLink = styled(Link)`
  background-color: ${(props) => props.bg || "var(--icon-color)"};
  border: none;
  border-radius: 20px;
  color: ${(props) => props.color || "var(--color-grey-100)"};
  padding: 8px 20px;
  transition: 0.5s;
  font-weight: 600;
  font-size: ${(props) => props.fs || ""}px;

  &:hover {
    background-color: var(--color-grey-600);
  }
`;

function Button({
  children,
  to,
  color,
  bg,
  r,
  onClick,
  width,
  fs,
  type,
  disabled,
  bgh,
}) {
  if (to)
    return (
      <StyledLink width={width} bg={bg} color={color} to={to} fs={fs}>
        {children}
      </StyledLink>
    );
  return (
    <StyledButton
      type={type}
      bg={bg}
      fs={fs}
      width={width}
      onClick={onClick}
      r={r}
      disabled={disabled}
      bgh={bgh}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
