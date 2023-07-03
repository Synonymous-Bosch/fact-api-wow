import React from 'react';
import Fact from './Fact';

const FactButton = ({getRandomFact, randomFact, randomWow, getRandomWow}) => {

    const handleRandomFact = () => {
      getRandomFact()
      getRandomWow()
      const audio = new Audio(randomWow[0].audio);
      audio.play()
    }

    return (
    <>
    <h3>Random Fact</h3>
    <p>{randomFact.text}</p>
    <button onClick={handleRandomFact}>Get another random fact</button>
    
  </>)
}

export default FactButton;