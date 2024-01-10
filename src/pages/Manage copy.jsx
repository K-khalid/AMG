import useUser from "../features/Auth/useUser";
import Table from "../ui/Table";
import FullScreenSpinner from "../ui/FullScreenSpinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import OrderItem from "../features/Order/OrderItem";
import useOrders from "../features/Order/useOrders";

function Manage() {
  const { isAdmin, isLoading } = useUser();
  const { orders, isLoading: gettingOrders } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      toast.error("You can't access this route");
      return navigate("/");
    }
  }, [navigate, isAdmin]);

  if (isLoading || gettingOrders) return <FullScreenSpinner />;

  return (
    <Table columns={"1fr 1fr 1fr 1fr 200px 1fr 1fr"}>
      <Table.Head>
        <span>Requested By</span>
        <span>Company</span>
        <span>Mobile</span>
        <span>Address</span>
        <span>Details</span>
        <span>Date</span>
        <span>Check in</span>
      </Table.Head>
      <Table.Body
        data={orders}
        render={(order) => <OrderItem order={order} key={order.id} />}
      ></Table.Body>
    </Table>
  );
}

export default Manage;
