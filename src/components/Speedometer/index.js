import {Component} from 'react'
import './index.css'

class SpeedoMeter extends Component {
  state = {miles: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      let {miles} = prevState
      if (prevState.miles < 200) {
        miles += 10
      }
      return {miles}
    })
  }

  onApplyBrake = () => {
    this.setState(prevState => {
      let {miles} = prevState
      if (prevState.miles > 0) {
        miles -= 10
      }
      return {miles}
    })
  }

  render() {
    const {miles} = this.state
    return (
      <div className="bg-container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="heading">Speed is {miles}mph</h1>
        <p className="instruction-paragraph">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="buttons-container">
          <button
            className="button acc-button"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="button brake-button"
            type="button"
            onClick={this.onApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
