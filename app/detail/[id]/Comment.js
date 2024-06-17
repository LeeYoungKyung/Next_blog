'use client';

import { useEffect, useState } from 'react';

export default function Comment(props) {
  let [comment, setComment] = useState('');
  let [data, setData] = useState([]);
  //쓸데없는 코드 보관함 : ajax 또는 타이머를 넣음
  //로드 재 렌더링될때 마다 실행됨
  //[] 1회만
  //html을 보여 준 다음에 실행됨

  useEffect(() => {
    fetch('/api/comment/list?id=' + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className='bg'>
      <div className='commentBox'>
        {data.length > 0
          ? data.map((a, i) => (
              <p className='comments' key={i}>
                {a.content}
              </p>
            ))
          : '첫번째 댓글을 남겨주세요💗'}
      </div>
      <div className='inputButton'>
        <input
          className='m-1 z-50'
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <button
          className='m-1'
          onClick={() => {
            fetch('/api/comment/new', {
              method: 'POST',
              body: JSON.stringify({ comment: comment, _id: props._id }),
            });
          }}
        >
          전송
        </button>
      </div>
    </div>
  );
}
