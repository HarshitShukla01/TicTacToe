import React from 'react'

const History = ({history,moveTo,currentMove}) => {
	return (
		<ul>
            {
            	history.map((value,index) => {
            		return (
            			<li key={index}>
            			  <button style={{
            			  	fontWeight : index===currentMove ? 'bold':'normal',
            			  	color:'white'
            			  }}type="button" onClick={() => {moveTo(index)}}>
            			    {index === 0?"Go To Game Start" : `Go To Move #${index}`}
            			  </button>
            			</li> 
            			);
            	})
            }
			
		</ul>
	)
}

export default History