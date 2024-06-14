'use client';
import { useEffect } from 'react';

export default function ConnectAlert() {
  useEffect(() => {
    alert('회원가입에 성공했습니다');
    window.location.href = '/';
  }, []);

  return <div></div>;
}
