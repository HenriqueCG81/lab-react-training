import React from 'react';

const Rating = ({ children }) => {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  return (
    <div>
      {Array(filledStars)
        .fill()
        .map((_, index) => (
          <span key={index}>★</span>
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={index}>☆</span>
        ))}
    </div>
  );
};

export default Rating;
