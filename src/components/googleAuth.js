import React from 'react'

class GoogleAuth extends React.Component{

    state= {isSignedIn : false}
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"764596879643-u75q1nh2icp4ougd4aqjuqt737a9t8c9.apps.googleusercontent.com",
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn : this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.handleSignInAndOut)
            });
        })
    }

    handleSignInAndOut = () =>{
        this.setState({
            isSignedIn : this.auth.isSignedIn.get()
        })
    }

    handleSignIn = () => {
        this.auth.signIn()
    }

    handleSignOut = () => {
        this.auth.signOut()
    }

    render(){
    return <div><br></br> 
            {
                this.state.isSignedIn ? 
                <button type="button" onClick={this.handleSignOut}>Google login out</button> : 
                <button type="button" onClick={this.handleSignIn}>Google login</button>
            }
        </div>
    }
}

export default GoogleAuth;