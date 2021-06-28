import React from 'react'

const StatusMessage = ({winner_player,nextEle,poss}) => {

    const message = () =>{
    	const art = `Winner is '${winner_player}'`;
    	if(winner_player) return (<span style={{color:'#00ffdc'}}>{art}</span>)
               
    	if(poss===9) return (<span style={{color:'#00ffdc'}}>Match Draw</span>)
        
        if(nextEle) return (<>Next player is '<span style={{color:'#5cf834'}}>X</span>'</>)
        
        return (<>Next player is '<span style={{color:'#ffc800'}}>O</span>'</>)

    }
    
  // const message =  winner_player ? `Winner is ${winner_player}` : poss===9 ? "DRAW" : `Next player is ${nextEle ? 'X' : 'O'}`
	return (
		<h2 style={{color: 'hotpink'}}>
			{message()}
		</h2>
	)
}

export default StatusMessage