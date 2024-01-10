import styled from "styled-components";

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function FullScreenSpinner() {
  return (
    <Spinner>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Spinner>
  );
}

export default FullScreenSpinner;
