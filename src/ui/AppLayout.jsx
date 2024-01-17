import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useThemes } from "../context/ThemesContext";
import { useEffect } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  filter: ${(props) =>
    `hue-rotate(${props.angle}deg) drop-shadow(2px 4px 6px black);`};

  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
  max-height: 100dvh;
  & > * {
    padding: 5px 80px;
  }
  background-image: url(${(props) => props.image || ""});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  @media (max-width: 778px) {
    & > * {
      padding: 5px 20px;
    }
  }
  .main {
    overflow: auto;
    padding: 5px 40px;
    position: relative;
    @media (max-width: 992px) {
      padding: 5px 10px !important;
      &:has(.table) {
        padding: 5px 0 !important;
      }
    }
  }
`;
const imgs = [
  "./Home Images/1.png",
  "./Home Images/2.png",
  "./Home Images/3.png",
  "./Home Images/4.png",
  "./Home Images/5.png",
  "./AMG Logo/4845002.png",
  "Landing.png",
];
function AppLayout() {
  const { angle } = useThemes();

  useEffect(() => {
    document.getElementById("imgs")?.remove();
  }, []);
  return (
    <StyledAppLayout angle={angle} image={"Landing.png"}>
      <Header angle={-angle} />
      <Sidebar />
      <div id="imgs">
        {imgs.map((image) => (
          <img src={image} alt="" key={image}></img>
        ))}
      </div>
      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
