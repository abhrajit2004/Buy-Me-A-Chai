import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Buy Me A Chai - All Rights Reserved!</p>
    </footer>
  )
}

export default Footer
