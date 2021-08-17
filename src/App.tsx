import React from 'react';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [userValue, setUserValue] = useState<string>('')

  const handleUserValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setUserValue(value)
  }

  return (
    //border-solid border-4 
    <section className="w-full " >
      <header className='w-full flex justify-end items-center'>
        <p className='m-2'>Gmail</p>

        <p className='m-2'>Images</p>
        <svg xmlns="http://www.w3.org/2000/svg" className=" m-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <button className=' m-2 bg-blue-500 p-1 text-white rounded'>Sign In</button>
      </header>

      <section className='w-full content-center flex justify-center'  >
        <section className='main w-11/12  md:w-11/12  lg:w-1/2 h-2/4 text-center mx-auto my-28 lg:my-52'>

          <div className='google my-5'>
            <span className='text-7xl text-indigo-500'>G</span>
            <span className='text-6xl text-red-500'>o</span>
            <span className='text-6xl text-yellow-500'>o</span>
            <span className='text-6xl text-indigo-500'>g</span>
            <span className='text-6xl text-green-800'>l</span>
            <span className='text-6xl text-red-500'>e</span>
          </div>
          <form className='relative '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type='search'
              className="py-1 px-10 txt-sm text-black rounded-full border-2 border-#D3D3D3 w-full"
              value={userValue}
              onChange={handleUserValue} />
          </form>
          <div className='my-5'>
            <a href={`https://google.com/search?q=${userValue}`} className='mx-3'><button className='border-solid border-transparent text-gray-600 rounded py-1 px-2 bg-gray-100 '>Google Search</button></a>
            <a href='https://perfects.engineering.' className='mx-3' ><button className='border-solid border-transparent text-gray-600 rounded py-1 px-2 bg-gray-100 '>I'm feeling lucky</button></a>
          </div>
          <div className='offered-in'>
            <span className='text-sm'>Google offered in:</span>
            <a href='https://www.google.com/' className='text-sm mx-1 text-blue-900'>Hausa</a>
            <a href='https://www.google.com/' className='text-sm mx-1 text-blue-900'>Igbo</a>
            <a href='https://www.google.com/' className='text-sm mx-1 text-blue-900'>Èdé Yorùbá</a>
            <a href='https://www.google.com/' className='text-sm mx-1 text-blue-900'>Nigerian Pidgin</a>
          </div>
        </section>
      </section>

      <footer className='footer flex flex-col divide-y divide-grey-900 bg-gray-100 py-2'>
        <p className='my-2 px-1 lg:px-6 text-gray-600 font-light text-xs lg:text-sm'>Nigeria</p>
        <div className=' px-1 lg:px-6 w-full flex justify-between overflow-x-scroll'>
          <nav className='my-2 text-xs lg:text-sm'>
            <a href='https://ads.google.com/intl/en_ng/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1' className='text-gray-600 font-light'>Advertising</a>
            <a href='https://smallbusiness.withgoogle.com/intl/en-ssa/?subid=ng_en-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google&amp;utm_medium=ep&amp;utm_campaign=google_hpbfooter&amp;utm_content=google_hpbfooter&amp;gmbsrc=ng-en_GB-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/' className='mx-2 lg:mx-4 text-gray-600 font-light'>Business</a>
            <a href='https://about.google/?utm_source=google-NG&amp;utm_medium=referral&amp;utm_campaign=hp-footer&amp;fg=1' className='mx-2 lg:mx-4 text-gray-600 font-light'>About</a>
            <a href='https://www.google.com/search/howsearchworks/?fg=1' className='mx-2 lg:mx-4 text-gray-600 font-light'>How Search Works</a>
          </nav>
          <nav className='my-2 text-xs lg:text-sm '>
            <a href='https://policies.google.com/privacy?hl=en-NG&amp;fg=1' className='mx-2 lg:mx-4 text-gray-600 font-light'>Privacy</a>
            <a href='https://policies.google.com/terms?hl=en-NG&amp;fg=1' className='mx-2 lg:mx-4 text-gray-600 font-light'>Terms</a>
            <a href='https://www.google.com/preferences?hl=en-NG&amp;fg=1' className='text-gray-600 font-light'>Settings</a>
          </nav>
        </div>

      </footer>
    </section>
  );
}

export default App;
