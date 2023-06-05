import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-image" />
      <div className="driver-info">
        <h2 className="driver-name">{name}</h2>
        <div className="driver-rating">
          {Array.from({ length: 5 }, (_, index) =>
            index < Math.round(rating) ? '★' : '☆'
          )}
        </div>
        <p className="driver-car">
          <span>{car.model}</span> - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
