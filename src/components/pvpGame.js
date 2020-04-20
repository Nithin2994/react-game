import React from 'react'
import {connect} from 'react-redux'
import {updatePvpScore, endGame, updateScoresInState} from '../actions/useraction'
import histroy from '../history'
import {Button, Jumbotron, Row, Col, Card} from 'react-bootstrap'

class PVPGame extends React.Component{

    state = {seconds : 20}

    componentDidMount(){

        this.ws = new WebSocket('ws://3.17.67.172:8081/ws');
        this.ws.onopen = () => this.ws.send(JSON.stringify({
            gameId : this.props.pvp.gameId,
            isJoin : "true",
            Player : this.props.username
        }));

        this.ws.addEventListener("message", this.updateCache)

        setInterval(
            ()=>{ this.setState({
                seconds : this.state.seconds - 1
            })},1000
        )
        setTimeout(
            this.endGameHandler, 20000);
    }

    updateCache = (e) => {
        var msg = JSON.parse(e.data);
        console.log("Updated",msg)
        this.props.updateScoresInState(msg)
    }

    endGameHandler = () =>{
        this.props.endGame()
    }

    submitHandler = () => {
        let random = (Math.round(Math.random()) * 10) + (Math.round(Math.random()) * 20)
        this.props.updatePvpScore(random);
    }


    renderGame = () => {
        return <div>
            <Row style={{paddingBottom:"1%"}}>
                <Col>
                    <Button block style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} onClick={()=>{histroy.push("/home")}}>back</Button>
                </Col>
                <Col>
                    <Button block style={{backgroundColor:"#d6b84d",border:"#d6b84d"}} onClick={()=>{histroy.push("/pvp/highscore")}}>New-Match</Button>
                </Col>
            </Row>
            
            <Card>
            <Card.Header style={{color:"white",backgroundColor:"#24bfb8",border:"#24bfb8"}}>
            <h4>Game Id : {this.props.pvp.gameId}</h4>
                        <h4>Time : {this.state.seconds}</h4>
            </Card.Header>
            <Card.Body>
            <Row>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://github.com/Nithin2994/react-game/blob/gh-pages/images/user.png?raw=true" />
                    <Card.Body>
                        <Card.Title>{this.props.username}</Card.Title>
                        <Card.Text><h2>Score  {this.props.pvpScores[this.props.username]}</h2></Card.Text>
                        <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}}  onClick={this.submitHandler} >Play</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="/images/user.png" />
                    <Card.Body>
                        <Card.Title>{this.props.pvp.opponent}</Card.Title>
                        <Card.Text><h2>Score  {this.props.pvpScores[this.props.pvp.opponent]}</h2></Card.Text>
                        {/* <Button variant="primary" onClick={this.submitHandler} >Play</Button> */}
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Card.Body>
    </Card>

            
    </div>
    }

    renderWinner = () => {
        return <div>
            <Row style={{paddingBottom:"1%"}}>
                <Col>
                    <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} onClick={()=>{histroy.push("/home")}}>back</Button>
                </Col>
            </Row>
            <Card style={{backgroundColor:"#24bfb8",border:"#24bfb8"}}>
            <Card.Header>
            <h2>Congratulations {this.props.pvp.winner[this.props.pvp.opponent] ? this.props.pvp.opponent : this.props.username}  </h2>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                    <Card.Img variant="top" src="/images/user.png" />
                    </Col>
                    <Col>
                    <Row style={{padding:"1%"}}>
                        <Col>
                        <Card style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} text="white">
                        <Card.Header>
                        SCORE
                        </Card.Header>
                        <Card.Body>
                        <h2>{this.props.pvp.winner[this.props.pvp.opponent] ? this.props.pvp.winner[this.props.pvp.opponent] : this.props.pvp.winner[this.props.username]}</h2>
                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <Row style={{padding:"1%"}}>
                        <Col>
                        <Card style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} text="white">
                        <Card.Header>
                        LEVEL
                        </Card.Header>
                        <Card.Body>
                        <h2>{this.props.pvp.winner[this.props.pvp.opponent] ? this.props.pvp.winner[this.props.pvp.opponent] : this.props.pvp.winner[this.props.username]}</h2>
                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <Row style={{padding:"1%"}}>
                        <Col>
                        <Card style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} text="white">
                        <Card.Header>
                        REWARDS
                        </Card.Header>
                        <Card.Body>
                        <h2>{this.props.pvp.winner[this.props.pvp.opponent] ? this.props.pvp.winner[this.props.pvp.opponent] : this.props.pvp.winner[this.props.username]}</h2>
                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
    
            </Card.Body>
            </Card>
        </div>
    }

    render(){
        return <div>
            {this.props.pvp && this.props.pvp.gameStatus != "Finished" ? this.renderGame() : this.renderWinner()}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username,
        pvp : state.pvp,
        pvpScores : state.pvpScores
    }
}

export default connect(mapStateToProps,{updatePvpScore,endGame,updateScoresInState})(PVPGame);