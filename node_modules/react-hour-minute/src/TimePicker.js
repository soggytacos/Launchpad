import React from 'react'
import { generateMinutes, generateHours } from './utils'
import classNames from 'classnames'

import TimeInput from './TimeInput'
import HourPicker from './HourPicker'
import MinutePicker from './MinutePicker'
import OutsideClickHandler from './OutsideClickHandler'

import './index.css'

export default class TimePicker extends React.Component {
  constructor(props) {
    super(props)

    let time

    if (props.time) {
      time = props.time.split(':')
    } else {
      time = [null, null]
    }

    this.state = {
      hour: time[0],
      minute: time[1],
      active: false,
      minutes: generateMinutes(),
      hours: generateHours()
    }
  }

  componentDidUpdate() {
    document.getElementById('timeInput').value = this.getHourAndMinute()
    this.props.onChange(this.getHourAndMinute())
  }

  onMinuteIncrease() {
    const lastMinuteIndex = this.getMinuteIndex();
    if (lastMinuteIndex < this.state.minutes.length - 1) {
      this.setState({
        minute: this.state.minutes[+(lastMinuteIndex)+1]
      })
    } else {
      this.setState({
        minute: this.state.minutes[0]
      })
    }
  }

  onMinuteDecrease() {
    const lastMinuteIndex = this.getMinuteIndex();
    if (lastMinuteIndex > 0) {
      this.setState({
        minute: this.state.minutes[+(lastMinuteIndex)-1]
      })
    } else {
      this.setState({
        minute: this.state.minutes[this.state.minutes.length - 1]
      })
    }
  }

  onHourIncrease() {
    const lastHourIndex = this.getHourIndex();
    if (lastHourIndex < this.state.hours.length - 1) {
      this.setState({
        hour: this.state.hours[+(lastHourIndex)+1]
      })
    } else {
      this.setState({
        hour: this.state.hours[0]
      })
    }
  }

  onHourDecrease() {
    const lastHourIndex = this.getHourIndex();
    if (lastHourIndex > 0) {
      this.setState({
        hour: this.state.hours[+(lastHourIndex)-1]
      })
    } else {
      this.setState({
        hour: this.state.hours[this.state.hours.length - 1]
      })
    }
  }

  toggleVisible() {
    const { hour, minute } = this.state
    if (!hour || !minute) {
      this.setState({
        hour: '06',
        minute: '00'
      })
    }

    this.setState({ active: !this.state.active })
  }

  getHourAndMinute() {
    const { hour, minute } = this.state
    if (!hour || !minute) {
      return null
    }
    return `${this.state.hour}:${this.state.minute}`
  }

  getMinuteIndex() {
    return this.state.minutes.findIndex(min => min === this.state.minute)
  }

  getHourIndex() {
    return this.state.hours.findIndex(hour => hour === this.state.hour)
  }

  onClearFocus(e) {
    this.setState({
      active: false
    })
  }

  render() {
    const { active } = this.state
    const timePickerClasses = classNames('TimePicker', { 'TimePicker--show': active })
    const time = this.getHourAndMinute()

    return (
      <div id="TimePickerRoot" className="TimePickerRoot">
        <OutsideClickHandler onOutsideClick={this.onClearFocus.bind(this)}>
          <TimeInput
            onClick={this.toggleVisible.bind(this)}
            active={ active }
            time={time}
          />
          <div id="TimePicker" className={timePickerClasses}>
            <HourPicker
              onHourIncrease={this.onHourIncrease.bind(this)}
              onHourDecrease={this.onHourDecrease.bind(this)}
              hour={this.state.hour}
            />
            <MinutePicker
              onMinuteIncrease={this.onMinuteIncrease.bind(this)}
              onMinuteDecrease={this.onMinuteDecrease.bind(this)}
              minute={this.state.minute}
            />
          </div>
        </OutsideClickHandler>
      </div>
    )
  }
}

TimePicker.propTypes = {
  time: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}
