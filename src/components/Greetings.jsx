import React, { useState } from 'react';
const Greetings = ({ lang, name, className }) => {
  let greetingText = '';

  switch (lang) {
    case 'de':
      greetingText = `Hallo ${name}!`;
      break;
    case 'en':
      greetingText = `Hello ${name}!`;
      break;
    case 'es':
      greetingText = `¡Hola ${name}!`;
      break;
    case 'fr':
      greetingText = `Bonjour ${name}!`;
      break;
    default:
      greetingText = `Olá ${name}!`;
  }

  return <div className={className}>{greetingText}</div>;
};
export default Greetings;
