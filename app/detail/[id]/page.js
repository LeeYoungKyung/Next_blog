import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Comment from './Comment';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import NotNull from '@/app/write/notNull';
import './Detail.css';

export default async function Detail(props) {
  let session = await getServerSession(authOptions);
  if (session == null) {
    return <NotNull></NotNull>;
  }
  const db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <div>
      <div className='text-center bg-red-400 border'>
        <div className='result'>
          <h4>{result.title}</h4>
          <hr className='hr'></hr>
          <p>{result.content}</p>
        </div>
      </div>

      <Comment _id={result._id.toString()}></Comment>
    </div>
  );
}
