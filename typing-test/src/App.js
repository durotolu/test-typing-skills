import './App.css';
import React, { useState } from 'react';
import randomParagraph from 'random-paragraph'
import Home from './components/Home'
import Challenge from './components/Challenge'
import { Route, Routes, useNavigate } from 'react-router-dom';
import useDarkMode from './hooks/useLocalStorage'
import styled from 'styled-components';

function App() {
  const randomSentence = randomParagraph({min: 4, max: 9})
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [paragraph, setParagraph] = useState(randomSentence);
  const [customParagraph, setCustomParagraph] = useState(randomSentence);
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const onChangeTime = (event) => setTime(event.target.value)
  const onChangeParagraph = (event) => setCustomParagraph(event.target.value)

  const startTest = () => {
    if (time && paragraph) navigate('/challenge')
  }

  return (
    <StyledHome>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
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
    </StyledHome>
  );
}

const StyledHome = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;

  p {
    max-width: 70%;
    margin: 30px auto;
  }

  button {
    cursor: pointer;
    padding: 7px 13px;
    color: blue;
    font-weight: bold;
    margin: 20px;
  }

  .dark-mode__toggle {
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
    cursor: pointer;
  }
  
  .toggle {
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }
  
  .toggled {
    left: 18px;
  }
`;

export default App;
