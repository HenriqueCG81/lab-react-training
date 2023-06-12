import React, { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleLikeClick = () => {
    setCount((previousCount) => previousCount + 1);
    setBackgroundColorIndex(
      (previousIndex) => (previousIndex + 1) % colors.length
    );
  };

  const buttonStyle = {
    backgroundColor: colors[backgroundColorIndex],
    padding: '0.5rem 1rem',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button onClick={handleLikeClick} style={buttonStyle}>
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
