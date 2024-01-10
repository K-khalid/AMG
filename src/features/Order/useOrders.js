import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/order";

function useOrders() {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { orders, isLoading };
}

export default useOrders;
