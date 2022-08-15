import React from 'react';
import styled from 'styled-components';

function Home({ time, paragraph, onChangeTime, onChangeParagraph, startTest }) {
  return (
    <div>
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
        <h4>Use suggested text above or paste your own text below.</h4>
        <textarea onChange={onChangeParagraph} rows="15" cols="65" />
      </div>
      <button disabled={!time} onClick={startTest}>Start test</button>
    </div>
  );
}

export default Home;
