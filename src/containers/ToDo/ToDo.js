import React, {Component} from 'react';
import classes from './ToDo.css';
import ToDoList from './ToDoList/ToDoList';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import PropTypes from 'prop-types';
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";

library.add(faTrash);

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: '',
            items: [],
            currentItem: {
                text: '',
                key: '',
                dueDate: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.handleDueDate = this.handleDueDate.bind(this);
        this.changeDueDate = this.changeDueDate.bind(this);
    }

    handleInput(e) {
        let now = Date.now();
        const newItem = {...this.state.currentItem}
        newItem.text = e.target.value;
        newItem.key = now;
        this.setState({currentItem: newItem})
    }

    handleDueDate = (date) => {
        const newItem = {...this.state.currentItem}
        newItem.dueDate = date;
        this.setState({currentItem: newItem})
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                selectedDate: '',
                currentItem: {
                    text: '',
                    key: '',
                    dueDate: ''
                }
            })
        }
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({items: filteredItems})
    }

    setUpdate(text, key) {
        const items = this.state.items;
        items.map(item => {
                if (item.key === key) {
                    item.text = text;
                }
            }
        )
        this.setState({items: items})
    }

    changeDueDate(date, key) {
        const items = this.state.items;
        items.map(item => {
                if (item.key === key) {
                    item.dueDate = date;
                }
            }
        )
        this.setState({items: items})
    }

    render() {
        return (
            <div>
                <div className={classes.ToDoForm}>
                    <DatePicker className={classes.DatePicker}
                        onChange={date => this.handleDueDate(date)}
                        selected={this.state.currentItem.dueDate}
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
                        placeholder="Enter Text"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput}
                    />
                    <span>
                        <button className={classes.Button} onClick={this.addItem} type="submit">+</button>
                    </span>
                </div>
                <ToDoList
                    items={this.state.items}
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                    changeDueDate={this.changeDueDate}
                />
            </div>
        );
    }
}

export default ToDo;