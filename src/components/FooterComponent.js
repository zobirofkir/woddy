import React from 'react'

const FooterComponent = () => {
  return (
    <footer className='text-black py-10'>
      <div className='max-w-6xl mx-auto px-5 sm:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 shadow-md'>
        

        <div>
          <h3 className='text-xl font-bold mb-4 text-black'>Company</h3>
          <p className='text-gray-400'>
            We provide the finest modern furniture to make your home look elegant and stylish.
          </p>
        </div>
        

        <div>
          <h3 className='text-xl font-bold mb-4 text-black'>Useful Links</h3>
          <ul>
            <li className='mb-2'>
              <a href='/abouts' className='hover:text-black transition-colors'>About Us</a>
            </li>
            <li className='mb-2'>
              <a href='/contacts' className='hover:text-black transition-colors'>Contact</a>
            </li>
            <li className='mb-2'>
              <a href='/products' className='hover:text-black transition-colors'>Products</a>
            </li>
            <li className='mb-2'>
              <a href='/faq' className='hover:text-black transition-colors'>FAQ</a>
            </li>
          </ul>
        </div>
        
        {/* Column 3: Contact Info */}
        <div>
          <h3 className='text-xl font-bold mb-4 text-black'>Contact Us</h3>
          <p className='text-gray-400'>
            Hay Ine Soltanen, 123 Street .<br />
            Imouzzer Kandar<br />
            Email: zobirofkir19@gmail.com<br />
            Phone: +212 619920942
          </p>
        </div>
        
        {/* Column 4: Social Media */}
        <div>
          <h3 className='text-xl font-bold mb-4 text-black'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-400 hover:text-black transition-colors'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-black transition-colors'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-black transition-colors'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-black transition-colors'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>

      </div>
      
      {/* Footer Bottom */}
      <div className='border-t border-gray-700 mt-10 pt-5'>
        <p className='text-center text-gray-500'>
          &copy; {new Date().getFullYear()} Furniture Csw. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterComponent
