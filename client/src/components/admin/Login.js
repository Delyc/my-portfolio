import React from 'react'
import Burger from './Burger'

function Login() {
  return (
    <>
    <Burger />
    <div className='login'>
      <h1>LOGIN</h1>
    <form action="">
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
    </form>
    </div>
    
    </>
  )
}

export default Login




