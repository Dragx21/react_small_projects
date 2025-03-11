import React, { useState } from 'react';
import styles from "../styles/Form.module.css"; 

const Form = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [errorUser, setErrorUser] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirm, setErrorConfirm] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmColor, setConfirmColor] = useState('');

  function validate(e){
    e.preventDefault();
    if(user.length>8){
      setErrorUser("")
      setUserColor("green");
    }
    else{
      setErrorUser("Username must be greater than 8 ");
      setUserColor("red");
    }
    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters");
      setPasswordColor("red");
    } else {
      setErrorPassword("");
      setPasswordColor("green");
    }
    if (password !== "" && password === confirm) {
      setErrorConfirm("");
      setConfirmColor("green");
    } else {
      setErrorConfirm("Passwords didn't match.");
      setConfirmColor("red");
    }
  }

  return (
    <div className={styles.main}> 
      <div className={styles.card}> 
        <div className={styles.cardimage1}> 
        </div>
        <form className={styles.box}>
            <input type="text" placeholder='Name' value={user} 
            id={styles.place} style={{borderColor:userColor}}
            onChange={(e) =>setUser(e.target.value)}/>
            <p className={styles.error}>{errorUser}</p>
            <input type="email" placeholder='email' value={email} 
            id={styles.place} style={{borderColor:emailColor}}
            onChange={(e) =>setEmail(e.target.value)}/>
            <p className={styles.error}>{errorEmail}</p>
            <input
            id={styles.place}
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles.error}>{errorPassword}</p>
          <input type="password"  id={styles.place} placeholder='confirm Password' 
          style={{borderColor:confirmColor}} value={confirm}
          onChange={(e)=>setConfirm(e.target.value)}/>
          <p className={styles.error}>{errorConfirm}</p>
           
          <button className={styles.submitBtn}  onClick={validate} >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
