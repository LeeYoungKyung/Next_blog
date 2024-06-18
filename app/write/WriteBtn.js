'use client';
import { useEffect } from 'react';

export default function WriteBtn() {
  useEffect(() => {
    alert('작성이 완료되었습니다');
    window.location.href = '/';
  }, []);

  return <div></div>;
}
