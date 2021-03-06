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

export default class Task extends Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        {...provided.dragHandleProps}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}