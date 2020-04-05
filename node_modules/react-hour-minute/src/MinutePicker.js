import React from 'react'
import ReactDOM from 'react-dom'
import './MinutePicker.css'

export default class MinutePicker extends React.Component {
  handleMouseWheel(e) {
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))

    if (delta === 1) {
      this.props.onMinuteIncrease()
    } else {
      this.props.onMinuteDecrease()
    }
  }

  componentDidMount() {
    const minutePicker = document.getElementById('minutePicker')
    minutePicker.addEventListener('mousewheel', this.handleMouseWheel.bind(this))
  }

  componentWillUnmount() {
    const minutePicker = document.getElementById('minutePicker')
    minutePicker.removeEventListener('mousewheel', this.handleMouseWheel.bind(this))
  }

  render() {
    const { minute, onMinuteIncrease, onMinuteDecrease } = this.props
      return (
        <div id="minutePicker" className="MinutePicker">
          <a className="MinutePicker__arrow" onClick={onMinuteIncrease}>&uarr;</a>
          <div className="MinutePicker__minute">{minute}</div>
          <div className="MinutePicker__arrow" onClick={onMinuteDecrease}>&darr;</div>
        </div>
    )
  }
}
