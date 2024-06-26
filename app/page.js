import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb';

import Link from 'next/link';
import Main from './Main';

export default async function Home() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div>
      <img src='./main.png' className='mainBG'></img>
    </div>
  );
}
