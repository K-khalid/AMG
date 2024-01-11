import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: var(--color-grey-900);
  font-size: 20px;
  width: 100%;
  max-width: 100%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  user-select: contain;
  transition: 0.5s;
  border-radius: 1px;

  padding: 20px 15px;

  opacity: 0.7;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-150);
  }
  svg {
    width: 25px;
    height: 25px;
  }
  p {
    flex-basis: 55%;
  }
  &:hover,
  &.active {
    color: var(--color-grey-900);
    background-color: var(--color-grey-120);
    opacity: 1;
    svg {
      color: var(--icon-color);
    }
  }

  @media (max-width: 552px) {
    flex: 1;
    padding: 0;
    /* padding: 25px 80px; */
    font-size: 22px;
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

function LinkComponent({ to, icon, children }) {
  return (
    <StyledLink to={to}>
      {icon} <p>{children}</p>
    </StyledLink>
  );
}

export default LinkComponent;
