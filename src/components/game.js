import React from 'react'
import {connect} from 'react-redux'
import { updateScore, loadLeaderboards} from '../actions/useraction'

import GameForm from './gameFormComponent'
class GameConatiner extends React.Component{

    componentDidMount(){
        this.props.loadLeaderboards();
    }

    submitHandler = async (leaderboardId) => {
            let random = (Math.round(Math.random()) * 10) + (Math.round(Math.random()) * 20)
            this.props.updateScore(leaderboardId,this.props.username,random)
    }

    render(){
        return <div>
            <GameForm leaderboards={this.props.leaderboards} generateScore={this.submitHandler}/>
            { this.props.errorMessage != "" ? this.props.errorMessage : ""}
            Your current game score : {this.props.score}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username,
        token : state.user.token,
        leaderboards : state.leaderboards,
        score : state.score,
        errorMessage : state.errorMessage
    }
}

export default connect(mapStateToProps,{updateScore,loadLeaderboards})(GameConatiner)