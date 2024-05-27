import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';
import ListItem from './ListItem';

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  //object 형태의 문자로 하고싶으면 json
  return (
    <div className='list-bg'>
      <ListItem result={result} />
    </div>
  );
}
