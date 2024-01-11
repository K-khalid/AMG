import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading: isLogginOut, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      queryClient.invalidateQueries();
      navigate(`/`);
      toast.success("Logged out successfully");
    },
  });
  return { isLogginOut, logout };
}

export default useLogout;
