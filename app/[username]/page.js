import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className='cover w-full bg-red-50 relative'>
      <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1714780800&token-hash=wR398qHKEcIWNPwIALD4xiH50QPROiqQ31p3E1-dwsI%3D" alt="" />
      <div className='absolute -bottom-14 right-[44%] border-2 border-white rounded-full'>
        <img className='rounded-full' width={150} height={150} src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-20 flex-col gap-2">
      <div className='font-bold text-lg'>
        @{params.username}
      </div>
      <div className='text-slate-400'>
      Creating Animated art for VTTs
      </div>
      <div className='text-slate-400'>
        10,814 members . 84 posts . $17,860/release
      </div>

      <div className="payment flex gap-3 w-[80%] text-white mt-11">
        <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
          <h2 className='text-2xl font-bold'>Supporters</h2>
          <ul className='my-5'>
            <li className='my-2 flex gap-2 items-center'>
              <img className="invert" src="avatar.svg" alt="user avatar" />
              <span>
              Shah Rukh Khan donated <span className='font-bold'>$30</span> with a message
              </span>
            </li>
            <li className='my-2 flex gap-2 items-center'>
              <img className="invert" src="avatar.svg" alt="user avatar" />
              <span>
              Donald Trump donated <span className='font-bold'>$30</span> with a message
              </span>
            </li>
            <li className='my-2 flex gap-2 items-center'>
              <img className="invert" src="avatar.svg" alt="user avatar" />
              <span>
              Tom Cruise donated <span className='font-bold'>$30</span> with a message
              </span>
            </li>
            <li className='my-2 flex gap-2 items-center'>
              <img className="invert" src="avatar.svg" alt="user avatar" />
              <span>
              Steve Rogers donated <span className='font-bold'>$30</span> with a message
              </span>
            </li>
            <li className='my-2 flex gap-2 items-center'>
              <img className="invert" src="avatar.svg" alt="user avatar" />
              <span>
              Ryan Gosling donated <span className='font-bold'>$30</span> with a message
              </span>
            </li>
            <li className='my-2 flex gap-2 items-center'>
              <img className="invert" src="avatar.svg" alt="user avatar" />
              <span>
              Keanu Reeves donated <span className='font-bold'>$30</span> with a message
              </span>
            </li>
          </ul>
        </div>
        <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
          <h2 className='text-2xl font-bold'>Make a Payment</h2>
          <div className='my-5'>
            <input type="text" placeholder='Name' className='w-full p-2 rounded-lg bg-slate-800' />
          </div>
          <div className='my-5'>
            <input type="text" placeholder='Amount' className='w-full p-2 rounded-lg bg-slate-800' />
          </div>
          <div className='my-5'>
            <input type="text" placeholder='Message' className='w-full p-2 rounded-lg bg-slate-800' />
          </div>
          <div className='my-5'>
            <button className='bg-slate-600 text-white p-2 rounded-lg w-full transition-all hover:bg-slate-800'>Pay</button>
          </div>
          {/* or choose from these amounts */}
          <div className='flex gap-2 mt-5'>
            <button className=' text-white p-3 rounded-lg bg-slate-800'>Pay $10</button>
            <button className=' text-white p-3 rounded-lg bg-slate-800'>Pay $20</button>
            <button className=' text-white p-3 rounded-lg bg-slate-800'>Pay $30</button>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Username