import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
    PhoneAuthProvider,
     signInWithCredential,
    getAuth,
    
  } from 'firebase/auth';
  import React, { useState } from 'react';
  import PhoneInput from 'react-phone-input-2';
  import 'react-phone-input-2/lib/style.css';
  import { auth } from './firebase';
  
  function PhoneSignin() {
    const [phone, setPhone] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otp, setOtp] = useState('');
  
    const handleSend = async () => {
      try {
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
        const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
        setConfirmationResult(confirmation);
        console.log("confirmation", confirmation);
      } catch (err) {
        console.error(err);
      }
    };
  
    console.log("confirmationResult", confirmationResult);
  
    const handleInput = (e) => {
      let value = e.target.value;
      setOtp(value);
    };
  
    const handleVerify = async () => {
        try {
          const credential = PhoneAuthProvider.credential(confirmationResult.verificationId, otp);
          await signInWithCredential(auth, credential);
          // Now the user is signed in
          console.log("User is signed in",credential,auth);
        } catch (err) {
          console.error(err);
        }
      };
  
    return (
      <div>
        PhoneSignin
        <div>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(phone) => setPhone("+" + phone)}
          />
        </div>
        <button onClick={handleSend}>Send OTP</button>
        <br />
        <div id='recaptcha'></div>
        <input onChange={handleInput} placeholder='Input OTP' />
        <br />
        <button onClick={handleVerify}>Verify</button>
      </div>
    );
  }
  
  export default PhoneSignin;