import { useEffect } from "react";
import useUser from "../features/Auth/useUser";
import { useNavigate, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";
import styled from "styled-components";
import useLogout from "../features/Auth/useLogout";
import toast from "react-hot-toast";
import { BASEURL } from "../utils/Base";

const StyledProtector = styled.div`
  background-color: var(--color-grey-180);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  const { isAuthanticated, isLoading } = useUser();
  const { isLogginOut } = useLogout();
  useEffect(
    function () {
      if (!isAuthanticated && !isLoading && !isLogginOut) {
        toast.error("Please login first");
        navigate(`/${BASEURL}/login`, { replace: true });
      }
    },
    [isAuthanticated, navigate, isLoading, isLogginOut]
  );

  if (isLoading) {
    return (
      <StyledProtector>
        <Spinner />
      </StyledProtector>
    );
  }

  if (isAuthanticated) return children;
}

export default ProtectedRouter;
