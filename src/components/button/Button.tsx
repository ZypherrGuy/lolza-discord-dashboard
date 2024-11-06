import React from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, label, variant }) => {
  return (
    <button onClick={onClick} className={`button ${variant}`}>
      {label}
    </button>
  );
};

export default Button;
