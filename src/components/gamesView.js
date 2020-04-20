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
                    <img width="100%" height="100%"  src="/images/highscore.jpeg" onClick={()=>{histroy.push("/pvp/highscore")}} />
                </Col>
                <Col>
                    <img width="100%" height="100%"  src="/images/tictoctoe.png" onClick={()=>{histroy.push("/pvp/tictactoe")}} />
                </Col>
            </Row>
        </Container>
    }
}

export default GamesView