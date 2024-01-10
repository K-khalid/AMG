import styled from "styled-components";
import Background from "../ui/Background";
import Slider from "../ui/Slider";
import VerticalLine from "../ui/VerticalLine";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import TextContanier from "../ui/TextContainer";

const Main = styled.main`
  background-color: var(--color-grey-100);
  position: relative;
  /* img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  } */
`;

const Text = styled.div`
  text-align: center;
  padding-top: 40px;
  flex-basis: 50%;
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

const P = styled.p`
  color: #d3d3d3;
  font-weight: 600;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`;

const PhotoContainer = styled(motion.div)`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
`;

// const [des, setDes] = useState(true);
// useEffect(function () {
//   setTimeout(() => {
//     console.log(`Start`);
//     setDes(false);
//   }, 4000);
// }, []);
// setRandomNumber(Math.round(Math.random() * (testArray.length - 1)));

function Home() {
  console.log("Reload");
  return (
    <Background image={"Landing.png"}>
      <PhotoContainer initial="hidden" animate="visible">
        <Slider />
      </PhotoContainer>

      <VerticalLine width="2px" />
      <TextContanier></TextContanier>
    </Background>
  );
}

export default Home;
