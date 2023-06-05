import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const lastDigits = number.slice(-4);

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="card-type">{type}</div>
      <div className="card-number">**** **** **** {lastDigits}</div>
      <div className="card-details">
        <div>
          Expires: {expirationMonth}/{expirationYear}
        </div>
        <div>{bank}</div>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
