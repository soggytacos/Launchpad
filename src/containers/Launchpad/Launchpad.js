import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MorningJournal from "../MorningJournal/MorningJournal";
import Button from '../../components/UI/Button/Button';
import ToDo from '../ToDo/ToDo';

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
                <MorningJournal />
                <ToDo />
            </Aux>
        )
    }

}

export default Launchpad;