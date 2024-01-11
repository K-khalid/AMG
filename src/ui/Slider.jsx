import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "./Image";
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
  /* min-height: calc(100vb - 300px); */
  gap: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 0;
    margin-top: 60px;
    /* justify-content: normal; */
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
];

const testText = [
  ` تزويـــد حلــــول شبكـــات الأنتـرنــــت الاسلكيــــة و توفيـــر تغطيــــة جيــــدة بسـرعـــة ربــــط مناسبـــة  
`,

  `  تغطيـة متميزة لجميع المتطلبات بضمانات على المدى البعيد مـــع تقديـــم خدمـــة ربـــط لاسلكيـــة متطـــورة`,

  `سوفتويــــر متميـــز بنظـــام عالـــى الاداء يتمكـــن مــن الأرتقــــاء بقــــوة وذكــــاء وإيصـــال الخدمـــة حتـــى اطـــراف الشبكـــة و هــو مـــا يتــميـــز بتوفيـــر خدمـــة انترنـــت قويـــة للعمـــلاء بأسعـــار متميــــزة جـــدا`,

  `تغطيـــة كاملـــة لجميـــع المداخـــل و المخـــارج و الطرقـــات بجــــودة لا تقـــل  عـــن اتش دي  سيرفـــر حمايـــة متميـــز و تسجيـــلا يـــدوم اكثــــر مــــن 20 يــــوم و فنيــــن علــــى اعلـــى مستـــوى مــــن الخبـــرة فى عالـــم الكاميــرات`,
];

// const BulltesContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 20px;

//   position: absolute;
//   bottom: 10px;
//   left: 50%;
//   transform: translateX(-50%);

//   @media (max-width: 1080px) {
//     bottom: -20px;
//   }
//   @media (max-width: 552px) {
//     bottom: -20px;
//   }
// `;

const BulltesContainer = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: center;
  gap: 20px;
  /* background-color: #00000032; */
  background-color: #00ffaa15;
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
  /* @media (max-width: 552px) {
    top: -35px;

    > button {
      width: 25px;
      height: 25px;
      font-size: 15px;
    }
  } */
`;
function ImageSlider({ isRun }) {
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

        5000
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
          <Image src={testArray[number]} key={number} width={"500px"} />
        </AnimatePresence>
      </PhotoContainer>
      <VerticalLine className="line" width="2px" height="75%" />
      <AnimatePresence mode="wait">
        <TextContanier key={number}>
          <HorizontalLine mt={0} mb={40} width={"80%"} />
          {testText[number]}
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
