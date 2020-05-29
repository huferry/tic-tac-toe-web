import React, { useState } from 'react'
import './Hello.css'

const Hello = () => {
    const [ visible, setVisible ] = useState(true)

    return (
        <div 
            className="hello" 
            style={{display: visible ? 'flex' : 'none' }}
            onClick={() => setVisible(false)}
            >
            <div className="hello-box">
                <div>
                    <img src="https://robohash.org/ttt" alt="robot"/>
                </div>
                <div>
                    <p>Hi, my name is Tockie!</p>
                    <p>
                    I am an <i>artifical intelligence</i> humanoid.
                    I was created to beat human in
                    the Tic-Tac-Toe game.
                    Please click anywhere to accept the challange!</p>
                </div>
            </div>
        </div>
    )
}

export default Hello