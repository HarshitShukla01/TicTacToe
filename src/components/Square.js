import React from 'react'
import '../styles/Square-style.css'

const Square = (props) => {


	return (
		<button type="button" className="btn-square" style={{
			fontWeight: props.isWinningSquare? 'bold':'normal',
			backgroundColor: props.isWinningSquare? '#8063ec52':'transparent',
			color: props.value === 'X'? '#5cf834':'#ffc800'
		}} onClick={props.clickAction}>
		{props.value}
		</button>
	)
}

export default Square