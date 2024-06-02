'use client';
import { signOut } from 'next-auth/react';
export default function LogoutBtn() {
  return (
    <button
      className='bg-slate-100 hover:bg-slate-300'
      onClick={() => {
        signOut();
      }}
    >
      로그아웃
    </button>
  );
}
