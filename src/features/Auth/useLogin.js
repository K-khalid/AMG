import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.user]);
      navigate(`/`, { replace: true });
      toast.dismiss();
      toast.success(`Login Successfull`);
    },

    onMutate: () => toast.loading("Loggin"),

    onError: (error) => {
      console.error(error);
      toast.dismiss();
      toast.error(`Invalid email or password `);
    },
  });
  return { login, isLoading };
}

export default useLogin;
