// 'use client'
// import React, { useState } from 'react'

// function Button({value,onGamingClickBoard}){
//  return(
// <button onClick={onGamingClickBoard} className='text-3x font-semibold border h-12 w-12'>{value}</button>
//  )
// }


//  function GamingBoard() {

//   function handleClick(i){
//   if(square[i]){
//     return;
//   }
//   const nextButton =square.slice()
//   if(xIsNext){
//     nextButton[i]="X"
//   }else{
//     nextButton[i]="O"
//   }
//   setSquare(nextButton)
//   setXIsNext(!xIsNext)
//   }

//   return (
//     <>
//     <div className='flex' >
//       <Button value={square[0]} onGamingClickBoard={() => handleClick(0)}/>
//       <Button value={square[1]} onGamingClickBoard={() => handleClick(1)}/>
//       <Button value={square[2]} onGamingClickBoard={() => handleClick(2)}/>
//     </div>
//     <div className='flex' >
//       <Button value={square[3]} onGamingClickBoard={() => handleClick(3)}/>
//       <Button value={square[4]} onGamingClickBoard={() => handleClick(4)}/>
//       <Button value={square[5]} onGamingClickBoard={() => handleClick(5)}/>
//     </div>
//     <div className='flex' >
//       <Button value={square[6]} onGamingClickBoard={() => handleClick(6)}/>
//       <Button value={square[7]} onGamingClickBoard={() => handleClick(7)}/>
//       <Button value={square[8]} onGamingClickBoard={() => handleClick(8)}/>
//     </div>
//     </>
//   )
// }

// export default function Game(){
//   const [square,setSquare]=useState(Array(9).fill(null))
//   const [xIsNext,setXIsNext]=useState(true)
// return(
//   <div>
//     <div>
//   <GamingBoard/>
//     </div>
//     <div></div>
//   </div>
// )
// }




'use client'
import React, { useState } from 'react'

function Button({ value, onGamingClickBoard }) {
  return (
    <button onClick={onGamingClickBoard} className='text-3x font-semibold border h-12 w-12'>
      {value}
    </button>
  )
}

function GamingBoard({ square, handleClick }) {
  return (
    <>
      <div className='flex'>
        <Button value={square[0]} onGamingClickBoard={() => handleClick(0)} />
        <Button value={square[1]} onGamingClickBoard={() => handleClick(1)} />
        <Button value={square[2]} onGamingClickBoard={() => handleClick(2)} />
      </div>
      <div className='flex'>
        <Button value={square[3]} onGamingClickBoard={() => handleClick(3)} />
        <Button value={square[4]} onGamingClickBoard={() => handleClick(4)} />
        <Button value={square[5]} onGamingClickBoard={() => handleClick(5)} />
      </div>
      <div className='flex'>
        <Button value={square[6]} onGamingClickBoard={() => handleClick(6)} />
        <Button value={square[7]} onGamingClickBoard={() => handleClick(7)} />
        <Button value={square[8]} onGamingClickBoard={() => handleClick(8)} />
      </div>
    </>
  )
}

export default function Game() {
  const [square, setSquare] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(square)

  function handleClick(i) {
    // If there's a winner or square is already filled, return early
    if (winner || square[i]) {
      return
    }

    const nextSquare = square.slice() // Copy the square array
    nextSquare[i] = xIsNext ? 'X' : 'O' // Set X or O based on the current turn
    setSquare(nextSquare) // Update the square array

    setXIsNext(!xIsNext) // Toggle the turn
  }

  return (
    <div>
      <div>
        <GamingBoard square={square} handleClick={handleClick} />
      </div>
      <div className='mt-4'>
        {winner ? (
          <p className='text-2xl'>{`Winner: ${winner}`}</p>
        ) : (
          <p className='text-2xl'>{`Next player: ${xIsNext ? 'X' : 'O'}`}</p>
        )}
      </div>
    </div>
  )
}

// Helper function to check for the winner
function calculateWinner(square) {
  const lines = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a] // Return 'X' or 'O' as the winner
    }
  }
  return null // Return null if no winner yet
}
