import React, {Component} from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
border: 3px solid lightgrey;
border-radius: 20px;
padding: 8px;
margin-bottom: 8px;
background-color: ${props => (props.isDragDisabled ? 'lightgrey' : props.isDragging ? 'lightgreen' : 'white')};
width: 100px;
height: 100px;

display: flex;
justify-content: center;
align-items: center;

&:focus {
    outline: none;
    border-color: skyblue;
}
`;

// const Handle = styled.div`
// width: 20px;
// height: 20px;
// background-color: orange;
// border-radius: 4px;
// margin-right: 8px;
// `;

export default class HorizontalTask extends Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}