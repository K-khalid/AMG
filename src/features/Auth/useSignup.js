import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.dismiss();
      toast.success(`Signup Success`);
      navigate("/home");
    },

    onMutate: () => toast.loading("Signing up"),

    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
      console.log(error, "signup");
    },
  });
  return { signup, isLoading };
}

export default useSignup;
