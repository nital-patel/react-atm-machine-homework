import React, { Component } from 'react';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0

    }


  }

render() {


return (
    <div className="account">
    <h2>{this.props.name}</h2>
      <input type="button" value="Deposit" onClick={this._handelDeposit}/>
      <input type="button" value="Withdraw" onClick={this._handelWithdraw}/>
    </div>
  );

}
}

export default Account;
