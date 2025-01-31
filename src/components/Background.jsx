import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
        <div className="absolute top-[5%] w-full flex justify-center py-10 text-xl font-semibold text-zinc-600">Pop-Thoughts</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>POP-Up</h1>
    </div>
    </>
  )
}

export default Background
