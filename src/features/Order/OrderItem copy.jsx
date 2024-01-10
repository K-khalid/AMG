import styled from "styled-components";

import useDeleteOrder from "./useDeleteOrder.js";
import useTakeOrder from "./useTakeOrder.js";

import { formateDate } from "../../utils/helpers.js";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileCircleMinus } from "react-icons/fa6";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";

import Modal from "../../ui/Modal2.jsx";
import OrderForm from "./OrderForm.jsx";
import ConfirmMessage from "../../ui/ConfirmMessage.jsx";
import Table from "../../ui/Table.jsx";
import useUser from "../Auth/useUser.js";

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
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

const State = styled.p`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: white;
    background-color: rgba(255, 0, 0, 0.7);
    padding: 5px 8px;
    border-radius: 7px;
  }
`;

function OrderItem({ order }) {
  const {
    id,
    company,
    mobile,
    created_at,
    address,
    details,
    requestedBy,
    takeBy,
  } = order;
  const { deleteOrder, isDeleteing } = useDeleteOrder();
  const { takeOrder, isPending } = useTakeOrder();
  const { email } = useUser();

  return (
    <Table.Row fs={15}>
      <span>{requestedBy}</span>
      <span>{company}</span>
      <span>{mobile}</span>
      <span>{address}</span>
      <p>{details || "Empty"}</p>
      <span>{formateDate(created_at)}</span>
      <span>
        {takeBy ? (
          email === takeBy.email ? (
            <IconsContainer>
              <Modal>
                <Modal.Open id="remove">
                  <Icon
                    color="var(--color-red-700)"
                    hovercolor="var(--color-red-800)"
                  >
                    <FaFileCircleMinus />
                  </Icon>
                </Modal.Open>
                <Modal.Window id="remove">
                  <ConfirmMessage
                    disabled={isPending}
                    onConfirm={() => takeOrder({ id, action: "leave" })}
                    message="Are you sure to leave that order?"
                    actionName="Sure"
                    actionColor="var(--color-red-700)"
                  />
                </Modal.Window>
              </Modal>
            </IconsContainer>
          ) : (
            <State>
              <span>Taken by {takeBy?.name}</span>
            </State>
          )
        ) : (
          <IconsContainer>
            <Modal>
              <Modal.Open id="delete">
                <Icon
                  color="var(--color-red-700)"
                  hovercolor="var(--color-red-800)"
                >
                  <FaTrashAlt />
                </Icon>
              </Modal.Open>
              <Modal.Window id="delete">
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
              <Modal.Open id="take">
                <Icon
                  color="var(--color-grey-600)"
                  hovercolor="var(--color-grey-900)"
                >
                  <FaFile />
                </Icon>
              </Modal.Open>
              <Modal.Window id="take">
                <ConfirmMessage
                  disabled={isPending}
                  onConfirm={() => takeOrder({ id, action: "take" })}
                  message="Are you sure to take that order?"
                  actionName="Sure"
                  actionColor="var(--color-brand-700)"
                />
              </Modal.Window>
            </Modal>
          </IconsContainer>
        )}
      </span>
    </Table.Row>
  );
}

export default OrderItem;
