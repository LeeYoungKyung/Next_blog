import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Comment from './Comment';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import NotNull from '@/app/write/notNull';
import './Detail.css';
import { Didact_Gothic } from 'next/font/google';

export default async function Detail(props) {
  let session = await getServerSession(authOptions);
  if (session == null) {
    return <NotNull />;
  }
  const db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <div className='detail-container'>
      <div className='op'>
        <div className='text-center'>
          <div className='result'>
            <h4>{result.title}</h4>
            <hr className='hr' />
            <p>{result.content}</p>
          </div>
        </div>
        <Comment _id={result._id.toString()} className='ment' />
      </div>
    </div>
  );
}
