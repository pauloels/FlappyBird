import React, { useRef, useState } from 'react';
import { GameEngine } from 'react-native-game-engine'
import { Start } from './start';

import { Physics } from '../../../utils/physics';
import entities from '../../../entities';

import { styles } from './styles';
import { GameOver } from './gameOver';

export function Game() {
  const [running, setIsRunning] = useState(false);
  const [gameOver, setIsGameOver] = useState(false);

  const gameEngineRef = useRef()

  const handleStartAgain = () => {
    setIsRunning(false)
    setIsGameOver(false)
  }

  const handleStartGame = () => {
    setIsRunning(true)
    setIsGameOver(false)
  }

  const handleOnGameOver = () => {
    setIsRunning(false)
    setIsGameOver(true)
  }

  const handleEvent = (event) => {
    switch(event.type) {
      case "game_over":
        handleOnGameOver()
        break
    }
    // todo
  }

  if(!running && !gameOver) {
    return <Start handleStartGame={handleStartGame} />
  }

  if(!running && gameOver) {
    return <GameOver handleBackToStart={handleStartAgain} />
  }

  return (
    <GameEngine 
      systems={[Physics]}
      entities={entities()}
      ref={gameEngineRef}
      onEvent={handleEvent}
      style={styles.engineContainer}
    />
  );
}
