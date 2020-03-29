import React, {Component} from 'react';
import Title from './Title/Title';
import Question from './Question/Question'
import classes from './Section.css';
import Button from '../../components/UI/Button/Button';

class Section extends Component {

    state = {
        answer: null,
        errors: null
    }

    render() {
        return (
            <div className={classes.Section}>
                <Title />
                <Question />
                <Button btnType="Success">Submit</Button>
            </div>
        )
    }
}

export default Section;