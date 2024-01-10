import styled from "styled-components";
import { motion } from "framer-motion";

const Img = styled(motion.img)`
  width: ${(props) => props.width || 100}px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  @media (max-width: 552px) {
    width: ${(props) => props.width2 || "60px"};
  }
`;

function Logo({ initial, width, src, animate, width2 }) {
  return (
    <Img
      initial={initial}
      animate={animate}
      width={width}
      width2={width2}
      src={src}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={1}
    />
  );
}

export default Logo;
