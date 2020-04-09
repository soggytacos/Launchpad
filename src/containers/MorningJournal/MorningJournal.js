import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class MorningJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompts: [],
            newPrompt: ''
        }
        this.handleAddPrompt = this.handleAddPrompt.bind(this);
        this.handleNewPromptChange = this.handleNewPromptChange.bind(this);
    }

    handleAddPrompt(e) {
        e.preventDefault();
        const nPrompt = this.state.newPrompt;
        if (nPrompt !== "") {
            const thePrompts = [...this.state.prompts, nPrompt];
            this.setState({
                prompts: thePrompts,
                newPrompt: ''
            })
        }
        // let newPrompts = [...this.state.prompts, newPrompt];
        // this.setState({prompts: newPrompts})
        // console.log(this.state.prompts)
    }


    handleNewPromptChange(e) {
        this.setState({newPrompt: e.target.value});
    }

    render() {

        return (
            <Aux>
                <h1>Morning Journal</h1>
                <div>
                    <input type="text" value={this.state.newPrompt} onChange={this.handleNewPromptChange}/>
                    <button type="submit" onClick={this.handleAddPrompt}>Add New Prompt</button>

                </div>
                <h2>{this.state.prompts}</h2>
            </Aux>
        );
    }
}

export default MorningJournal;