import { FaFacebookMessenger, FaFacebookF } from "react-icons/fa6";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const StyledFooter = styled.footer`
  background-color: #00000024;
  color: white;
  z-index: 3;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    gap: 5px;
    p:first-of-type {
      display: none;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #ffffff23;
  width: 300px;
  padding: 10px 0;
  margin-left: 80px;

  border-radius: 10px;
  svg {
    cursor: pointer;
    box-sizing: border-box;
    transition: color 0.5s;
    font-size: 25px;
    color: white;

    &:hover {
      &.facebook {
        color: #1877f2;
      }
      &.whatsapp {
        color: #25d366;
      }
      &.instagram {
        color: #405de6;
      }
      &.messenger {
        color: #0084ff;
      }
    }
  }

  @media (max-width: 992px) {
    margin: 0;
    padding: 8px 0;

    svg {
      font-size: 24px;
    }
  }
`;

const P = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <P>Contact us now!</P>
      <Icons>
        <FaFacebookF className="facebook" />
        <IoLogoWhatsapp className="whatsapp" />
        <FaFacebookMessenger className="messenger" />
        <RiInstagramFill className="instagram" />
      </Icons>
      <P>All rights reserved ©2024</P>
    </StyledFooter>
  );
}

export default Footer;
