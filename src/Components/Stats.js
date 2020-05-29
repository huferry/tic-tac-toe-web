import React from 'react'
import './Stats.css'

const Stats = ({stats}) => {
    
    const totalPlay = stats ? stats.length : 0

    const getWinnerCount = who => totalPlay === 0 ? '-' : stats.filter(s => s.winner === who).length

    const aiWins = getWinnerCount('ai')
    const humanWins = getWinnerCount('human')
    const tie = getWinnerCount('tie')

    return (
        <div className='stats'>
            <div>Tockie wins: {aiWins}</div>
            <div>Human wins: {humanWins}</div>
            <div>Tie: {tie}</div>
        </div>
    )
}

export default Stats