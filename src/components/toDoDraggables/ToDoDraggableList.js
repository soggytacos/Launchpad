import React from 'react';
import ToDoDraggableCard from "./ToDoDraggableCard";
import AddDraggableButton from './AddToDoDraggableButton';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 5px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;

const ToDoDraggableList = ({title, cards, listID, index}) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <h4>{title}</h4>
                            {cards.map((card, index) => (
                                <ToDoDraggableCard
                                    key={card.id}
                                    index={index}
                                    toDo={card.toDo}
                                    id={card.id}
                                />
                            ))}
                            {provided.placeholder}
                            <AddDraggableButton listID={listID}/>
                        </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default ToDoDraggableList;