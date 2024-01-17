import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledError = styled.div`
  background-image: url("Error.png");
  min-height: 100vh;
  max-height: 100vh;
  background-size: cover;
  position: relative;
  overflow: hidden;
  filter: drop-shadow(2px 4px 10px black);
`;

const errorVariants = {
  hidden: {
    top: "-100%",
  },
  visiable: {
    top: "25%",
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};
const errorVariants2 = {
  hidden: {
    top: "25%",
  },
  visiable: {
    top: ["25%", "20%"],
    transition: {
      type: "ease",
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
      repeatType: "mirror",
    },
  },
};

const ErrorLogo = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  img {
    max-width: 100%;
  }
`;

const Message = styled(motion.h1)`
  font-size: 35px;
  font-weight: 400;
  color: #ddd;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  word-spacing: 4px;
  opacity: 0;
  text-align: center;

  @media (max-width: 552px) {
    font-size: 20px;
  }
`;

const RightEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) rotate(-25deg);
  max-width: 400px;
  opacity: 0;
`;
const LeftEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(25deg);
  max-width: 400px;
  opacity: 0;
`;
function Error() {
  const [variants, setVariants] = useState(errorVariants);
  useEffect(
    function () {
      const id = setTimeout(() => {
        setVariants(errorVariants2);
      }, 1650);

      return function () {
        clearTimeout(id);
      };
    },
    [variants]
  );
  return (
    <StyledError>
      <ErrorLogo variants={variants} initial={"hidden"} animate={"visiable"}>
        <img src="Drone.png" alt="e" />
      </ErrorLogo>
      <Message
        animate={{ opacity: 1 }}
        transition={{ type: "ease", duration: 3 }}
      >
        Page not found
      </Message>
      <RightEffect
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 4 }}
      >
        <img src="4 [Converted].png" alt="" />
      </RightEffect>
      <LeftEffect
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 4 }}
      >
        <img src="4 [Converted].png" alt="" />
      </LeftEffect>
    </StyledError>
  );
}

export default Error;
