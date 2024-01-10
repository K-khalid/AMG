import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  margin: auto;
  gap: 30px;
  grid-template-columns: 200px 300px;
  align-items: center;
  position: relative;
  padding: 0 30px;
  & * {
    text-align: center;
  }

  @media (max-width: 778px) {
    grid-template-columns: 1fr;
    margin: 0;
    gap: 15px;
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const Error = styled(motion.div)`
  font-size: 13px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 105%;
  padding: 5px 5px;
  border-radius: 10px;
  width: 190px;
  opacity: 0;
  background-color: #ff000092;
  color: white;

  @media (max-width: 778px) {
    left: 50%;
    transform: translate(-50%, 0);
    top: calc(100% + 15px);
    height: fit-content;
  }
`;

function FormRow({ label, children, error }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children?.props?.id}>{label}</Label>
      {children}
      <AnimatePresence>
        {error && (
          <Error animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {error}
          </Error>
        )}
      </AnimatePresence>
    </StyledFormRow>
  );
}

export default FormRow;
