import React from 'react';
import './index.css'

function Button({ onClick, text }) {
  return (
    <div className="button-container">
      <button className='button' onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
