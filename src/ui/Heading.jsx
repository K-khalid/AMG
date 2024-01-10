import styled from "styled-components";
import HorizontalLine from "../ui/HorizontalLine";

const H1 = styled.h1`
  color: ${(props) => props.color || "var(--color-grey-900)"};
  font-size: ${(props) => props.fs || 35}px;
  letter-spacing: 1;
  font-weight: 600;
  margin-bottom: 0;
  text-align: ${(props) => props.align || "left"};
  margin-top: ${(props) => props.mt || 0}px;

  @media (max-width: 552px) {
    font-size: 25px;
  }
`;

function Heading({
  color,
  children,
  align,
  mt,
  height = 2,
  width = "100%",
  fs,
}) {
  return (
    <div>
      <H1 color={color} fs={fs} mt={mt} align={align}>
        {children}
      </H1>
      <HorizontalLine height={height} width={width} mt={mt || 15} />
    </div>
  );
}

export default Heading;
