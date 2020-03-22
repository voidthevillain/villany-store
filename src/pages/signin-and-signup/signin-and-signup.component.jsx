import React from 'react'
import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'
import './signin-and-signup.style.scss'

const SignInAndSignUpPage = () => {
  return (
    <div className='signin-and-signup'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage
