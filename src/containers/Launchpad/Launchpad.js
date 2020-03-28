import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Section from '../Section/Section';
import Button from '../../components/UI/Button/Button';

class Launchpad extends Component {

    state = {
        errors: false,
        answers: null,
        dateTime: null,
    }

    render () {
        return (
            <Aux>
                <h1>Hello Colman!</h1>
                <Button btnType="Success">Add Section</Button>
                <Section />
            </Aux>
        )
    }

}

export default Launchpad;