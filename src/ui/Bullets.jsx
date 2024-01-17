import styled from "styled-components";

const Bullets = styled.button`
  counter-increment: myCounter;
  color: white;
  font-weight: bold;
  font-size: 18px;
  &::before {
    content: counter(myCounter);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border-radius: 12px;
  transition: 0.5s;
  opacity: 0.5;
  ${(props) =>
    props.active && {
      backgroundColor: "#21c4ff",
      opacity: 1,
      border: "none",
      color: "#444",
    }}

  &:hover {
    background-image: linear-gradient(45deg, #002643, #21b5ff);
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export default Bullets;
