import React,{useState} from 'react'
import Square from './Square'
import '../styles/Board-style.css'

const Board = ({board,handleSquareClick,winner_squares}) => {

  const renderSquare = (pos) =>{
  	const isWinningSquare = winner_squares.includes(pos);
    return <Square value={board[pos]} clickAction={()=>{handleSquareClick(pos);}} isWinningSquare={isWinningSquare}/>
  }

	return (
		<div className="board">
			<div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
			</div>
			<div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
			</div>
			<div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
			</div>
		</div>
	)
}

export default Board