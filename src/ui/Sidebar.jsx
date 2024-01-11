import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { GoSidebarCollapse } from "react-icons/go";
import LinkComponent from "./LinkComponent";
import { HiOutlineHome } from "react-icons/hi2";
import { BiFoodMenu } from "react-icons/bi";
import { LiaUserEditSolid } from "react-icons/lia";
import { TiInfoLargeOutline } from "react-icons/ti";
import useUser from "../features/Auth/useUser";
import { useLocation } from "react-router-dom";
import { BASEURL } from "../utils/Base";

// const Container = styled.div`
//   position: fixed;
//   height: 100%;
//   width: fit-content;
//   right: 100%;
//   z-index: 1000;
//   background-color: green;

//   & > button {
//     left: 100%;
//   }
// `;

const StyledSidebar = styled(motion.aside)`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: fixed;
  left: -200px;
  min-width: 200px;
  max-width: 200px;
  height: 100%;
  padding: 0 !important;
  padding-top: 100px !important;
  /* box-shadow: 0 0 5px var(--color-grey-300); */
  z-index: 2;
  background-color: var(--color-grey-180);
  transition: 0.7s;

  & > button {
    left: 100%;
  }
  &.open {
    left: 0;
  }

  &.close {
    left: -200px;
  }

  @media (max-width: 552px) {
    min-width: 100%;
    max-width: 100%;
    padding-top: 25px !important;
    z-index: 100;
    border-radius: 0;
    transition: 1s;
    gap: 10px;

    > img {
    }

    &.close {
      left: -100%;
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
    transition: "1s";
    color: #34ba82;
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

  @media (max-width: 552px) {
    opacity: 0;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin } = useUser();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <StyledSidebar className={isOpen ? "open" : "close"}>
      <Button onClick={() => setIsOpen((open) => !open)}>
        <GoSidebarCollapse
          style={isOpen && { transform: " rotateY(180deg) scale(1.1)" }}
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
        width2="90"
      />

      <Links
      // style={{
      //   borderRadius: isOpen ? "0" : "30%",
      // }}
      >
        <LinkComponent to={`${BASEURL}/`} icon={<HiOutlineHome />}>
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
