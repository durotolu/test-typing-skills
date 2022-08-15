import React from 'react';

function Home({ time, paragraph, onChangeTime, onChangeParagraph, startTest }) {
  return (
    <div className="App">
      <div onChange={onChangeTime}>
        Choose time:
        <input type="radio" id="1" name="time" value="1" />
        <label htmlFor="1">1 minute</label>
        <input type="radio" id="2" name="time" value="2" />
        <label htmlFor="2">2 minute</label>
        <input type="radio" id="5" name="time" value="5" />
        <label htmlFor="5">5 minute</label>
      </div>
      <p>{paragraph}</p>
      <div>
        <textarea onChange={onChangeParagraph} rows="10" cols="60" />
      </div>
      <button disabled={!time} onClick={startTest}>Start test</button>
    </div>
  );
}

export default Home;
