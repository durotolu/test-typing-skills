import './App.css';
import React, { useState } from 'react';
import randomParagraph from 'random-paragraph'
import Home from './components/Home'
import Challenge from './components/Challenge'
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const randomSentence = randomParagraph({min: 4, max: 9})
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [paragraph, setParagraph] = useState(randomSentence);
  const [customParagraph, setCustomParagraph] = useState(randomSentence);

  const onChangeTime = (event) => setTime(event.target.value)
  const onChangeParagraph = (event) => setCustomParagraph(event.target.value)

  const startTest = () => {
    if (time && paragraph) navigate('/challenge')
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={
          <Home
            time={time}
            paragraph={paragraph}
            onChangeTime={onChangeTime}
            onChangeParagraph={onChangeParagraph}
            startTest={startTest}
          />
        } />
        <Route exact path="/challenge" element={
          <Challenge
            time={time}
            paragraph={customParagraph || paragraph}
            startTest={startTest}
            randomSentence={randomSentence}
            setParagraph={setParagraph}
            setCustomParagraph={setCustomParagraph} 
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
