"use client";

import React, {useEffect, useState} from 'react'
import { fetchUser } from '@/actions/useractions';

const PaymentPage = ({ username }) => {

    const [currentUser, setcurrentUser] = useState({});

    const [paymentField, setPaymentField] = useState({"name": '', "message": '', "amount": ''});

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let u = await fetchUser(username);
        setcurrentUser(u);
    }

    const handleonChange = (e) => {
        setPaymentField({...paymentField, [e.target.name]: e.target.value});
    }


    return (
        <>
            <div className='cover w-full relative'>
                <img className='object-cover h-48 md:h-[350] w-full' src={currentUser.coverpic} alt='' />
                <div className='absolute -bottom-20 right-[38%] md:right-[46%] border-2 border-white rounded-full size-32 overflow-hidden'>
                    <img src={currentUser.profilepic} className='rounded-full object-cover size-32' width={128} height={128} alt="" />
                </div>
            </div>

            <div className="info flex flex-col justify-center items-center my-24 gap-2">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Let's help {username} get a chai!
                </div>
                <div className='text-slate-400'>
                   {currentUser.name} is raising funds for a chai. Let's help him reach his goal.
                </div>

                <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        <ul className='mx-5'>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message ""
                            </li>
                            
                        </ul>
                    </div>

                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-3 flex-col'>
                            <input value={paymentField.name} name='name' id='name' onChange={handleonChange} type="text" placeholder="Enter Name" className='bg-slate-800 w-full p-2 rounded-lg' />
                            <input value={paymentField.message} name='message' id='message' onChange={handleonChange} type="text" placeholder="Enter Message" className='bg-slate-800 w-full p-2 rounded-lg' />
                            <input value={paymentField.amount} name='amount' id='amount' onChange={handleonChange} type="text" placeholder="Enter Amount" className='bg-slate-800 w-full p-2 rounded-lg' />
                             <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-600 disabled:from-purple-100'  disabled={paymentField.name?.length < 3 || paymentField.message?.length < 4 || paymentField.amount?.length < 1}>Pay</button>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 mt-5'>
                            <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay ₹10</button>
                            <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay ₹20</button>
                            <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay ₹30</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
