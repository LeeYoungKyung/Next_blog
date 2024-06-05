import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  if (session) {
    요청.body.author = session.user.email;
  }
  console.log(요청.body);
  //지금 로그인한 유저를 알 수 있음
  if (요청.method == 'POST') {
    if (요청.body.title == '') {
      return 응답.status(500).json('값을 입력하세요');
    }
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(요청.body);
    return 응답.status(200).redirect('/list');
  }
}
