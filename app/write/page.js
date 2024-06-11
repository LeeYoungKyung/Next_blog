import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import NotNull from './notNull';
import './Write.css';

export default async function Write() {
  let session = await getServerSession(authOptions);
  console.log('userInfo', session);
  if (session == null) {
    return <NotNull></NotNull>;
  } else {
    return (
      <div className='write-container'>
        <h4 className='write-title'>daily</h4>
        <form action='/api/post/new' method='POST' className='write-form'>
          <input
            name='title'
            placeholder='title'
            className='input-field titleInput'
          />
          <input
            name='content'
            placeholder='content'
            className='input-field contentInput'
          />
          <button type='submit' className='submit-button'>
            작성
          </button>
        </form>
      </div>
    );
  }
}
