import styled from "styled-components";
import { createContext, useContext } from "react";

const StyledTable = styled.div`
  background-color: var(--color-grey-180);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const StyledHead = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${(props) => props.columns};
  font-size: 19px;
  color: #eee;
  background-color: #0ba775; // #009696
  padding: 8px 0;
  text-align: center;
  font-weight: 600;
  align-items: center;

  > span {
    max-height: 50px;
  }
  @media (max-width: 778px) {
    grid-template-columns: 1fr 1fr 1fr 65px 1fr 48px;
    font-size: 11px;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${(props) => props.columns};
  background-color: var(--color-grey-50);
  padding: 8px 0;
  font-size: ${(props) => props.fs || 17}px;
  text-align: center;
  font-weight: 400;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-200);
  > span,
  p {
    max-height: 50px;
  }

  > p {
    overflow-y: auto;
  }
  @media (max-width: 778px) {
    grid-template-columns: 1fr 1fr 1fr 90px 1fr 35px;
    font-size: 12px;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const tableContext = createContext();

function Table({ columns, children }) {
  return (
    <tableContext.Provider value={{ columns }}>
      <StyledTable className="table">{children}</StyledTable>
    </tableContext.Provider>
  );
}

function Head({ children }) {
  const { columns } = useContext(tableContext);
  return (
    <StyledHead role="row" columns={columns}>
      {children}
    </StyledHead>
  );
}

function Body({ data, render }) {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;
  return data.map(render);
}

function Row({ children, fs }) {
  const { columns } = useContext(tableContext);
  return (
    <TableRow fs={fs} role="row" columns={columns}>
      {children}
    </TableRow>
  );
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;

export default Table;
