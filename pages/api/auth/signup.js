// import ConnectAlert from '@/app/ConnectAlert';
// import { connectDB } from '@/util/database';
// import bcrypt from 'bcrypt';

// export default async function handler(요청, 응답) {
//   if (요청.method === 'POST') {
//     let hash = await bcrypt.hash(요청.body.password, 10);
//     요청.body.password = hash;
//     //이메일이 있는지 확인하고 하는거 추가
//     let db = (await connectDB).db('forum');
//     await db.collection('user_cred').insertOne(요청.body);
//     응답.status(200).json('가입성공');
//   }
// }
import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(요청, 응답) {
  if (요청.method === 'POST') {
    let hash = await bcrypt.hash(요청.body.password, 10);
    요청.body.password = hash;

    let db = (await connectDB).db('forum');
    let existingUser = await db
      .collection('user_cred')
      .findOne({ email: 요청.body.email });

    if (existingUser) {
      응답.status(400).json('이미 존재하는 이메일입니다');
    } else {
      await db.collection('user_cred').insertOne(요청.body);
      응답.status(200).json('가입성공');
    }
  }
}
