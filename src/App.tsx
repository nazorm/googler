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
    <section className="md:container md:mx-auto" >
      <header className='header'>
        <p>Gmail</p>

        <p>Images</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <button>Sign In</button>
      </header>


      <section className='main'>
        <div className='google'>
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </div>
        <form className='border-solid '>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type='search'
            className="p-1 txt-sm text-black rounded-full border-2 border-#D3D3D3 w-150px"
            value={userValue}
            onChange={handleUserValue} />
        </form>
        <div className='acction-btns'>
          <a href={`https://google.com/search?q=${userValue}`}><button>Google Search</button></a>
          <a href='https://perfects.engineering.'><button>I'm feeling lucky</button></a>
        </div>
        <div className='offered-in'>
          <span>Google offered in:</span>
          <a href='https://www.google.com/'>Hausa</a>
          <a href='https://www.google.com/'>Igbo</a>
          <a href='https://www.google.com/'>Èdé Yorùbá</a>
          <a href='https://www.google.com/'>Nigerian Pidgin</a>
        </div>
      </section>

      <footer className='footer'>
        <p>Nigeria</p>
        <span className='line'></span>
        <div className='nav-area'>
          <nav>
            <a href='https://ads.google.com/intl/en_ng/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>Advertising</a>
            <a href='https://smallbusiness.withgoogle.com/intl/en-ssa/?subid=ng_en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ng-en_GB-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/'>Business</a>
            <a href='https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1'>About</a>
            <a href='https://www.google.com/search/howsearchworks/?fg=1'>How Search Works</a>
          </nav>
          <nav>
            <a href='https://policies.google.com/privacy?hl=en-NG&fg=1'>Privacy</a>
            <a href='https://policies.google.com/terms?hl=en-NG&fg=1'>Terms</a>
            <a href='https://www.google.com/preferences?hl=en-NG&fg=1'>Settings</a>
          </nav>
        </div>

      </footer>
    </section>
  );
}

export default App;
