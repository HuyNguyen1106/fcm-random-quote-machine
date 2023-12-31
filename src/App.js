import { useState } from 'react';
import './App.css';
import TwitterIcon from './twitter-icon-circle.png'

const quotes = [
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    text: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens",
  },
  {
    text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci",
  },
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "Certain things catch your eye, but pursue only those that capture the heart.",
    author: "Ancient Indian Proverb",
  }
]

function App() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])

  const onClick = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return (
    <div className="App">
      <div id='quote-box' data-testid="quote-box">
        <div id='text' data-testid="text">{quote.text}</div>
        <div id='author' data-testid="author">{quote.author}</div>
        <div className='quote-box-footer'>
          <a id='tweet-quote' data-testid="tweet-quote" target="_blank" rel="noreferrer" href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(quote.text + ' - ' + quote.author)}>
            <img src={TwitterIcon} alt='Twitter Icon'></img>
          </a>
          <button id='new-quote' data-testid="new-quote" onClick={onClick}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
