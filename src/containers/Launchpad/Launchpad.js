import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Typography from "@material-ui/core/Typography";
import MorningJournal from "../MorningJournal/MorningJournal";
import Quotes from "../Quotes/Quotes";
import ToDo from '../ToDo/ToDo';
import Prompts from '../MorningJournal/Prompts/Propmpts';
import PromptSection from '../MorningJournal/Prompts/PromptSection';
import DNDTutorial from "../../DNDTutorial/DNDTutorial";
import HorizontalSection from "../../DNDTutorial/HorizonalSection";
import HabitTracker from '../HabitTracker/HabitTracker';
import DragAndDropArea from "../../components/draggables/DragAndDropArea";
import Paragraph from "../../components/answerTypes/Paragraph";

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
                <div>
                    <Typography>Morning Journal<span>Give me a prompt!</span></Typography>

                    <Paragraph/>
                </div>
                <DragAndDropArea/>
                {/*<HabitTracker />*/}
                <Quotes />
                <PromptSection />
                <MorningJournal />
                <Prompts />
                <ToDo />
                <DNDTutorial />
                <HorizontalSection />
            </Aux>
        )
    }

}

export default Launchpad;