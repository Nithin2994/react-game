import React from 'react'
import {Table,Carousel} from 'react-bootstrap'

const PlayerLeaderboardTable = props =>{
    var rank =1;
    var missdleRank = props.startRank
    return <Table striped bordered size="sm">
            <thead><th>Rank</th><th>Player</th><th>Score</th></thead>
            <tbody>
            {
                props.top != null && props.top.map((player)=>{
                    if(player != null && player != ""){
                    return <tr key={player}><td>{rank++}</td><td>{player}</td><td>{props.playerScores[player]}</td></tr>
                    }
                })} 
                {
                    (missdleRank > 0 && props.aboveAndBelow != null) && props.aboveAndBelow.map((player)=>{
                    if(player != null && player != ""){
                    return <tr key={player}><td>{missdleRank++}</td><td>{player}</td><td>{props.playerScores[player]}</td></tr>
                    }
                })} 
            </tbody>
            </Table>
            
}

export default PlayerLeaderboardTable