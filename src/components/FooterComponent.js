import React from 'react'

const FooterComponent = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-10'>
      <div className='max-w-6xl mx-auto px-5 sm:px-10 grid grid-cols-1 md:grid-cols-4 gap-8'>
        
        {/* Column 1: Company Info */}
        <div>
          <h3 className='text-xl font-bold mb-4 text-white'>Company</h3>
          <p className='text-gray-400'>
            We provide the finest modern furniture to make your home look elegant and stylish.
          </p>
        </div>
        
        {/* Column 2: Useful Links */}
        <div>
          <h3 className='text-xl font-bold mb-4 text-white'>Useful Links</h3>
          <ul>
            <li className='mb-2'>
              <a href='#' className='hover:text-white transition-colors'>About Us</a>
            </li>
            <li className='mb-2'>
              <a href='#' className='hover:text-white transition-colors'>Services</a>
            </li>
            <li className='mb-2'>
              <a href='#' className='hover:text-white transition-colors'>Products</a>
            </li>
            <li className='mb-2'>
              <a href='#' className='hover:text-white transition-colors'>Contact</a>
            </li>
          </ul>
        </div>
        
        {/* Column 3: Contact Info */}
        <div>
          <h3 className='text-xl font-bold mb-4 text-white'>Contact Us</h3>
          <p className='text-gray-400'>
            123 Furniture St.<br />
            Minimalist City, MC 12345<br />
            Email: info@furniture.com<br />
            Phone: (123) 456-7890
          </p>
        </div>
        
        {/* Column 4: Social Media */}
        <div>
          <h3 className='text-xl font-bold mb-4 text-white'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-400 hover:text-white transition-colors'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition-colors'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition-colors'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition-colors'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>

      </div>
      
      {/* Footer Bottom */}
      <div className='border-t border-gray-700 mt-10 pt-5'>
        <p className='text-center text-gray-500'>
          &copy; {new Date().getFullYear()} Furniture Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterComponent
