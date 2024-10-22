import React from 'react'

const ContactScreen = () => {
  return (
    <div className='container mx-auto mt-10 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-center items-center w-full h-screen gap-10 items-center hover:rotate-6 transition-all duration-300 ease-in-out hover:scale-105'>

        <div className='w-full md:w-1/2 h-full bg-gray-100 max-h-[500px] rounded p-10 hover:-rotate-6 transition-all duration-300 ease-in-out hover:scale-105'>
          
        <h1 className='text-3xl font-bold'>Contact Us</h1>

          <form className='flex flex-col justify-center items-center gap-5'>
            <input type='text' placeholder='Your Name ...' className='w-full text-black tex-center mt-5 rounded shadow-md px-10 py-2 border-black text-black' required/>
            <input type='email' placeholder='Your Email ...' className='w-full text-black tex-center mt-5 rounded shadow-md px-10 py-2 border-black text-black'required/>

            <textarea placeholder='Your Message ...' className='w-full text-black w-full tex-center mt-5 rounded shadow-md px-10 py-2 border-black text-black' required/>

            <button type='submit' className='bg-black text-white py-2 px-4 rounded-lg'>Submit</button>
          </form>
        </div>

        <div className='w-full md:w-1/2 container mx-auto px-10 md:px-0 hover:-rotate-6 transition-all duration-300 ease-in-out hover:scale-105'>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16642.712858829134!2d-5.014657849999999!3d33.7303351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f81adb97f7ca5%3A0xc4306de9d22dc415!2sImouzzer-Kandar!5e1!3m2!1sfr!2sma!4v1729585786423!5m2!1sfr!2sma" 

            className='w-full h-[500px] rounded-lg'

            allowfullscreen="" 
            
            loading="lazy"
            
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

        </div>

      </div>
    </div>
  )
}

export default ContactScreen