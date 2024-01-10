import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
const StyledWindow = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 778px) {
    width: 100%;
    max-height: 100%;
    min-height: 100%;
    & > form {
      padding: 20px 10px;
      border-radius: 0;
      gap: 5px;
      min-height: 100vb;

      > div {
        gap: 5px;
        margin-bottom: 10px;
      }

      > textarea {
        margin-bottom: 10px;
      }
    }
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  backdrop-filter: blur(0);
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  color: white;
  position: absolute;
  background-color: var(--color-red-700);
  top: 0px;
  right: -13px;
  transition: 0.3s;
  z-index: 1000;
  &:hover {
    background-color: var(--color-red-800);
  }

  @media (max-width: 778px) {
    top: 0px;
    right: 0px;
    border-radius: 0%;
  }
`;

const modalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <modalContext.Provider value={{ openName, close, open }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, id }) {
  const { open } = useContext(modalContext);
  return cloneElement(children, { onClick: () => open(id) });
}

function Window({ children, id }) {
  const { close, openName } = useContext(modalContext);
  // const { ref } = useOutsideClick2(close);
  const form = cloneElement(children, { onClose: close });

  return createPortal(
    <AnimatePresence>
      {openName !== id ? null : (
        <Background
          animate={{ backdropFilter: "blur(4px)" }}
          exit={{
            backdropFilter: "blur(0px)",
            transition: { type: "ease", duration: 0.5 },
          }}
        >
          <StyledWindow
            initial={{ scale: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, x: "-50%", y: "-50%" }}
            transition={{ type: "spring", duration: 1 }}
            exit={{
              scale: 0,

              transition: { type: "ease", duration: 0.5 },
            }}
          >
            <Button onClick={close}>X</Button>
            {form}
          </StyledWindow>
        </Background>
      )}
    </AnimatePresence>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
