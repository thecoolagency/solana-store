import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "thecoolagency";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header">🫡 Pay me in Solana 🫡</p>
          <p className="sub-text">Only sh*tcoins make me happy</p>
        </header>

        <main>
          <img src="https://www.jonahlmadeya.com/files/yes.GIF" alt="emoji" />
        </main>

        <div className="footer-container">
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by Jonah @${TWITTER_HANDLE} with buildspace`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
