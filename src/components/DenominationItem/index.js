// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdrawMoney} = props
  const {value} = denominationDetails

  const onWithdraw = () => {
    withdrawMoney(value)
  }

  return (
    <li className="denomination-container">
      <button type="button" className="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
