import { useState } from 'react'
import logo from '../assets/img/Logo.png'
import { Link } from "react-router-dom";
import { Popover } from '@headlessui/react'
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SearchDialog from './SearchDialog';

function Navbar() {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);
    return (
      <>
        <div className='w-screen h-[100px]  bg-primary '>
          <div className='lg:w-screen lg:flex lg:item-center lg:justify-between w-screen h-[100px]'>
              <div className='lg:flex lg:justify-start lg:gap-8 h-full ml-12 flex justify-between items-center'>
                  <div className='w-[75px] h-auto inline-flex'>
                      <img src={logo} alt="" /> 
                      <p className='text-[38px] mt-2 ml-2 text-font font-extrabold'>RecipeIn</p>
                  </div>
                  <Popover className="lg:hidden absolute right-0">
                    <Popover.Button>
                      <HiMenuAlt3 fontSize="2.5rem"/>
                    </Popover.Button>
  
                    <Popover.Panel className="absolute z-10">
                      <div className="grid grid-cols-2">
                        <Link to="/" className="text-[20px] text-font font-bold hover:text-font">BERANDA</Link>
                        <Link to="/resep" className="text-[20px] text-font font-bold hover:text-font">RESEP</Link>
                        <Link to="/diet" className="text-[20px] text-font font-bold hover:text-font">MENU SEHAT</Link>
                        <Link to="/about" className="text-[20px] text-font font-bold hover:text-font">TENTANG KAMI</Link>
                      </div>
  
                      <img src="/solutions.jpg" alt="" />
                    </Popover.Panel>
                  </Popover>
                  <div className="hidden lg:flex space-x-8 ml-[440px]">
                      <Link to="/" className="text-[20px] text-font font-bold hover:text-font">BERANDA</Link>
                      <Link to="/recipe" className="text-[20px] text-font font-bold hover:text-font">RESEP</Link>
                      <Link to="/diet" className="text-[20px] text-font font-bold hover:text-font">MENU SEHAT</Link>
                      <Link to="/about" className="text-[20px] text-font font-bold hover:text-font">TENTANG KAMI</Link>
                  </div>
                  <div className='hidden lg:flex cursor-pointer'>
                    <BiSearchAlt color='#111111' fontSize="36px" className='ml-[300px]' onClick={openDialog}/>
                    <SearchDialog isOpen={isDialogOpen} onClose={closeDialog} />
                  </div>
                  <div className='hidden lg:flex bg-putih rounded-full -ml-4'>
                    <Link to="/profile">
                        <AiOutlineUser color='#111111' fontSize="50px" className='py-2 px-2'/>
                    </Link>
                  </div>
              </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Navbar