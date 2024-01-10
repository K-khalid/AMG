import styled from "styled-components";
import Button from "./Button";

const Delete = styled.div`
  background-color: var(--color-grey-50);
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;

function ConfirmMessage({
  onClose,
  onConfirm,
  disabled,
  message,
  actionName,
  actionColor,
}) {
  return (
    <Delete>
      <h3>{message}</h3>
      <div>
        <Button onClick={onClose} bg={"var(--color-grey-500)"}>
          Cancel
        </Button>
        <Button
          disabled={disabled}
          onClick={() => {
            onConfirm();
            onClose();
          }}
          bg={actionColor}
        >
          {actionName}
        </Button>
      </div>
    </Delete>
  );
}

export default ConfirmMessage;
