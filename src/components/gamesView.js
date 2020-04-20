import React from 'react'
import {Container, Button, Row, Col} from 'react-bootstrap'
import histroy from '../history'

class GamesView extends React.Component{

    render(){
        return <Container>
            <Row>
                <Col>
                    <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} onClick={()=>{histroy.push("/home")}}>back</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img width="100%" height="100%"  src="https://github.com/Nithin2994/react-game/blob/gh-pages/images/highscore.jpeg?raw=true" onClick={()=>{histroy.push("/pvp/highscore")}} />
                </Col>
                <Col>
                    <img width="100%" height="100%"  src="https://github.com/Nithin2994/react-game/blob/gh-pages/images/tictoctoe.png?raw=true" onClick={()=>{histroy.push("/pvp/tictactoe")}} />
                </Col>
            </Row>
        </Container>
    }
}

export default GamesView