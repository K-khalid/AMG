import styled from "styled-components";
import { motion } from "framer-motion";

const Pre = styled(motion.pre)`
  color: #d3d3d3;
  font-weight: 400;
  line-height: 2.5;
  max-width: 600px;
  text-shadow: 0 0 1px #ffffff;
  margin: 75px auto;
  white-space: pre-line;
  font-family: "Vazirmatn", sans-serif;
  font-size: 21.5px;
  word-spacing: 0.5px;

  opacity: 0;
  @media (max-width: 1215px) {
    font-size: 20px;
  }
  @media (max-width: 1100px) {
    padding-top: 0;
    margin: 0 auto;

    & > div {
      margin-top: 25px;
    }
  }

  @media (max-width: 552px) {
    font-size: 18px;
    line-height: 2.4;
    height: fit-content;
    max-height: fit-content;

    & > div:first-of-type {
      margin-bottom: 10px;
    }

    & > div:last-of-type {
      display: none;
    }
  }
`;

const Text = styled.div`
  text-align: center;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    padding-top: 0;
    margin: 0 0 30px 0;
  }
`;

const textVariants = {
  visible: {
    opacity: 1,
    transition: {
      type: "ease",
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      type: "ease",
      duration: 0.5,
    },
  },
};

function TextContainer({ children }) {
  return (
    <Text>
      <Pre variants={textVariants} animate="visible" exit="exit">
        {children}
      </Pre>
    </Text>
  );
}

export default TextContainer;
