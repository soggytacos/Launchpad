import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import TimePicker from "react-hour-minute/src/TimePicker";
import {Checkbox} from "@material-ui/core";

//** This is the section that contains a single prompt, will be
//** one of several within a prompt section
class PromptObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answerType: '',
            answerTimestamp: '',
            characterCount: '',
            points: ''
        }
    }

    render() {

        let answerForm;
        //this should be a switch statement.
        if (this.props.answerType === 'Radio') {
            answerForm = <radio number={this.props.radio.number}>
            </radio>
        } else if (this.props.answerType === 'shortText') {
            answerForm = <textarea></textarea>
        } else if (this.props.answerType === 'timePicker') {
            answerForm = <TimePicker/>
        } else if (this.props.answerType === 'binanry') {
            answerForm = <YesNo/>
        } else if (this.props.answerType === 'Check_Box') {
            answerForm = <Checkbox/>
        } else if (this.props.answerType === 'Number') {
            answerForm = <Number/>
        }

        return (
            <Aux>
                <form>
                    <h3>{this.props.propmptTitle}</h3>
                    <p>{this.props.answerForm}</p>
                </form>
            </Aux>
        )
    }
}

export default PromptObject;