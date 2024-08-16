import React from 'react';

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} style={buttonStyle}>
      Reset
    </button>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default ResetButton;
