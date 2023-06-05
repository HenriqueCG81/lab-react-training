import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  return (
    <div style={boxStyle} className="boxStyle">
      rgb({r}, {g}, {b})
    </div>
  );
};

export default BoxColor;
