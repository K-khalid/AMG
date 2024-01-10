import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateOrder } from "../../services/order";
import toast from "react-hot-toast";

function useUpdateOrder(onClose) {
  const queryClient = useQueryClient();
  const { mutate: updateOrder, isLoading: isUpdating } = useMutation({
    mutationFn: createAndUpdateOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.dismiss();
      toast.success("Update Successfull");
      onClose?.();
    },

    onMutate: () => toast.loading("Updating order..."),

    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });

  return { updateOrder, isUpdating };
}

export default useUpdateOrder;
