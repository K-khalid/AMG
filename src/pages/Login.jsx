import styled from "styled-components";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/Auth/LoginForm";

const LoginLayout = styled.div`
  padding: 50px 0;
  /* display: flex; */
  align-items: center;
  display: grid;
  grid-template-rows: auto auto 1fr;
  text-align: center;
  /* flex-direction: column; */
  gap: 25px;
  background-color: var(--color-grey-180);
  height: 100dvb;

  @media (max-width: 552px) {
    gap: 15px;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <div>
        <Logo width={200} width2={"40%"} src="./AMG Logo/4882136.png" />
      </div>
      <Heading width="20%" align="center">
        Join Us Now!
      </Heading>

      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
