import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Comment from './Comment';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import NotNull from '@/app/write/notNull';
// import './Detail.css';

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  if (session == null) {
    return <NotNull></NotNull>;
  }
  const db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id.toString()}></Comment>
    </div>
  );
}
