import React, {Component} from 'react';
import Answers from '../Answers/Answers';

class Question extends Component {
    render() {
        return (
            <div>
                <h3>Question</h3>
                <Answers/>
            </div>
        );
    }
};

export default Question;