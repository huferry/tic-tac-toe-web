import React, { useState } from 'react'
import './App.css'
import Board from './Components/Board'

import game from '@greenants/tic-tac-toe'
import Dialog from './Components/Dialog'
import Stats from './Components/Stats'
import firebase from './firestore'
import Hello from './Components/Hello'
import About from './Components/About'
import Footer from './Components/Footer'

const db = firebase.firestore()
const playRef = db.collection('play')
game.setLogger(x => console.log(x))

const getStats = async () => {
  const snapshot = await db.collection('play').get()
  return snapshot.docs.map(doc => doc.data())
}

const App = () => {

  const [ stats, setStats ] = useState([])
  const [ playerSide, setPlayerSide ] = useState( 'x' )
  const [ dialogMessage, setDialogMessage ] = useState( `Let's play Tic, Tac, Toe!` )
  const [ board, setBoard ] = useState( game.newBoard() )
  const [ winner, setWinner ] = useState()
  const [ about, setAbout ] = useState({ visible: false, index: 0 })

  if (stats.length ===0) {
    getStats().then(s => setStats(s))
  }

  const setMove = (board, move) => {
    if (!move || winner) return board
    const nextBoard = game.setMove(board, move)
    const newWinner = game.getWinner(nextBoard)
    setWinner(newWinner)
    setBoard(nextBoard)

    if (game.isTie(nextBoard)) {
      saveResult('tie')
      setDialogMessage(`It's a tie, let's play again!`)
      getStats().then(s => setStats(s))
    }

    if (newWinner) {
      saveResult(newWinner.side === playerSide ? 'human' : 'ai')
      setDialogMessage(newWinner.side === playerSide 
        ? `You win, let's play again!` : `You lose, let's play again!`)
        getStats().then(s => setStats(s))
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

  const saveResult = winner => {
    return new Promise((resolve, reject) => {
      try{
        playRef.add({
          ts: new Date(),
          winner,
          firstSet: playerSide === 'x' ? 'human' : 'ai'
        })  
        resolve()    
      }
      catch (err) {
        reject(err)
      }
    })
  }

  return (
    <div>
      <div className="app">
        <div className="header">Let's Play!</div>
        <div className='side'>Human is playing: {playerSide}</div>
        <Board 
          board={board}
          winner={winner} 
          size={600} 
          playerSide={playerSide}
          onCellClick={cellClick}
        />
        <Stats stats={stats} />
        <Footer showAbout={index => setAbout({visible: true, index})} />
      </div>
      <Dialog show={dialogMessage !== ''}>
          <h2>{dialogMessage}</h2>
          Who does want to start?
          <div className="button-container">
            <div className="button" onClick={computerStartGame}>Tockie</div>
            <div className="button" onClick={playerStartGame}>You</div>
          </div>
      </Dialog>
      <Hello />
      <About visible={about.visible} index={about.index} onClose={() => setAbout({visible: false})}/>
  </div>)
}

export default App