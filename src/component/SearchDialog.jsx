// src/components/SearchDialog.js
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../SearchDialog.css';
import AdvancedSearchDialog from './AdvancedSearchDialog';

const SearchDialog = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    // Lakukan logika pencarian di sini
    console.log('Pencarian:', keyword);
    onClose();
  };

  const handleClickOutside = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      onClose();
    }
  };

  const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogRef]);

  useEffect(() => {
    // Menambahkan class ke body untuk mengatur properti overflow
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      // Menghapus class pada body saat komponen di-unmount
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className={`search-dialog ${isOpen ? 'block' : 'hidden'}`}>
      <div className="dialog px-4 pt-6 pb-2" ref={dialogRef}>
        <h2 className='text-font font-medium text-lg mb-1'>Mau cari resep apa?</h2>
        <input type="text" placeholder="Kata kunci" className='rounded-[10px] border-2 border-font' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        <button className='ml-8 p-[10px] w-1/5 bg-primary text-black border-none rounded-[8px]' onClick={handleSearch}>Cari</button>
        <button className='bg-white border-none focus:outline-none mt-2 text-blue-500 text-lg font-medium ml-[355px] px-1 py-1' onClick={openDialog}>Pencarian Lanjutan</button>
        <AdvancedSearchDialog isOpen={isDialogOpen} onClose={closeDialog} />
      </div>
    </div>
  );
};

SearchDialog.propTypes = { 
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchDialog;
