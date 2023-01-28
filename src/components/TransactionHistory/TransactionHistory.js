import React from "react";
import PropTypes from "prop-types";

export const TransactionHistory = ( {items} ) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="transaction-history__thead">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="transaction-history__tbody">
        {items.map(({id, type, amount, currency}) => (
          <tr className="transaction-history__tr" key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}