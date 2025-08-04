import './Settings.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [topic, setTopic] = useState('');
  const [reminder, setReminder] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode(prev => !prev);
  };

  const getReminder = async () => {
    try {
      const res = await axios.post('http://localhost:5000/generate-reminder', {
        topic,
      });
      setReminder(res.data.reminder);
    } catch (error) {
      console.error('Error fetching reminder:', error);
    }
  };

  return (
    <>
      <h1 className='settings'>Settings</h1>
      <button className='toggle' onClick={handleThemeToggle}>
        Theme 🌙
      </button>

      {/* Input for topic */}
      <input
        type='text'
        placeholder='Enter a topic (e.g. health)'
        value={topic}
        onChange={e => setTopic(e.target.value)}
      />
      <button onClick={getReminder}>Get Reminder</button>

      {/* Show reminder */}
      {reminder && <p><strong>Your Reminder:</strong> {reminder}</p>}
    </>
  );
}

export default Settings;
