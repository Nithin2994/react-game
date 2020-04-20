import React from 'react'
import {connect} from 'react-redux'
import { loadLeaderboardData } from '../actions/useraction'
import LeaderboardTable from './leaderboardTable';
import {Carousel} from 'react-bootstrap'


class LeaderboardView extends React.Component{

    state = { index : 0}
    componentDidMount(){
        this.interval = setInterval(() => this.props.loadLeaderboardData(this.props.leaderboardName), 5000);
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index : selectedIndex
        })
      };

    render(){
        var i =0;
        return(
            <div>
                <h2>{this.props.leaderboardName}</h2>
            
            
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                
                {
                (this.props.leaderboardsData != null) &&
                this.props.leaderboardsData.map((lb) =>{
                    return  lb.leaderboardName === this.props.leaderboardName && 
                        lb.data.subLeaderboards.map((lbname) =>{
                            const players = lb.data.players[lbname] ;
                            return <Carousel.Item>
                                Hello{lbname}
                                <LeaderboardTable instance={lbname} players={players} playerScores={lb.data.details}/>
                                </Carousel.Item>
                        })
                    })
                }
            </Carousel>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        leaderboardsData : state.leaderboardsData
    }
}
export default connect(mapStateToProps,{loadLeaderboardData})(LeaderboardView);