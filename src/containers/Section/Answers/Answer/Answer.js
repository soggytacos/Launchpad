import React, {Component} from 'react';
import Input from '../../../../components/UI/Input/Input';

class Answer extends Component {

    state = {
        answer: "this is my answer"
    }

    render() {
        return (
            <Input />
        );
    }
}

export default Answer;