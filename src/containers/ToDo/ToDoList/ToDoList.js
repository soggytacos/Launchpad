import React from 'react';
import classes from './ToDoList.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

const toDoList = (props) => {
    const items = props.items;
    let listItems = items.map(item => (
        <div key={item.key} className={classes.ToDoItem}>
            <p>
                <input
                    type="text"
                    id={item.key}
                    value={item.text}
                    onChange={(e) => {
                        props.setUpdate(e.target.value, item.key)
                    }}
                />
                <span>
                    {item.key}
                    <FontAwesomeIcon
                        icon="trash"
                        onClick={() => props.deleteItem(item.key)}
                        className={classes.Faicons}
                    />
                </span>
            </p>
        </div>
    ))

    return (
        <div>
            <FlipMove duration={100} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
};

export default toDoList;