import React, {Component} from 'react';
import classes from './ToDo.css';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
    }

    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
    }

    render() {
        return (
            <div className={classes.ToDo}>
                <form className={classes.toDoForm} id="to-do-form" onSubmit={this.addItem}>
                    <input className={classes.Input} type="text" placeholder="Enter Text"
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}/>
                    <button className={classes.button} type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default ToDo;