import React from 'react';

const IconButton = ({ icon, onClick }) => {
  return (
    <button
      className="flex items-center justify-center p-2 bg-primary text-white rounded-full mx-2 focus:outline-none"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-3 w-3"
      >
        {icon}
      </svg>
    </button>
  );
};

export default IconButton;
