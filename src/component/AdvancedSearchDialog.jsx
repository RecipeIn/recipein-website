// SearchComponent.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdvancedSearchComponent = ({ onClose }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchKeyword1, setSearchKeyword1] = useState('');
  const [searchKeyword2, setSearchKeyword2] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  const handleSearchChange1 = (e) => {
    setSearchKeyword1(e.target.value);
  };
  const handleSearchChange2 = (e) => {
    setSearchKeyword2(e.target.value);
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('keyword2', searchKeyword)
    localStorage.setItem('keyword3', searchKeyword1)
    localStorage.setItem('keyword4', searchKeyword2)
    navigate(`/saresult`)

    console.log('Melakukan pencarian untuk:', searchKeyword, searchKeyword1, searchKeyword2);
    onClose();
  };

  return (
    <div className="fixed top-[100px] left-0 right-0 z-50 flex items-center justify-center">
      <form className="bg-white p-4 rounded-md">
        <p className='font-semibold text-font p-1'>Cari Resep</p>
        <input
          type="text"
          value={searchKeyword}
          onChange={handleSearchChange}
          placeholder="Mau cari resep apa?"
          className="border border-gray-300 px-3 py-2 w-[520px] rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className='font-semibold text-font p-1'>Cari Bahan</p>
        <input
          type="text"
          value={searchKeyword1}
          onChange={handleSearchChange1}
          placeholder="Cari resep sesuai bahan"
          className="border border-gray-300 px-3 py-2 w-[520px] rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className='font-semibold text-font p-1'>Kecualikan Bahan</p>
        <input
          type="text"
          value={searchKeyword2}
          onChange={handleSearchChange2}
          placeholder="Kecualikan bahan tidak diinginkan"
          className="border border-gray-300 px-3 py-2 w-[520px] rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <p>&nbsp;</p>
        <div className='flex justify-end'>
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
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearchComponent;
