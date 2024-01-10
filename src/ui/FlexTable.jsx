import styled from "styled-components";
import { cloneElement } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
`;

const FTable = styled.div`
  width: 75%;
  height: 100%;

  display: flex;
  align-items: center;
  margin-top: 15px;
  background-color: transparent;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 778px) {
    width: 100%;
  }
`;

const FTHead = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  color: #eee;
  background-color: #0ba775; // #009696
  padding: 8px 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-weight: 600;
  > span {
    flex: 1;
    /* width: 100%;
    position: relative;
    &:after {
      content: "";
      width: 100%;
      border-bottom: 1px solid;
      height: 2px;
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    } */
  }

  @media (max-width: 778px) {
    padding: 8px 10px;
    > span {
      font-size: 15px;
    }
    .details {
      flex-basis: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const FTRow = styled.div`
  background-color: var(--color-grey-180);
  display: flex;
  flex-direction: column;
  font-size: 19px;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 8px;
  text-align: center;
  font-weight: 600;
  gap: 20px;

  > span,
  p {
    flex: 1;
    /* width: 100%;
    position: relative;
    &:after {
      content: "";
      width: 100%;
      border-bottom: 1px solid;
      height: 2px;
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    } */
  }

  @media (max-width: 778px) {
    > span,
    p {
      font-size: 15px;
    }
    p {
      flex-basis: 35px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
    }
  }
`;

function FlexTable({ order, children, Element }) {
  return (
    <Container>
      <FTable>
        <FTHead>{children}</FTHead>
        {cloneElement(Element, { order })}
      </FTable>
    </Container>
  );
}

export default FlexTable;
