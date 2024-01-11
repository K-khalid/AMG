import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import SignupForm from "../features/Auth/SignupForm";

const SignupLayout = styled.div`
  padding: 50px 0;
  align-items: center;
  text-align: center;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  background-color: var(--color-grey-180);
  height: 100dvb;

  @media (max-width: 552px) {
    gap: 15px;
  }
`;

function Signup() {
  return (
    <SignupLayout>
      <div>
        <Logo width={"200px"} width2={"40%"} src="/AMG Logo/4882136.png" />
      </div>
      <Heading width="20%" align="center">
        Signup Now!
      </Heading>

      <SignupForm />
    </SignupLayout>
  );
}

export default Signup;
