import React from 'react'
import {connect} from 'react-redux'
import Home from './home'
import Index from './index'
import Modal from './modal'

class MainComponent extends React.Component{
    componentDidMount(){
        if(this.props.match.params){
            console.log(this.props.match.params)
        }
    }
    renderComponent = () => {
        return <Index/>
    }

    render(){
        return (
            <div>
                {/* <Modal /> */}
                {this.renderComponent()}
            </div>
        )
    }
}

const mapStateFromProps = (state) => {
    return {
        username : state.user.username
    }
}

export default connect(mapStateFromProps)(MainComponent)