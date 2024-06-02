'use client';

import Link from 'next/link';
import DetailLink from './DetailLink';
export default function ListItem({ result }) {
  return (
    <>
      {result.map((item, index) => (
        <div className='list-item hover:bg-slate-100 list-none' key={index}>
          <Link prefetch={false} href={'/detail/' + result[index]._id}>
            <h4>{item.title}</h4>
          </Link>
          <Link href={'/edit/' + result[index]._id}>✏️</Link>
          {/* ajax를 사용하는데 이건 client에서만 사용이 가능함 : form으로 요청시 항상 새로고침 하지만 이건아님*/}
          <span
            onClick={(e) => {
              fetch('/api/post/delete', {
                method: 'DELETE',
                body: result[index]._id,
              })
                .then((r) => {
                  r.json();
                })
                .then(() => {
                  ///후의 결과를
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = 'none';
                  }, 1000);
                });
            }}
          >
            🗑️
          </span>
          <p>날짜</p>
        </div>
      ))}
    </>
  );
}

// fetch('/api/test').then(() => {
//   console.log(123123123);
// });
// get요청이 되었을 때 실행이 되고 싶으면 then을 붙여서 서버응답시 실행 할 수 있게 해줌
