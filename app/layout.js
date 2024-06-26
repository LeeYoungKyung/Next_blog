import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from './LogoutBtn';
import RegisterBtn from './register/RegisterBtn';
export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  let gitSession = await getServerSession(authOptions); // 회원 정보 가져오기
  let kakaoSession = await getServerSession(authOptions);

  const session = gitSession || kakaoSession;
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='navbar'>
          <div className='nav-links'>
            <Link href='/' className='logo'>
              놀러와요 우리집
            </Link>
            <Link href='/list'>List</Link>
            <Link href='/write'>Write</Link>
          </div>

          <div className='auth-section'>
            {session ? (
              <span className='user-greeting'>
                반갑습니다! {session.user.name} 님 <LogoutBtn />
              </span>
            ) : (
              <div className='auth-buttons'>
                <RegisterBtn /> <LoginBtn />
              </div>
            )}
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
