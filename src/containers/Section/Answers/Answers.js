import React, {Component} from 'react';
import Answer from './Answer/Answer';

class Answers extends Component {
    render() {
        return (
            <div>
                <Answer/>
                <Answer/>
                <Answer/>
            </div>
        );
    }
};

export default Answers;