import React, {Component} from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import styled from "styled-components";
import HorizontalColumn from "./HorizontalColumn";

const Container = styled.div`
    display: flex;
`;

class HorizontalSection extends Component {

    state = {
        tasks: {
            'task-1': {id: 'task-1', content: 'Take out the one'},
            'task-2': {id: 'task-2', content: 'Take out the trafdsash'},
            'task-3': {id: 'task-3', content: 'Take out the fdstrash'},
            'task-4': {id: 'task-4', content: 'Take out the trabfdsh'},
            'task-5': {id: 'task-5', content: 'Take out the trasfdssh'},
            'task-6': {id: 'task-6', content: 'Take out the traskth'},
            'task-7': {id: 'task-7', content: 'Take out the tranxfsesh'},
            'task-8': {id: 'task-8', content: 'Take out the trasfsh'},
            'task-9': {id: 'task-9', content: 'Take out the tragfdsggfdsgsh'},
            'task-10': {id: 'task-10', content: 'Take out the trash'},
            'task-11': {id: 'task-11', content: 'Take out the trash'},
            'task-12': {id: 'task-12', content: 'Take out the trash'},
            'task-13': {id: 'task-13', content: 'Take out the trash'},
            'task-14': {id: 'task-14', content: 'Take out the trash'},
            'task-15': {id: 'task-15', content: 'Take out the trash'},
            'task-16': {id: 'task-16', content: 'Take out the trash'},
            'task-17': {id: 'task-17', content: 'Take out the trash'},
            'task-18': {id: 'task-18', content: 'Take out the trash'},
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To Do',
                taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14', 'task-15', 'task-16', 'task-17', 'task-18'],
            },
        },
        columnOrder: ['column-1'],
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
        const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
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

            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
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

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
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
                onDragUpdate={this.onDragUpdate}
                onDragStart={this.onDragStart}
            >
                <Container>
                    {this.state.columnOrder.map((columnId, index) => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                        const isDropDisabled = index < this.state.homeIndex;

                        return <HorizontalColumn key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled}/>
                    })}
                </Container>
            </DragDropContext>
        )
    }
}

export default HorizontalSection;