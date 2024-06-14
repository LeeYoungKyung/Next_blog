'use client';

import './Register.css';
import { useState } from 'react';
import ConnectAlert from '@/app/ConnectAlert';

export default function Register() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setShowAlert(true);
    } else {
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit} className='register-form'>
        <input
          name='name'
          type='text'
          placeholder='이름'
          className='input-field'
        />
        <input
          name='email'
          type='text'
          placeholder='이메일'
          className='input-field'
        />
        <input
          name='password'
          type='password'
          placeholder='비번'
          className='input-field'
        />
        <button type='submit' className='submit-button'>
          회원가입
        </button>
      </form>
      {showAlert && <ConnectAlert />}
    </div>
  );
}
