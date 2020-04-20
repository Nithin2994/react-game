import React from 'react'
import gameserver from '../apis/gameserver'
import { saveUser } from '../actions/useraction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import GoogleAuth from './googleAuth'
import LoginFormComponent from './loginFormComponent'
import Modal from './modal'

class Login extends React.Component{
    
    state = {errorMessage : ""}
    componentDidMount(){
        
        if(this.props.match){
            console.log(this.props.match)
        }
    }

    login = async (username,password) => {
        
        let response = await gameserver.post("/login",{
                playerName:username,
	            password:password
        })

        console.log(response)
        if(response != null & response.data.status== "Success"){
            this.props.saveUser(username, response.data.token)
        }else{
            this.setState({
                errorMessage : "Invalid Credentials"
            })
        }
    }

    render(){
        return <div>
            <h2>Login</h2>
            <LoginFormComponent onLoginClick={this.login}/>
            <div style={{color:"red"}}>{this.state.errorMessage}</div>
            {/* <GoogleAuth /> */}
        </div>

    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
       
    };
}

export default connect(mapStateToProps,{saveUser})(Login);