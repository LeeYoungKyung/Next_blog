import { connectDB } from '@/util/database';
import { _id } from '@next-auth/mongodb-adapter';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  const db = (await connectDB).db('forum');
  let result = await db
    .collection('comment')
    .find({ parent: new ObjectId(요청.query.id) })
    .toArray();
  응답.status(200).json(result);
}
