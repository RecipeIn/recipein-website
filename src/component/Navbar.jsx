import { useState } from 'react'
import logo from '../assets/img/Logo.png'
import { Link } from "react-router-dom";
import { Popover } from '@headlessui/react'
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

function Navbar() {
    return (
      <>
        <div className='w-screen h-[100px]  bg-primary lg:px-16 px-6'>
          <div className='lg:w-full lg:flex lg:item-center lg:justify-between w-full h-full'>
              <div className='lg:flex lg:justify-start lg:gap-8 h-full flex justify-between items-center'>
                  <div className='w-[75px] h-auto inline-flex'>
                      <img src={logo} alt="" /> 
                      <p className='text-[38px] mt-2 ml-2 text-font font-extrabold'>RecipeIn</p>
                  </div>
                  {/* <div>
                    test
                  </div> */}
                  {/* <Popover className="lg:hidden relative">
                    <Popover.Button>
                      <HiMenuAlt3 fontSize="2.5rem"/>
                    </Popover.Button>
  
                    <Popover.Panel className="absolute z-24">
                      <div className="grid grid-cols-2">
                        <Link to="/" className="text-font font-medium hover:text-font">Home</Link>
                        <Link to="/order" className="text-font font-medium hover:text-font">Order</Link>
                        <Link to="/about" className="text-font font-medium hover:text-font">About Us</Link>
                        <Link to="/contact" className="text-font font-medium hover:text-font">Contact</Link>
                      </div>
  
                      <img src="/solutions.jpg" alt="" />
                    </Popover.Panel>
                  </Popover> */}
                  <div className="flex space-x-4 col-span-2 ml-[400px]">
                      <Link to="/" className="text-[20px] text-font font-bold hover:text-font">BERANDA</Link>
                      <Link to="/resep" className="text-[20px] text-font font-bold hover:text-font">RESEP</Link>
                      <Link to="/diet" className="text-[20px] text-font font-bold hover:text-font">DIET SEHAT</Link>
                      <Link to="/tentang" className="text-[20px] text-font font-bold hover:text-font">TENTANG KAMI</Link>
                  </div>
                  <Link to="/search">
                    <BiSearchAlt color='#4D4D4D' fontSize="36px" className='ml-[320px]' />
                  </Link>
                  <div className='border  bg-[#D9D9D9] rounded-full -ml-4'>
                    <Link to="/profile">
                        <AiOutlineUser color='#4D4D4D' fontSize="50px" className='py-2 px-2'/>
                    </Link>
                  </div>
              </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Navbar