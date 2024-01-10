import styled from "styled-components";
import UpdateDataForm from "../features/Auth/UpdateDataForm";
import Heading from "../ui/Heading";
import UpdatePasswordForm from "../features/Auth/UpdatePasswordForm";

const Layout = styled.div`
  /* background-color: var(--color-grey-180); */
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;

  @media (max-width: 1210px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  /* background-color: var(--color-grey-180); */
  padding: 50px;
  height: 100%;
  border-radius: 20px;
  @media (max-width: 1210px) {
    padding: 0;
  }

  @media (max-width: 552px) {
    button {
      border-radius: 0;
    }
  }
`;

function Manage() {
  return (
    <Container>
      <Heading color="white" fs={30} align="center" mt={10} width="15%">
        Update Your Settings
      </Heading>
      <Layout>
        <UpdateDataForm />
        <UpdatePasswordForm />
      </Layout>
    </Container>
  );
}

export default Manage;
