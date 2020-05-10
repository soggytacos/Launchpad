import React, {Component} from 'react';
import styled from 'styled-components';
import { Droppable } from "react-beautiful-dnd";
import MorningMindsetPrompt from "./MorningMindsetPrompt";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const PromptList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
    
    display: flex;
`;

export default class MorningMindsetColumn extends Component {
    render() {

        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable
                    droppableId={this.props.column.id}
                    // type={this.props.column.id === 'column-3' ? 'done' : 'active'}
                    direction="horizontal">
                    {(provided, snapshot) => (
                        <PromptList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.prompts.map((prompt, index) => (
                                <MorningMindsetPrompt key={prompt.id} prompt={prompt} index={index}/>
                            ))}
                            {provided.placeholder}
                        </PromptList>
                    )}
                </Droppable>
            </Container>
        );
    }
}