import React from 'react'
import {Col,Button} from 'react-bootstrap'

const Cell = (props) => {
    return <Col>
    
    {props.selected ? 
            props.currentPlayer == props.selected ? <img width="100%" height="100%" src="/images/O.png"/> : <img width="100%" height="100%"  src="/images/X.png"/> : 
            <img onClick={()=>{props.selectCell(props.id)}} width="100%" height="100%" src="/images/click.png"/>}
    
        
    </Col>
}

export default Cell;