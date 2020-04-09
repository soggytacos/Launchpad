import React, {Component} from 'react';
import Aux from '../../../../../hoc/Aux';
import {Checkbox} from "@material-ui/core";

class CreatePromptObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: '',
            shortText: false,
            longText: false,
            hasTimePicker: false,
            radio: false,
            number: false,
            timePicker: false,
            yesNo: false,
            createdTimestamp: '',
            points: ''
        }
    }

    checked = (selected) => {
        const option = selected.target.value;
        this.setState({
            option: option
        })
    }


    render() {
        return (
            <Aux>
                <form>
                    <p>Enter the prompt that you want displayed</p>
                    <input value={this.state.prompt} onChange={this.changePrompt} />
                    <p>Select the type of input this prompt will use</p>
                    <Checkbox value={this.props.shortText} checked={this.checked}/>
                    <Checkbox value={this.props.longText} checked={this.checked}/>
                    <Checkbox value={this.props.radio} checked={this.checked}/>
                    <Checkbox value={this.props.number} checked={this.checked}/>
                    <Checkbox value={this.props.timePicker} checked={this.checked}/>
                    <Checkbox value={this.props.yesNo} checked={this.checked}/>
                </form>
            </Aux>
        )
    }
}


export default CreatePromptObject;