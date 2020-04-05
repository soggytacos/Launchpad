import React from 'react'
import ReactDOM from 'react-dom'
import './HourPicker.css'

export default class HourPicker extends React.Component {
  handleMouseWheel(e) {
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))

    if (delta === 1) {
      this.props.onHourIncrease()
    } else {
      this.props.onHourDecrease()
    }
  }

  componentDidMount() {
    const hourPicker = document.getElementById('hourPicker')
    hourPicker.addEventListener('mousewheel', this.handleMouseWheel.bind(this))
  }

  componentWillUnmount() {
    const hourPicker = document.getElementById('hourPicker')
    hourPicker.removeEventListener('mousewheel', this.handleMouseWheel.bind(this))
  }

  render () {
    const { hour, onHourIncrease, onHourDecrease } = this.props
    return (
      <div id="hourPicker" className="HourPicker">
        <div className="HourPicker__arrow" onClick={onHourIncrease}>&uarr;</div>
        <div className="HourPicker__hour">{hour}</div>
        <div className="MinutePicker__arrow" onClick={onHourDecrease}>&darr;</div>
      </div>
    )
  }
}
