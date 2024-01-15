import { motion } from "framer-motion";
import styled from "styled-components";

const Content = styled(motion.h1)`
  font-family: "Vazirmatn", sans-serif;
  font-weight: 600;
  color: white;
  font-size: ${(props) => props.fs || 16}px;
  margin-top: ${(props) => props.mt || 0}px;
  line-height: ${(props) => props.lh || 2};
  /* width: ${(props) => props.width || 400}px; */
  max-width: 100%;
  flex-basis: ${(props) => props.fb || "50%"};
  text-align: ${(props) => props.ta || "center"};
  @media (max-width: 1080px) {
    width: fit-content;
    margin: auto;
    white-space: pre-line;
    font-size: 21px;
  }
`;

export default Content;
