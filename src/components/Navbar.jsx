import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleChange =  () => {
        setMenu(!menu);
    }
  return(
    <>
        <div className='flex justify-between px-5 py-6 lg:px-14 md:px-10 bg-slate-950 text-white'>
            <div>
                <span className='text-xl font-bold'>
                    Gadget Hub
                </span>
            </div>
            <nav className='hidden lg:flex items-center gap-8 px-20'>
                <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>Home</a>
                <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>About</a>
                <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>Products</a>
                <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>Contact</a>
            </nav>
            <div className='hidden md:flex items-center gap-4'>
                <FaShoppingCart size={20} />
                <button  className='bg-slate-950 py-1 rounded-lg hover:bg-slate-950 hover:text-white transition duration-300 ease-in-out cursor-pointer'>Sign in</button>
            </div>
            <div className='md:hidden flex items-center'>
                {menu ? ( 
                    <AiOutlineClose size={25} onClick={handleChange}/>
                     ) : ( 
                    <AiOutlineMenuUnfold  size={25} onClick={handleChange}/> )}
            </div>
        </div>
        <div className={`${menu ? 'translate-x-0' : "-translate-x-full"} lg:hidden flex flex-col absolute bg-slate-950 text-white left-0 top-16 font-semi-bold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
            <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>Home</a>
            <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>About</a>
            <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>Products</a>
            <a href="/" className='hover:text-gray-600 transition duration-300 ease-linear'>Contact</a>
        </div>
    </>
  )
};

export default Navbar;