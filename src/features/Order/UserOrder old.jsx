import { formateDate } from "../../utils/helpers";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import useDeleteOrder from "./useDeleteOrder";
import Modal from "../../ui/Modal2";
import OrderForm from "./OrderForm";
import Table from "../../ui/Table";
import ConfirmMessage from "../../ui/ConfirmMessage";
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 778px) {
    gap: 5px;
    svg {
      font-size: 12px;
    }
  }
`;

const Icon = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  svg {
    color: ${(props) => props.color || ""};
    &:hover {
      color: ${(props) => props.hovercolor || ""};
    }
  }
`;

function UserOrder({ order }) {
  const { id, company, mobile, created_at, address, details } = order;
  const { deleteOrder, isDeleteing } = useDeleteOrder();

  return (
    <Table.Row>
      <span>{company}</span>
      <span>{mobile}</span>
      <span>{address}</span>
      <p>{details || "Empty"}</p>
      <span>{formateDate(created_at)}</span>
      <span>
        <IconsContainer>
          <Modal>
            <Modal.Open id={"delete"}>
              <Icon
                color="var(--color-red-700)"
                hovercolor="var(--color-red-800)"
              >
                <FaTrashAlt />
              </Icon>
            </Modal.Open>
            <Modal.Window id={"delete"}>
              <ConfirmMessage
                disabled={isDeleteing}
                onConfirm={() => deleteOrder(id)}
                message="Are you sure to delete that order?"
                actionName="Delete"
                actionColor="var(--color-red-700)"
              />
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open id="edit">
              <Icon
                color="var(--color-brand-500)"
                hovercolor="var(--color-brand-600)"
              >
                <FaEdit />
              </Icon>
            </Modal.Open>
            <Modal.Window id="edit">
              <OrderForm order={order} />
            </Modal.Window>
          </Modal>
        </IconsContainer>
      </span>
    </Table.Row>
  );
}

export default UserOrder;
