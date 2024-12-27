import React from 'react'

function Header() {
  return (
    <header className='flex flex-col justify-center items-center p-4 gap-3 border-b-2 border-white 3'>
        <h1 className='text-3xl font-[Barrio]'>ASSEMBLY : ENDGAME</h1>
        <p className='flex flex-col font-[Gruffy] text-sm'>
          <span> GUESS THE WORD IN LIMITED ATTEMPTS </span>
          <span>TO SAVE THE WORLD FROM ASSEMBLY</span>
        </p>
    </header>
  )
}

export default Header