import React from 'react';

const IndianCurrencyFormatter = ({ amount }) => {
  const formattedAmount = amount.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });

  return <span>{formattedAmount}</span>;
};

export default IndianCurrencyFormatter;
