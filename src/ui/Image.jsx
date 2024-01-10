import { motion } from "framer-motion";
import styled from "styled-components";

const StyledPhoto = styled(motion.img)`
  padding: 20px 0;
  opacity: 1;
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.width || "100%"};
  height: ${(props) => props.width || "100%"};

  /* width: 700px; */
  max-height: ${(props) => props.width || "100%"};
  /* height: 500px; */
  @media (max-width: 1100px) {
    /* margin-bottom: 40px; */
    /* width: 300px;
    max-width: 300px; */
    height: 300px;
    max-height: 300px;
    width: 300px;
    max-width: 300px;
    padding: 0;
  }
  @media (max-width: 552px) {
    /* margin-bottom: 40px; */
    /* height: 5%;
    max-height: 5%; */
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
    // transition: {
    //   type: "ease",
    //   duration: 0.3,
    // },
  },
};

function Image({ src, width, variants = "opacity" }) {
  return (
    <StyledPhoto
      initial="hidden"
      src={src}
      variants={variants === "move" ? photosVariants2 : photosVariants}
      animate="visible"
      exit="exit"
      alt="1"
      width={width}
    />
  );
}

export default Image;
