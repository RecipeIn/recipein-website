import { useState } from 'react'
import logo from '../assets/img/Logo.png'
import { Link } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SearchComponent from './SearchDialog';
import profile from "../assets/img/profile.png"
import { Fragment } from 'react'

const solutions = [
    {
      name: 'Beranda',
      href: '/',
    },
    {
        name: 'Resep',
        href: '/recipe',
    },
    {
        name: 'Menu Sehat',
        href: '/diet',
    },
    {
        name: 'Tentang',
        href: '/about',
    },
]

function Navbar () {
    const [isSearchOpen, setSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchOpen(true);
    };

    const handleCloseSearch = () => {
        setSearchOpen(false);
    };
    return (
        <>
        <section className='body-font font-nunito w-screen h-[100px] bg-primary'>
            <div className='flex justify-between items-center w-screen h-[100px] px-10 lg:w-screen lg:flex lg:item-center lg:justify-between'>
                <div className='flex space-x-4'>
                    <div className='w-[75px] h-auto inline-flex'>
                        <img src={logo} alt="" /> 
                    </div>
                    <p className='text-[38px] mt-2 text-font font-extrabold'>RecipeIn</p>
                </div>
                <Popover className="w-fit max-w-sm lg:hidden absolute right-0">
                    {({ open }) => (
                    <>
                        <Popover.Button className='border-none hover:border-none focus:outline-none focus-visible:outline-none text-font'>
                            <HiMenuAlt3 fontSize="2.5rem"/>
                        </Popover.Button>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="relative grid gap-8 bg-primary text-font p-7 lg:grid-cols-2">
                                {solutions.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                >
                                    <div className="ml-4">
                                    <p className="text-lg font-bold text-font">
                                        {item.name}
                                    </p>
                                    </div>
                                </a>
                                ))}
                            </div>
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </>
                    )}
                </Popover>
                <div className="hidden lg:flex space-x-8">
                      <Link to="/" className="text-[20px] text-font font-bold hover:text-font">BERANDA</Link>
                      <Link to="/recipe" className="text-[20px] text-font font-bold hover:text-font">RESEP</Link>
                      <Link to="/diet" className="text-[20px] text-font font-bold hover:text-font">MENU SEHAT</Link>
                      <Link to="/about" className="text-[20px] text-font font-bold hover:text-font">TENTANG KAMI</Link>
                  </div>
                  <div className='flex space-x-4'>
                    <div className='hidden lg:flex cursor-pointer items-center'>
                        <BiSearchAlt color='#111111' fontSize="36px" className='' onClick={handleSearchClick}/>
                        {isSearchOpen && <SearchComponent onClose={handleCloseSearch} />}
                    </div>
                    <div className='hidden lg:flex bg-putih rounded-full'>
                        <Link to="/profile">
                            <AiOutlineUser color='#111111' fontSize="50px" className='py-2 px-2'/>
                            {/* <img className=" w-[50px] h-[50px] rounded-full" src={profile} alt=""/> */}
                        </Link>
                    </div>
                  </div>

            </div>

        </section>
        </>
    )
}

export default Navbar