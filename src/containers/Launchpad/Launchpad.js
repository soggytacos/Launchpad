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
import DragAndDropArea from "../../components/habitDraggables/DragAndDropArea";
import Paragraph from "../../components/answerTypes/Paragraph";
import MorningMindsetArea from '../../components/morningMindsetDraggables/MorningMindsetArea';
import styled from "styled-components";
import ToDoDragAndDropArea from '../../components/toDoDraggables/ToDoDragAndDropArea'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
`;

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
                <Container>
                    <Typography>Morning Journal<span>Give me a prompt!</span></Typography>

                    <Paragraph/>
                </Container>
                <MorningMindsetArea/>
                <DragAndDropArea/>
                <ToDoDragAndDropArea/>
                {/*<HabitTracker />*/}
                <Quotes />
                {/*<PromptSection />*/}
                {/*<MorningJournal />*/}
                {/*<Prompts />*/}
                <ToDo />
                {/*<DNDTutorial />*/}
                {/*<HorizontalSection />*/}
            </Aux>
        )
    }

}

export default Launchpad;