import classes from './ProfileForm.module.css';
import React,{useRef,useContext} from 'react';
import AuthContext from '../../store/AuthContext';

const ProfileForm = () => {
   const context=useContext(AuthContext);
  const changePasswordRef=useRef();
  
  function submitHandler(event){
    event.preventDefault();
    const passwordRef=changePasswordRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAQYXLrWSQR8lxbt1sc-ye5bGOTDsYKzQM',{
      method:'POST',
      body:JSON.stringify({
        idToken:context.token,
        password:passwordRef,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      console.log(res);
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={changePasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
