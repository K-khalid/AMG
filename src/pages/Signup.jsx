import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import SignupForm from "../features/Auth/SignupForm";

const SignupLayout = styled.div`
  padding: 50px 0;
  align-items: center;
  text-align: center;
  /* display: grid;
  grid-template-rows: auto auto 1fr; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--color-grey-180);
  height: 100dvb;

  @media (max-width: 552px) {
    /* gap: 15px; */
    gap: 0;
    padding-bottom: 0;
    justify-content: space-between;
  }
`;

function Signup() {
  return (
    <SignupLayout>
      <div>
        <Logo width={"200px"} width2={"40%"} src="./AMG Logo/4882136.png" />
        <Heading width="20%" align="center">
          Signup Now!
        </Heading>
      </div>

      <SignupForm />
    </SignupLayout>
  );
}

export default Signup;
