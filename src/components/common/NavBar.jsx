import React from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

export default function NavBar(){
    return (
        <nav className={"nav-bar"}>
            <Link to="/">
                <img 
                    alt="fixter camp logo"
                    src={logo}
                />
            </Link>
       
        </nav>
    )
}