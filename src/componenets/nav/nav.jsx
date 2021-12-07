import React from 'react'
import './nav.scss'

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__home">
                Home
            </div>
            <div className="nav__software">
                Software Portfolio
            </div>
            <div className="nav__ux">
                UX Design
            </div>
            <div className="nav__about">
                About
            </div>
        </div>
    )
}

export default Nav
