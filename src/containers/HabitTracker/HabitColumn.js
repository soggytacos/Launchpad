import React, {Component} from 'react';
import styled from 'styled-components';
import Task from './HabitTask'
import {Droppable, Draggable} from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 2px;
    width: 220px;
    
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'inherit')};
    flex-grow: 1;
    min-height: 100px;
`;

class InnerList extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.tasks === this.props.tasks) {
            return false;
        }
        return true;
    }

    render() {
        return this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index}/>
        ));
    }
}

export default class Column extends Component {

    constructor(props) {
        super(props);
        this.state = {
            habit: {
                habitId: '',
                habitPrompt: '',
                selectedAnswerType: '',
            },
            answerType: {
                options: [
                    {value: 'short', displayValue: 'Short Answer'},
                    {value: 'paragraph', displayValue: 'Paragraph'},
                    {value: 'duration', displayValue: 'Duration'},
                    {value: 'checkbox', displayValue: 'Checkbox'},
                    {value: 'radioFive', displayValue: 'Scale of 1 to 5'},
                    {value: 'radioTen', displayValue: 'Scale of 1 to 10'},
                    {value: 'number', displayValue: 'Number'},
                ]
            },
        }
    };

    onAddHabitChange = (ev) => {
        let habitPr = ev.target.value;
        this.setState({
            ...this.state,
            habit: {
                ...this.state.habit,
                habitPrompt: habitPr
            }
        })
    }

    handleAnswerTypeChange = (ev) => {
        let selectedAnswer = ev.target.value;
        this.setState({
            ...this.state,
            habit: {
                ...this.state.habit,
                selectedAnswerType: selectedAnswer
            }
        })
    }

    addHabit = (ev) => {
        ev.preventDefault();
        let hId = Date.now().toString();
        this.setState({
            ...this.state,
            habit: {
                ...this.state.habit,
                habitId: hId
            }
        }, () => {

            let habit = {...this.state.habit}
            let habitList = this.props.tasks
            //add the habit to the list of habits
            habitList[habit.habitId] = habit;
            //add the habit to the column
            this.props.column.taskIds.push(habit.habitId)
            console.log(this.state)
            console.log(this.props)
        })
    }

    render() {

        const answerTypes = [];
        for (let key in this.state.answerType.options) {
            answerTypes.push({
                id: key,
                value: this.state.answerType.options[key].value,
                displayValue: this.state.answerType.options[key].displayValue
            })
        }
        let answerTypeDropDown = (
            <Select labelId="label" id="select" value={this.state.habit.selectedAnswerType} onChange={this.handleAnswerTypeChange}>
                {answerTypes.map(element => (
                    <MenuItem key={element.id} value={element.value}>{element.displayValue}</MenuItem>
                    ))
                }
            </Select>
        )

        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {provided => (
                    <Container {...provided.draggableProps} ref={provided.innerRef}>
                        <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
                        <form onSubmit={this.addHabit}>
                            <input value={this.state.habit.habitPrompt} onChange={(event) => this.onAddHabitChange(event)}/>
                            <InputLabel id="label">Answer Type</InputLabel>
                            {answerTypeDropDown}
                            <Button type="submit">add habit</Button>
                        </form>
                        <Droppable
                            droppableId={this.props.column.id}
                            // type={this.props.column.id === 'column-3' ? 'done' : 'active'}
                            // isDropDisabled={this.props.isDropDisabled}
                            type="task"
                        >
                            {(provided, snapshot) => (
                                <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    <InnerList tasks={this.props.tasks}/>
                                    {provided.placeholder}
                                </TaskList>
                            )}
                        </Droppable>
                    </Container>
                )}
            </Draggable>
        );
    }
}