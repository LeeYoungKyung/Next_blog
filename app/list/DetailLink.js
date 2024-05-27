'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function DetailLink() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/ ');
      }}
    >
      홈으로 가기
    </button>
  );
}
