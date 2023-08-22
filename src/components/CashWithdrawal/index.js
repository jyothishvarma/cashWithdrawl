// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawl extends Component {
  state = {money: 2000}

  withdrawMoney = value => {
    this.setState(prevState => ({
      money: prevState.money - value,
    }))
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="cash-withdrawl-form">
          <div className="person-details-container">
            <p className="first-letter">S</p>
            <p className="name">Sarah williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="balance">{money}</p>
              <p className="in-rupees-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-head">Withdraw</p>
            <p className="withdraw-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-container">
              {denominationsList.map(each => (
                <DenominationItem
                  key={each.id}
                  denominationDetails={each}
                  withdrawMoney={this.withdrawMoney}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
