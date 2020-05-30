import React from 'react'
import './About.css'

const About = ({ visible, index, onClose }) => {
    
    const title =  index < content.length  ? content[index].title : null
    const text = index < content.length ? content[index].getText() : null
    
    return (
        <div className="about" style={{display: visible ? 'flex' : 'none'}}>
            <div className="about-title">{title}</div>
            <div className="about-content">{text}</div>
            <div 
                className="about-button"
                onClick={ onClose }
            >
                close
            </div>
        </div>
    )
}

const content = [
    {
        title: 'The Game',
        getText: () => (
            <div>
                This application is created to demonstrate artificial intelligence, a computer 
                that can think like human. I call this computional brain 'Tockie'. Try to beat
                Tockie and learn that this game is not as simple as you think. Tockie keeps the
                statistics of each game played to measure his performance. Enjoy the game!
            </div>
        ) 
    },
    {
        title: 'The Author',
        getText: () => (
            <div>
               His name is Ferry Utomo, a life time programmer. He has been creating software
               since his 14th, in the late 80s. Currently these are the stacks he specialies:
               C# (framework &amp; core) backend development, Delphi (backend &amp; windows form),
               JavaScript (NodeJS, React, jQuery), Oracle (PL/SQL), SQL Server, MySQL, CosmosDB,
               MongoDB and the list grows. Besides those practical skills, he's also a dedicated
               SOLID principal, TDD evangelist and an expert in Design Patterns and refactoring 
               techniques. 
               <p>You can reach him through his <a href="https://www.linkedin.com/in/heruutomo/">LinkedIn</a>
               &nbsp;page.</p>  
            </div>
        )
    },
    {
        title: 'The Tech',
        getText: () => (
            <div>
                <p><div className="point">React. </div>The web application is created
                using vanilla React.
                </p>

                <p><div className="point">JavaScript. </div>The game engine is created 
                in JavaScript. This engine is written in a functional style. I really
                fascinated by JavaScript's liberty of weak-typing. This allows us to 
                pass functions as first class citizen without thinking about its complex
                typing (think of how to do this in C#). Repo is on <a href="https://github.com/huferry/tic-tac-toe">GitHub</a></p>

                <p><div className="point">Firebase/Firestore. </div>The stats are saved
                in Firestore. <a href="https://firebase.google.com/">Firebase</a> is 
                Google's backend platform and Firestore is a no-SQL
                database which is also a part of Firebase.</p>
            </div>
        )
    }
]

export default About