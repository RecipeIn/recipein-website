import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../FolderDialog.css'
import RemoveFolder from './RemoveFolder';

const folder = [
  {
    name: 'Kreasi Kue',
  },
  {
    name: 'Olahan Daging Kambing',
  },
  {
    name: 'Olahan Daging Sapi',
  },
  {
    name: 'Kumpulan Salad Buah Segar',
  },
  {
    name: 'Olahan Tempe',
  },
  {
    name: 'Salad Sayuran',
  },
  {
    name: 'Jus',
  },
  {
    name: 'Sarapan',
  },
]

const FolderDialog = ({ isOpen, onClose }) => {
    const dialogRef = useRef(null);

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
        <div className={`folder-dialog ${isOpen ? 'block' : 'hidden'}`}>
            <div className="dialog2 px-8 pt-6 pb-2 w-[380px]" ref={dialogRef}>
                <h2 className='text-font font-bold text-lg mb-1 tracking-wide'>*<span className='font-semibold ml-1'>Menghapus folder tidak memengaruhi <span className='ml-3'>resep di dalamnya.</span></span></h2>
                <h2 className='text-font font-bold text-lg mb-1 tracking-wide'>*<span className='font-semibold ml-1'>Menambakhan hingga 10 folder</span></h2>
                <button className='bg-primary text-lg text-font font-semibold mt-4 mb-4'>Tambah Folder</button>
                {folder.map((folder) => (
                <div className='border-2 border-black text-font font-semibold w-fit pl-2 h-[35px] py-1 rounded-lg bg-white flex text-left mb-3'>
                  {folder.name} <p>&nbsp; &nbsp;</p> <RemoveFolder/>
                </div>
                ))}
            </div>
        </div>
      )
}

FolderDialog.propTypes = { 
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FolderDialog