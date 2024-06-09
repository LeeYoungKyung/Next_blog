'use client';
import { useEffect } from 'react';

export default function NotNull() {
  useEffect(() => {
    alert('로그인을 해주세요');
  }, []);

  return <div></div>;
}
