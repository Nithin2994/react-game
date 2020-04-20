import React from 'react'
import {connect} from 'react-redux'
import { loadBalances, loadCurrencies } from '../actions/useraction'
import {Jumbotron, Table} from 'react-bootstrap'

class DisplayWallet extends React.Component{


    componentDidMount(){
        this.props.loadBalances(this.props.username,this.props.token)
        this.props.loadCurrencies()
    }

    render(){
        return <div>
            <h4>Balances</h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr><th>Currency</th><th>Balance</th></tr>
                </thead>
                <tbody>
                {
                this.props.currencies && this.props.currencies.map((currency) =>{
                     return this.props.balances != null && 
                     <tr>
                         <td>{currency}</td>
                         <td>{this.props.balances[currency] ? this.props.balances[currency] : 0}</td>
                    </tr>
                }) 
                }
                </tbody>
            </Table>
        </div>
            
            
            
    }
}

const mapStateToProps = (state) => {
    return {
        currencies : state.currencies,
        balances : state.balances,
        username : state.user.username,
        token : state.user.token
    }
}

export default connect(mapStateToProps,{loadBalances,loadCurrencies})(DisplayWallet)