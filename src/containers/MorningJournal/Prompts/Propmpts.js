import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button  from "@material-ui/core/Button";
import CreatePromptCategory from "./PromptCategory/CreatePromptCategory/CreatePromptCategory";

class Prompts extends Component {

    state = {
        prompts: {
            prompt1: {
                question: "3 things that I'm grateful for today are...",
                answer: '',
                timestamp: ''
            },
            prompt2: {
                question: "I am...",
                answer: '',
                timestamp: ''
            },
            prompt3: {
                question: "A situation that might stress me out or trip me up today is...",
                answer: '',
                timestamp: ''
            },
            prompt4: {
                question: "And how my best self would handle it is...",
                answer: '',
                timestamp: ''
            },
            prompt5: {
                question: "If I was a high performance coach looking at myself from a high level, I would tell myself to remember that...",
                answer: '',
                timestamp: ''
            },
            prompt6: {
                question: "I would know that today was a great success if at the end of that day I did or felt these things...",
                answer: '',
                timestamp: ''
            }
        },
        answered: false,
    }

    changeHandler = (answer, prompt) => {
        const updatedPrompts = {
            ...this.state.prompts
        }
        const updatedPrompt = {
            ...updatedPrompts[prompt]
        }
        updatedPrompt.answer = answer.target.value;
        updatedPrompts[prompt] = updatedPrompt;
        this.setState({
            prompts: updatedPrompts
        })
    }

    submitAnswers = () => {
        this.setState({
            answered: true
        })
    }

    render() {

        const promptsArray = [];
        for (let key in this.state.prompts) {
            promptsArray.push({
                id: key,
                prompt: this.state.prompts[key]
            })
        }

        let form = (
            <form onSubmit={this.submitAnswers}>
                {promptsArray.map(promptElement => (
                    <div key={promptElement.id}>
                        <p>{promptElement.prompt.question}</p>
                        <input
                            value={promptElement.prompt.answer}
                            onChange={(event) => this.changeHandler(event, promptElement.id)}
                        />
                    </div>
                ))}
                <button type="submit">Submit Answers</button>
            </form>
        )

        const submittedAnswers = [];
        for (let prompt in this.state.prompts) {
            submittedAnswers.push({
                id: prompt,
                prompt: this.state.prompts[prompt]
            })
        }
        let completedPrompts = (
            <div>
                {submittedAnswers.map(promptElement => (
                    <div key={promptElement.id}>
                        <p>{promptElement.prompt.question}</p>
                        <p>{promptElement.prompt.answer}</p>
                    </div>
                ))}
            </div>
        )

        return (
            <div>
                {this.state.answered ? completedPrompts : form}
            </div>

        );
    }
}

export default Prompts;