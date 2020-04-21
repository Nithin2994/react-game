import React from 'react'
import {connect} from 'react-redux'
import { getPlayerLeaderboard } from '../actions/useraction'
import LeaderboardTable from './leaderboardTable';
import {Carousel} from 'react-bootstrap'
import PlayerLeaderboardTable from './playerLeaderboardTable'


class PlayerLeaderboardView extends React.Component{

    state = { index : 0}
    componentDidMount(){
        console.log("username : ",this.props.username)
        this.props.getPlayerLeaderboard(this.props.username,this.props.leaderboardName)
        this.interval = setInterval(() => this.props.getPlayerLeaderboard(this.props.username,this.props.leaderboardName), 5000);
    }

    getStartRank = () =>{
        if(this.props.playerLeaderboard && this.props.playerLeaderboard.aboveAndBelow){
            return this.props.playerLeaderboard.rank - (this.props.playerLeaderboard.aboveAndBelow.length / 2 )
        }
        return 0
    }

    render(){
        var i =0;
        return(
            <div>
                <h4>{this.props.leaderboardName}</h4>
            
                <PlayerLeaderboardTable 
                    top={this.props.playerLeaderboard && this.props.playerLeaderboard.top}
                    aboveAndBelow = {this.props.playerLeaderboard && this.props.playerLeaderboard.aboveAndBelow}
                    playerScores = {this.props.playerLeaderboard && this.props.playerLeaderboard.scores}
                    startRank = {this.getStartRank()}/>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username,
        playerLeaderboard : state.playerLeaderboard,
    }
}
export default connect(mapStateToProps,{getPlayerLeaderboard})(PlayerLeaderboardView);