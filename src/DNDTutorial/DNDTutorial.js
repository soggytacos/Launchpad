import React, {Component, PureComponent} from 'react';
import Column from './Column';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import Aux from '../hoc/Aux';
import Button from "@material-ui/core/Button";

const Container = styled.div`
    display: flex;
`;

class InnerList extends PureComponent {
    // PureComponent performs this same operation
    // shouldComponentUpdate(nextProps) {
    //     if(
    //         nextProps.column === this.props.column &&
    //         nextProps.taskMap === this.props.taskMap &&
    //         nextProps.index === this.props.index
    //     ) {
    //         return false;
    //     }
    //     return true;
    // }
    render() {
        const {column, taskMap, index} = this.props;
        const tasks = column.taskIds.map(taskId => taskMap[taskId]);
        return <Column column={column} tasks={tasks} index={index}/>;
    }
}

class DNDTutorial extends Component {

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
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To Do',
                taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10'],
            },
            'column-2': {
                id: 'column-2',
                title: 'In Progress',
                taskIds: [],
            },
        },
        columnOrder: ['column-1', 'column-2'],
        newColumn: '',
    };

    addColumn = (e) => {
        e.preventDefault();
        const currentColumns = [...this.state.columns]
        const newColumnOrder = [...this.state.columnOrder]
        const columnName = this.state.newColumn;
        newColumnOrder.push(columnName);
        columnName.push({
            id: columnName,
            title: columnName,
            taskIds: [],

        })
        currentColumns.push(columnName);
        console.log(currentColumns)
        console.log(newColumnOrder)

        this.setState({
            columnOrder: newColumnOrder,
            newColumn: '',
        })
        console.log(this.state)
    }

    onAddColumnChange = (ev) => {
        let columnName = {...this.state.newColumn}
        columnName = ev.target.value;
        this.setState({
            ...this.state,
            newColumn: columnName,
        })
    }

    onDragStart = (start) => {
        const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
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

        const {destination, source, draggableId, type} = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = Array.from(this.state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...this.state,
                columnOrder: newColumnOrder,
            };
            this.setState(newState);
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {

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

        this.setState(newState, () => console.log(this.state));

    };

    render() {
        return (
            <Aux>
                <h1>Habit Tracker</h1>
                <form onSubmit={this.addColumn}><input value={this.state.newColumn} onChange={(event) => this.onAddColumnChange(event)}/><Button type="submit">add category</Button></form>
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                    onDragUpdate={this.onDragUpdate}
                    onDragStart={this.onDragStart}
                >
                    <Droppable
                        droppableId="all-columns"
                        direction="horizontal"
                        type="column"
                    >
                        {provided => (
                            <Container
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {this.state.columnOrder.map((columnId, index) => {
                                    const column = this.state.columns[columnId];
                                    return (
                                        <InnerList
                                            key={column.id}
                                            column={column}
                                            taskMap={this.state.tasks}
                                            index={index}
                                        />
                                    );
                                    // const isDropDisabled = index < this.state.homeIndex;
                                })}
                                {provided.placeholder}
                            </Container>
                        )}
                    </Droppable>
                </DragDropContext>
            </Aux>
        )
    }
}

export default DNDTutorial;