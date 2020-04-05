import React from 'react'
import './TimeInput.css'
import classNames from 'classnames'

export default class TimeInput extends React.Component {
  render() {
    const { onClick, active, time } = this.props
    const TimeInputClasses = classNames('TimeInput', { 'TimeInput--active': active })
    return (
      <div className={TimeInputClasses} onClick={onClick}>
        <label className="TimeInput__label" htmlFor="timeInput">Select Time</label>
        <input className="TimeInput__input" name="timeInput" id="timeInput" />
        <div className="TimeInput__display-text">{time || 'Select Time'}</div>
      </div>
    )
  }
}
