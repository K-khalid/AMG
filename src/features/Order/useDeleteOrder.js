import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder as deleteOrderApi } from "../../services/order";
import toast from "react-hot-toast";

function useDeleteOrder() {
  const queryClient = useQueryClient();
  const { mutate: deleteOrder, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteOrderApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.dismiss();
      toast.success("Order has been deleted ");
    },
    onMutate: () => toast.loading("Deleteing order..."),

    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });

  return { deleteOrder, isDeleteing };
}

export default useDeleteOrder;
