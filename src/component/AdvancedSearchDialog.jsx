import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../AdvancedSearchDialog.css';
import SearchDialog from './SearchDialog';

const AdvancedSearchDialog = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [keywordIngredient, setKeywordIngredient] = useState('');
  const [keywordNotIngredient, setKeywordNotIngredient] = useState('');

  const handleSearch = () => {
    console.log('Pencarian:', keyword);
    console.log('Pencarian:', keywordIngredient);
    console.log('Pencarian:', keywordNotIngredient);
    onClose();
  };

  const handleClickOutside = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogRef]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className={`search-advanced ${isOpen ? 'block' : 'hidden'}`}>
      <div className="dialog1 px-4 pt-6 pb-2" ref={dialogRef}>
        <div className='mb-2 ml-4'>
          <h2 className='text-font font-bold text-lg mb-1'>Cari Resep</h2>
          <label className='text-font font-medium text-lg mb-1'></label>
          <input type="text" placeholder="Mau cari resep apa?" className='rounded-[10px] border-2 border-font' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </div>
        <div className='mb-2 ml-4'>
          <h2 className='text-font font-bold text-lg mb-1'>Cari Bahan</h2>
          <label className='text-font font-medium text-lg mb-1'></label>
          <input type="text" placeholder="Cari resep sesuai bahan" className='rounded-[10px] border-2 border-font' value={keywordIngredient} onChange={(e) => setKeywordIngredient(e.target.value)}/>
        </div>
        <div className='mb-2 ml-4'>
          <h2 className='text-font font-bold text-lg mb-1'>Kecualikan Bahan</h2>
          <label className='text-font font-medium text-lg mb-1'></label>
          <input type="text" placeholder="Cari resep sesuai bahan" className='rounded-[10px] border-2 border-font' value={keywordNotIngredient} onChange={(e) => setKeywordNotIngredient(e.target.value)}/>
        </div>
        <button className='ml-40 p-[10px] w-2/5 mt-8 mb-4 text-lg font-bold bg-primary text-black border-none rounded-[8px]' onClick={handleSearch}>Cari</button>
      </div>
    </div>
  );
};

AdvancedSearchDialog.propTypes = { 
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AdvancedSearchDialog;
