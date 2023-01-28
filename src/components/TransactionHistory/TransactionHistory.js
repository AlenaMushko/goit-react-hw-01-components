import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionSection,
  TransactionThead,
  TransactionTr,
  TransactionTh,
  TransactionTbody,
  TransactionodyTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionSection>
      <TransactionThead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionThead>

      <TransactionTbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionodyTr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionodyTr>
        ))}
      </TransactionTbody>
    </TransactionSection>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
