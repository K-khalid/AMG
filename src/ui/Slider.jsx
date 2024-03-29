import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Images from "./Image";
import TextContanier from "../ui/TextContainer";
import VerticalLine from "../ui/VerticalLine";
import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";
import Bullets from "./Bullets";
import PhotoContainer from "./PhotoContainer";

const StyledSlider = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 0;
    margin-top: 60px;
    .line {
      display: none;
    }

    .h-line {
      margin-top: 7px;
    }
  }
`;

const testArray = [
  "./Home Images/1.png",
  "./Home Images/2.png",
  "./Home Images/3.png",
  "./Home Images/4.png",
  "./Home Images/5.png",
];

const BulltesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #00bdc32a;
  padding: 5px 10px;
  border-radius: 10px;

  position: absolute;
  top: 10px;
  left: 50%;

  transform: translateX(-50%);

  @media (max-width: 1100px) {
    top: -52px;
    > button {
      width: 25px;
      height: 25px;
      font-size: 15px;
    }
  }
`;

function ImageSlider({ isRun, data }) {
  const [number, setNumber] = useState(0);

  useEffect(
    function () {
      const id = setInterval(
        isRun
          ? null
          : () => {
              if (number === testArray.length - 1) return setNumber(0);
              if (number < testArray.length - 1) return setNumber((n) => n + 1);
            },

        10000
      );

      return () => {
        clearInterval(id);
      };
    },

    [number, isRun]
  );

  return (
    <StyledSlider>
      <PhotoContainer>
        <AnimatePresence mode="wait">
          <Images src={testArray[number]} key={number} width={"500px"} />
        </AnimatePresence>
      </PhotoContainer>
      <VerticalLine className="line" width="2px" height="75%" />
      <AnimatePresence mode="wait">
        <TextContanier key={number}>
          <HorizontalLine mt={-50} mb={40} width={"80%"} />
          {data[0]["content"][number]}
          <HorizontalLine className="h-line" width={"80%"} />
        </TextContanier>
      </AnimatePresence>
      <BulltesContainer>
        {testArray.map((e, i) => (
          <Bullets
            key={e}
            onClick={() => setNumber(i)}
            active={i === number ? "true" : ""}
          />
        ))}
      </BulltesContainer>
    </StyledSlider>
  );
}

export default ImageSlider;
