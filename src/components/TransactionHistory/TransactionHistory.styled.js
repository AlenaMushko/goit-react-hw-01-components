import styled from 'styled-components';

export const TransactionSection = styled.table`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  min-width: 400px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.72);
    scale: 1.02;
  }
`;

export const TransactionThead = styled.thead``;

export const TransactionTr = styled.tr`
  display: table-row;
  background-color: #20c3e3cf;
  text-align: center;
  text-transform: uppercase;
  color: whitesmoke;
`;

export const TransactionTh = styled.th`
  padding: 24px;
`;
export const TransactionTbody = styled.tbody`
  text-align: center;
`;

export const TransactionodyTr = styled.tr`
  :nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
