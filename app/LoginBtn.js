'use client';
import { signIn } from 'next-auth/react';
export default function LoginBtn() {
  return (
    <button
      className='bg-slate-100 hover:bg-slate-300'
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}
