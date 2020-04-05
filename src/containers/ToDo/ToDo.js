import React, {Component} from 'react';
import classes from './ToDo.css';
import ToDoList from './ToDoList/ToDoList';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";

library.add(faTrash);

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
                dueDate: '',
                estimatedHours: '',
                estimatedMinutes: ''
            },
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdateText = this.setUpdateText.bind(this);
        this.handleDueDate = this.handleDueDate.bind(this);
        this.changeDueDate = this.changeDueDate.bind(this);
        this.changeEstimatedHours = this.changeEstimatedHours.bind(this);
        this.changeEstimatedMinutes = this.changeEstimatedMinutes.bind(this);
        this.setUpdateHours = this.setUpdateHours.bind(this);
        this.setUpdateMinutes = this.setUpdateMinutes.bind(this);
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
                currentItem: {
                    text: '',
                    key: '',
                    dueDate: '',
                    estimatedHours: '',
                    estimatedMinutes: ''
                }
            })
        }
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({items: filteredItems})
    }

    setUpdateText(text, key) {
        const items = this.state.items;
        items.map(item => {
                if (item.key === key) {
                    item.text = text;
                }
            }
        )
        this.setState({items: items})
    }

    setUpdateHours(hours, key) {
        const items = this.state.items;
        items.map(item => {
                if (item.key === key) {
                    item.estimatedHours = hours;
                }
            }
        )
        this.setState({items: items})
    }

    setUpdateMinutes(minutes, key) {
        const items = this.state.items;
        items.map(item => {
                if (item.key === key) {
                    item.estimatedMinutes = minutes;
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

    changeEstimatedHours = (hours) => {
        const newItem = {...this.state.currentItem}
        newItem.estimatedHours = hours.target.value;
        this.setState({currentItem: newItem})
    }

    changeEstimatedMinutes = (minutes) => {
        const newItem = {...this.state.currentItem}
        newItem.estimatedMinutes = minutes.target.value;
        this.setState({currentItem: newItem})
    }

    render() {
        return (
            <div>
                <div>
                    <DatePicker
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
                    <input
                        type="number"
                        placeholder="Estimated Hours"
                        value={this.state.currentItem.estimatedHours}
                        onChange={this.changeEstimatedHours}
                    />
                    <input
                        type="number"
                        placeholder="Estimated Minutes"
                        value={this.state.currentItem.estimatedMinutes}
                        onChange={this.changeEstimatedMinutes}
                    />
                    <span>
                        <button onClick={this.addItem} type="submit">+</button>
                    </span>
                </div>
                <ToDoList
                    items={this.state.items}
                    deleteItem={this.deleteItem}
                    setUpdateText={this.setUpdateText}
                    setUpdateMinutes={this.setUpdateMinutes}
                    setUpdateHours={this.setUpdateHours}
                    changeDueDate={this.changeDueDate}
                />
            </div>
        );
    }
}

export default ToDo;