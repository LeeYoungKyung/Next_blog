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
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div>
      <div>댓글목록 보여주는 부분</div>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => <p key={i}>{a.content}</p>)
        : '댓글없음'}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />

      <button
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
          //.then으로 댓글을 바로 뽑아서 보요주는 형태로
        }}
      >
        전송
      </button>
    </div>
  );
}
