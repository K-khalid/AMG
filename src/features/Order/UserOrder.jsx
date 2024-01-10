import { formateDate } from "../../utils/helpers";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import useDeleteOrder from "./useDeleteOrder";
import Modal from "../../ui/Modal2";
import OrderForm from "./OrderForm";
import ConfirmMessage from "../../ui/ConfirmMessage";
import { FTRow } from "../../ui/FlexTable";
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  /* @media (max-width: 778px) {
    gap: 5px;
    svg {
      font-size: 12px;
    }
  } */
`;

const Icon = styled.button`
  border: none;
  background-color: transparent;
  font-size: 19px;
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

const Tag = styled.span`
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  &.Pending {
    background-color: #889400;
  }

  &.Accepted {
    background-color: #003e94;
  }
`;

function UserOrder({ order }) {
  const { id, company, mobile, created_at, address, details, status } = order;
  const { deleteOrder, isDeleteing } = useDeleteOrder();

  return (
    <FTRow>
      <span>{company}</span>
      <span>{mobile}</span>
      <span>{address}</span>
      <p>{details || "Empty"}</p>
      <span>{formateDate(created_at)}</span>
      <span>
        <Tag className={status}>{status}</Tag>
      </span>
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
          -
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
    </FTRow>
  );
}

export default UserOrder;
