import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Development from "./Development";
import { useThemes } from "../context/ThemesContext";

const StyledAppLayout = styled.div`
  display: grid;
  filter: ${(props) => `hue-rotate(${props.angle}deg)`};
  /* filter: brightness(1.1); */

  grid-template-rows: auto 1fr auto;
  min-height: 100dvb;
  max-height: 100dvb;
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

function AppLayout() {
  console.log(document.body);
  const { angle } = useThemes();
  return (
    <StyledAppLayout angle={angle} image={"Landing.png"}>
      <Header angle={-angle} />
      <Sidebar />

      <div className="main">
        {/* <Development /> */}
        <Outlet />
      </div>

      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
