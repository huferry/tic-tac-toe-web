import React, { useState } from 'react'
import './App.css'
import Board from './Components/Board'

import game from '@greenants/tic-tac-toe'
import Dialog from './Components/Dialog'

const App = () => {

  const [ playerSide, setPlayerSide ] = useState( 'x' )
  const [ dialogMessage, setDialogMessage ] = useState( `Let's play Tic, Tac, Toe!` )
  const [ board, setBoard ] = useState( game.newBoard() )
  const [ winner, setWinner ] = useState()

  const setMove = (board, move) => {
    if (!move || winner) return board
    const nextBoard = game.setMove(board, move)
    const newWinner = game.getWinner(nextBoard)
    setWinner(newWinner)
    setBoard(nextBoard)

    if (game.isTie(nextBoard)) {
      setDialogMessage(`It's a tie, let's play again!`)     
    }

    if (newWinner) {
      setDialogMessage(newWinner.side === playerSide 
        ? `You win, let's play again!` : `You lose, let's play again!`)
    }
    return nextBoard
  }

  const computerMove = board => {
    const move = game.calculateMove(board)
    return setMove(board, move)
  }

  const cellClick = move => {
    computerMove(setMove(board, move))
  }

  game.setLogger(x => console.log(x))
  
  const computerStartGame = () => {
    setPlayerSide('o')
    setWinner(null)
    setBoard(game.newBoard(true))
    setDialogMessage('')
  }

  const playerStartGame = () => {
    setPlayerSide('x')
    setWinner(null)
    setBoard(game.newBoard())
    setDialogMessage('')
  }

  return (
    <div>
      <div className="app">
        <div className="header">Let's Play!</div>
        <Board 
          board={board}
          winner={winner} 
          size={600} 
          playerSide={playerSide}
          onCellClick={cellClick}
        />
      </div>
      <Dialog show={dialogMessage !== ''}>
          <h2>{dialogMessage}</h2>
          Who does want to start?
          <div className="button-container">
            <div className="button" onClick={computerStartGame}>Computer</div>
            <div className="button" onClick={playerStartGame}>You</div>
          </div>
      </Dialog>
  </div>)
}

export default App