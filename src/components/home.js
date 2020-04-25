import React from 'react'
import LeaderboardDashboard from './leaderboardDashboard'
import GameConatiner from './game'
import { connect } from 'react-redux'
import Wallet from './wallet'
import { Link } from 'react-router-dom'
import histroy from '../history'
import {Button,Row,Col} from 'react-bootstrap'
import {logoutUser} from '../actions/useraction'
import PlayerLeaderboard from './playerLeaderboard'

class Home extends React.Component{

    componentDidMount(){
        this.ws = new WebSocket('ws://3.17.67.172:8081/chat/'+this.props.username);
    }

    render(){
        return <div>
            <Row>
                <Col>
                    <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} block onClick={()=>{histroy.push("/wallet")}}>Wallet</Button>
                </Col>
                <Col>
                    <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} block onClick={()=>{histroy.push("/games")}}>Games</Button>
                </Col>
                <Col>
                    <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} block onClick={()=>{histroy.push("/contacts")}}>Contacts</Button>
                </Col>
                <Col>
                    <Button style={{backgroundColor:"#d94545",border:"#d94545"}} block onClick={()=>{ this.props.logoutUser() ; histroy.push("/login")}}>Logout</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Welcome {this.props.username}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GameConatiner username={this.props.username}/>
                </Col>
            </Row>
           
            {/* <LeaderboardDashboard username={this.props.username}/> */}
            <PlayerLeaderboard />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username
    }
}

export default connect(mapStateToProps,{logoutUser})(Home)