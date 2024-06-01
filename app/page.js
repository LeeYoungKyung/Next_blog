import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb';
import Link from 'next/link';

export default async function Home() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  return <div></div>;
}
