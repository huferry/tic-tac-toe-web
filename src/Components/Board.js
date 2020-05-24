import React from 'react'
import './Board.css'
import Cell from './Cell'
import BoardBackground from './board_bg.jpg'

const Board = ({board, winner, playerSide, onCellClick}) => {
    
    const isWinningCell = (row, col) => {
        if (!winner) return false
        return winner.line.some(c => c.row === row && c.col === col)
    }

    const buildBoard = () => {
        return [0,1,2].map(row => {
            return (<div key={`row_${row}`} className="row">
                {
                    [0,1,2].map(col => {
                        return (
                            <Cell
                                key={`cell_${row}_${col}`}
                                isWinningCell={isWinningCell(row,col)}
                                content={board[row][col]}
                                onClick={ e => onCellClick({row, col, side: playerSide})}
                            />
                        )
                    })
                }
            </div>)
        })
    }

    return (
        <div className="board" style={{backgroundImage: `url(${BoardBackground})`}}>
            { buildBoard() }
        </div>
    )
}

export default Board