import React, { useState } from 'react'
import './Cell.css'

const Cell = ({content, shadow, isWinningCell, onClick}) => {

    const handleClickEvent = event => {
        if (!content && onClick) onClick(event)
    }

    const [shadowVisible, setShadowVisible] = useState(false)

    const label = content ? content.toUpperCase() : '   '
    const style = { cursor: content ? 'default' : 'pointer'}
    const className = "cell" + (isWinningCell ? " winning-cell" : "")
    
    const shadowStyle = { 
        display: content || !shadowVisible 
        ? 'none' 
        : 'block'
    }

    return (
        <div 
            className={className} 
            onClick={handleClickEvent} 
            onMouseEnter={() => setShadowVisible(true)}
            onMouseLeave={() => setShadowVisible(false)}
            style={style}>
            { label } 
            <span 
                className="shadow" 
                style={shadowStyle}>{shadow.toUpperCase()}
            </span>
        </div>
    )
}

export default Cell