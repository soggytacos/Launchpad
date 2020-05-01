import React, {Component} from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
background-color: ${props => (props.isDragDisabled ? 'lightgrey' : props.isDragging ? 'lightgreen' : 'white')};

display: flex;
`;

export default class Habit extends Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.habit.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        {...provided.dragHandleProps}
                    >
                        {this.props.habit.habitPrompt}
                        {"this is the habit"}
                    </Container>
                )}
            </Draggable>
        );
    }
}