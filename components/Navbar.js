"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'

const Navbar = () => {

  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }


  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
        <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center">
          <img src="tea.gif" width={44} alt="" />
          <span>Get Me A Chai!</span>
        </Link>
      {/* <ul className='flex justify-between gap-4'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/'>About</Link></li>
        <li><Link href='/'>Projects</Link></li>
        <li><Link href='/'>Sign Up</Link></li>
        <li><Link href='/'>Login</Link></li>
      </ul> */}

      <div className='relative'>
        {session && <> <button onClick={()=>setShowdropdown(!showdropdown)} onBlur={()=>{setTimeout(() => {setShowdropdown(false)},100)}} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
<div id="dropdownHover" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link href={"/profile"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
      <li>
        <Link onClick={()=>signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
</>
}
        
        {session && <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={()=>{signOut()}}>Log out</button>}
        {!session &&
        <Link href={"/login"}>
        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button></Link>
      }
      </div>
    </nav>
  )
}

export default Navbar