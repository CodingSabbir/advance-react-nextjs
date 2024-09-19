'use client'
import React, { useState } from 'react'

function Button({value,onGamingClickBoard}){
 return(
<button onClick={onGamingClickBoard} className='text-3x font-semibold border h-12 w-12'>{value}</button>
 )
}


export default function GamingBoard() {

  const [square,setSquare]=useState(Array(9).fill(null))
  
  function handleClick(i){
  const nextButton =square.slice()
  nextButton[i]="X"
  setSquare(nextButton)
  }

  return (
    <>
    <div className='flex' >
      <Button value={square[0]} onGamingClickBoard={() => handleClick(0)}/>
      <Button value={square[1]} onGamingClickBoard={() => handleClick(1)}/>
      <Button value={square[2]} onGamingClickBoard={() => handleClick(2)}/>
    </div>
    <div className='flex' >
      <Button value={square[3]} onGamingClickBoard={() => handleClick(3)}/>
      <Button value={square[4]} onGamingClickBoard={() => handleClick(4)}/>
      <Button value={square[5]} onGamingClickBoard={() => handleClick(5)}/>
    </div>
    <div className='flex' >
      <Button value={square[6]} onGamingClickBoard={() => handleClick(6)}/>
      <Button value={square[7]} onGamingClickBoard={() => handleClick(7)}/>
      <Button value={square[8]} onGamingClickBoard={() => handleClick(8)}/>
    </div>
    </>
  )
}
