import React from 'react'
import {connect} from 'react-redux'
import {updateScore, endGame} from '../actions/useraction'
import histroy from '../history'
import {Button, Table, Row, Col, Card, Container} from 'react-bootstrap'
import Cell from './cell'
import gameserver from '../apis/gameserver'
import _ from 'lodash';

class PVPTikTokToeGame extends React.Component{

    state = {
        seconds : 60,
        selectedData : {},
        myTurn : true
    }

    componentDidUpdate(){
        if(this.state.myTurn == false && !this.state.winner){
            setTimeout(()=>{
                this.setState({
                    winner : "Opponent Disconnected"
                })
            },20000)
        }
    }

    componentDidMount(){

        this.ws = new WebSocket('ws://3.17.67.172:8081/ws');
        this.ws.onopen = () => this.ws.send(JSON.stringify({
            gameId : "TikTocToe",
            isJoin : "true",
            Player : this.props.username
        }));

        this.ws.addEventListener("message", this.updateCache)

    }

    updateCache = (e) => {
        var msg = JSON.parse(e.data);
        console.log("Received ",msg)
        this.updateGridVals(msg)
        if(!this.state.winner){
            this.setState({
                myTurn : true
            })
        }
        
    }

    updateGridVals = (msg) => {
        var updatedValues = {...this.state.selectedData}
        updatedValues[msg.id] = msg.player
        this.setState({
            selectedData : updatedValues
        })

       

        if(this.state.selectedData[1] == this.state.selectedData[2]){
            if(this.state.selectedData[2] == this.state.selectedData[3]){
                if(this.state.selectedData[1]){
                    this.setState({ winner : "Winner is "+this.state.selectedData[1]})
                }
            }
        }

        if(this.state.selectedData[4] == this.state.selectedData[5]){
            if(this.state.selectedData[5] == this.state.selectedData[6]){
                if(this.state.selectedData[4]){this.setState({winner : "Winner is "+this.state.selectedData[4]})}
            }
        }

        if(this.state.selectedData[7] == this.state.selectedData[8]){
            if(this.state.selectedData[8] == this.state.selectedData[9]){
                if(this.state.selectedData[8]){
                    this.setState({winner : "Winner is "+this.state.selectedData[8]})
                }
            }
        }

        if(this.state.selectedData[1] == this.state.selectedData[5]){
            if(this.state.selectedData[5] == this.state.selectedData[9]){
                if(this.state.selectedData[5]){
                    this.setState({winner : "Winner is "+this.state.selectedData[5]})
                }
            }
        }

        if(this.state.selectedData[3] == this.state.selectedData[5]){
            if(this.state.selectedData[5] == this.state.selectedData[7]){
                if(this.state.selectedData[5]){
                    this.setState({winner : "Winner is "+this.state.selectedData[5]})
                }
            }
        }

        if(this.state.selectedData[2] == this.state.selectedData[5]){
            if(this.state.selectedData[5] == this.state.selectedData[8]){
                if(this.state.selectedData[5]){
                    this.setState({winner : "Winner is "+this.state.selectedData[5]})
                }
            }
        }

        if(this.state.selectedData[1] == this.state.selectedData[4]){
            if(this.state.selectedData[4] == this.state.selectedData[7]){
                if(this.state.selectedData[4]){
                    this.setState({winner : "Winner is "+this.state.selectedData[4]})
                }
            }
        }

        if(this.state.selectedData[3] == this.state.selectedData[6]){
            if(this.state.selectedData[6] == this.state.selectedData[9]){
                if(this.state.selectedData[6]){
                    this.setState({winner : "Winner is "+this.state.selectedData[6]})
                }
            }
        }

        let count = 0;
        _.forEach(this.state.selectedData, function(value, key) {
            count ++
        });

        if(count == 9){
            this.setState({
                winner : "Match is Draw"
            })
        }

        if(this.state.winner){
            this.endGameHandler()
            this.setState({
                myTurn : false
            })
            
        }
    }

    updateBalance = async () => {

        console.log("updateBalance started")

        let response =  await gameserver.post("/wallet/credit",{
            playerName: this.props.username,
            amount: 100,
            currency: "gold"
        },{
            headers:{ token : this.props.token }
        })

        response = await gameserver.post('/leaderboard/Covid/addScore',
        {
            name : this.props.username,
            score : 100
        }
        ,{
            headers:{ token : this.props.token }
        }
    )
        console.log("updateBalance ended")
        console.log(response)
    }

    endGameHandler = () =>{
        if(this.state.winner == this.props.username){
            this.updateBalance();  
        }
        this.props.endGame()
    }

    selectCellHandler = async (id) =>{
        if(this.state.myTurn == true){
            console.log("Selected : ",id)
            const response = await gameserver.post("/matchmaking/tiktoctoe",{
                player : this.props.username,
                id:id
            })
    
            if(response){
                this.updateGridVals({
                    player : this.props.username,
                    id : id
                })
            }

            this.setState({
                myTurn : false
            })
        }
    }

    renderGameGrid = () => {

        return <div>
            <Container>
            <Row>
                <Col md={3} lg={3}></Col>
                
                {[1,2,3].map((id) =>{
                return <Cell key={id} style={{width:"5%"}} id={id} selected={this.state.selectedData[id]} selectCell={this.selectCellHandler} currentPlayer={this.props.username}/>
                })}
                
                <Col md={3} lg={3}></Col>
            </Row>
            <Row>
                <Col md={3} lg={3}></Col>
                {[4,5,6].map(id =>{
                    return <Cell key={id} style={{width:"5%"}}  id={id} selected={this.state.selectedData[id]} selectCell={this.selectCellHandler} currentPlayer={this.props.username}/>
                })}
                <Col md={3} lg={3}></Col>
            </Row>
            <Row>
                <Col md={3} lg={3}></Col>
                {[7,8,9].map(id =>{
                    return <Cell key={id} style={{width:"5%"}}  id={id} selected={this.state.selectedData[id]} selectCell={this.selectCellHandler} currentPlayer={this.props.username}/>
                })}
                <Col md={3} lg={3}></Col>
            </Row>
            </Container>
        </div>
    }

    renderWinner = () => {
        return <h2>{this.state.winner} </h2>
    }

   
    render = () => {
        return <div>
            <Row style={{paddingBottom:"1%"}}>
                <Col>
                    <Button block style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} onClick={()=>{histroy.push("/home")}}>back</Button>
                </Col>
                <Col>
                    <Button block style={{backgroundColor:"#d6b84d",border:"#d6b84d"}} onClick={()=>{histroy.push("/pvp/tictactoe")}}>New-Match</Button>
                </Col>
            </Row>
            <Card>
            <Card.Header>
            <h2>Tic Tac Toe ( Opponent : {this.props.pvp.opponent})</h2>
            <h3>{this.state.winner ? this.state.winner : this.state.myTurn ? "Your Turn":"Opponent Turn"}</h3>
            </Card.Header>
            <Card.Body>
                {this.renderGameGrid()}
            </Card.Body>
            </Card>
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        username : state.user.username,
        token : state.user.token,
        pvp : state.pvp
    }
}

export default connect(mapStateToProps,{updateScore,endGame})(PVPTikTokToeGame);