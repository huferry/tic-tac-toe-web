import React from 'react'
import './Cell.css'

const Cell = ({content, isWinningCell, onClick}) => {

    const handleClickEvent = event => {
        if (!content && onClick) onClick(event)
    }

    const label = content ? content.toUpperCase() : '   '
    const style = { cursor: content ? 'default' : 'pointer'}
    const className = "cell" + (isWinningCell ? " winning-cell" : "")

    return (
        <div className={className} onClick={handleClickEvent} style={style}>
            { label } 
        </div>
    )
}

export default Cell