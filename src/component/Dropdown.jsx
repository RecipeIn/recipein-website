import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const categories = ['Terbaru', 'Tidak Positif', 'Paling Positif', 'Paling Bermanfaat'];

const Dropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="cursor-pointer inline-flex items-center"
        >
          <span className="mr-1 text-[16px] font-bold tracking-wider text-font">{selectedCategory}</span>
          <FaChevronDown />
        </span>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {categories.map((category) => (
              <div
                key={category}
                className= {`${
                  selectedCategory === category ? 'text-font' : ''
                } cursor-pointer px-4 py-2 text-[16px] font-bold tracking-wider text-font flex`} 
                onClick={() => handleCategorySelect(category)}
                role="menuitem"
              >
                {selectedCategory === category && (
                  <FaCheck className="mr-3" />
                )}
                {category}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
