"use client";

import React, {useEffect, useState} from 'react'
import { fetchUser } from '@/actions/useractions';

const Username = ({ params }) => {

    const [currentUser, setcurrentUser] = useState({});

    const [amountField, setAmountField] = useState('');

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let u = await fetchUser(params.username);
        setcurrentUser(u);
    }

    const handleonChange = (e) => {
        setAmountField(e.target.value);
    }

    const handleAmountTen = () => {
        setAmountField('10');
    }

    const handleAmountTwenty = () => {
        setAmountField('20');
    }

    const handleAmountThirty = () => {
        setAmountField('30');
    }

    return (
        <>
            <div className='cover relative'>
                <img className='object-cover w-full' src={currentUser.coverpic} alt='' />
                <div className='absolute -bottom-20 right-[45%] border-2 border-white rounded-full size-32 overflow-hidden'>
                    <img src={currentUser.profilepic} className='rounded-full object-cover size-32' width={128} height={128} alt="" />
                </div>
            </div>

            <div className="info flex flex-col justify-center items-center my-24 gap-2">
                <div className='font-bold text-lg'>
                    @{params.username}
                </div>
                <div className='text-slate-400'>
                    Let's help {params.username} get a chai!
                </div>
                <div className='text-slate-400'>
                   {currentUser.name} is raising funds for a chai. Let's help him reach his goal.
                </div>

                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        <ul className='mx-5'>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                John donated<span className='font-bold'>₹30</span>with a message "Lots of ❤️"
                            </li>
                            
                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-3 flex-col'>
                            <input type="text" placeholder="Enter Name" className='bg-slate-800 w-full p-2 rounded-lg' />
                            <input type="text" placeholder="Enter Message" className='bg-slate-800 w-full p-2 rounded-lg' />
                            <input value={amountField} onChange={handleonChange} type="text" placeholder="Enter Amount" className='bg-slate-800 w-full p-2 rounded-lg' />
                             <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay</button>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <button onClick={handleAmountTen} className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay ₹10</button>
                            <button onClick={handleAmountTwenty} className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay ₹20</button>
                            <button onClick={handleAmountThirty} className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay ₹30</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Username
