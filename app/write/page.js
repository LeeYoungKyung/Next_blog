export default function Write() {
  return (
    <div className='write-css'>
      <h4>write</h4>
      <form action='/api/post/new' method='POST'>
        <input name='title' placeholder='title'></input>
        <input name='content' placeholder='content'></input>
        {/* post랑 get만 사용가능  */}
        <button type='submit'>button</button>
      </form>
    </div>
  );
}
