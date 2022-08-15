import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Challenge({ time, paragraph, setParagraph, randomSentence, setCustomParagraph }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(time * 60);
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState(0);
  const [scores, setScores] = useState({
    speed: 0,
    accuray: "",
    display: false
  });

  const onUpdateAnswer = (event) => setAnswer(event.target.value)

  const onCompleted = () => {
    clearInterval(intervalId)
    const totalWords = paragraph.split(' ')
    const typedWords = answer.split(' ')
    const speed = typedWords.length / ((time * 60) - count);
    let rightWordsCount = 0
    typedWords.map((word, i) => {
      if (word === totalWords[i]) rightWordsCount++
    })
    console.log(typedWords.length, rightWordsCount, totalWords.length)
    console.log(speed)
    setScores({
      speed,
      accuray: `You accurately typed ${rightWordsCount} word(s) out of ${totalWords.length}`,
      display: true
    })
  }

  useEffect(() => {
    if (!time || !paragraph) navigate('/')
    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    setIntervalId(newIntervalId)
    return () => clearInterval(newIntervalId);
  }, []);

  if (!time || !paragraph) {
    navigate('/')
    return
  }

  return (
    <div className="App">
      <div>Time left: {count}</div>
      <p>{paragraph}</p>
      <div>
        <h4>Type text below</h4>
        <textarea onChange={onUpdateAnswer} rows="15" cols="65" />
      </div>
      {!scores.display ? 
        <button onClick={onCompleted}>Submit</button> :
        <div>
          <h3>YOUR SCORES</h3>
          <div>Speed: {scores.speed} words/second</div>
          <div>Acuracy: {scores.accuray}</div>
          <button onClick={() => {
            setParagraph(randomSentence)
            setCustomParagraph("")
            navigate('/')
          }}>Restart</button>
        </div>
      }
    </div>
  );
}

export default Challenge;
