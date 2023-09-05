import React from 'react'
import Button from './Button'
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';

const ContactUs = () => {
  return (
    <section style={{maxWidth: "1161px"}} className='mx-auto px-6 sm:px-8 lg:px-20 mb-6'>
        <div>
            <h1 className='text-5xl font-extrabold mb-5'>CONTACT US</h1>
            <p className='font-semibold text-gray-600 text-base'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        </div>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 mb-10 md:mb-0'>
            <div className='mt-6 sm:mt-12'>
                <div className='flex mb-4 justify-between flex-wrap gap-4'>
                    <Button icon={<MessageIcon className='me-1' />} text="VIA SUPPORT CHAT" primary />
                    <Button icon={<CallIcon className='me-1' />} text="VIA CALL" primary />
                </div>
                <div className='mb-6'>
                    <Button icon={<MessageIcon className='me-1 w-full' />} text="VIA EMAIL FORM" />
                </div>
                <div className="relative mb-8">
                    <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded border-1 appearance-none dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-600 peer" placeholder="" />
                    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                </div>
                <div className="relative mb-8">
                    <input type="email" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded border-1 appearance-none dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-600 peer" placeholder="" />
                    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                </div>
                <div className="relative mb-5">
                    <textarea rows="4" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded border-1 appearance-none dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-600 peer" placeholder="Text..." />
                </div>
                <div className='flex justify-end'>
                    <Button text="SUBMIT" primary />
                </div>
            </div>
            <div className='hidden sm:grid'>
                <img src="/images/Service 24_7.svg" alt="Contact Us image" />
            </div>
        </div>
    </section>
  )
}

export default ContactUs