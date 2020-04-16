import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MorningJournal from "../MorningJournal/MorningJournal";
import Quotes from "../Quotes/Quotes";
import ToDo from '../ToDo/ToDo';
import Prompts from '../MorningJournal/Prompts/Propmpts';
import PromptSection from '../MorningJournal/Prompts/PromptSection';
import DNDTutorial from "../../DNDTutorial/DNDTutorial";

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
                <DNDTutorial />
                <Quotes />
                <MorningJournal />
                <ToDo />
                <Prompts />
                <PromptSection />
            </Aux>
        )
    }

}

export default Launchpad;