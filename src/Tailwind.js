import React from 'react'

function Tailwind() {
  return (
    <div className='bg-red-500'>
        <h3 className='text-xl font-semibold underline'>Tailwind Header</h3>
        <button className='flex items-center bg-black text-white/50 hover:!bg-pink-600 px-4 rounded'>
            Test
        </button>
    </div>
  )
}

export default Tailwind