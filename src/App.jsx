import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const getRandomMessage = (messages) => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  useEffect(() => {
    fetch('/commitMessages.json')
      .then(response => response.json())
      .then(data => {
        setMessage(getRandomMessage(data.messages));
      })
      .catch(error => console.error('Error fetching commit messages:', error));
  }, []);

  return (
    <div className="content">
      <p>{message}</p>

      <p>- Iemand op het TCR</p>
      <p className="github">
        [<a href="https://github.com/bennovandorst/TCR-Commit-Generator">Github</a>]
      </p>
    </div>
  );
}

export default App;