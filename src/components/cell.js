import React from 'react'
import {Col,Button} from 'react-bootstrap'

const Cell = (props) => {
    return <Col>
    
    {props.selected ? 
            props.currentPlayer == props.selected ? <img width="100%" height="100%" src="https://github.com/Nithin2994/react-game/blob/gh-pages/images/O.png?raw=true"/> : <img width="100%" height="100%"  src="https://github.com/Nithin2994/react-game/blob/gh-pages/images/X.png?raw=true"/> : 
            <img onClick={()=>{props.selectCell(props.id)}} width="100%" height="100%" src="https://github.com/Nithin2994/react-game/blob/gh-pages/images/click.png?raw=true"/>}
    
        
    </Col>
}

export default Cell;