import React, { useState } from 'react';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center w-full px-5 py-4 md:px-10 md:py-5'>
        <div>
          <h1 className='text-2xl font-bold text-black'>Woody</h1>
        </div>

        <div className='md:hidden'>
          {/* Hamburger Icon */}
          <button onClick={toggleDropdown} className='text-black focus:outline-none'>
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        <nav className={`md:block ${isOpen ? 'block' : 'hidden'} absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0`}>
          <ul className='flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-0'>
            <li className='text-black font-medium'>
              <a href='/'>Home</a>
            </li>
            <li className='text-black font-medium'>
              <a href='/abouts'>About</a>
            </li>
            <li className='text-black font-medium'>
              <a href='/contacts'>Contact</a>
            </li>
            <li className='text-black font-medium'>
              <a href='/products'>Product</a>
            </li>
            <li className='text-black font-medium'>
              <a href='/faq'>FAQ</a>
            </li>
          </ul>
        </nav>

        
        <div className='hidden md:flex items-center gap-5 ml-10'>
          <div className='bg-green-500 p-2 rounded-full'>
            <i className="fa-solid fa-cart-shopping text-white"></i>
          </div>

          <div>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>

      
      <div className='flex md:hidden items-center justify-end gap-5 mx-10 mt-5'>
        <div className='bg-green-500 p-1 rounded-full'>
          <i className="fa-solid fa-cart-shopping text-white"></i>
        </div>
        <div>
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
