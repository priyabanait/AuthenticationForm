import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  
  const emailRef=useRef();
     const passwordRef=useRef();

  const[login,setLogin]=useState(true);
  function switchAuthHandler(){
 setLogin((prevState)=>!prevState);
  }

 function submitHandler(event){
event.preventDefault();

const enterdEmail=emailRef.current.value;
const enterdPassword=passwordRef.current.value;
if(login){
  
}
else{
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQYXLrWSQR8lxbt1sc-ye5bGOTDsYKzQM',{
    method:'POST',
    body:JSON.stringify({
      email:enterdEmail,
      password:enterdPassword,
      returnSecureToken:true
    }),
    headers:{
      'Content-Type':'application/json'
    }
  }).then((res)=>{
    if(res.ok){
console.log('ok');
    }else{
      return res.json().then((data)=>{
        
        let errorMessage='Authentication failed';
        if(data && data.error && data.error.message){
          errorMessage=data.error.message;
        }
        alert(errorMessage);
      })
    }
  })
}
 }
  return (
    <section className={classes.auth}>
      <h1>{login ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordRef}
            required
          />
        </div>
        <button  id='log'>{login?'Login':'Create Account'}</button>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthHandler}
          >
            {login ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
