// SearchComponent.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdvancedSearchComponent from './AdvancedSearchDialog';

const SearchComponent = ({ onClose }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  

  const [isSearchOpen, setSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchOpen(true);
    };

    const handleCloseSearch = () => {
        setSearchOpen(false);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('keyword', searchKeyword)
    navigate(`/sresult?query=${searchKeyword}`)

    console.log('Melakukan pencarian untuk:', searchKeyword);
    onClose();
  };

  return (
    <div className="fixed top-[100px] left-0 right-0 z-50 flex items-center justify-center">
      <form className="bg-white p-4 rounded-md">
        <input
          type="text"
          value={searchKeyword}
          onChange={handleSearchChange}
          placeholder="Mau cari resep apa?"
          className="border border-gray-300 px-3 py-2 w-[300px] rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-primary w-[100px] text-white w px-4 py-2 rounded-md ml-2"
          onClick={handleSearchSubmit}
        >
          Cari
        </button>
        <button
          type="submit"
          onClick={close}
          className="bg-error w-[100px] text-white w px-4 py-2 rounded-md ml-2"
        >
          Tutup
        </button>
        <p className='mt-2 text-end text-[#3F5D97]' onClick={handleSearchClick}>Pencarian Lanjutan</p>
        {isSearchOpen && <AdvancedSearchComponent onClose={handleCloseSearch} />}
      </form>
    </div>
  );
};

export default SearchComponent;
