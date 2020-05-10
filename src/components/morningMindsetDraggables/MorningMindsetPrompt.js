import React, {Component} from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";
import Paragraph from "../answerTypes/Paragraph";
import RadioFive from "../answerTypes/RadioFive";

const Container = styled.div`
border: 3px solid lightgrey;
border-radius: 20px;
padding: 8px;
margin-bottom: 8px;
background-color: ${props => (props.isDragDisabled ? 'lightgrey' : props.isDragging ? 'lightgreen' : 'white')};
width: 250px;
height: 250px;

display: block;
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

export default class MorningMindsetPrompt extends Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.prompt.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.prompt.question}
                        {this.props.prompt.answerType === 'paragraph' ? <Paragraph style={{width: '100%', alignItems: 'center'}}/> : <RadioFive/>}
                    </Container>
                )}
            </Draggable>
        );
    }
}