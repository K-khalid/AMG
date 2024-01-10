import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/auth";

function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user,
    isLoading,
    isAuthanticated: user?.role === "authenticated",
    isAdmin: user?.user_metadata?.role === "admin",
    name: user?.user_metadata?.fullName,
    email: user?.email,
  };
}

export default useUser;
