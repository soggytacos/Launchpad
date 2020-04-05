import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MorningJournal from "../MorningJournal/MorningJournal";
import Button from '../../components/UI/Button/Button';
import Quotes from "../Quotes/Quotes";
import ToDo from '../ToDo/ToDo';
import Prompts from '../MorningJournal/Prompts/Propmpts';

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
                <Quotes />
                <MorningJournal />
                <ToDo />
                <Prompts />
            </Aux>
        )
    }

}

export default Launchpad;