import React from 'react';
import classes from './ToDoList.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import PropTypes from 'prop-types';
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";

const toDoList = (props) => {
    const items = props.items;
    let listItems = items.map(item => (
        <div key={item.key} className={classes.ToDoItem}>
                <DatePicker
                    onChange={(date) => props.changeDueDate(date, item.key)}
                    selected={item.dueDate}
                    showTimeSelect
                    excludeTimes={[
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 30), 18),
                        setHours(setMinutes(new Date(), 30), 19),
                        setHours(setMinutes(new Date(), 30), 17)
                    ]}
                    dateFormat="MMM d, yyyy h:mm aa"
                />
                    <input
                        type="text"
                        id={item.key}
                        value={item.text}
                        onChange={(e) => {
                            props.setUpdate(e.target.value, item.key)
                        }}
                    />
                    <span>
                    <FontAwesomeIcon
                        icon="trash"
                        onClick={() => props.deleteItem(item.key)}
                        className={classes.Faicons}
                    />
                </span>
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