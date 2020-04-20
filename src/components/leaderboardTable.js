import React from 'react'
import {Table,Carousel} from 'react-bootstrap'

const LeaderboardTable = props =>{
    var rank =1;

    return <Table striped bordered hover size="sm">
            <thead><th>Rank</th><th>Player</th><th>Score</th></thead>
            <tbody>
            {
                props.players != null && props.players.map((player)=>{
                    if(player != null && player != ""){
                    return <tr key={props.instance+"_"+player}><td>{rank++}</td><td>{player}</td><td>{props.playerScores[player]}</td></tr>
                    }
                    
                })} 
            </tbody>
            </Table>
            
}

export default LeaderboardTable