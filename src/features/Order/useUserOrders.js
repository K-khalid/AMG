import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../../services/order";

function useUserOrders() {
  const { data: orders, isLoading } = useQuery({
    queryKey: [`orders`],
    queryFn: getUserOrders,
  });

  return { orders, isLoading };
}

export default useUserOrders;
