import React, {Component} from 'react';
import Column from './Column';
import { DragDropContext } from "react-beautiful-dnd";

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
        },
        columnOrder: ['column-1'],
    };

    onDragEnd = result => {

    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks}/>
                })}
            </DragDropContext>
        )
    }
}

export default DNDTutorial;