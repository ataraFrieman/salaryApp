import React from 'react'

import './nav.css'

const Nav = () => {

    return (
        <div className="nav-bar">
            <div className="logo-container">
                <img src={require('../../assets/logo.gif')} className="logo" />
                <span className="logo-name" >PayMent</span>
            </div>

        </div>
    )
}
export default Nav