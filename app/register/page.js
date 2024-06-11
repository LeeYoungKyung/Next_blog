import './Register.css';

export default function Register() {
  return (
    <div className='register-container'>
      <form method='POST' action='/api/auth/signup' className='register-form'>
        <input
          name='name'
          type='text'
          placeholder='이름'
          className='input-field'
        />
        <input
          name='email'
          type='text'
          placeholder='이메일'
          className='input-field'
        />
        <input
          name='password'
          type='password'
          placeholder='비번'
          className='input-field'
        />
        <button type='submit' className='submit-button'>
          id/pw 가입요청
        </button>
      </form>
    </div>
  );
}
