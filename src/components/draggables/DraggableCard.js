import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Paragraph from "../answerTypes/Paragraph";
import RadioFive from "../answerTypes/RadioFive";
import RadioTen from "../answerTypes/RadioTen";
import ShortAnswer from "../answerTypes/ShortAnswer";
import Number from "../answerTypes/Number";
import CheckboxLabel from "../answerTypes/CheckboxLabel";
import DurationPicker from "../answerTypes/DurationPicker";

const CardContainer = styled.div`
    margin-bottom: 8px;
`;

const DraggableCard = ({habit, id, index}) => {

    // {value: 'short', displayValue: 'Short Answer'},
    // {value: 'paragraph', displayValue: 'Paragraph'},
    // {value: 'duration', displayValue: 'Duration'},
    // {value: 'checkbox', displayValue: 'Checkbox'},
    // {value: 'radioFive', displayValue: 'Scale of 1 to 5'},
    // {value: 'radioTen', displayValue: 'Scale of 1 to 10'},
    // {value: 'number', displayValue: 'Number'},

    let answerType = "answer Type not found";

    if (habit.selectedAnswerType === 'paragraph') {
        answerType = <Paragraph/>
    } else if (habit.selectedAnswerType === 'radioFive'){
        answerType = <RadioFive/>
    } else if (habit.selectedAnswerType === 'radioTen'){
        answerType = <RadioTen/>
    } else if (habit.selectedAnswerType === 'short'){
        answerType = <ShortAnswer/>
    } else if (habit.selectedAnswerType === 'number'){
        answerType = <Number/>
    } else if (habit.selectedAnswerType === 'checkbox'){
        answerType = <CheckboxLabel/>
    } else if (habit.selectedAnswerType === 'duration') {
        answerType = <DurationPicker/>
    }
    console.log(habit)

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card>
                        <CardContent>
                            <Typography gutterBottom>
                                {habit.habitPrompt}
                            </Typography>
                            <Typography gutterBottom>
                                {answerType}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContainer>
            )}
        </Draggable>
    );
};

export default DraggableCard;