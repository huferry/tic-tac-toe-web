import React from 'react'
import './Dialog.css'

const Dialog = props => {
    const display = props.show ? 'flex' : 'none'
    return (
        <div className="dialog-background" style={{display}}>
            <div className="dialog">
                { props.children }
            </div>
        </div>
    )
}

export default Dialog