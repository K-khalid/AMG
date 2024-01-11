import styled from "styled-components";
import { FaUser, FaMoon, FaSun, FaRightFromBracket } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import Logo from "./Logo";
import { useDarkmode } from "../context/DarkmodeContext";
import useUser from "../features/Auth/useUser";
import Button from "./Button";
import useLogout from "../features/Auth/useLogout";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOutSideClick from "../hooks/useOutsideClick2.js";

const StyledHeader = styled.header`
  /* background-color: var(--color-grey-180); */
  background-color: #00000024;
  color: white;
  /* background-image: linear-gradient(0deg, #00c3789d, #00bdc399); */
  /* box-shadow: 0 0 5px var(--color-grey-400); */
  /* box-shadow: 0 0 5px white; */
  /* border-bottom: 1px solid white; */
  z-index: 3;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  user-select: none;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || 15}px;
  position: relative;

  svg {
    padding: 5px;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    outline-style: solid;
    outline-color: var(--color-grey-300);
    outline-width: 0;

    &:hover {
      outline-width: 1px;
    }
  }

  .menu {
    display: none;
    border: 1px solid var(white);
    @media (max-width: 778px) {
      display: block;
    }
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserImg = styled.img`
  object-fit: contain;
  object-position: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  filter: ${(props) => `hue-rotate(${props.angle}deg)`};
  /* border: 3px solid var(--color-grey-200); */

  @media (max-width: 778px) {
    width: 40px;
    height: 40px;
  }
`;

const UserName = styled.h4`
  /* color: var(--color-grey-900); */
  color: white;
  @media (max-width: 778px) {
    font-size: 14px;
  }
  /* text-shadow: 0 0 5px #333; */
`;

const IconList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    color: white;
  }

  @media (max-width: 778px) {
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: 0.5s;
    position: absolute;
    top: 92%;
    right: -14%;
    /* background-color: var(--color-grey-180); */
    background-color: #00000024;
    width: 80px;
    &.open {
      height: 150px;
      padding: 15px;
      gap: 10px;
    }
  }
`;

function Header({ angle }) {
  const { Toggle, isDark } = useDarkmode();
  const [isMenu, setIsMenu] = useState(false);
  const { isAuthanticated } = useUser();
  const { logout } = useLogout();
  const { user } = useUser();
  const { fullName, avatar } = user?.user_metadata || {};
  const { ref } = useOutSideClick(() => setIsMenu(false));

  return (
    <StyledHeader>
      <Logo src={"./AMG Logo/4882142.png"} width={75} />

      {isAuthanticated ? (
        <IconContainer>
          <UserContainer>
            <UserImg angle={angle} src={avatar || `default-user.jpg`} />
            <UserName>{fullName}</UserName>
          </UserContainer>
          <div ref={ref}>
            <TiThMenu
              style={{ color: "white" }}
              className="menu"
              onClick={() => setIsMenu((m) => !m)}
            />

            <IconList className={isMenu ? "open" : "close"}>
              <Link style={{ lineHeight: 0 }} to={"AMG/account"}>
                <FaUser />
              </Link>
              {isDark ? (
                <FaSun onClick={Toggle} />
              ) : (
                <FaMoon onClick={Toggle} />
              )}
              <FaRightFromBracket onClick={logout} />
            </IconList>
          </div>
        </IconContainer>
      ) : (
        <IconContainer gap={10}>
          <Button color={"white"} fs={15} to={"AMG/signup"}>
            SignUp
          </Button>
          <Button color={"white"} fs={15} to={"AMG/login"}>
            Login
          </Button>
          {isDark ? <FaSun onClick={Toggle} /> : <FaMoon onClick={Toggle} />}
        </IconContainer>
      )}
    </StyledHeader>
  );
}

export default Header;
