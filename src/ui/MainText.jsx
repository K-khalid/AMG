import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";
import { memo, useEffect } from "react";
import { motion } from "framer-motion";

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
  position: relative;
  width: fit-content;
  margin: auto;
  min-height: 60px;
  min-width: 1px;

  @media (max-width: 552px) {
    font-size: 30px;
    min-height: 45px;
  }
`;

const P = styled.p`
  color: #d3d3d3;
  font-weight: 600;
  line-height: 1.4;
  /* max-width: 500px; */
  margin: 0 auto;
  white-space: pre-line;
  @media (max-width: 552px) {
    font-size: 12px;
  }
`;

const Container = styled.div`
  text-align: center;
  padding-top: 10px;
`;

const Cursor = styled.span`
  position: absolute;
  right: -3px;
  height: 75%;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  background-color: #ddd;
  animation: cursor 0.5s infinite linear;
`;
// AMG IT
let i = 0;
const MainText = memo(function ({ text = "AMG IT", delay = 300 }) {
  const letters = text.split("");
  const fullDelay = (letters.length * delay) / 1000;

  useEffect(() => {
    const writer = document.querySelector(".writer");

    const id = setInterval(() => {
      if (i < letters.length) {
        writer.append(letters[i]);
        i++;
      } else {
        return setTimeout(() => {
          writer.children[0]?.remove();
          console.log("work");
          clearInterval(id);
          i = 0;
        }, delay + 100);
      }
    }, delay);

    return () => {
      clearInterval(id);
      i = 0;
    };
  }, [text, delay, letters]);
  return (
    <Container>
      <Title className="writer">
        <Cursor className="cursor" />
      </Title>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: fullDelay, duration: 1 }}
      >
        <P>AMG foundation for internet Networks and cameras</P>
        {/* <P> لشبكات الانترنت و الكاميرات AMG مؤسسة</P> */}
        <HorizontalLine width={"25%"} height={2} mt={15} mb={0} />
      </motion.span>
    </Container>
  );
});

export default MainText;
