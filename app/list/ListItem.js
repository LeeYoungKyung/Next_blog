'use client';

import Link from 'next/link';
import DetailLink from './DetailLink';
export default function ListItem(props) {
  return (
    <>
      {props.result.map((item, index) => (
        <div className='list-item' key={index}>
          <Link prefetch={false} href={'/detail/' + props.result[index]._id}>
            <h4>{item.title}</h4>
          </Link>
          <Link href={'/edit/' + props.result[index]._id}>✏️</Link>
          <span
            onClick={() => {
              fetch('/api/post/delete', {
                method: 'delete',
                body: props.result[index]._id,
              });
            }}
          >
            🗑️
          </span>
          <br></br>
          {/* <DetailLink></DetailLink> */}
          <p>날짜</p>
        </div>
      ))}
    </>
  );
}
