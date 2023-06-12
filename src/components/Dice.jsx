import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [diceImage, setDiceImage] = useState(diceEmpty);

  const getRandomDiceImage = () => {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    return diceImages[randomIndex];
  };

  const handleClick = () => {
    setDiceImage(diceEmpty);

    setTimeout(() => {
      const randomImage = getRandomDiceImage();
      setDiceImage(randomImage);
    }, 1000);
  };

  return (
    <div>
      <img className="dice" src={diceImage} alt="dice" onClick={handleClick} />
    </div>
  );
};

export default Dice;
