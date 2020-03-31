import React, {Component} from 'react';
import classes from './ToDo.css';
import ToDoList from './ToDoList/ToDoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    handleInput(e) {
        let now = new Date().toLocaleDateString("en-US");
        this.setState({
            currentItem: {
                text: e.target.value,
                key: now
            }
        })
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({ items: filteredItems })
    }

    setUpdate(text, key) {
        const items = this.state.items;
        items.map(item => {
                if (item.key === key) {
                    item.text = text;
                }
            }
        )
        this.setState({ items: items })
    }

    render() {
        return (
            <div className={classes.ToDoForm}>
                <form id="to-do-form" onSubmit={this.addItem}>
                    <input className={classes.Input} type="text" placeholder="Enter Text"
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}/>
                    <button className={classes.button} type="submit">+</button>
                </form>
                <ToDoList
                    items={this.state.items}
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                />
            </div>
        );
    }
}

export default ToDo;