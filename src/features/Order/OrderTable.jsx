import styled from "styled-components";
import FlexTable from "../../ui/FlexTable";
import FullScreenSpinner from "../../ui/FullScreenSpinner";
import UserOrder from "./UserOrder";
import useUserOrders from "./useUserOrders";

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
  color: white;
`;

function OrderTable() {
  const { orders, isLoading } = useUserOrders();
  if (isLoading) return <FullScreenSpinner />;
  if (!orders.length) return <Empty>No data to show at the moment</Empty>;
  return orders.map((order) => (
    <FlexTable order={order} key={order?.id} Element={<UserOrder />}>
      <span>Company</span>
      <span>Mobile</span>
      <span>Address</span>
      <span className="details">Details</span>
      <span>Created At</span>
      <span>Status</span>
      <span>Actions</span>
    </FlexTable>
  ));
}

export default OrderTable;
