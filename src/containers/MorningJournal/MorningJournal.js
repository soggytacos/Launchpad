import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Aux from '../../hoc/Aux';
import Button from "../../components/UI/Button/Button";

class MorningJournal extends Component {

    state = {
        questions: {
            question1: "3 things I'm grateful for.",
            question2: "A situation that might stress me out or trip me up today is... and the way my best self would handle it...",
            question3: "If I was a high performance coach looking at my life from a high level, I would say...",
        }
    }

    render() {
        return (
            <Aux>
                <h1>Morning Journal</h1>
                <Input />
                <Input/>
                <Input/>
                <Button btnType="Success">Submit</Button>
            </Aux>
        );
    }
}

export default MorningJournal;