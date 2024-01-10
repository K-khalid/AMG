import useUser from "../features/Auth/useUser";
import FullScreenSpinner from "../ui/FullScreenSpinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import OrderItem from "../features/Order/OrderItem";
import useOrders from "../features/Order/useOrders";
import FlexTable from "../ui/FlexTable";
import styled from "styled-components";

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
  color: white;
`;

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
  if (!orders.length) return <Empty>No data to show at the moment</Empty>;

  return orders.map((order) => (
    <FlexTable order={order} key={order?.id} Element={<OrderItem />}>
      <span>Requested By</span>
      <span>Company</span>
      <span>Mobile</span>
      <span>Address</span>
      <span className="details">Details</span>
      <span>Date</span>
      <span>Check in</span>
    </FlexTable>
  ));
}

export default Manage;
