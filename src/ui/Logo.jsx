import styled from "styled-components";

// const Img = styled(motion.img)`
//   width: ${(props) => props.width || 100}px;
//   cursor: grab;
//   &:active {
//     cursor: grabbing;
//   }

//   @media (max-width: 552px) {
//     width: ${(props) => props.width2 || "60px"};
//   }
// `;

const Img = styled.img`
  width: ${(props) => props.width || 100}px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  @media (max-width: 552px) {
    width: ${(props) => props.width2 || "60px"};
  }
`;

function Logo({ initial, width, src, animate, width2, style }) {
  return (
    <Img
      // initial={initial}
      // animate={animate}
      width={width}
      width2={width2}
      src={src}
      style={style}
      // drag
      // dragConstraints={{
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      // }}
      // dragElastic={1}
    />
  );
}

export default Logo;
