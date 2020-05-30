import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons' 
import './Footer.css'

const Footer = props => {
    return (
        <div className="footer">
            <div className="circle" onClick={() => props.showAbout(0)}>
                <FontAwesomeIcon icon={icons.faBrain}/>
            </div>
            <div className="circle" onClick={() => props.showAbout(1)}>
                <FontAwesomeIcon icon={icons.faUser}/>
            </div>
            <div className="circle" onClick={() => props.showAbout(2)}>
                <FontAwesomeIcon icon={icons.faCode}/>
            </div>
      </div>
    )
}

export default Footer