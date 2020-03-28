import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Section from '../Section/Section';

class Launchpad extends Component {

    state = {
        errors: false,
        answers: null,
        dateTime: null,
    }

    render () {
        return (
            <Aux>
                <p>Hello Colman!</p>
                <Section />
            </Aux>
        )
    }

}

export default Launchpad;