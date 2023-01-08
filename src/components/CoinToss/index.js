// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, isHead: true}

  onTossing = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState({isHead: true})
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState({isHead: false})
    }
  }

  render() {
    const {headsCount, tailsCount, isHead} = this.state

    return (
      <div className="home-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {isHead ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}

          <button className="button" type="button" onClick={this.onTossing}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {headsCount + tailsCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
