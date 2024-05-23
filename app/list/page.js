import { connectDB } from '@/util/database';

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);
  console.log(result[0].title);
  //object 형태의 문자로 하고싶으면 json
  return (
    <div className='list-bg'>
      {result.map((item, index) => (
        <div className='list-item' key={index}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    //Map 함수로 바꾸면 이렇게 됨다
    // <div className='list-bg'>
    //   <div className='list-item'>
    //     <h4>{result[0].title}</h4>
    //     <p>{result[0].content}</p>
    //   </div>
    //   <div className='list-item'>
    //     <h4>{result[1].title}</h4>
    //     <p>{result[1].content}</p>
    //   </div>
    //   <div className='list-item'>
    //     <h4>{result[2].title}</h4>
    //     <p>{result[2].content}</p>
    //   </div>
    // </div>
  );
}
