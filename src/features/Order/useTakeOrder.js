import { useMutation, useQueryClient } from "@tanstack/react-query";
import { takeOrder as takeOrderApi } from "../../services/order";
import toast from "react-hot-toast";

function useTakeOrder() {
  const queryClient = useQueryClient();
  const { mutate: takeOrder, isPending } = useMutation({
    mutationFn: takeOrderApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.dismiss();
      toast.success("Done");
    },

    onMutate: () => toast.loading("Getting Order..."),

    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
  });

  return { takeOrder, isPending };
}

export default useTakeOrder;
