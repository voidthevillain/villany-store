import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/voidthevillain.svg'
import './header.style.scss'

// import firebase from 'firebase/app'
// import 'firebase/firestore'

// const firestore = firebase.firestore()
// firestore.collection('users').doc('5DFf4g3qR5znFwn1sguA').collection('cartItems').doc('0q0MKQV5bfAjUCWCqtY3')
// firestore.doc('/users/5DFf4g3qR5znFwn1sguA/cartItems/0q0MKQV5bfAjUCWCqtY3')
// firestore.collection('/users/5DFf4g3qR5znFwn1sguA/cartItems')

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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
