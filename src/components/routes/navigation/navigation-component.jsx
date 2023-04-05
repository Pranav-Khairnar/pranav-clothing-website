import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../../assets/logoIcon.svg'


import './navigation-style.scss'

export default function Navigation() {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
      
    </Fragment>
  )
}