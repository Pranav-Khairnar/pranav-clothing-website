import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../../assets/logoIcon.svg'
import { UserContext } from '../../contexts/user-contexts'

import './navigation-style.scss'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import CartIcon from '../../cart-icon/cart-icon-component'
import { CartDropDown } from '../../cart-dropdown/cart-dropdown-component'
import { CartContext } from '../../contexts/cart-context'

export default function Navigation() {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    console.log(currentUser);
    
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
                <Link>
                {
                    currentUser? (
                        <span className='nav-link' onClick = {signOutUser}> SIGN OUT</span>)
                        : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    
                }
                </Link>
                <CartIcon />
            </div>
            {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      
    </Fragment>
  )
}
