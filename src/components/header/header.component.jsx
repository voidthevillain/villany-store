import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/voidthevillain.svg'
import './header.style.scss'

const Header = ({ currentUser }) => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <Link className='logo-link' to='/'>
          <Logo className='logo' />
        </Link>
      </div>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
