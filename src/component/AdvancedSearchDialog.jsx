// SearchComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdvancedSearchComponent = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log('Melakukan pencarian untuk:', searchTerm);
    onClose();
  };

  return (
    <div className="fixed top-[100px] left-0 right-0 z-50 flex items-center justify-center">
      <form onSubmit={handleSearchSubmit} className="bg-white p-4 rounded-md">
        <p className='font-semibold text-font p-1'>Cari Resep</p>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Mau cari resep apa?"
          className="border border-gray-300 px-3 py-2 w-[520px] rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className='font-semibold text-font p-1'>Cari Bahan</p>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Cari resep sesuai bahan"
          className="border border-gray-300 px-3 py-2 w-[520px] rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className='font-semibold text-font p-1'>Kecualikan Bahan</p>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Kecualikan bahan tidak diinginkan"
          className="border border-gray-300 px-3 py-2 w-[520px] rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <p>&nbsp;</p>
        <div className='flex justify-end'>
          <Link to="/sresult">
          <button
            type="submit"
            className="bg-primary w-[100px] text-white w px-4 py-2 rounded-md ml-2"
          >
            Cari
          </button>
          </Link>
          <button
            type="submit"
            onClick={close}
            className="bg-error w-[100px] text-white w px-4 py-2 rounded-md ml-2"
          >
            Tutup
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearchComponent;
