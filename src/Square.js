import React from 'react';

const Square = ({ value, onClick }) => (
  <button
    style={{
      width: '60px',
      height: '60px',
      fontSize: '2rem',
      margin: '2px',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Square;
