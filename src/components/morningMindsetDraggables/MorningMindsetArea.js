import React, {Component} from 'react';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import MorningMindsetColumn from "./MorningMindsetColumn";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

class MorningMindsetArea extends Component {

    state = {
        prompts: {
            prompt1: {
                question: "3 things that I'm grateful for today are...",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt1'
            },
            prompt2: {
                question: "I am...",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt2'
            },
            prompt3: {
                question: "A situation that might stress me out or trip me up today is...",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt3'
            },
            prompt4: {
                question: "And how my best self would handle it is...",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt4'
            },
            prompt5: {
                question: "If I was a high performance coach looking at myself from a high level, I would tell myself to remember that...",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt5'
            },
            prompt6: {
                question: "I would know that today was a great success if at the end of that day I did or felt these things...",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt6'
            },
            prompt7: {
                question: "3 Amazing things that happened today...",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt7'
            },
            prompt8: {
                question: "How could I have made today even better?",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt8'
            },
            prompt9: {
                question: "A moment that I really appreciated today was…",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt9'
            },
            prompt10: {
                question: "A situation or task I handled well today was…",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt10'
            },
            prompt11: {
                question: "Something I realized or learned today was…",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt11'
            },
            prompt12: {
                question: "If I was my own high performance coach, I would tell myself this statement about today…",
                answerType: 'paragraph',
                answer: '',
                id: 'prompt12'
            },
            prompt13: {
                question: "Clarity: I knew my \"why\" and lived intentionally today.",
                answerType: 'radio',
                answer: '',
                id: 'prompt7'
            },
            prompt14: {
                question: "Productivity: I worked on things that mattered most today.",
                answerType: 'radio',
                answer: '',
                id: 'prompt8'
            },
            prompt15: {
                question: "Energy: I managed my mental and physical energy well.",
                answerType: 'radio',
                answer: '',
                id: 'prompt9'
            },
            prompt16: {
                question: "Influence: I guided or treated others well today.",
                answerType: 'radio',
                answer: '',
                id: 'prompt10'
            },
            prompt17: {
                question: "Necessity: I felt it was necessary to be my best and made success a \"must.\"",
                answerType: 'radio',
                answer: '',
                id: 'prompt11'
            },
            prompt18: {
                question: "Courage: I shared my real self, thoughts, and feelings today.",
                answerType: 'radio',
                answer: '',
                id: 'prompt12'
            }
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'Morning Mindset',
                promptIds: ['prompt1', 'prompt2', 'prompt3', 'prompt4', 'prompt5', 'prompt6'],
            },
            'column-2': {
                id: 'column-2',
                title: 'Evening Journal',
                promptIds: ['prompt7', 'prompt8', 'prompt9', 'prompt10', 'prompt11', 'prompt12'],
            },
            'column-3': {
                id: 'column-3',
                title: 'Daily Recap',
                promptIds: ['prompt13', 'prompt14', 'prompt15', 'prompt16', 'prompt17', 'prompt18'],
            },
        },
        columnOrder: ['column-1', 'column-2', 'column-3'],
        answered: false,
    };

    onDragStart = (start) => {
        const homeIndex =this.state.columnOrder.indexOf(start.source.droppableId);
        this.setState({
            homeIndex,
        });
        document.body.style.color = 'orange';
        document.body.style.transtion = 'background-color 0.2s ease';
    }

    onDragUpdate = update => {
        const {destination} = update;
        const opacity = destination ? destination.index / Object.keys(this.state.prompts).length : 0;
        document.body.style.backgroundColor = `rgba(153, 151, 217, ${opacity})`;
    };

    onDragEnd = result => {
        document.body.style.color = 'orange';
        document.body.style.backgroundColor = 'inherit';

        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if(start === finish) {

            const newPromptIds = Array.from(start.promptIds);
            newPromptIds.splice(source.index, 1);
            newPromptIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                promptIds: newPromptIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            this.setState(newState);
            return;
        }

        const startPromptIds = Array.from(start.promptIds);
        startPromptIds.splice(source.index, 1);
        const newStart = {
            ...start,
            promptIds: startPromptIds,
        };

        const finishPromptIds = Array.from(finish.promptIds);
        finishPromptIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            promptIds: finishPromptIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        this.setState(newState);

    };

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
                // onDragUpdate={this.onDragUpdate}
                // onDragStart={this.onDragStart}
            >
                <div>
                <Droppable droppableId="all-lists" direction="vertical" type="column">
                    {provided => (
                <Container
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {this.state.columnOrder.map((columnId, index) => {
                        const column = this.state.columns[columnId];
                        const prompts = column.promptIds.map(promptId => this.state.prompts[promptId]);
                        const isDropDisabled = index < this.state.homeIndex;

                        return <MorningMindsetColumn key={column.id} column={column} prompts={prompts} isDropDisabled={isDropDisabled}/>
                    })}
                    {provided.placeholder}
                </Container>
                        )}
                        </Droppable>
                </div>
            </DragDropContext>
        );
    }
}

export default MorningMindsetArea;