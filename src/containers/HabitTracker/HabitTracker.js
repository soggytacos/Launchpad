import React, {Component, PureComponent} from 'react';
import Column from './HabitColumn';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import Aux from '../../hoc/Aux';
import Button from "@material-ui/core/Button";

const Container = styled.div`
    display: flex;
`;

class InnerList extends PureComponent {

    render() {
        const {column, habitMap, index} = this.props;
        const habits = column.habitIds.map(habitId => habitMap[habitId]);
        return <Column column={column} habits={habits} index={index}/>;
    }
}

class HabitTracker extends Component {

    state = {
        habits: {},
        columns: {},
        columnOrder: [],
        newColumn: {
            id: '',
            title: '',
            habitIds: [],
        },
    };

    addColumn = (event) => {
        event.preventDefault();
        const currentColumns = {...this.state.columns}
        const newColumnOrder = [...this.state.columnOrder]
        const newColumn = {...this.state.newColumn};
        newColumn.id = Date.now().toString();
        newColumnOrder.push(newColumn.id);

        currentColumns[newColumn.id] = newColumn;
        console.log(currentColumns)
        console.log(newColumnOrder)

        this.setState({
            ...this.state,
            columns: currentColumns,
            columnOrder: newColumnOrder,
            newColumn: {
                id: '',
                title: '',
                habitIds: [],
            },
        }, () => console.log(this.state))
    }

    onAddColumnChange = (ev) => {
        let columnToChange = {...this.state.newColumn};
        columnToChange.title = ev.target.value;
        this.setState({
            ...this.state,
            newColumn: columnToChange
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
        const opacity = destination ? destination.index / Object.keys(this.state.habits).length : 0;
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

            const newHabitIds = Array.from(start.habitIds);
            newHabitIds.splice(source.index, 1);
            newHabitIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                habitIds: newHabitIds,
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

        const startHabitIds = Array.from(start.habitIds);
        startHabitIds.splice(source.index, 1);
        const newStart = {
            ...start,
            habitIds: startHabitIds,
        };

        const finishHabitIds = Array.from(finish.habitIds);
        finishHabitIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            habitIds: finishHabitIds,
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
            <Aux>
                <h1>Habit Tracker</h1>
                <form onSubmit={this.addColumn}><input value={this.state.newColumn.title} onChange={(event) => this.onAddColumnChange(event)}/><Button type="submit">add category</Button></form>
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
                                            habitMap={this.state.habits}
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

export default HabitTracker;