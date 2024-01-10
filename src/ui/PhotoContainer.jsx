import { motion } from "framer-motion";
import styled from "styled-components";

const PhotoContainer = styled(motion.div)`
  flex-basis: 50%;
  /* min-width: 50%; */
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

  @media (max-width: 1080px) {
    /* height: 100px; */
  }
`;

export default PhotoContainer;
