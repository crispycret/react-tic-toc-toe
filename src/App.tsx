import React from 'react';

import Navigation from './components/Navigation';

import Game from './pages/Game';
import Start from './pages/Start';
import Finished from './pages/Finished';

import useTickTackToe from './hooks/useTickTackToe';

// Base Tutorial: https://betterprogramming.pub/lets-build-a-tic-tac-toe-game-using-react-with-typescript-and-hooks-321f78d8d1e0

const App = () => {
  
  const game = useTickTackToe();

  return (
    <div className='App'>
      
      <Navigation />

      { game.status === 'new' && <Start handleStart={ game.handleStart } /> }
      { game.status === 'finished' && <Finished name={ game.winner } handleRestart={ game.handleRestart } /> }
      { game.status === 'started' && <Game board={ game.board } handleClick={ game.handleClick } /> }
    </div>
  );
}

export default App;
