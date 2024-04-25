import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex items-center justify-between gap-x-4 border-zinc-600'>
        <img src={val.url} alt=''/>
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe