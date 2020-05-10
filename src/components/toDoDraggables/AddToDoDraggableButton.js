import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {connect} from 'react-redux';
import {addList, addCard} from '../../actions';
import InputLabel from "@material-ui/core/InputLabel";

class AddToDoDraggableButton extends Component {

    state = {
        formOpen: false,
        text: '',
        toDo: {
            task: '',
            date: '',
            estimatedHours: '',
            estimatedMinutes: '',
            points: '',
            completed: false,
            discarded: false
        },
    }

    openForm = () => {
        this.setState({
            ...this.state,
            formOpen: true,
            text: '',
        })
    };

    closeForm = (e) => {
        this.setState({
            ...this.state,
            formOpen: false,
            text: '',
            toDo: {
                task: '',
                date: '',
                estimatedHours: '',
                estimatedMinutes: '',
                points: '',
                completed: false,
                discarded: false
            },
        })
    };

    handleInputChange = e => {
        this.setState({
            ...this.state,
            text: e.target.value,
            habit: {
                ...this.state.habit
            }
        })
    };

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if (text) {
            this.setState({
                formOpen: false,
                text: ''
            })
            dispatch(addList(text))
        }
        return;
    };

    handleAddCard = () => {
        const {dispatch, listID} = this.props;
        let toDo = {...this.state.toDo};
        toDo.task = this.state.text;

        if (toDo.task) {
            this.setState({
                ...this.state,
                text: '',
                toDo: {
                    task: '',
                    date: '',
                    estimatedHours: '',
                    estimatedMinutes: '',
                    points: '',
                    completed: false,
                    discarded: false
                },
            })
            dispatch(addCard(listID, toDo))
        }
        this.closeForm()
        return;
    }

    renderAddButton = () => {
        const {list} = this.props;

        const buttonText = list ? 'Add another list' : 'Add another card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const {list} = this.props;
        const placeholder = list ? 'Enter list title' : 'Enter card title';

        const buttonTitle = list ? 'Add List' : 'Add Card';

        return (
            <div>
                <Card style={{
                    overflow: 'visible',
                    minHeight: 80,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }}>
                    <Textarea
                        placeholder={placeholder}
                        autoFocus
                        // onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                            overflow: 'hidden'
                        }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        onMouseDown={list ? this.handleAddList : this.handleAddCard}
                        varient="contained"
                        style={{color: 'white', backgroundColor: '#5aac44'}}
                    >
                        {buttonTitle}
                    </Button>
                    <Icon style={{marginLeft: 8, cursor: 'pointer'}}>close</Icon>
                </div>
            </div>
        );
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default connect()(AddToDoDraggableButton);