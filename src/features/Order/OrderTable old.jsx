import FullScreenSpinner from "../../ui/FullScreenSpinner";
import Table from "../../ui/Table";
import UserOrder from "./UserOrder";
import useUserOrders from "./useUserOrders";

function OrderTable() {
  const { orders, isLoading } = useUserOrders();
  if (isLoading) return <FullScreenSpinner />;
  return (
    <Table columns="1fr 1fr 1fr 200px 1fr 150px">
      <Table.Head>
        <span>Company</span>
        <span>Mobile</span>
        <span>Address</span>
        <span>Details</span>
        <span>Created At</span>
      </Table.Head>
      <Table.Body
        data={orders}
        render={(order) => <UserOrder order={order} key={order?.id} />}
      />
    </Table>
  );
}

export default OrderTable;
