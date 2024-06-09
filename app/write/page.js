import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import NotNull from './notNull';

export default async function Write() {
  let session = await getServerSession(authOptions);
  console.log('userInfo', session);
  if (session == null) {
    return <NotNull></NotNull>;
  } else {
    return (
      <div className='write-css'>
        <h4>daily</h4>
        <form action='/api/post/new' method='POST' className='w-[80%]'>
          <input
            name='title'
            placeholder='title'
            className='titleInput'
          ></input>
          <input
            name='content'
            placeholder='content'
            className='contentInput'
          ></input>
          {/* post랑 get만 사용가능  */}
          <button type='submit' className=' hover:bg-slate-300'>
            작성
          </button>
        </form>
      </div>
    );
  }
}
