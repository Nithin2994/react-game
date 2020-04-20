import React from 'react'
import {connect} from 'react-redux'
import {loadCurrencies, loadBalances} from '../actions/useraction'
import gameserver from '../apis/gameserver'
import TransactionForm from './transactionFormComponent';

class Transaction extends React.Component{

    state = {
        status : ""
    }

    componentDidMount(){
        this.props.loadCurrencies()
    }

    handleSubmit = async (type,currency,amount) => {
        if(type != "NA" && currency != "NA"){
            const response =  await gameserver.post("/wallet/"+type,{
                playerName: this.props.username,
                amount: parseInt(amount),
                currency: currency
            },{
                headers:{
                    token : this.props.token
                }
            })
    
            this.setState({
                status : response.data.status
            })
    
            this.props.loadBalances(this.props.username,this.props.token)
        }else{
            alert("Select currency and type")
        }
        
    }

    render(){
        return <div>
            <TransactionForm currencies={this.props.currencies} transaction={this.handleSubmit}/> 
            {this.state.status}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        currencies : state.currencies,
        username : state.user.username,
        token : state.user.token
    }
}

export default connect(mapStateToProps,{loadCurrencies, loadBalances})(Transaction)