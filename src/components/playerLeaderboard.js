import React from 'react'
import {connect} from 'react-redux'
import {loadLeaderboards} from '../actions/useraction'
import PlayerLeaderboardView from './playerLeaderboardView'
import {Card,Row,Col} from 'react-bootstrap'

class PlayerLeaderboard extends React.Component{

    componentDidMount(){
        this.props.loadLeaderboards()
    }

    render(){
        return <div>
            <Card style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} text="white">
                <Card.Header>
                    Leaderboards
                </Card.Header>
                <Card.Body>
                <Row>
                {
                    (this.props.leaderboards != null) ? 
                        this.props.leaderboards.map((lbname)=>{
                            return <Col><PlayerLeaderboardView leaderboardName={lbname}/></Col>
                    }) : ""
                }
                </Row>
                </Card.Body>
            </Card>
        </div>
    }
}

const mapStateToProps = (state) =>{
    return {
        leaderboards : state.leaderboards
    }
}

export default connect(mapStateToProps,{loadLeaderboards})(PlayerLeaderboard)