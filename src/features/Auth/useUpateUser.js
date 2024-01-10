import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/auth";
import toast from "react-hot-toast";

function useUpateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserApi,

    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      toast.dismiss();
      toast.success("Update Successfully");
    },

    onMutate: () => toast.loading(`Updating...`),

    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
  });

  return { updateUser, isUpdating };
}

export default useUpateUser;
