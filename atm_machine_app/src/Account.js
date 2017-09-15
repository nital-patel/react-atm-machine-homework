import React, { Component } from 'react';

 class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this._handleDeposit = this._handleDeposit.bind(this)
    this._handleWithdrawal = this._handleWithdrawal.bind(this)
  }

  _handleDeposit(e) {
    e.preventDefault()
    let amount = +this.refs.amount.value
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.refs.amount.value = '';
  }

  _handleWithdrawal(e) {
    e.preventDefault()
    let amount = +this.refs.amount.value;
    let newBalance = this.state.balance - amount;
    if (newBalance < 0) {
      newBalance = 0
    }
    this.setState({
      balance: newBalance
    })
    this.refs.amount.value = '';
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this._handleDeposit} />
        <input type="button" value="Withdraw" onClick={this._handleWithdrawal} />
      </div>
    )
  }
}
export default Account;
