'use client';

import Link from 'next/link';

export default function RegisterBtn() {
  return (
    <Link href='/register'>
      <button>회원가입</button>
    </Link>
  );
}
