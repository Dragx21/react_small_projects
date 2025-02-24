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

  return (
    <div className={styles.main}> 
      <div className={styles.card}> 
        <div className={styles.cardimage1}> 
          
        </div>
        <form className={styles.box}>
            <input type="text" placeholder='Name' value={user} 
            className={styles.place} style={{borderColor:userColor}}
            onChange={(e) =>setUser(e.target.value)}/>
            
          </form>
      </div>
    </div>
  );
};

export default Form;
