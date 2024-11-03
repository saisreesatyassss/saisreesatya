// src/app/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-[#4299E1] text-white hover:bg-[#3182CE] font-bold py-3 px-6 rounded-full text-lg shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
