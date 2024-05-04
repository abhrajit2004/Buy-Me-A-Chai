"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Profile = () => {

    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
           router.push('/login')
        }
    }, [router, session])

    const handleChange = (e) => {
        setform({...form,[e.target.name]: e.target.value})
    }


   return (
    <div className='container mx-auto py-5'>
      <h1 className='font-bold text-center my-5 text-3xl'>Welcome to your Profile</h1>
      <form className="max-w-2xl mx-auto">
        <div className="my-2">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input value={form.name?form.name:""} type="text" id="name" name="name" onChange={handleChange} className="block w-full p-2 rounded-lg text-gray-900 border border-gray-300  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="my-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input value={form.email?form.email:""} type="email" id="email" name="email" onChange={handleChange} className="block w-full p-2 rounded-lg text-gray-900 border border-gray-300  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="my-2">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input value={form.username?form.username:""} type="text" id="username" name="username" onChange={handleChange} className="block w-full p-2 rounded-lg text-gray-900 border border-gray-300  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="my-2">
            <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
            <input value={form.profile?form.profile:""} type="text" id="profile" name="profile" onChange={handleChange} className="block w-full p-2 rounded-lg text-gray-900 border border-gray-300  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="my-2">
            <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
            <input value={form.cover?form.cover:""} type="text" id="cover" name="cover" onChange={handleChange} className="block w-full p-2 rounded-lg text-gray-900 border border-gray-300  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="my-2">
            <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
            <input value={form.cover?form.cover:""} type="text" id="cover" name="cover" onChange={handleChange} className="block w-full p-2 rounded-lg text-gray-900 border border-gray-300  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="my-2">
            <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
            <input value={form.cover?form.cover:""} type="text" id="cover" name="cover" onChange={handleChange} className="block w-full p-2 rounded-lg text-gray-900 border border-gray-300  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </form>
    </div>
  )
}

export default Profile
