import React from 'react'
import {Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {getActiveUsers} from '../actions/useraction'
import {connect} from 'react-redux'

class ContactsComponent extends React.Component{

    componentDidMount(){
        this.interval = setInterval(() => this.props.getActiveUsers(), 5000);
    }

    render(){
        return <div>
            {this.props.users.map((user)=>{
                let linkText = "/chat/"+user
                return user != this.props.username && 
                 <Row key={user}>{user}<Link to={linkText}>chat</Link></Row>
            })}
            
        </div>
    }
}

const mapStateToProps = (state) =>{
    return {
        username : state.user.username,
        users : state.activeUsers
    }
}
export default connect(mapStateToProps,{getActiveUsers})(ContactsComponent)