import { useState, useRef,useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import classes from './AuthForm.module.css';
import {useNavigate} from 'react-router-dom';

const AuthForm = () => {
  const navigate=useNavigate();
  const context=useContext(AuthContext)
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
let url;
if(login){
 url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQYXLrWSQR8lxbt1sc-ye5bGOTDsYKzQM'
}
else{
  url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQYXLrWSQR8lxbt1sc-ye5bGOTDsYKzQM'
  
}
fetch(url,{
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
return res.json();
    }else{
      return res.json().then((data)=>{
        
        let errorMessage='Authentication failed!';
        
        
       throw new Error(errorMessage);
      })
    }
  })
  .then((data)=>{
    context.login(data.idToken);
    navigate('/');
  })
  .catch((err)=>{
    alert(err.message);
  })
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
