import { motion } from "framer-motion";
import styled from "styled-components";
const photosVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
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
const StyledPhoto = styled(motion.img)`
  padding: 20px;
  opacity: 0;

  max-width: 90%;
  /* object-fit: cover;
  object-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; */
`;

function Image({ src }) {
  return (
    <StyledPhoto src={src} variants={photosVariants} exit="exit" alt="1" />
  );
}

export default Image;
