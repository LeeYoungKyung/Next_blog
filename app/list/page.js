import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';
import ListItem from './ListItem';

export const dynamic = 'force-dynamic';
// export const dynamic = 'force-static'
// 둘을 적어주고 코드를 짜면 다이나믹하거나 스태틱하게 보여 줌
//쓰고 > npm run build를 해주면 됨 but 이런식이면 db에 부담을 줌
//따라서 캐싱을 해 두고 재사용하면서 서버의 부담감을 줄일 수 있음
//{캐싱하는 방법}await fetch('/url',{cache : 'force-cache})
export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  //object 형태의 문자로 하고싶으면 json
  return (
    <div className='list-bg'>
      <ListItem result={result} />
      {/* <ListItem result={result} />
      작명 = {전송할 데이터} == 자식컴포넌트에 props로 전달
      client로 처리된 자식에게 정보를 노출시키지 않고 안전하게 보낼 수 있어서
      선호나는 방법 */}
    </div>
  );
}
