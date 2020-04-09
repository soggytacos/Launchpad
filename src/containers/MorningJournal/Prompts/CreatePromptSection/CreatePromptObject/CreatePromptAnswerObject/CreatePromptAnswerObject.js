import React, {Component} from 'react';

class CreatePromptAnswerObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemPrompt: '',
            isTimePicker: '',
            isRadio: {
                contains: false,
                number: '',
                lowLabel: '',
                highLabel: '',
            },
            answerType: '',
            points: ''
        }
    }
}


export default CreatePromptAnswerObject;