export default function Write() {
  return (
    <div className='write-css'>
      <h4>daily</h4>
      <form action='/api/post/new' method='POST' className='w-[80%]'>
        <input name='title' placeholder='title' className='titleInput'></input>
        <input
          name='content'
          placeholder='content'
          className='contentInput'
        ></input>
        {/* post랑 get만 사용가능  */}
        <button type='submit' className=' hover:bg-slate-300'>
          작성
        </button>
      </form>
    </div>
  );
}
