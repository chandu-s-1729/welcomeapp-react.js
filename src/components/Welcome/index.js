// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  onChangeSubscription = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1 className="heading"> Welcome </h1>
          <p className="description"> Thank you! Happy Learning </p>
          <button
            onClick={this.onChangeSubscription}
            className="subscribe-btn"
            type="button"
          >
            {isSubscribed ? 'Subscribe' : 'Subscribed'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
