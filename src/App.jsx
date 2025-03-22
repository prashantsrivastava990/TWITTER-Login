import { useState } from 'react';
import './App.css'

function App() {


  const [inputvalue, setInputvalue] = useState('');
  const [subShow, setSubShow] = useState(false)

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputvalue);
    setSubShow(!subShow)
  }

  return (
    <>
      <div className='app'>
        <div className='logo-box'>
          <img src="https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=l1HvTt1fIsaMmQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftwitter-logo-png-logo-twitter-in-png-2500.png&ehk=qSLAOlUdmImpXk6Jj6NUgKgK5gv%2fq1TGUwvlzdeBiNA%3d&risl=&pid=ImgRaw&r=0" alt='logo' className='logo' />
          <h2>Sign in to twitter</h2>
          <button>
            <img src="https://images.frandroid.com/wp-content/uploads/2017/01/google-search.png" alt='logo' />
            Sign in with Google
          </button>
          <button>
            <img src='/apple.png' alt='logo' />
            Sign in with Apple
          </button>
          <hr></hr>
          <span>Or</span>
          <form onSubmit={
            handlesubmit
          } >
            <input type='text' value={inputvalue} onChange={(e) => {
              setInputvalue(e.target.value);
              setSubShow(false)
            }} placeholder='Phone email or username'></input>
            <button >Next</button>
          </form>
          <button>Forget Password</button>
          <p>Don't Have an account <a>Sign Up</a></p>
        </div>
        <div className='data'>
          <h2> the information  is below :</h2>
          <h2>
            {subShow && <h2>{inputvalue}</h2> }
          </h2>
        </div>
      </div>
    </>
  )
}

export default App


