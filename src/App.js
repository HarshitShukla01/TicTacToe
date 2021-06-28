import React,{useState} from 'react'
import Board from './components/Board.js'
import './styles/App-style.css'
import { calculateWinner } from './components/helper.js';
import History from './components/History.js';
import StatusMessage from './components/StatusMessage.js';
// import CelebAnimation from './components/CelebAnimation.js'

const App = () => {
  
  const NEW_GAME = [{board:Array(9).fill(null),nextEle:true}];

  const [history,setHistory] = useState(NEW_GAME);
  //const [nextEle,setNextEle] = useState(false);

  const [currentMove,setCurrentMove] = useState(0);
  const current  = history[currentMove];
  
  const {winner_player, winner_squares} = calculateWinner(current.board);

  

  const handleSquareClick = (pos) =>{
     
    if(current.board[pos]||winner_player) {return;}

    setHistory((prev) => {
      
      const last = prev[prev.length-1];

      const newBoard =  last.board.map((value,index)=>{
        if(pos === index) 
        {
               if(last.nextEle === true) 
                 return 'X';
          
               else
                 return 'O';       
        }

        return value;
      });

     return prev.concat({board:newBoard,nextEle:!last.nextEle});

    });
    console.log(current.board);
    setCurrentMove(prev => prev+1);
  }

  const moveTo = (move) =>{
   setCurrentMove(move);
  }
  
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
  <div className="app">
    <h1 style={{color:'chartreuse'}}>TIC &nbsp;<span style={{color:'coral'}}>TAC</span> &nbsp;TOE</h1>
    {/*<h2>{message}</h2>*/}
    <StatusMessage winner_player={winner_player} nextEle={current.nextEle} poss={currentMove}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winner_squares={winner_squares}/>
    <button type="button" className="new_game_class" onClick={onNewGame}>Start New Game</button>
    <h3>Current Game History</h3>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  </div>
  )
}

export default App