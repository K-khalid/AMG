import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import { GoSidebarCollapse } from "react-icons/go";
import LinkComponent from "./LinkComponent";
import { HiOutlineHome } from "react-icons/hi2";
import { BiFoodMenu } from "react-icons/bi";
import { LiaUserEditSolid } from "react-icons/lia";
import { TiInfoLargeOutline } from "react-icons/ti";
import useUser from "../features/Auth/useUser";
// import { useLocation } from "react-router-dom";
import { BASEURL } from "../utils/Base";

const StyledSidebar = styled(motion.aside)`
  will-change: transform, border-radius;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: fixed;
  /* left: -200px; */
  translate: -100%;
  min-width: 200px;
  max-width: 200px;
  height: 100dvh;
  padding: 0 !important;
  padding-top: 100px !important;
  z-index: 2;
  background-color: var(--color-grey-180);
  transition: 0.7s cubic-bezier(0.42, 0, 0.58, 1);

  & > button {
    left: 100%;
  }
  &.open {
    translate: 0;
  }

  &.close {
    translate: -100%;
  }

  @media (max-width: 552px) {
    min-width: 100%;
    max-width: 100%;
    padding-top: 25px !important;
    z-index: 100;
    border-radius: 0;
    transition: 1s;
    gap: 10px;

    &.close {
      border-radius: 50%;
    }
    &.open {
      & > * {
        opacity: 1;
      }

      & > button {
        left: 93%;
      }
    }
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 32000;
  border: none;
  background-color: transparent;
  font-size: 25px;
  outline: none;

  svg {
    transition: 1s;
    color: #34bab3;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  transition: 1s;
  flex: 1;
  padding-bottom: 50px;

  @media (max-width: 552px) {
    opacity: 0;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin } = useUser();
  // const location = useLocation();

  // useEffect(() => {
  //   setIsOpen(false);
  // }, [location.pathname]);
  return (
    <StyledSidebar className={isOpen ? "open" : "close"}>
      <Button onClick={() => setIsOpen((open) => !open)}>
        <GoSidebarCollapse
          style={
            isOpen && {
              transform: " translateX(3px) rotateY(180deg) scale(1.5)",
            }
          }
        />
      </Button>
      <Logo
        animate={{
          rotate: [0, 360],
          transition: {
            ease: "linear",
            repeat: Infinity,
            duration: 2,
          },
        }}
        src="./AMG Logo/4845002.png"
        width="80"
        width2="120px"
      />

      <Links onClick={() => setIsOpen(false)}>
        <LinkComponent to={`${BASEURL}/home`} icon={<HiOutlineHome />}>
          Home
        </LinkComponent>
        <LinkComponent to={`${BASEURL}/order`} icon={<BiFoodMenu />}>
          Orders
        </LinkComponent>
        {isAdmin && (
          <LinkComponent to={`${BASEURL}/manage`} icon={<LiaUserEditSolid />}>
            Manage
          </LinkComponent>
        )}
        <LinkComponent to={`${BASEURL}/aboutus`} icon={<TiInfoLargeOutline />}>
          About us
        </LinkComponent>
      </Links>
    </StyledSidebar>
  );
}

export default Sidebar;
