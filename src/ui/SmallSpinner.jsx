import styled from "styled-components";

const Container = styled.div`
  width: 80px !important;
  height: 25px !important;
  scale: 0.5;
  position: relative;

  div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
  }
`;

function SmallSpinner() {
  return (
    <Container className="lds-ripple">
      <div></div>
      <div></div>
    </Container>
  );
}

export default SmallSpinner;
