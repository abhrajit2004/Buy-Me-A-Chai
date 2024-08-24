import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            <div className='cover relative'>
                <img className='object-cover w-full' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1725408000&token-hash=Zp1HvMNgvW03TpeETEXcdvjW5ZSWMLeoeBewTXUIa14%3D' alt='' />
                <div className='absolute -bottom-20 right-[45%] border-2 border-white rounded-full'>
                    <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" className='rounded-full' width={150} height={150} alt="" />
                </div>
            </div>

            <div className="info flex flex-col justify-center items-center my-24 gap-2">
                <div className='font-bold text-lg'>
                    @{params.username}
                </div>
                <div className='text-slate-400'>
                    Creating Animated art for VTT's
                </div>
                <div className='text-slate-400'>
                    13,360 members . 87 posts . $17,620/release
                </div>

                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        <ul className='mx-5'>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated<span className='font-bold'>$30</span>with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            <li className='my-2 flex gap-2 items-center'>
                                <img className='invert' width={33} src="avatar.gif" alt="user avatar" />
                                Shuvadipta donated $30 with a message ""
                            </li>
                            

                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-3 flex-col'>
                            <input type="text" placeholder="Enter Name" className='bg-slate-800 w-full p-2 rounded-lg' />
                            <input type="text" placeholder="Enter Message" className='bg-slate-800 w-full p-2 rounded-lg' />
                            <input type="text" placeholder="Enter Amount" className='bg-slate-800 w-full p-2 rounded-lg' />
                             <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay</button>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay $10</button>
                            <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay $20</button>
                            <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Pay $30</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Username
