import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateOrder as createAndUpdateOrderApi } from "../../services/order";
import toast from "react-hot-toast";

function useCreateOrder(onClose) {
  const queryClient = useQueryClient();
  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: createAndUpdateOrderApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.dismiss();
      toast.success("Order created successfully");
      onClose();
    },

    onMutate: () => toast.loading("Place order..."),

    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });

  return { createOrder, isCreating };
}

export default useCreateOrder;
