import React from 'react';
import DraggableCard from "./DraggableCard";
import AddDraggableButton from './AddDraggableButton';
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

const DraggableList = ({title, cards, listID, index}) => {
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
                                <DraggableCard
                                    key={card.id}
                                    index={index}
                                    habit={card.habit}
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

export default DraggableList;