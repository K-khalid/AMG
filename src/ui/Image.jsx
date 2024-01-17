import { motion, useWillChange } from "framer-motion";
import styled from "styled-components";

const StyledPhoto = styled(motion.img)`
  padding: 20px 0;
  opacity: 1;
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.width || "100%"};
  height: ${(props) => props.width || "100%"};
  max-height: ${(props) => props.width || "100%"};

  @media (max-width: 1100px) {
    height: 300px;
    max-height: 300px;
    width: 300px;
    max-width: 300px;
    padding: 0;
  }
  @media (max-width: 552px) {
    width: normal;
    padding: 0;
  }
`;

const photosVariants = {
  hidden: {
    opacity: 0,
  },
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

const photosVariants2 = {
  hidden: {
    x: "-100vw",
  },

  visible: {
    x: "0px",

    transition: {
      type: "spring",
      damping: 20,
    },
  },

  exit: {
    x: "-100vw",
  },
};

function Images({ src, width, variants = "opacity" }) {
  const willChange = useWillChange();
  return (
    <StyledPhoto
      initial="hidden"
      src={src}
      variants={variants === "move" ? photosVariants2 : photosVariants}
      animate="visible"
      exit="exit"
      alt="1"
      width={width}
      loading="eager"
      style={{ willChange }}
    />
  );
}

export default Images;
