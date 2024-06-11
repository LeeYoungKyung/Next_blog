import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import './Edit.css';

export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className='edit-container'>
      <h4 className='edit-title'>수정 페이지</h4>
      <form action='/api/post/edit' method='POST' className='edit-form'>
        <input
          name='title'
          placeholder='title'
          defaultValue={result.title}
          className='input-field titleInput'
        />
        <input
          name='content'
          placeholder='content'
          defaultValue={result.content}
          className='input-field contentInput'
        />
        <input
          style={{ display: 'none' }}
          name='_id'
          defaultValue={result._id.toString()}
        />
        <button type='submit' className='submit-button'>
          수정
        </button>
      </form>
    </div>
  );
}
