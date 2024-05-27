import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className='write-css'>
      <h4>수정 페이지</h4>
      <form action='/api/post/edit' method='POST'>
        <input
          name='title'
          placeholder='title'
          defaultValue={result.title}
        ></input>
        <input
          name='content'
          placeholder='content'
          defaultValue={result.content}
        ></input>
        <input
          style={{ display: 'none' }}
          name='_id'
          defaultValue={result._id.toString()}
        ></input>

        <button type='submit'>수정</button>
      </form>
    </div>
  );
}
